export default function ReadmeModal({
  activeProject,
  isModalClosing,
  onClose,
  onOpenImage,
}) {
  const toSentenceLines = (text = "") =>
    text
      .split(/(?<=[.?!]|다\.)\s+/)
      .map((line) => line.trim())
      .filter(Boolean)

  const highlights = Array.isArray(activeProject.readme.highlights)
    ? activeProject.readme.highlights
    : []
  const resolvedHighlights = highlights
    .map((item) => {
      if (!item) return null
      const highlight = typeof item === "string" ? { id: item } : item
      const image = activeProject.images?.find((img) => img.id === highlight.id)
      if (!image?.src) return null
      return {
        ...highlight,
        src: image.src,
        alt: image.alt || highlight.caption || activeProject.name,
      }
    })
    .filter(Boolean)

  return (
    <div
      className={`modal-overlay ${isModalClosing ? "is-closing" : ""}`}
      onClick={onClose}
    >
      <div className="modal-sheet" onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div>
            <p className="modal-kicker">README.md</p>
            <h4>{activeProject.name}</h4>
            <p className="modal-meta">
              {activeProject.period} ({activeProject.team})
            </p>
          </div>
          <button className="modal-close" type="button" onClick={onClose}>
            <svg
              className="close-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
            <span className="sr-only">닫기</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="readme-block">
            <h5>Deployment URL</h5>
            <p>{activeProject.deploymentUrl}</p>
          </div>

          {resolvedHighlights.length > 0 && (
            <div className="readme-block">
              <h5>Key Screens</h5>
              <div className="readme-highlights">
                {resolvedHighlights.map((item) => (
                  <div key={item.id} className="readme-highlight-card">
                    <div className="readme-highlight-media">
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    </div>
                    {item.caption && (
                      <p className="readme-highlight-caption">{item.caption}</p>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="readme-highlight-cta"
                onClick={() => onOpenImage?.(activeProject)}
              >
                전체 화면 {activeProject.images.length}장 보기
              </button>
            </div>
          )}

          <div className="readme-block">
            <h5>Summary</h5>
            <ul className="modal-list">
              {activeProject.readme.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {Array.isArray(activeProject.readme.performance) &&
            activeProject.readme.performance.length > 0 && (
              <div className="readme-block">
                <h5>Performance (Upload)</h5>
                <ul className="modal-list">
                  {activeProject.readme.performance.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

          {Array.isArray(activeProject.readme.validationParsing) &&
            activeProject.readme.validationParsing.length > 0 && (
              <div className="readme-block">
                <h5>Validation & Parsing</h5>
                <ul className="modal-list">
                  {activeProject.readme.validationParsing.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

          <div className="readme-block">
            <h5>Background</h5>
            <ul className="modal-paragraph-list">
              {toSentenceLines(activeProject.readme.background).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="readme-block">
            <h5>Meaning</h5>
            <ul className="modal-paragraph-list">
              {toSentenceLines(activeProject.readme.meaning).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="readme-block">
            <h5>Main Features</h5>
            <ul className="modal-list">
              {activeProject.readme.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {Array.isArray(activeProject.readme.architecture) &&
            activeProject.readme.architecture.length > 0 && (
              <div className="readme-block">
                <h5>Architecture Overview</h5>
                <ul className="modal-list">
                  {activeProject.readme.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

          {Array.isArray(activeProject.readme.troubleshooting) &&
            activeProject.readme.troubleshooting.length > 0 && (
              <div className="readme-block">
                <h5>Troubleshooting</h5>
                <div className="readme-troubleshooting">
                  {activeProject.readme.troubleshooting.map((caseItem) => (
                    <div key={caseItem.title} className="readme-case">
                      <p className="readme-case-title">{caseItem.title}</p>
                      <ul className="modal-paragraph-list">
                        {caseItem.items.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

          <div className="readme-grid">
            <div className="readme-block">
              <h5>Technology Stack(s)</h5>
              <div className="modal-stack">
                {activeProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="readme-block">
              <h5>Members</h5>
              <ul className="modal-list">
                {activeProject.readme.members.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {Array.isArray(activeProject.readme.setup) &&
            activeProject.readme.setup.length > 0 && (
              <div className="readme-block">
                <h5>Setup & Usage</h5>
                <pre className="setup-box">
                  {activeProject.readme.setup.map((item) => item).join("\n")}
                </pre>
              </div>
            )}

          {activeProject.readme.notice && (
            <div className="readme-block">
              <h5>Note</h5>
              <p>{activeProject.readme.notice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
