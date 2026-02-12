import { useEffect, useMemo, useState } from "react"

export default function ReadmeModal({
  activeProject,
  isModalClosing,
  onClose,
  onOpenImage,
}) {
  const [isHighlightsExpanded, setIsHighlightsExpanded] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const [highlightMotion, setHighlightMotion] = useState("next")

  const toSentenceLines = (text = "") =>
    text
      .split(/(?<=[.?!]|다\.)\s+/)
      .map((line) => line.trim())
      .filter(Boolean)

  const resolvedHighlights = useMemo(() => {
    const highlights = Array.isArray(activeProject.readme.highlights)
      ? activeProject.readme.highlights
      : []

    const splitCaption = (highlight) => {
      const title = typeof highlight.title === "string" ? highlight.title.trim() : ""
      const description =
        typeof highlight.description === "string"
          ? highlight.description.trim()
          : ""
      if (title || description) {
        return { title, description }
      }

      const caption = typeof highlight.caption === "string" ? highlight.caption.trim() : ""
      if (!caption) return { title: "", description: "" }

      const colonIndex = caption.indexOf(":")
      if (colonIndex > -1) {
        return {
          title: caption.slice(0, colonIndex).trim(),
          description: caption.slice(colonIndex + 1).trim(),
        }
      }

      return { title: "", description: caption }
    }

    return highlights
      .map((item) => {
        if (!item) return null
        const highlight = typeof item === "string" ? { id: item } : item
        const image = activeProject.images?.find((img) => img.id === highlight.id)
        if (!image?.src) return null
        const { title, description } = splitCaption(highlight)
        return {
          ...highlight,
          title,
          description,
          src: image.src,
          alt: image.alt || title || description || activeProject.name,
        }
      })
      .filter(Boolean)
  }, [activeProject])

  useEffect(() => {
    setHighlightIndex(0)
    setIsHighlightsExpanded(false)
    setHighlightMotion("next")
  }, [activeProject.id])

  const hasHighlights = resolvedHighlights.length > 0
  const currentHighlight = hasHighlights ? resolvedHighlights[highlightIndex] : null

  const goPrevHighlight = () => {
    if (!hasHighlights) return
    setHighlightMotion("prev")
    setHighlightIndex((prev) =>
      prev === 0 ? resolvedHighlights.length - 1 : prev - 1
    )
  }

  const goNextHighlight = () => {
    if (!hasHighlights) return
    setHighlightMotion("next")
    setHighlightIndex((prev) =>
      prev === resolvedHighlights.length - 1 ? 0 : prev + 1
    )
  }

  const goToHighlight = (nextIndex) => {
    if (!hasHighlights) return
    if (nextIndex < 0 || nextIndex >= resolvedHighlights.length) return
    if (nextIndex === highlightIndex) return
    setHighlightMotion(nextIndex > highlightIndex ? "next" : "prev")
    setHighlightIndex(nextIndex)
  }

  return (
    <div
      className={`modal-overlay ${isModalClosing ? "is-closing" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal-sheet modal-sheet-project"
        onClick={(event) => event.stopPropagation()}
      >
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
            <h5>Summary</h5>
            <ul className="modal-list">
              {activeProject.readme.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {hasHighlights && (
            <div className="readme-block">
              <div className="readme-highlights-head">
                <div className="readme-highlights-title-row">
                  <h5>Key Screens</h5>
                  <div className="readme-highlights-tools">
                    <button
                      type="button"
                      className="readme-toggle-btn"
                      onClick={() => setIsHighlightsExpanded((prev) => !prev)}
                    >
                      <svg
                        className="readme-toggle-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {isHighlightsExpanded ? (
                          <>
                            <path d="m7 17 5-5 5 5" />
                            <path d="m7 11 5-5 5 5" />
                          </>
                        ) : (
                          <>
                            <path d="m7 7 5 5 5-5" />
                            <path d="m7 13 5 5 5-5" />
                          </>
                        )}
                      </svg>
                      <span>{isHighlightsExpanded ? "접기" : "펼치기"}</span>
                    </button>
                    {activeProject.readme.notice && (
                      <span className="readme-inline-note">{activeProject.readme.notice}</span>
                    )}
                  </div>
                </div>
                <div className="readme-highlights-actions">
                  <button
                    type="button"
                    className="readme-highlight-cta"
                    onClick={() => onOpenImage?.(activeProject, { fromReadme: true })}
                  >
                    전체 화면 {activeProject.images.length}장 보기
                  </button>
                </div>
              </div>

              {!isHighlightsExpanded && currentHighlight && (
                <div className="readme-highlight-slider">
                  <div
                    key={currentHighlight.id}
                    className={`readme-highlight-card is-slider readme-highlight-anim readme-highlight-anim-${highlightMotion}`}
                  >
                    <div className="readme-highlight-media">
                      <button
                        type="button"
                        className="readme-highlight-nav is-prev"
                        onClick={goPrevHighlight}
                        aria-label="이전 키스크린"
                      >
                        <svg
                          className="arrow-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                      <img src={currentHighlight.src} alt={currentHighlight.alt} loading="lazy" />
                      <button
                        type="button"
                        className="readme-highlight-nav is-next"
                        onClick={goNextHighlight}
                        aria-label="다음 키스크린"
                      >
                        <svg
                          className="arrow-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                    <div className="readme-highlight-copy">
                      <div className="readme-highlight-text">
                        {currentHighlight.title && (
                          <p className="readme-highlight-title">{currentHighlight.title}</p>
                        )}
                        {currentHighlight.description && (
                          <p className="readme-highlight-caption">
                            {currentHighlight.description}
                          </p>
                        )}
                      </div>
                      <div className="readme-highlight-pages">
                        {resolvedHighlights.map((item, idx) => (
                          <button
                            key={item.id}
                            type="button"
                            className={`readme-highlight-page ${
                              idx === highlightIndex ? "is-active" : ""
                            }`}
                            onClick={() => goToHighlight(idx)}
                          >
                            {idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isHighlightsExpanded && (
                <div className="readme-highlights">
                  {resolvedHighlights.map((item) => (
                    <div key={item.id} className="readme-highlight-card">
                      <div className="readme-highlight-media">
                        <img src={item.src} alt={item.alt} loading="lazy" />
                      </div>
                      <div className="readme-highlight-copy">
                        <div className="readme-highlight-text">
                          {item.title && (
                            <p className="readme-highlight-title">{item.title}</p>
                          )}
                          {item.description && (
                            <p className="readme-highlight-caption">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          <div className="readme-block">
            <h5>Deployment URL</h5>
            <p>{activeProject.deploymentUrl}</p>
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
        </div>
      </div>
    </div>
  )
}
