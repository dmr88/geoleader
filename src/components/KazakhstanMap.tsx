import { useState } from 'react'
import { kazakhstanPaths, VIEWBOX_WIDTH, VIEWBOX_HEIGHT } from '../data/kazakhstanPaths'
import { regionMeta, cities, geoToSvg } from '../data/kazakhstanRegions'

export default function KazakhstanMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = activeId ? regionMeta[activeId] : null

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
          14 облыстың 7-уі құрғақшылық пен жердің тозуына ерекше ұшыраған. Аймаққа
          тінтуірді апарыңыз немесе түртіңіз.
        </p>

        <div className="flex items-center justify-center gap-6 mb-10 text-xs text-[#5c6b60]">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#b9713b]" /> Құрғақшылық аймағы
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#2f5d46] opacity-40" /> Басқа облыстар
          </span>
        </div>

        <div className="relative w-full" style={{ aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}` }}>
          <svg
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Қазақстан облыстарының картасы"
          >
            {kazakhstanPaths.map((p) => {
              if (p.isWater) {
                return <path key={p.id} d={p.d} fill="#c7d6d0" stroke="#f4f6f1" strokeWidth={1} pointerEvents="none" />
              }
              const meta = regionMeta[p.id]
              const isActive = p.id === activeId
              return (
                <path
                  key={p.id}
                  d={p.d}
                  tabIndex={0}
                  className="cursor-pointer outline-none"
                  fill={meta?.arid ? '#b9713b' : '#2f5d46'}
                  fillOpacity={isActive ? (meta?.arid ? 0.85 : 0.28) : meta?.arid ? 0.6 : 0.14}
                  stroke="#f4f6f1"
                  strokeWidth={1.5}
                  style={{ transition: 'fill-opacity 200ms ease' }}
                  onMouseEnter={() => setActiveId(p.id)}
                  onMouseLeave={() => setActiveId((cur) => (cur === p.id ? null : cur))}
                  onFocus={() => setActiveId(p.id)}
                  onClick={() => setActiveId((cur) => (cur === p.id ? null : p.id))}
                >
                  <title>{meta?.name ?? p.title}</title>
                </path>
              )
            })}

            {cities.map((c) => {
              const [x, y] = geoToSvg(c.lon, c.lat)
              return (
                <g key={c.id} pointerEvents="none">
                  <rect x={x - 3.5} y={y - 3.5} width={7} height={7} transform={`rotate(45 ${x} ${y})`} fill="#12201a" />
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#12201a"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c.name}
                  </text>
                </g>
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
            <p className="text-sm text-[#8a988e]">Облысты таңдап, толығырақ ақпарат көріңіз</p>
          )}
        </div>
      </div>
    </section>
  )
}
