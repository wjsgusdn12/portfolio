import React from "react"

function App() {
  const projectFeatures = [
    "엑셀형 전표 입력/검토 UI (헤더·라인 분리, 스플릿 뷰, 컬럼 리사이징)",
    "다중 파일 업로드 + SSE 진행률/ETA 표시",
    "사용자-Role-권한 3열 매핑 관리 UI",
    "대량 입력/검색 모달 및 일괄 처리 UX",
    "판매·정산 엑셀 업로드 풀스택 구현"
  ]

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">JEON HYUNWOO</a>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#archiving">Archiving</a>
            <a href="#projects">Projects</a>
            <a href="#career">Career</a>
          </nav>
          <a className="nav-cta" href="#contact">Contact</a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-noise" />
          <div className="hero-ring hero-ring-a" />
          <div className="hero-ring hero-ring-b" />
          <div className="hero-inner">
            <p className="hero-kicker">PORTFOLIO</p>
            <h1 className="hero-title">전현우</h1>
            <h2 className="hero-subtitle">Web Developer</h2>
            <p className="hero-desc">
              ERP 연동 웹 프로젝트에서 React 프론트를 전담하며,
              실무 사용자 흐름 중심의 기능을 구현해온 개발자입니다.
            </p>
            <div className="hero-chips">
              <span>React</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>AWS</span>
            </div>
            <a className="hero-btn" href="#projects">프로젝트 보기</a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head">
            <p className="section-eyebrow">Profile</p>
            <h3 className="section-title">ABOUT ME</h3>
          </div>
          <div className="about-grid">
            <div className="about-card"><span>이름</span><strong>전현우</strong></div>
            <div className="about-card"><span>생년월일</span><strong>1996.04.10</strong></div>
            <div className="about-card"><span>위치</span><strong>서울특별시 서대문구</strong></div>
            <div className="about-card"><span>이메일</span><strong>gusdntkd2@naver.com</strong></div>
            <div className="about-card"><span>연락처</span><strong>010-5056-4577</strong></div>
            <div className="about-card"><span>학력</span><strong>Shanghai Jiao Tong Univ. (중퇴)</strong></div>
          </div>
        </section>

        <section id="skills" className="section section-accent">
          <div className="section-head">
            <p className="section-eyebrow">Tech</p>
            <h3 className="section-title">SKILLS</h3>
          </div>
          <div className="skills-card">
            <div className="skill-row"><div className="skill-title">Frontend</div><div className="tags"><span>React</span><span>JavaScript</span><span>HTML/CSS</span><span>React Router</span><span>Axios</span></div></div>
            <div className="skill-row"><div className="skill-title">Backend</div><div className="tags"><span>Spring Boot</span><span>Java</span><span>JPA</span><span>Gradle</span><span>YAML</span></div></div>
            <div className="skill-row"><div className="skill-title">DB</div><div className="tags"><span>PostgreSQL</span><span>Oracle</span><span>MSSQL</span></div></div>
            <div className="skill-row"><div className="skill-title">DevOps</div><div className="tags"><span>AWS EC2</span><span>S3</span><span>CloudFront</span></div></div>
            <div className="skill-row"><div className="skill-title">Tools</div><div className="tags"><span>Git</span><span>GitHub</span><span>VS Code</span><span>IntelliJ</span></div></div>
          </div>
        </section>

        <section id="archiving" className="section">
          <div className="section-head">
            <p className="section-eyebrow">Link</p>
            <h3 className="section-title">ARCHIVING</h3>
          </div>
          <div className="archive-grid">
            <a className="archive-card" href="https://github.com/wjsgusdn12" target="_blank" rel="noreferrer">
              <strong>GitHub</strong>
              <span>github.com/wjsgusdn12</span>
              <em>프로젝트 코드 및 커밋 이력</em>
            </a>
            <div className="archive-card">
              <strong>Portfolio PDF</strong>
              <span>업데이트 예정</span>
              <em>PioSync 기능별 이미지 + 설명 자료</em>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <p className="section-eyebrow">Work</p>
            <h3 className="section-title">PROJECTS</h3>
          </div>
          <article className="project-card">
            <div className="project-top">
              <div>
                <p className="project-meta">PioSync | 2025.09 ~ 2026.03.31 예정</p>
                <h4 className="project-title">ERP 연동 웹 프로젝트</h4>
              </div>
              <span className="project-badge">실무 프로젝트</span>
            </div>
            <div className="feature-grid">
              {projectFeatures.map((feature) => (
                <div key={feature} className="feature-item">{feature}</div>
              ))}
            </div>
            <div className="pill">React · Spring Boot · PostgreSQL · AWS</div>
          </article>
        </section>

        <section id="career" className="section">
          <div className="section-head">
            <p className="section-eyebrow">Experience</p>
            <h3 className="section-title">CAREER</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h4>㈜피오솔루션</h4>
                <p>2025.07 ~ 2026.03.31 예정</p>
                <ul>
                  <li>React 프론트 전담, Spring Boot 일부 개발 참여</li>
                  <li>전표/결재/권한/첨부 등 핵심 업무 화면 설계/구현</li>
                  <li>로컬 → Demo AWS → 운영 AWS 배포 (주 1~2회)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-panel">
            <h3>CONTACT</h3>
            <p>프로젝트/채용 관련 문의는 아래로 연락 부탁드립니다.</p>
            <div className="contact-list">
              <div>gusdntkd2@naver.com</div>
              <div>010-5056-4577</div>
              <div>github.com/wjsgusdn12</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Jeon Hyunwoo. All rights reserved.</footer>
    </div>
  )
}

export default App
