import { Link } from 'react-router-dom'
import { subjectMaterials } from '../data/subjectMaterials'

const subjects = [
  { name: 'Физика', link: 'Рельеф пен климаттың физикалық заңдылықтарын өлшеу және түсіндіру.', slug: null },
  { name: 'Химия', link: 'Топырақ пен судың құрамын талдау, ластану деңгейін анықтау.', slug: 'chemistry' },
  { name: 'Биология', link: 'Өлкенің өсімдік және жануарлар әлемін, экожүйе байланыстарын зерттеу.', slug: null },
  {
    name: 'Қазақ тілі мен әдебиеті',
    link: 'Оқушылар зерттеу нәтижелерін үндеу мен эссе түрінде дәлелді тілде баяндайды.',
    slug: 'kazakh-language',
  },
  {
    name: 'Қазақстан тарихы',
    link: 'Алматының экологиялық тарихын және апорт өлкетану дерегін қазіргі зерттеумен байланыстыру.',
    slug: 'history',
  },
  { name: 'Информатика', link: 'Деректерді жинау, карта құрастыру және нәтижені платформада ұсыну.', slug: null },
  { name: 'Технология', link: 'Зерттеу құралдарын және макеттерді өз қолымен жасау.', slug: null },
]

export default function Interdisciplinary() {
  return (
    <section id="subjects" className="px-6 sm:px-8 py-24 bg-[#f4f6f1]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#5c6b60] mb-4 text-center">
          Пәнаралық интеграция
        </p>
        <h2
          className="text-3xl sm:text-4xl text-[#12201a] mb-4 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          География барлық пәнмен байланысады
        </h2>
        <p className="text-center text-sm text-[#8a988e] mb-14">
          Ұяшыққа тінтуірді апарыңыз немесе түртіңіз
        </p>

        <div className="flex gap-5 overflow-x-auto pb-4 pr-6 sm:pr-8 snap-x snap-proximity scroll-pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {subjects.map((s) => {
            const hasPage = s.slug && subjectMaterials[s.slug]
            return (
              <div
                key={s.name}
                tabIndex={0}
                className="group relative shrink-0 w-56 h-72 snap-start [perspective:1000px] cursor-pointer"
              >
                <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-[#dfe3da] bg-white p-6 text-center [backface-visibility:hidden]">
                    <span
                      className="text-xl text-[#12201a]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {s.name}
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#2f5d46] p-6 text-center [backface-visibility:hidden]"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <p className="text-sm leading-relaxed text-white">{s.link}</p>
                    {hasPage && (
                      <Link
                        to={`/pan/${s.slug}`}
                        className="text-xs text-white underline underline-offset-2 opacity-90 hover:opacity-100"
                      >
                        Материалдарды көру →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
          {/* trailing spacer so the last card can scroll fully into view */}
          <div className="shrink-0 w-px" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
