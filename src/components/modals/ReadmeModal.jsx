export default function ReadmeModal({ activeProject, isModalClosing, onClose }) {
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

          <div className="readme-block">
            <h5>Summary</h5>
            <ul className="modal-list">
              {activeProject.readme.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="readme-block">
            <h5>Background</h5>
            <p>{activeProject.readme.background}</p>
          </div>

          <div className="readme-block">
            <h5>Meaning</h5>
            <p>{activeProject.readme.meaning}</p>
          </div>

          <div className="readme-block">
            <h5>Main Features</h5>
            <ul className="modal-list">
              {activeProject.readme.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

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

          <div className="readme-block">
            <h5>Setup & Usage</h5>
            <pre className="setup-box">
              {activeProject.readme.setup.map((item) => item).join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
