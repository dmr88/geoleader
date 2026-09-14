const links = [
  { href: '#home', label: 'Басты бет' },
  { href: '#about', label: 'Жоба туралы' },
  { href: '#research', label: 'Зерттеулер' },
  { href: '#subjects', label: 'Пәнаралық интеграция' },
  { href: '#quote', label: 'Дәйексөз' },
  { href: '#media', label: 'Медиа' },
]

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 py-6 max-w-7xl mx-auto">
      <a
        href="#home"
        className="text-2xl sm:text-3xl tracking-tight text-[#12201a]"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        GEOLEADER
      </a>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link, i) => (
          <li key={link.href}>
            <a
              href={link.href}
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
        href="#research"
        className="rounded-full px-6 py-2.5 text-sm bg-[#12201a] text-white transition-transform hover:scale-[1.03]"
      >
        Зерттеуді бастау
      </a>
    </nav>
  )
}
