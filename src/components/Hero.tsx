import { useState } from 'react'
import NavBar from './NavBar'

// Preferred: put a local clip at public/hero.mp4 — it's tried first (faster, no
// external dependency, works even with YouTube blocked on the visitor's network).
// If it's missing or fails to load, the YouTube video below is used instead.
const LOCAL_VIDEO_SRC = '/hero.mp4'

// YouTube: "Stunning 4K Drone Footage of Mountain Landscape | Free Stock Video | No Copyright"
const YOUTUBE_ID = 'AFikfSl1Xl0'

type VideoSource = 'checking' | 'local' | 'youtube'

export default function Hero() {
  const [source, setSource] = useState<VideoSource>('checking')

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4f6f1]">
      {/* Fallback backdrop: shows while we're still checking, or if both video sources fail */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ContourBackdrop />
      </div>

      {/* Try the local video first — hidden until we know it actually loaded */}
      {source !== 'youtube' && (
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          style={{ opacity: source === 'local' ? 1 : 0 }}
          src={LOCAL_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setSource('local')}
          onError={() => setSource('youtube')}
        />
      )}

      {/* Only fall back to YouTube once we've confirmed there's no usable local video */}
      {source === 'youtube' && (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ pointerEvents: 'none' }} aria-hidden="true">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '177.78vh', // 16:9 cover-fit: always wide/tall enough to fill the box
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%',
              pointerEvents: 'none',
            }}
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`}
            title="Hero background video"
            allow="autoplay; encrypted-media"
            frameBorder={0}
          />
        </div>
      )}

      {/* Invisible shield: guarantees no mouse event ever reaches the YouTube iframe, so its
          hover-triggered UI (play/pause overlay etc.) can never appear. No-op for local video. */}
      <div className="absolute inset-0 z-[1]" aria-hidden="true" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#f4f6f1] via-transparent to-[#f4f6f1]" />

      <div className="relative z-10">
        <NavBar />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
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

        <p
          className="max-w-2xl mt-8 text-base sm:text-lg leading-relaxed text-[#12201a] animate-fade-rise-delay"
          style={{ textShadow: '0 1px 16px rgba(244,246,241,0.85), 0 1px 3px rgba(244,246,241,0.9)' }}
        >
          Оқушыны дайын ақпаратты жаттаушы емес, өз өлкесін зерттейтін, мәселені
          анықтайтын және шешім ұсынатын жас көшбасшы ретінде қалыптастыратын
          географиялық зертхана.
        </p>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="rounded-full px-14 py-5 text-base mt-12 bg-[#12201a] text-white transition-transform hover:scale-[1.03] animate-fade-rise-delay-2"
        >
          Зерттеуді бастау
        </a>
      </div>
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
