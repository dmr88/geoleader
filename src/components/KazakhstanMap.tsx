import { useMemo, useState } from 'react'
import { Delaunay } from 'd3-delaunay'
import { regions, cities } from '../data/kazakhstanRegions'

// Large outer bounds so every Voronoi edge is properly closed before we clip
// the cells down to the country silhouette below.
const OUTER_BOUNDS: [number, number, number, number] = [-200, -200, 1200, 700]

// Rough, simplified silhouette of Kazakhstan in the same 1000x500 coordinate
// space as the region points (schematic, not a surveyed border — kept convex
// so the clipping math below is reliable).
const COUNTRY_OUTLINE: Array<[number, number]> = [
  [150, 15],
  [550, 8],
  [760, 65],
  [960, 195],
  [860, 355],
  [700, 465],
  [440, 478],
  [235, 445],
  [70, 350],
  [45, 175],
]

// Sutherland–Hodgman polygon clipping (subject clipped against a convex clip polygon).
function clipPolygon(subject: Array<[number, number]>, clip: Array<[number, number]>): Array<[number, number]> {
  let output = subject
  for (let i = 0; i < clip.length; i++) {
    const a = clip[i]
    const b = clip[(i + 1) % clip.length]
    const input = output
    output = []
    if (input.length === 0) break
    for (let j = 0; j < input.length; j++) {
      const cur = input[j]
      const prev = input[(j - 1 + input.length) % input.length]
      const side = (p: [number, number]) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])
      const curInside = side(cur) >= 0
      const prevInside = side(prev) >= 0
      if (curInside) {
        if (!prevInside) {
          const t =
            ((a[0] - prev[0]) * (b[1] - a[1]) - (a[1] - prev[1]) * (b[0] - a[0])) /
            ((cur[0] - prev[0]) * (b[1] - a[1]) - (cur[1] - prev[1]) * (b[0] - a[0]))
          output.push([prev[0] + t * (cur[0] - prev[0]), prev[1] + t * (cur[1] - prev[1])])
        }
        output.push(cur)
      } else if (prevInside) {
        const t =
          ((a[0] - prev[0]) * (b[1] - a[1]) - (a[1] - prev[1]) * (b[0] - a[0])) /
          ((cur[0] - prev[0]) * (b[1] - a[1]) - (cur[1] - prev[1]) * (b[0] - a[0]))
        output.push([prev[0] + t * (cur[0] - prev[0]), prev[1] + t * (cur[1] - prev[1])])
      }
    }
  }
  return output
}

function polygonToPath(poly: Array<[number, number]> | null): string {
  if (!poly || poly.length === 0) return ''
  return poly.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + 'Z'
}

export default function KazakhstanMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = regions.find((r) => r.id === activeId) ?? null

  const cellPaths = useMemo(() => {
    const delaunay = Delaunay.from(regions.map((r) => [r.x, r.y] as [number, number]))
    const voronoi = delaunay.voronoi(OUTER_BOUNDS)
    return regions.map((r, i) => {
      const raw = voronoi.cellPolygon(i)
      const clipped = raw ? clipPolygon(raw as Array<[number, number]>, COUNTRY_OUTLINE) : null
      return { id: r.id, d: polygonToPath(clipped) }
    })
  }, [])

  return (
    <section className="px-6 sm:px-8 py-24 bg-[#f4f6f1]">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-[#5c6b60] mb-4 text-center">Қазақстан картасы</p>
        <h2
          className="text-3xl sm:text-4xl text-[#12201a] mb-4 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Құрғақшылыққа ұшыраған өңірлер
        </h2>
        <p className="text-center text-sm text-[#8a988e] max-w-2xl mx-auto mb-4">
          17 өңірдің 7-уі құрғақшылық пен жердің тозуына ерекше ұшыраған. Аймаққа
          тінтуірді апарыңыз немесе түртіңіз.
        </p>

        <div className="flex items-center justify-center gap-6 mb-10 text-xs text-[#5c6b60]">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#b9713b]" /> Құрғақшылық аймағы
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#2f5d46] opacity-40" /> Басқа өңірлер
          </span>
        </div>

        <div className="relative w-full" style={{ aspectRatio: '1000 / 500' }}>
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Қазақстан облыстарының картасы"
          >
            {/* Area cells: computed from each region's real coordinates (Voronoi),
                a schematic approximation of borders, not surveyed administrative lines. */}
            {cellPaths.map(({ id, d }) => {
              const region = regions.find((r) => r.id === id)!
              const isActive = id === activeId
              return (
                <path
                  key={id}
                  d={d}
                  tabIndex={0}
                  className="cursor-pointer outline-none"
                  fill={region.arid ? '#b9713b' : '#2f5d46'}
                  fillOpacity={isActive ? (region.arid ? 0.3 : 0.16) : region.arid ? 0.16 : 0.06}
                  stroke="#f4f6f1"
                  strokeWidth={3}
                  style={{ transition: 'fill-opacity 200ms ease' }}
                  onMouseEnter={() => setActiveId(id)}
                  onMouseLeave={() => setActiveId((cur) => (cur === id ? null : cur))}
                  onFocus={() => setActiveId(id)}
                  onClick={() => setActiveId((cur) => (cur === id ? null : id))}
                />
              )
            })}

            {/* Thin border lines between cells, drawn once on top so they read crisply */}
            {cellPaths.map(({ id, d }) => (
              <path key={`line-${id}`} d={d} fill="none" stroke="#dfe3da" strokeWidth={1.5} pointerEvents="none" />
            ))}

            {cities.map((c) => (
              <g key={c.id} pointerEvents="none">
                <rect
                  x={c.x - 4}
                  y={c.y - 4}
                  width={8}
                  height={8}
                  transform={`rotate(45 ${c.x} ${c.y})`}
                  fill="#12201a"
                />
                <text
                  x={c.x}
                  y={c.y - 12}
                  textAnchor="middle"
                  fontSize="13"
                  fill="#5c6b60"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {c.name}
                </text>
              </g>
            ))}

            {regions.map((r) => {
              const isActive = r.id === activeId
              return (
                <circle
                  key={r.id}
                  cx={r.x}
                  cy={r.y}
                  r={isActive ? 11 : 8}
                  fill={r.arid ? '#b9713b' : '#2f5d46'}
                  fillOpacity={r.arid ? 1 : 0.5}
                  stroke="#f4f6f1"
                  strokeWidth={2}
                  pointerEvents="none"
                  style={{ transition: 'all 200ms ease' }}
                />
              )
            })}
          </svg>
        </div>

        <div className="mt-8 min-h-24 rounded-2xl border border-[#dfe3da] bg-white px-6 py-5 max-w-xl mx-auto text-center">
          {active ? (
            <>
              <p className="text-lg text-[#12201a] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {active.name}
                {active.arid && (
                  <span className="ml-2 align-middle text-xs text-[#b9713b] font-normal">
                    құрғақшылық аймағы
                  </span>
                )}
              </p>
              <p className="text-sm text-[#5c6b60]">{active.note}</p>
            </>
          ) : (
            <p className="text-sm text-[#8a988e]">Аймақты таңдап, толығырақ ақпарат көріңіз</p>
          )}
        </div>
      </div>
    </section>
  )
}
