import { useState } from 'react'
import { regions, cities } from '../data/kazakhstanRegions'

export default function KazakhstanMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = regions.find((r) => r.id === activeId) ?? null

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
          17 өңірдің 7-уі құрғақшылық пен жердің тозуына ерекше ұшыраған. Нүктеге
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
            {cities.map((c) => (
              <g key={c.id}>
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
                <g
                  key={r.id}
                  tabIndex={0}
                  className="cursor-pointer outline-none"
                  onMouseEnter={() => setActiveId(r.id)}
                  onMouseLeave={() => setActiveId((cur) => (cur === r.id ? null : cur))}
                  onFocus={() => setActiveId(r.id)}
                  onClick={() => setActiveId((cur) => (cur === r.id ? null : r.id))}
                >
                  {r.arid && (
                    <circle
                      cx={r.x}
                      cy={r.y}
                      r={isActive ? 26 : 22}
                      fill="#b9713b"
                      opacity={isActive ? 0.22 : 0.14}
                      style={{ transition: 'all 200ms ease' }}
                    />
                  )}
                  <circle
                    cx={r.x}
                    cy={r.y}
                    r={isActive ? 12 : 9}
                    fill={r.arid ? '#b9713b' : '#2f5d46'}
                    fillOpacity={r.arid ? 1 : 0.45}
                    stroke="#f4f6f1"
                    strokeWidth={2}
                    style={{ transition: 'all 200ms ease' }}
                  />
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
            <p className="text-sm text-[#8a988e]">Өңірді таңдап, толығырақ ақпарат көріңіз</p>
          )}
        </div>
      </div>
    </section>
  )
}
