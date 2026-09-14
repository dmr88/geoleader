const videos = [
  {
    title: 'Жапырақтың шаңдану деңгейі',
    src: '/materials/field-research/leaf-dust-level.mp4',
  },
  {
    title: 'Жол бойындағы жапырақтың шаңдану деңгейін анықтау',
    src: '/materials/field-research/roadside-leaf-dust-level.mp4',
  },
]

export default function Media() {
  return (
    <section id="media" className="px-6 sm:px-8 py-24 bg-[#f4f6f1]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-[#5c6b60] mb-4 text-center">Медиа</p>
        <h2
          className="text-3xl sm:text-4xl text-[#12201a] mb-14 text-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Далалық зерттеулерден кадрлар
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.src}>
              <video
                src={v.src}
                controls
                preload="metadata"
                className="w-full rounded-xl border border-[#dfe3da] bg-black aspect-video"
              />
              <p className="mt-3 text-sm text-[#5c6b60]">{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
