// Replace these with real numbers from the platform once tracking is wired up.
const metrics = [
  { value: 0, label: 'Қатысқан оқушылар' },
  { value: 0, label: 'Аяқталған зерттеулер' },
  { value: 0, label: 'Ұсынылған идеялар' },
  { value: 0, label: 'Жүзеге асқан бастамалар' },
]

export default function Metrics() {
  return (
    <section className="px-6 sm:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#5c6b60] mb-4 text-center">
          Жобаның тиімділігі
        </p>
        <h2
          className="text-3xl sm:text-4xl text-[#12201a] mb-16 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Платформадағы нақты көрсеткіштер
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div
                className="text-5xl sm:text-6xl text-[#2f5d46]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {m.value}
              </div>
              <p className="mt-3 text-sm text-[#5c6b60]">{m.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#8a988e] mt-12">
          + оқушылардың кері байланысы платформа арқылы жиналады
        </p>
      </div>
    </section>
  )
}
