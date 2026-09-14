const videos = [
  {
    title: 'Бір күн — бір табиғат тағдыры',
    src: '/materials/field-research/one-day-natures-fate.mp4',
  },
  {
    title: 'Мектеп жанындағы қоқыс тастау орындарын зерттеу',
    src: '/materials/field-research/school-waste-site-study.mp4',
  },
  {
    title: 'Жаяу жүргіншілерден сауалнама',
    src: '/materials/field-research/pedestrian-survey.mp4',
  },
  {
    title: 'Жас экологтар мектеп ауласын тазарту',
    src: '/materials/field-research/young-ecologists-cleanup.mp4',
  },
  {
    title: 'Жапырақтың шаңдану деңгейі',
    src: '/materials/field-research/leaf-dust-level.mp4',
  },
  {
    title: 'Жол бойындағы жапырақтың шаңдану деңгейін анықтау',
    src: '/materials/field-research/roadside-leaf-dust-level.mp4',
  },
]

const photos = [
  '/materials/field-research/young-ecologists-1.jpg',
  '/materials/field-research/young-ecologists-2.jpg',
  '/materials/field-research/young-ecologists-3.jpg',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt="Жас экологтар мектеп ауласын тазартуда"
              className="w-full aspect-[4/3] object-cover rounded-xl border border-[#dfe3da]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
