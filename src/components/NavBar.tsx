const links = [
  { id: 'home', label: 'Басты бет' },
  { id: 'about', label: 'Жоба туралы' },
  { id: 'research', label: 'Зерттеулер' },
  { id: 'subjects', label: 'Пәнаралық интеграция' },
  { id: 'quote', label: 'Дәйексөз' },
  { id: 'media', label: 'Медиа' },
]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 py-6 max-w-7xl mx-auto">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          scrollToId('home')
        }}
        className="text-2xl sm:text-3xl tracking-tight text-[#12201a]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        GEOLEADER
      </a>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <li key={link.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToId(link.id)
              }}
              className={`text-sm transition-colors hover:text-[#12201a] ${
                i === 0 ? 'text-[#12201a]' : 'text-[#5c6b60]'
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          scrollToId('research')
        }}
        className="rounded-full px-6 py-2.5 text-sm bg-[#12201a] text-white transition-transform hover:scale-[1.03]"
      >
        Зерттеуді бастау
      </a>
    </nav>
  )
}
