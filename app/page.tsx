import SplashIntro from "./splash-intro";
import ReadingDemo from "./reading-demo";
import ThemePalettePreview from "./theme-palette-preview";

const apkUrl =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://github.com/HenokYoseph01/word-bucket/releases/latest/download/wordbucket.apk";

const features = [
  {
    number: "01",
    title: "Stay inside the story",
    copy: "Highlight a word and tap Bucketify, use Quick Settings, or keep the floating Reading Companion nearby while you read.",
  },
  {
    number: "02",
    title: "Keep what catches you",
    copy: "Save the meaning you intended—even when a word has several—and keep every definition neatly collapsed until you need it.",
  },
  {
    number: "03",
    title: "Remember naturally",
    copy: "Active recall, spaced reviews, gentle reminders, and a home widget bring words back at the right time.",
  },
  {
    number: "04",
    title: "Review the right meaning",
    copy: "Related meanings are introduced together, then reviewed one by one so prompts stay clear and your progress stays useful.",
  },
  {
    number: "05",
    title: "Keep your bucket safe",
    copy: "Delete a whole word or one meaning with clear confirmation, using the visible trash action or a familiar swipe.",
  },
  {
    number: "06",
    title: "Make the page yours",
    copy: "Choose from 14 paper-inspired palettes, including WordBucket Originals and the Robi Pack, in light or dark mode.",
  },
];

const steps = [
  "Download the latest WordBucket APK.",
  "Allow installation from your browser when Android asks.",
  "Open WordBucket and grant notification permission if you want reminders.",
  "Optional: open Settings → Reading Companion → Start reading. Copy a word and tap the floating book; hold it to open WordBucket.",
  "Pull down your notification shade fully, tap Edit, then find Bucketify and drag it into your active Quick Settings tiles.",
  "Optional: long-press your home screen, open Widgets, and add the WordBucket word card.",
  "Highlight a word and choose Bucketify—or copy it and use Reading Companion or the Quick Bucketify tile.",
];

const previewWords = [
  {
    word: "ephemeral",
    pronunciation: "/ɪˈfem.ər.əl/",
    part: "adjective",
    meanings: ["Lasting for a very short time."],
  },
  {
    word: "serendipity",
    part: "noun",
    meanings: ["A fortunate discovery made by chance."],
  },
  {
    word: "pen",
    part: "noun · 2 meanings",
    meanings: ["An instrument used for writing.", "A small enclosure for animals."],
  },
  {
    word: "luminous",
    part: "adjective",
    meanings: ["Giving off light; bright or shining."],
  },
  {
    word: "sonder",
    part: "noun",
    meanings: ["The realization that every stranger has a rich inner life."],
  },
  {
    word: "resilience",
    part: "noun",
    meanings: ["The ability to recover after difficulty."],
  },
  {
    word: "bank",
    part: "noun · 2 meanings",
    meanings: ["Land beside a river.", "An institution that keeps and lends money."],
  },
];

function BookMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "brand-mark small" : "brand-mark"}>
      <svg viewBox="0 0 108 108" aria-hidden="true">
        <path className="logo-page" d="M27 35 50 40v37l-23-7Z" />
        <path className="logo-page" d="m58 40 23-5v35l-23 7Z" />
        <path className="logo-ribbon" d="M52 39h4v41h-4Z" />
      </svg>
    </span>
  );
}

