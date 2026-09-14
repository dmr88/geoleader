export default function Quote() {
  return (
    <section id="quote" className="px-6 sm:px-8 py-28">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote
          className="text-2xl sm:text-3xl leading-snug text-[#12201a]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          «Талап, еңбек, терең ой, қанағат, рахым — бесеуін бас ұстасаң, кем
          болмайсың»
        </blockquote>
        <p className="mt-6 text-sm text-[#5c6b60]">Абай Құнанбайұлы</p>
      </div>
    </section>
  )
}
