import { Link, useParams } from 'react-router-dom'
import { subjectMaterials } from '../data/subjectMaterials'

export default function SubjectMaterials() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? subjectMaterials[slug] : undefined

  if (!entry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#f4f6f1]">
        <p className="text-[#5c6b60] mb-4">Мұндай пән табылмады.</p>
        <Link to="/" className="text-sm text-[#2f5d46] underline underline-offset-2">
          Басты бетке оралу
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f4f6f1]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-[#5c6b60] hover:text-[#12201a] mb-10"
        >
          ← Басты бетке
        </Link>

        <p className="text-sm text-[#5c6b60] mb-4">Пәнаралық интеграция</p>
        <h1
          className="text-3xl sm:text-4xl text-[#12201a] mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {entry.name}
        </h1>
        <p className="text-base leading-relaxed text-[#3a453e] mb-12">{entry.intro}</p>

        {entry.items.length > 0 ? (
          <ul className="space-y-3">
            {entry.items.map((item) => (
              <li key={item.file}>
                <a
                  href={item.file}
                  download
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#dfe3da] bg-white px-5 py-4 text-sm text-[#12201a] hover:border-[#2f5d46] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#8a988e] shrink-0">Жүктеу ↓</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-[#8a988e] rounded-xl border border-dashed border-[#dfe3da] px-5 py-8 text-center">
            Бұл пән бойынша материалдар жақын арада қосылады.
          </p>
        )}
      </div>
    </div>
  )
}