function PhonePreview() {
  const wordLoop = [...previewWords, ...previewWords];

  return (
    <div className="phone-wrap" aria-label="WordBucket app preview">
      <div className="phone-shadow" />
      <div className="phone">
        <div className="phone-speaker" />
        <div className="app-head">
          <BookMark small />
          <div>
            <strong>WordBucket</strong>
            <span>Your reading companion</span>
          </div>
          <b>7</b>
        </div>
        <div className="search">⌕ &nbsp; Look up a word</div>
        <div className="streak">
          <span>🔥 &nbsp; 6 day streak</span>
          <strong>28 reviews</strong>
        </div>
        <div className="phone-word-window" aria-label="A scrolling preview of saved words">
          <div className="phone-word-loop">
            {wordLoop.map((entry, index) => (
              <article className="word-card" key={`${entry.word}-${index}`} aria-hidden={index >= previewWords.length}>
                <div className="word-title">
                  <strong>{entry.word}</strong>
                  {entry.pronunciation && <span>{entry.pronunciation}</span>}
                </div>
                <em>{entry.part}</em>
                <div className="phone-meanings">
                  {entry.meanings.map((meaning, meaningIndex) => (
                    <p key={meaning}>
                      {entry.meanings.length > 1 && <b>{meaningIndex + 1}</b>}
                      {meaning}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="phone-nav">
          <b>⌁<span>Progress</span></b>
          <b>▣<span>Home</span></b>
          <b>◉<span>Settings</span></b>
        </div>
      </div>
      <div className="floating-definition">
        <span>BUCKETIFIED</span>
        <strong>luminous</strong>
        <p>Giving off light; bright or shining.</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SplashIntro />
      <nav className="nav shell">
        <a
          className="brand"
          href="#top"
          aria-label="WordBucket home"
          data-site-brand
        >
          <BookMark small />
          <span>WordBucket</span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#install">Install</a>
        </div>
        <a className="nav-cta" href={apkUrl}>
          Download APK
        </a>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            WordBucket 1.1 · Made for curious Android readers
          </div>
          <h1>
            Meet a word.
            <br />
            <i>Keep your place.</i>
          </h1>
          <p className="hero-lede">
            WordBucket defines and saves words from whatever you are reading,
            then helps you remember them—without pulling you out of the moment.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href={apkUrl}
            >
              <span>Download for Android</span>
              <b>↓</b>
            </a>
            <a className="button text" href="#how">
              See how it works <span>→</span>
            </a>
          </div>
          <div className="trust-row">
            <span>✓ No account</span>
            <span>✓ Your words stay local</span>
            <span>✓ Free &amp; open source</span>
          </div>
        </div>
        <PhonePreview />
      </section>

      <section className="flow-section" id="how">
        <div className="shell">
          <p className="section-kicker">A quieter reading loop</p>
          <h2>From unfamiliar to unforgettable.</h2>
          <div className="flow">
            <div><b>Highlight</b><span>a word while reading</span></div>
            <i>→</i>
            <div><b>Bucketify</b><span>directly or from Quick Settings</span></div>
            <i>→</i>
            <div><b>Remember</b><span>review when it matters</span></div>
          </div>
          <ReadingDemo />
        </div>
      </section>

      <section className="features shell" id="features">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Designed around attention</p>
            <h2>Vocabulary that fits your reading life.</h2>
          </div>
          <p>
            Useful when you need it, quiet when you do not. Every part of
            WordBucket is built to reduce interruption.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="theme-showcase">
        <div className="shell theme-inner">
          <div>
            <p className="section-kicker">Make it feel like yours</p>
            <h2>Paper palettes for every kind of reader.</h2>
            <p>
              Explore 14 WordBucket Originals and Robi Pack palettes—from
              Classic Ink and Midnight Blue to Cherry Ink, Hot Pink, Cobalt
              Glow, and Moonlit Lagoon. Each includes dark mode and a matching
              home-screen widget.
            </p>
            <p className="theme-interaction-copy">
              <strong>Try the palettes here.</strong> Hover to preview one
              across the page, then click or tap to keep it. We&apos;ll remember
              your choice when you return.
            </p>
          </div>
          <ThemePalettePreview />
        </div>
      </section>

      <section className="install shell" id="install">
        <div className="install-card">
          <div className="install-copy">
            <p className="section-kicker">Install WordBucket</p>
            <h2>Ready for your next chapter.</h2>
            <p>
              WordBucket is distributed directly as an Android APK. No account,
              no store, and no cloud vocabulary profile.
            </p>
            <p className="release-note">
              <span>New in WordBucket 1.1</span>
              Reading Companion, multiple meanings, clearer reviews, safer
              deletion, and an expanded palette gallery.
            </p>
            <a className="button primary" href={apkUrl}>
              Download latest APK <b>↓</b>
            </a>
          </div>
          <ol>
            {steps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="#top">
            <BookMark small />
            <span>WordBucket</span>
          </a>
          <p>Read freely. Keep the words that stay with you.</p>
          <span>Android · Local-first · Open source</span>
        </div>
      </footer>
      <a className="back-to-top" href="#top" aria-label="Return to the top of the page">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 10.8 12 4l8 6.8v8.7a.5.5 0 0 1-.5.5h-5v-6h-5v6h-5a.5.5 0 0 1-.5-.5Z" />
        </svg>
        <span></span>
      </a>
    </main>
  );
}
