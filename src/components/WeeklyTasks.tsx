const weeks = [
  {
    n: '1',
    title: 'Тұрғындар мен жаяу жүргіншілерге сауалнама',
    text: 'Кемінде 20 адамнан қоршаған орта туралы қысқаша сауалнама алу.',
    file: '/materials/weekly/week-1.docx',
  },
  {
    n: '2',
    title: 'Антропогендік әсерді анықтау',
    text: 'Мектеп ауласына адам әрекетінен түсетін әсерлерді тіркеу.',
    file: '/materials/weekly/week-2.docx',
  },
  {
    n: '3',
    title: 'Қоқыс жәшіктерінің әсері',
    text: 'Мектеп маңындағы қоқыс жәшіктерінің қоршаған ортаға әсерін зерттеу.',
    file: '/materials/weekly/week-3.docx',
  },
  {
    n: '4',
    title: 'Атмосфералық ауаның ластануы',
    text: 'Алматының қай ауданында ауа сапасы төмен екенін анықтау.',
    file: '/materials/weekly/week-4.docx',
  },
  {
    n: '5',
    title: 'Жол бойындағы жасыл желек',
    text: 'Жол бойындағы ағаштардың жағдайын бағалау.',
    file: '/materials/weekly/week-5.docx',
  },
  {
    n: '6',
    title: 'Ағаштардың ауаны тазарту рөлі',
    text: 'Жапырақ бетінің шаңды ұстау қабілетін зерттеу.',
    file: '/materials/weekly/week-6.docx',
  },
  {
    n: '7–10',
    title: '«Жасыл энергия – жасыл аймақ»',
    text: 'Қазақстанның экологиялық проблемалы аумағын қалпына келтіру бойынша картографиялық және жобалық зерттеу.',
    file: '/materials/weekly/week-7-10.docx',
  },
]

export default function WeeklyTasks() {
  return (
    <section id="research" className="px-6 sm:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-[#5c6b60] mb-4 text-center">Зерттеулер</p>
        <h2
          className="text-3xl sm:text-4xl text-[#12201a] mb-16 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Апталық тапсырмалар
        </h2>

        <ol className="relative border-l border-[#dfe3da] pl-8 space-y-10">
          {weeks.map((w) => (
            <li key={w.n} className="relative">
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-[#2f5d46] text-[10px] text-white">
                {w.n}
              </span>
              <h3 className="text-lg text-[#12201a] mb-1">{w.title}</h3>
              <p className="text-sm leading-relaxed text-[#5c6b60] mb-2">{w.text}</p>
              <a
                href={w.file}
                download
                className="text-xs text-[#2f5d46] underline underline-offset-2 hover:text-[#12201a]"
              >
                Тапсырманы жүктеу (.docx)
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
