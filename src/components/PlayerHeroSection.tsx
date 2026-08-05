const STATS = [
  { label: 'BUILD', value: 99, featured: true },
  { label: 'REVIEW', value: 42 },
  { label: 'SHIP', value: 99 },
  { label: 'VOLUME', value: 99 },
  { label: 'IMPACT', value: 40 },
] as const

const FORM = ['D', 'D', 'W', 'D', 'W'] as const

const NOTES = [
  'A journeyman this window — minutes spread across 19 clubs, most at Sabih-sourcee/Terminal-Performance-Manager.',
  'A weekday professional — trains on schedule, 77% of touches Mon–Fri.',
  "Scout's verdict: Sabih-sourcee is a box-to-box engine — links maintenance to launches, covers every blade of grass. Standout attribute: BUILD 99. 20 matchdays in the observed window. Verdict: sign before the window closes.",
] as const

const TROPHIES = [
  { icon: '🏆', name: 'Terminal-Performance-Manager', stars: 1 },
  { icon: '🥈', name: 'The-VC-Brain', stars: 1 },
  { icon: '🥉', name: 'INTERIOR-AI', stars: 1 },
] as const

const LANGUAGES = [
  { name: 'TypeScript', count: 15 },
  { name: 'JavaScript', count: 3 },
  { name: 'Python', count: 2 },
] as const

const GITHUB_FC_URL = 'https://githubfc.com/Sabih-sourcee'
const AVATAR_URL = 'https://github.com/Sabih-sourcee.png'

function PitchHeatmap() {
  return (
    <div className="fc-pitch" aria-hidden="true">
      <div className="fc-pitch-inner">
        <div className="fc-pitch-line fc-pitch-mid" />
        <div className="fc-pitch-circle" />
        <div className="fc-heat fc-heat-1" />
        <div className="fc-heat fc-heat-2" />
        <div className="fc-heat fc-heat-3" />
      </div>
      <div className="fc-pitch-labels">
        <span>◀ OWN HALF · REVIEWS</span>
        <span>MIDFIELD · COMMITS</span>
        <span>SHIPPING ▶</span>
      </div>
    </div>
  )
}

export default function PlayerHeroSection() {
  return (
    <section className="fc-programme" aria-label="Sabih-sourcee GitHub FC player card">
      <div className="fc-programme-inner">
        <p className="fc-cutline">✂ CUT OUT &amp; KEEP</p>

        <header className="fc-programme-header">
          <div className="fc-programme-titlebox">
            <h2 className="fc-programme-brand">GITHUB FC</h2>
            <p className="fc-programme-sub">OFFICIAL MATCH PROGRAMME · SEASON 2026</p>
          </div>
          <div className="fc-programme-actions">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(GITHUB_FC_URL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="fc-btn fc-btn-dark"
            >
              SHARE ON 𝕏
            </a>
            <a href={GITHUB_FC_URL} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-gold">
              DOWNLOAD ↓
            </a>
          </div>
        </header>

        <article className="fc-player-card">
          <div className="fc-player-row">
            <img src={AVATAR_URL} alt="" className="fc-avatar" width={72} height={72} />
            <div className="fc-player-meta">
              <h3 className="fc-player-name">SABIH-SOURCEE</h3>
              <p className="fc-player-tagline">
                @Sabih-sourcee · &ldquo;The Engine&rdquo; · 1ST SEASON · CLASS OF 2026
              </p>
            </div>
            <div className="fc-ovr-block">
              <span className="fc-tier-stamp">GOLD ★ 2026</span>
              <span className="fc-ovr-num">76</span>
              <span className="fc-ovr-pos">CM · OVERALL</span>
            </div>
          </div>

          <PitchHeatmap />

          <div className="fc-form-row">
            <span className="fc-form-label">FORM</span>
            <div className="fc-form-pills">
              {FORM.map((result, i) => (
                <span key={i} className={`fc-form-pill fc-form-${result.toLowerCase()}`}>
                  {result}
                </span>
              ))}
            </div>
            <span className="fc-form-caption">LAST 5 MATCHDAYS</span>
          </div>

          <div className="fc-stats-grid">
            <div className="fc-stats-bars">
              {STATS.map(({ label, value, featured }) => (
                <div key={label} className="fc-stat-row">
                  <span className="fc-stat-name">
                    {label}
                    {featured ? ' ★' : ''}
                  </span>
                  <div className="fc-stat-bar-wrap">
                    <div
                      className={`fc-stat-bar ${featured ? 'fc-stat-bar-gold' : ''}`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="fc-stat-num">{value}</span>
                </div>
              ))}
              <div className="fc-commits-row">
                <div className="fc-commits-bar">
                  <div className="fc-commits-fill" style={{ width: '94%' }} />
                </div>
                <span className="fc-commits-label">COMMITS 94%</span>
              </div>
            </div>

            <div className="fc-side-panel">
              <div className="fc-notes-block">
                {NOTES.map((note, i) => (
                  <p key={i} className="fc-note">
                    <span className="fc-note-num">{String(i + 1).padStart(2, '0')}</span>
                    {note}
                  </p>
                ))}
              </div>

              <div className="fc-trophy-box">
                <p className="fc-trophy-title">TROPHY CABINET</p>
                <p className="fc-trophy-sub">MOST-STARRED CLUBS, ALL SEASONS</p>
                <ul className="fc-trophy-list">
                  {TROPHIES.map((t) => (
                    <li key={t.name}>
                      <span>{t.icon}</span>
                      <span>{t.name}</span>
                      <span className="fc-trophy-stars">★ {t.stars}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="fc-lang-tags">
            {LANGUAGES.map((lang) => (
              <span key={lang.name} className="fc-lang-tag">
                {lang.name} ×{lang.count}
              </span>
            ))}
          </div>

          <div className="fc-card-footer">
            <div className="fc-card-actions">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(GITHUB_FC_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fc-btn fc-btn-dark"
              >
                SHARE ON 𝕏
              </a>
              <a href={GITHUB_FC_URL} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn-gold">
                DOWNLOAD CARD ↓
              </a>
            </div>
            <div className="fc-collector-row">
              <span className="fc-collector-id">NO. 268818920 · GITHUB FC · COLLECTOR&apos;S ITEM</span>
              <span className="fc-transfer">
                EST. TRANSFER VALUE
                <strong>€25.8M</strong>
              </span>
            </div>
          </div>
        </article>

        <p className="fc-view-link">
          <a href={GITHUB_FC_URL} target="_blank" rel="noopener noreferrer">
            View live card on GitHub FC →
          </a>
        </p>
      </div>
    </section>
  )
}
