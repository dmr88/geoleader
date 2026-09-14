import { Link } from 'react-router-dom'
import {
  Atom,
  FlaskConical,
  Leaf,
  BookOpen,
  Landmark,
  Cpu,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { subjectMaterials } from '../data/subjectMaterials'

const subjects: {
  name: string
  link: string
  slug: string | null
  icon: LucideIcon
}[] = [
  {
    name: 'Физика',
    link: 'Рельеф пен климаттың физикалық заңдылықтарын өлшеу және түсіндіру.',
    slug: null,
    icon: Atom,
  },
  {
    name: 'Химия',
    link: 'Топырақ пен судың құрамын талдау, ластану деңгейін анықтау.',
    slug: 'chemistry',
    icon: FlaskConical,
  },
  {
    name: 'Биология',
    link: 'Өлкенің өсімдік және жануарлар әлемін, экожүйе байланыстарын зерттеу.',
    slug: null,
    icon: Leaf,
  },
  {
    name: 'Қазақ тілі мен әдебиеті',
    link: 'Оқушылар зерттеу нәтижелерін үндеу мен эссе түрінде дәлелді тілде баяндайды.',
    slug: 'kazakh-language',
    icon: BookOpen,
  },
  {
    name: 'Қазақстан тарихы',
    link: 'Алматының экологиялық тарихын және апорт өлкетану дерегін қазіргі зерттеумен байланыстыру.',
    slug: 'history',
    icon: Landmark,
  },
  {
    name: 'Информатика',
    link: 'Деректерді жинау, карта құрастыру және нәтижені платформада ұсыну.',
    slug: null,
    icon: Cpu,
  },
  {
    name: 'Технология',
    link: 'Зерттеу құралдарын және макеттерді өз қолымен жасау.',
    slug: null,
    icon: Wrench,
  },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {subjects.map((s) => {
            const hasPage = s.slug && subjectMaterials[s.slug]
            const Icon = s.icon
            return (
              <div
                key={s.name}
                tabIndex={0}
                className="group relative h-64 [perspective:1000px] cursor-pointer"
              >
                <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 overflow-hidden flex items-center justify-center rounded-2xl border border-[#dfe3da] bg-white p-6 text-center [backface-visibility:hidden]">
                    <Icon
                      className="absolute -bottom-4 -right-4 text-[#2f5d46] opacity-[0.07] pointer-events-none"
                      size={112}
                      strokeWidth={1.25}
                    />
                    <span
                      className="relative text-xl text-[#12201a]"
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
        </div>
      </div>
    </section>
  )
}
