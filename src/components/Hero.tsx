import { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar'

// Drop a landscape/drone clip of the students' region here (e.g. public/hero.mp4).
// If it fails to load, the animated contour-line backdrop below is used instead,
// so the hero still looks intentional with no video present.
const VIDEO_SRC = '/hero.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoOk, setVideoOk] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let raf = 0
    const FADE = 0.5

    const tick = () => {
      if (video.duration) {
        const t = video.currentTime
        const d = video.duration
        if (t < FADE) {
          video.style.opacity = String(t / FADE)
        } else if (t > d - FADE) {
          video.style.opacity = String(Math.max(0, (d - t) / FADE))
        } else {
          video.style.opacity = '1'
        }
      }
      raf = requestAnimationFrame(tick)
    }

    const onEnded = () => {
      video.style.opacity = '0'
      window.setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    video.addEventListener('ended', onEnded)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4f6f1]">
      {/* Fallback backdrop: contour lines, always present under the video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ContourBackdrop />
      </div>

      {videoOk && (
        <video
          ref={videoRef}
          className="absolute z-0 w-full object-cover"
          style={{ top: '300px', inset: 'auto 0 0 0', opacity: 0 }}
          src={VIDEO_SRC}
          muted
          playsInline
          autoPlay
          onError={() => setVideoOk(false)}
        />
      )}

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f4f6f1] via-transparent to-[#f4f6f1]" />

      <div className="relative z-10">
        <NavBar />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        <div className="flex items-center gap-4 mb-10 animate-fade-rise">
          <LogoBadge label="Бағдарлама 1" />
          <span className="h-4 w-px bg-[#dfe3da]" />
          <LogoBadge label="Бағдарлама 2" />
        </div>

        <h1
          className="max-w-4xl font-normal text-[#12201a] animate-fade-rise"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 6vw, 5.5rem)',
            lineHeight: 0.98,
            letterSpacing: '-1.5px',
          }}
        >
          Зертте. Әрекет ет. Өзгеріс жаса.
        </h1>

        <p className="max-w-2xl mt-8 text-base sm:text-lg leading-relaxed text-[#5c6b60] animate-fade-rise-delay">
          Оқушыны дайын ақпаратты жаттаушы емес, өз өлкесін зерттейтін, мәселені
          анықтайтын және шешім ұсынатын жас көшбасшы ретінде қалыптастыратын
          географиялық зертхана.
        </p>

        <a
          href="#research"
          className="rounded-full px-14 py-5 text-base mt-12 bg-[#12201a] text-white transition-transform hover:scale-[1.03] animate-fade-rise-delay-2"
        >
          Зерттеуді бастау
        </a>
      </div>
    </div>
  )
}

function LogoBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[#5c6b60]">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dfe3da] bg-white text-[10px]">
        LOGO
      </span>
      {label}
    </div>
  )
}

function ContourBackdrop() {
  return (
    <svg
      className="h-full w-full opacity-70"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="contourFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f5d46" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#2f5d46" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      {Array.from({ length: 10 }).map((_, i) => (
        <path
          key={i}
          d={`M -50 ${120 + i * 68} C 250 ${40 + i * 68}, 450 ${200 + i * 68}, 700 ${90 + i * 68} S 1150 ${150 + i * 68}, 1300 ${70 + i * 68}`}
          fill="none"
          stroke="url(#contourFade)"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}
