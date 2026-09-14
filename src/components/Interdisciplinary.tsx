const subjects = [
  { name: 'Физика', link: 'Рельеф пен климаттың физикалық заңдылықтарын өлшеу және түсіндіру.' },
  { name: 'Химия', link: 'Топырақ пен судың құрамын талдау, ластану деңгейін анықтау.' },
  { name: 'Биология', link: 'Өлкенің өсімдік және жануарлар әлемін, экожүйе байланыстарын зерттеу.' },
  { name: 'Қазақ тілі мен әдебиеті', link: 'Оқушылар зерттеу нәтижелерін үндеу мен эссе түрінде дәлелді тілде баяндайды.' },
  { name: 'Қазақстан тарихы', link: 'Алматының экологиялық тарихын және апорт өлкетану дерегін қазіргі зерттеумен байланыстыру.' },
  { name: 'Информатика', link: 'Деректерді жинау, карта құрастыру және нәтижені платформада ұсыну.' },
  { name: 'Технология', link: 'Зерттеу құралдарын және макеттерді өз қолымен жасау.' },
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

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {subjects.map((s) => (
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
                  className="absolute inset-0 flex items-center justify-center rounded-2xl bg-[#2f5d46] p-6 text-center [backface-visibility:hidden]"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <p className="text-sm leading-relaxed text-white">{s.link}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 max-w-3xl mx-auto">
          <MaterialGroup
            title="Қазақ тілі мен әдебиеті пәнімен байланыс"
            items={[
              { label: 'Жер-ананың халыққа үндеуі', file: '/materials/kazakh-language/earth-appeal.docx' },
              { label: 'Оқушының халыққа үндеуі', file: '/materials/kazakh-language/student-appeal.docx' },
              { label: 'SWOT талдау (эссе)', file: '/materials/kazakh-language/swot-analysis.docx' },
            ]}
          />
          <MaterialGroup
            title="Қазақстан тарихы пәнімен байланыс"
            items={[
              { label: 'Алматы апортының тарихы', file: '/materials/history/aport-history.docx' },
              { label: 'Тарихи SWOT талдау', file: '/materials/history/historical-swot-analysis.docx' },
              { label: 'ҚР экологиялық жағдайының тарихы', file: '/materials/history/kz-ecology-history.docx' },
              {
                label: 'Алматының экологиялық жай-күйінің тарихи сипаты',
                file: '/materials/history/almaty-ecology-historical-character.docx',
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function MaterialGroup({
  title,
  items,
}: {
  title: string
  items: { label: string; file: string }[]
}) {
  return (
    <div>
      <h4 className="text-sm text-[#12201a] mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.file}>
            <a
              href={item.file}
              download
              className="text-sm text-[#5c6b60] underline underline-offset-2 hover:text-[#2f5d46]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
