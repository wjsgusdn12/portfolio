export default function HeroSection({
  heroDescLine1,
  heroDescLine2,
  renderAnimatedChars,
  onProjectCtaClick,
}) {
  return (
    <section className="hero" id="top">
      <div className="hero-pattern" />
      <div className="hero-inner reveal is-visible">
        <p className="hero-kicker">{renderAnimatedChars("PORTFOLIO", 20, 16)}</p>
        <h1 className="hero-title">{renderAnimatedChars("전현우", 120, 26)}</h1>
        <h2 className="hero-subtitle">
          {renderAnimatedChars("Web Developer", 260, 20)}
        </h2>
        <p className="hero-desc">
          <span className="hero-desc-content">
            <span className="hero-desc-line">
              {renderAnimatedChars(heroDescLine1, 380, 14, "char-reveal-desc")}
            </span>
            <span className="hero-desc-line">
              {renderAnimatedChars(heroDescLine2, 820, 14, "char-reveal-desc")}
            </span>
          </span>
          <span className="hero-desc-gradient" aria-hidden="true">
            <span className="hero-desc-line">{heroDescLine1}</span>
            <span className="hero-desc-line">{heroDescLine2}</span>
          </span>
        </p>
        <div className="hero-chips">
          <span className="hero-chip" style={{ "--chip-delay": "820ms" }}>
            {renderAnimatedChars("React", 1260, 18)}
          </span>
          <span className="hero-chip" style={{ "--chip-delay": "910ms" }}>
            {renderAnimatedChars("UI Architecture", 1350, 14)}
          </span>
          <span className="hero-chip" style={{ "--chip-delay": "1000ms" }}>
            {renderAnimatedChars("Spring Boot", 1510, 15)}
          </span>
          <span className="hero-chip" style={{ "--chip-delay": "1090ms" }}>
            {renderAnimatedChars("AWS Deploy", 1650, 15)}
          </span>
        </div>
        <div className="hero-actions">
          <a
            className="hero-btn hero-action-btn"
            href="#projects"
            style={{ "--btn-delay": "900ms" }}
            onClick={onProjectCtaClick}
          >
            {renderAnimatedChars("프로젝트 보기", 1180, 16)}
          </a>
        </div>
      </div>
    </section>
  )
}
