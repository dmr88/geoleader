const results = [
  {
    title: 'Білімдегі өзгеріс',
    text: 'Оқушы географиялық білімін өмірлік жағдайларда қолданады.',
  },
  {
    title: 'Дағдыдағы өзгеріс',
    text: 'Зерттеу, салыстыру, карта жасау, дерекпен жұмыс және қорытынды шығару қабілеті дамиды.',
  },
  {
    title: 'Тұлғалық өзгеріс',
    text: 'Жауапкершілік, бастамашылдық, ынтымақтастық және көшбасшылық қасиеттері қалыптасады.',
  },
  {
    title: 'Ортадағы өзгеріс',
    text: 'Оқушы өз мектебіне, ауласына, елді мекеніне бейжай қарамайтын азаматқа айналады.',
  },
]

export default function Results() {
  return (
    <section id="outcomes" className="px-6 sm:px-8 py-24 bg-[#f4f6f1]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#5c6b60] mb-4 text-center">Күтілетін нәтиже</p>
        <h2
          className="text-3xl sm:text-4xl text-[#12201a] mb-16 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Төрт деңгейлі өзгеріс
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#dfe3da] border border-[#dfe3da]">
          {results.map((r, i) => (
            <div key={r.title} className="bg-[#f4f6f1] p-8 flex flex-col">
              <span className="text-xs text-[#8a988e] mb-6">{`0${i + 1}`}</span>
              <h3
                className="text-xl text-[#12201a] mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5c6b60]">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
