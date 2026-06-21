/**
 * Cinematic SVG placeholders for the spotlight hero.
 *
 * These render only when the real photographs (/hero-base.jpg,
 * /hero-reveal.jpg) are not present. Drop the real images into /public and
 * they take over automatically — no code change needed.
 *
 *   base   = the setback : seated, cool, heavy vignette
 *   reveal = the comeback : airborne, charged orange rim light
 */

export function BasePlaceholder() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="baseSky" cx="46%" cy="34%" r="78%">
          <stop offset="0%" stopColor="#1b1f24" />
          <stop offset="55%" stopColor="#0c0e11" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <linearGradient id="baseFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0d10" />
          <stop offset="100%" stopColor="#020202" />
        </linearGradient>
        <linearGradient id="baseFig" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#23272d" />
          <stop offset="100%" stopColor="#0a0b0d" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1000" fill="url(#baseSky)" />
      <rect y="720" width="1600" height="280" fill="url(#baseFloor)" />
      {/* faint court line in cold light */}
      <path d="M0 742 H1600" stroke="#2a2f36" strokeWidth="2" opacity="0.5" />
      <ellipse cx="800" cy="930" rx="430" ry="46" fill="#000" opacity="0.55" />

      {/* bench */}
      <rect x="470" y="700" width="660" height="20" rx="4" fill="#15181c" />
      <rect x="520" y="720" width="16" height="120" fill="#101316" />
      <rect x="1064" y="720" width="16" height="120" fill="#101316" />

      {/* seated figure, head lowered, elbows on knees */}
      <g fill="url(#baseFig)">
        <ellipse cx="800" cy="372" rx="58" ry="62" />
        <path d="M742 432 q58 -34 116 0 l46 150 q-104 40 -208 0 z" />
        {/* forearms down to knees */}
        <path d="M756 470 q-26 80 -10 168 l34 6 q-8 -92 10 -160 z" />
        <path d="M844 470 q26 80 10 168 l-34 6 q8 -92 -10 -160 z" />
        {/* thighs */}
        <path d="M730 612 q70 -26 140 0 l-6 92 q-64 18 -128 0 z" />
        {/* lower legs to floor */}
        <path d="M742 700 l18 0 l6 200 l-30 0 z" />
        <path d="M840 700 l18 0 l6 200 l-30 0 z" />
      </g>

      {/* basketball resting at the feet */}
      <g>
        <circle cx="930" cy="888" r="40" fill="#0f0f0f" />
        <circle cx="930" cy="888" r="40" fill="#1a1a1a" opacity="0.6" />
        <path d="M890 888 H970 M930 848 V928" stroke="#000" strokeWidth="2" opacity="0.7" />
      </g>

      {/* cold key light from upper left */}
      <ellipse cx="560" cy="220" rx="520" ry="360" fill="#3a4350" opacity="0.10" />
      {/* vignette */}
      <rect width="1600" height="1000" fill="url(#vignette)" />
      <radialGradient id="vignette" cx="50%" cy="44%" r="72%">
        <stop offset="60%" stopColor="#000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.82" />
      </radialGradient>
    </svg>
  );
}

export function RevealPlaceholder() {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="revSky" cx="52%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#2a1405" />
          <stop offset="48%" stopColor="#120a04" />
          <stop offset="100%" stopColor="#050302" />
        </radialGradient>
        <linearGradient id="revFig" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffb066" />
          <stop offset="42%" stopColor="#5a2a0d" />
          <stop offset="100%" stopColor="#120804" />
        </linearGradient>
        <linearGradient id="streak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff6a00" stopOpacity="0" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1000" fill="url(#revSky)" />

      {/* hot spotlight cone from above */}
      <path d="M800 -120 L1180 1000 L420 1000 Z" fill="#ff8a3a" opacity="0.10" />
      <ellipse cx="800" cy="250" rx="360" ry="300" fill="#ff6a00" opacity="0.16" />

      {/* motion streaks */}
      <rect x="200" y="430" width="520" height="6" rx="3" fill="url(#streak)" opacity="0.7" />
      <rect x="160" y="520" width="640" height="5" rx="3" fill="url(#streak)" opacity="0.5" />
      <rect x="240" y="610" width="420" height="5" rx="3" fill="url(#streak)" opacity="0.45" />

      {/* airborne dunk silhouette, arm raised */}
      <g fill="url(#revFig)">
        {/* trail head + torso, leaning up-right */}
        <ellipse cx="876" cy="300" rx="52" ry="56" transform="rotate(14 876 300)" />
        <path d="M828 348 q56 -28 108 6 l44 150 q-92 44 -176 -4 z" />
        {/* raised driving arm to the rim */}
        <path d="M940 360 q70 -90 150 -150 l34 30 q-78 70 -150 150 z" />
        {/* trailing arm */}
        <path d="M836 392 q-66 26 -120 96 l26 30 q60 -58 118 -82 z" />
        {/* split legs, explosive */}
        <path d="M860 500 q40 70 30 188 l-44 -4 q-2 -96 -28 -168 z" />
        <path d="M912 498 q66 44 120 24 l-8 44 q-78 22 -150 -22 z" />
      </g>

      {/* the ball, gripped high */}
      <g>
        <circle cx="1108" cy="196" r="44" fill="#ff7a1a" />
        <circle cx="1108" cy="196" r="44" fill="#000" opacity="0.12" />
        <path d="M1064 196 H1152 M1108 152 V240" stroke="#3a1500" strokeWidth="2.5" opacity="0.7" />
        <circle cx="1108" cy="196" r="60" fill="#ff6a00" opacity="0.18" />
      </g>

      {/* rim hint */}
      <path d="M1180 240 q70 -6 120 26" stroke="#ff6a00" strokeWidth="8" fill="none" opacity="0.5" />

      {/* floor glow */}
      <ellipse cx="820" cy="950" rx="520" ry="60" fill="#ff6a00" opacity="0.10" />
      <rect width="1600" height="1000" fill="url(#revVig)" />
      <radialGradient id="revVig" cx="52%" cy="40%" r="74%">
        <stop offset="58%" stopColor="#000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.78" />
      </radialGradient>
    </svg>
  );
}
