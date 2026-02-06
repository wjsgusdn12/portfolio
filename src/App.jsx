function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">JEON HYUNWOO</div>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="hero-badges">
            <span className="badge">신입 · 실무 7개월</span>
            <span className="badge">React 프론트 전담</span>
            <span className="badge">ERP 연동</span>
          </div>
          <h1>전현우 · 웹개발자</h1>
          <p>
            ERP 연동 웹 프로젝트에서 React 프론트를 전담하며 실서비스 기능을
            구현해온 신입 개발자입니다. 전표 입력/검토, 결재·권한, 첨부, 대량
            처리 UI 개선과 판매·정산 엑셀 업로드 백엔드 처리까지 경험했습니다.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="mailto:gusdntkd2@naver.com">메일 보내기</a>
            <a className="btn" href="https://github.com/wjsgusdn12">GitHub</a>
            <span className="btn ghost">010-5056-4577</span>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-title">About</div>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-label">이름</div>
              <div className="about-value">전현우</div>
            </div>
            <div className="about-card">
              <div className="about-label">이메일</div>
              <div className="about-value">gusdntkd2@naver.com</div>
            </div>
            <div className="about-card">
              <div className="about-label">연락처</div>
              <div className="about-value">010-5056-4577</div>
            </div>
            <div className="about-card">
              <div className="about-label">학력</div>
              <div className="about-value">Shanghai Jiao Tong Univ.</div>
            </div>
            <div className="about-card">
              <div className="about-label">직무</div>
              <div className="about-value">웹 개발자</div>
            </div>
            <div className="about-card">
              <div className="about-label">경력</div>
              <div className="about-value">실무 7개월</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-title">Skills</div>
          <div className="skill-grid">
            <div className="skill-row">
              <div className="skill-title">Frontend</div>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML/CSS</span>
                <span className="tag">React Router</span>
                <span className="tag">Axios</span>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-title">Backend</div>
              <div className="tags">
                <span className="tag">Spring Boot</span>
                <span className="tag">Java</span>
                <span className="tag">JPA</span>
                <span className="tag">Gradle</span>
                <span className="tag">YAML</span>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-title">DB</div>
              <div className="tags">
                <span className="tag">PostgreSQL</span>
                <span className="tag">Oracle</span>
                <span className="tag">MSSQL</span>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-title">DevOps</div>
              <div className="tags">
                <span className="tag">AWS EC2</span>
                <span className="tag">S3</span>
                <span className="tag">CloudFront</span>
              </div>
            </div>
            <div className="skill-row">
              <div className="skill-title">Tools</div>
              <div className="tags">
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">VS Code</span>
                <span className="tag">IntelliJ</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-title">Project · PioSync</div>
          <p className="muted">2025.09 ~ 2026.03.31 예정 · React 프론트 전담 / Spring Boot 일부</p>
          <ul className="list">
            <li>엑셀형 전표 입력/검토 UI 구현 (헤더·라인 분리, 스플릿 뷰, 컬럼 리사이징)</li>
            <li>다중 파일 업로드 + SSE 진행률/ETA 표시</li>
            <li>권한관리 3열 매핑 UI 설계</li>
            <li>대량 입력/검색 모달 개발 (필터/키보드 탐색/일괄 적용)</li>
            <li>판매·정산 엑셀 업로드 풀스택 구현</li>
          </ul>
        </section>

        <section id="career" className="section split">
          <div className="card">
            <div className="section-title">Career</div>
            <div className="muted">㈜피오솔루션 (2025.07 ~ 2026.03.31 예정)</div>
            <ul className="list">
              <li>React 프론트 전담, Spring Boot 일부 개발</li>
              <li>전표/결재/권한/첨부 등 핵심 업무 화면 설계·구현</li>
              <li>로컬 → Demo AWS → 운영 AWS (주 1~2회 배포)</li>
            </ul>
          </div>
          <div className="card" id="contact">
            <div className="section-title">Contact</div>
            <div className="muted">Email: gusdntkd2@naver.com</div>
            <div className="muted">Phone: 010-5056-4577</div>
            <div className="muted">GitHub: github.com/wjsgusdn12</div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Jeon Hyunwoo. All rights reserved.</footer>
    </div>
  )
}

export default App
