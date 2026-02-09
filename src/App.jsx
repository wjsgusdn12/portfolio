import React, { useEffect, useMemo, useRef, useState } from "react"

const profileItems = [
  { label: "이름", value: "전현우" },
  { label: "생년월일", value: "1996.04.10" },
  { label: "위치", value: "서울특별시 서대문구" },
  { label: "이메일", value: "gusdntkd0410@gmail.com" },
  { label: "연락처", value: "010-5056-4577" },
  { label: "학력", value: "Shanghai Jiao Tong Univ. (중퇴)" },
]

const skillGroups = [
  {
    title: "Languages",
    tags: ["JavaScript", "Java", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    tags: ["React", "Vite", "React Router", "Axios"],
  },
  {
    title: "Backend",
    tags: ["Spring Boot", "JPA", "Swagger"],
  },
  {
    title: "Database",
    tags: ["PostgreSQL", "Oracle", "MSSQL"],
  },
  {
    title: "DevOps",
    tags: ["AWS EC2", "S3", "CloudFront"],
  },
  {
    title: "Tools",
    tags: ["Git", "GitHub", "VS Code", "IntelliJ"],
  },
]

const renderAboutIcon = (label) => {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  }

  switch (label) {
    case "이름":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 18c1.7-2.7 3.8-4 6.5-4s4.8 1.3 6.5 4" />
        </svg>
      )
    case "생년월일":
      return (
        <svg {...commonProps}>
          <rect x="4.5" y="6" width="15" height="13" rx="2.4" />
          <path d="M8 4.8v2.4M16 4.8v2.4M4.5 10h15" />
        </svg>
      )
    case "위치":
      return (
        <svg {...commonProps}>
          <path d="M12 20s5.3-5.2 5.3-9a5.3 5.3 0 1 0-10.6 0c0 3.8 5.3 9 5.3 9Z" />
          <circle cx="12" cy="11" r="1.8" />
        </svg>
      )
    case "이메일":
      return (
        <svg {...commonProps}>
          <rect x="4.2" y="6.2" width="15.6" height="11.6" rx="2.2" />
          <path d="m5.4 8 6.6 4.8L18.6 8" />
        </svg>
      )
    case "연락처":
      return (
        <svg {...commonProps}>
          <path d="M6.8 5.8c.7-.7 2-.7 2.8 0l1.3 1.3c.7.7.8 1.8.2 2.6l-1.1 1.5a12 12 0 0 0 3.9 3.9l1.5-1.1c.8-.6 1.9-.5 2.6.2l1.3 1.3c.7.7.7 2 0 2.8l-.8.8c-.9.9-2.2 1.3-3.4 1-4.8-1.1-8.6-4.9-9.7-9.7-.3-1.2.1-2.5 1-3.4l.4-.4Z" />
        </svg>
      )
    case "학력":
      return (
        <svg {...commonProps}>
          <path d="m4.4 9 7.6-3.4L19.6 9 12 12.4 4.4 9Z" />
          <path d="M8.2 10.7v3.6c0 1.3 1.9 2.4 3.8 2.4s3.8-1.1 3.8-2.4v-3.6" />
        </svg>
      )
    default:
      return null
  }
}

const buildImageList = (dir, count, label) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0")
    return {
      id: number,
      src: `${dir}/${number}.png`,
      alt: `${label} 캡쳐 ${index + 1}`,
    }
  })

const assetBase = import.meta.env.BASE_URL || "/"
const withBase = (path) => `${assetBase}${path.replace(/^\/+/, "")}`
const HERO_DELAY_FACTOR = 0.72

function ArrowIcon({ direction = "right", double = false }) {
  const isLeft = direction === "left"
  const pathOne = "M9 6l6 6-6 6"
  const pathTwo = "M5 6l6 6-6 6"
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g transform={isLeft ? "rotate(180 12 12)" : undefined}>
        <path d={pathOne} />
        {double && <path d={pathTwo} />}
      </g>
    </svg>
  )
}

const renderAnimatedChars = (text, startDelay = 0, step = 22, extraClass = "") =>
  Array.from(text).map((char, index) => (
    <span
      key={`${text}-${index}`}
      className={`char-reveal ${extraClass}`.trim()}
      style={{
        "--char-delay": `${Math.round(
          (startDelay + index * step) * HERO_DELAY_FACTOR
        )}ms`,
        "--char-index": index,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))

const projects = [
  {
    id: "piosync",
    name: "PioSync",
    period: "2025.09 ~ 2026.03",
    team: "2인 실무 프로젝트",
    category: "ERP Integration Platform",
    shortSummary:
      "ERP 연동 업무 웹. 전표/권한/업로드 흐름을 통합하고 프론트를 주도 구현했습니다.",
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    contribution: "Frontend 100% / Backend 일부",
    deploymentUrl: "사내 시스템 (외부 비공개)",
    readme: {
      summary: [
        "전표 입력·검토·권한·결재/승인 흐름을 연계된 화면 구조로 설계한 ERP 연동 서비스",
        "엑셀형 입력, 대량 처리, 업로드 진행률 등 실제 병목 구간 중심으로 UI/UX 개선",
        "요구사항 변경에 대응하도록 상태 모델 분리와 배포 루틴 표준화로 안정성 강화",
      ],
      background:
        "기존 운영 방식은 수기 입력과 다중 검토 과정이 길어 반복 작업이 많고, 권한/첨부/결재 흐름에서 사용자 피로도가 높았습니다. 실제 업무 담당자의 요청을 기준으로 입력-검토-반영 플로우를 재설계하고, 화면에서 즉시 현재 상태를 파악할 수 있도록 구조를 단순화하는 것을 목표로 개발했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 도메인 화면을 직접 설계/구현하면서, 운영 관점의 문제 정의와 개선 우선순위 설정까지 경험했습니다. 또한 API 연동 이슈를 백엔드와 함께 추적하며 요청/응답 검증 루틴을 표준화했고, 주 1~2회 배포 사이클에서 안정적으로 기능을 확장하는 방법을 체득했습니다.",
      features: [
        "엑셀형 전표 입력/검토 UI (헤더-라인 분리, 스플릿 뷰, 컬럼 리사이징)",
        "다중 파일 업로드 + SSE 기반 진행률/상태 표시",
        "사용자-Role-권한 3열 매핑 관리 및 적용 상태 시각화",
        "대량 입력/검색 모달과 일괄 처리 UX",
        "Swagger 명세 + request/response 검증 기반 API 연동 루틴",
      ],
      members: [
        "전현우 (Frontend): UI 구조 설계, 핵심 화면 구현, 운영 개선",
        "사내 Backend 개발자 (Backend): API/DB 및 서버 로직 구현",
      ],
      setup: [
        "npm install",
        "npm run dev",
        "(백엔드) Gradle 실행 및 API 서버 연결",
      ],
    },
    images: buildImageList(withBase("captures/piosync"), 39, "PioSync"),
  },
  {
    id: "portfolio",
    name: "Web Portfolio",
    period: "2026.02",
    team: "1인 개인 프로젝트",
    category: "Personal Branding Site",
    shortSummary:
      "실무 경험을 채용 관점으로 요약한 반응형 포트폴리오 사이트입니다.",
    stack: ["React", "Vite", "CSS", "GitHub Pages"],
    contribution: "Planning / Design / Development / Deploy 100%",
    deploymentUrl: "https://wjsgusdn12.github.io/portfolio/",
    readme: {
      summary: [
        "실무 프로젝트 경험을 빠르게 검증 가능한 정보 구조로 재편한 포트폴리오 웹",
        "채용 담당자가 짧은 시간 안에 핵심 역량을 파악할 수 있도록 섹션/카드 구조 최적화",
        "프로젝트별 README/이미지 모달로 상세 맥락까지 탐색 가능한 인터랙션 설계",
      ],
      background:
        "기존 포트폴리오는 정보가 분산되어 있고 프로젝트 맥락 전달력이 약해, 실제 기여 범위와 문제 해결 경험이 충분히 드러나지 않았습니다. 그래서 단순 소개 페이지가 아니라 '읽는 문서 + 보는 데모'의 중간 형태를 목표로, 핵심 정보 우선순위와 탐색 흐름을 다시 설계했습니다.",
      meaning:
        "이 프로젝트를 통해 단순한 스타일링을 넘어 정보 아키텍처, 인터랙션 우선순위, 반응형 가독성까지 포함한 UI/UX 설계 역량을 강화했습니다. 또한 GitHub Pages 기반 배포 파이프라인을 유지하며 빠르게 수정-검증-반영하는 운영 루틴을 정착시켰습니다.",
      features: [
        "섹션 기반 내비게이션 + 스크롤 진입 애니메이션",
        "프로젝트 카드형 요약 + README 상세 모달",
        "PioSync 전용 39장 이미지 모달 확장 구조",
        "모바일/데스크톱 반응형 레이아웃 및 접근성 고려",
      ],
      members: ["전현우 (Solo): 기획, 디자인, 개발, 배포 전 과정 수행"],
      setup: ["npm install", "npm run dev", "npm run build"],
    },
    images: [],
  },
]

function App() {
  const [activeProjectId, setActiveProjectId] = useState(null)
  const [activeModal, setActiveModal] = useState(null)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState("next")
  const [leavingImageIndex, setLeavingImageIndex] = useState(null)
  const [isImageSliding, setIsImageSliding] = useState(false)
  const [isImageDragging, setIsImageDragging] = useState(false)
  const [dragOffsetX, setDragOffsetX] = useState(0)
  const [brokenImages, setBrokenImages] = useState({})
  const closeTimerRef = useRef(null)
  const imageSlideTimerRef = useRef(null)
  const dragPointerIdRef = useRef(null)
  const dragStartXRef = useRef(0)
  const dragMovedRef = useRef(false)
  const dragDeltaXRef = useRef(0)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  )

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [activeModal])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModals()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeModal, isModalClosing])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
      if (imageSlideTimerRef.current) {
        clearTimeout(imageSlideTimerRef.current)
      }
    }
  }, [])

  const openReadmeModal = (project) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveProjectId(project.id)
    setIsModalClosing(false)
    setActiveModal("readme")
  }

  const openImageModal = (project) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveProjectId(project.id)
    setSelectedImageIndex(0)
    setSlideDirection("next")
    setLeavingImageIndex(null)
    setIsImageSliding(false)
    setIsImageDragging(false)
    setDragOffsetX(0)
    dragDeltaXRef.current = 0
    setIsModalClosing(false)
    setActiveModal("image")
  }

  const closeModals = () => {
    if (!activeModal || isModalClosing) return
    setIsModalClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setActiveModal(null)
      setIsModalClosing(false)
      closeTimerRef.current = null
    }, 360)
  }

  const startImageSlide = (nextIndex, direction) => {
    if (!activeProject) return
    if (nextIndex === selectedImageIndex) return

    if (imageSlideTimerRef.current) {
      clearTimeout(imageSlideTimerRef.current)
      imageSlideTimerRef.current = null
    }

    setSlideDirection(direction)
    setLeavingImageIndex(selectedImageIndex)
    setIsImageSliding(true)
    setIsImageDragging(false)
    setDragOffsetX(0)
    dragDeltaXRef.current = 0
    setSelectedImageIndex(nextIndex)

    imageSlideTimerRef.current = setTimeout(() => {
      setLeavingImageIndex(null)
      setIsImageSliding(false)
      imageSlideTimerRef.current = null
    }, 760)
  }

  const goPrevImage = () => {
    if (!activeProject) return
    const prevIndex =
      selectedImageIndex === 0
        ? activeProject.images.length - 1
        : selectedImageIndex - 1
    startImageSlide(prevIndex, "prev")
  }

  const goNextImage = () => {
    if (!activeProject) return
    const nextIndex =
      selectedImageIndex === activeProject.images.length - 1
        ? 0
        : selectedImageIndex + 1
    startImageSlide(nextIndex, "next")
  }

  const goToImage = (nextIndex) => {
    if (!activeProject) return
    const total = activeProject.images.length
    const normalized = Math.max(0, Math.min(total - 1, nextIndex))
    if (normalized === selectedImageIndex) return
    const direction = normalized > selectedImageIndex ? "next" : "prev"
    startImageSlide(normalized, direction)
  }

  const currentImage = activeProject?.images[selectedImageIndex]
  const leavingImage =
    activeProject && leavingImageIndex !== null
      ? activeProject.images[leavingImageIndex]
      : null

  const markImageBroken = (src) => {
    setBrokenImages((prev) => ({ ...prev, [src]: true }))
  }

  const onGalleryPointerDown = (event) => {
    if (isImageSliding) return
    if (event.pointerType === "mouse" && event.button !== 0) return
    if (event.target.closest(".gallery-nav-btn")) return
    event.preventDefault()
    dragPointerIdRef.current = event.pointerId
    dragStartXRef.current = event.clientX
    dragMovedRef.current = false
    dragDeltaXRef.current = 0
    setIsImageDragging(true)
    setDragOffsetX(0)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onGalleryPointerMove = (event) => {
    if (dragPointerIdRef.current !== event.pointerId) return
    const delta = event.clientX - dragStartXRef.current
    if (Math.abs(delta) > 8) dragMovedRef.current = true
    dragDeltaXRef.current = delta
    const limited = Math.max(-180, Math.min(180, delta))
    setDragOffsetX(limited)
  }

  const endGalleryDrag = (event) => {
    if (dragPointerIdRef.current !== event.pointerId) return
    const delta = dragDeltaXRef.current
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    dragPointerIdRef.current = null
    setIsImageDragging(false)
    setDragOffsetX(0)
    dragDeltaXRef.current = 0
    if (delta <= -70) {
      goNextImage()
      return
    }
    if (delta >= 70) {
      goPrevImage()
    }
  }

  const pageGroupSize = 10
  const heroDescLine1 =
    "사용자 경험 개선으로 이어지는 구조적 문제 해결에 가장 큰 보람을 느낍니다."
  const heroDescLine2 =
    "실무에서는 이슈를 재현해 핵심 원인을 좁히고, 화면과 API·데이터 흐름을 함께 고려해 우선순위대로 반영하며 결과까지 책임지고 있습니다."

  return (
    <div className="page">
      <div className="bg-scene" aria-hidden="true">
        <span className="bg-bubble bg-bubble-1" />
        <span className="bg-bubble bg-bubble-2" />
        <span className="bg-bubble bg-bubble-3" />
        <span className="bg-bubble bg-bubble-4" />
        <span className="bg-bubble bg-bubble-5" />
        <span className="bg-bubble bg-bubble-6" />
        <span className="bg-orb bg-orb-a" />
        <span className="bg-orb bg-orb-b" />
        <span className="bg-grid" />
      </div>

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            JEON HYUNWOO
          </a>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#archiving">Archiving</a>
            <a href="#projects">Projects</a>
            <a href="#career">Career</a>
          </nav>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main>
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
              >
                {renderAnimatedChars("프로젝트 보기", 1180, 16)}
              </a>
              <a
                className="hero-btn hero-btn-secondary hero-action-btn"
                href="#contact"
                style={{ "--btn-delay": "980ms" }}
              >
                {renderAnimatedChars("바로 연락하기", 1280, 16)}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Profile</p>
            <h3 className="section-title">ABOUT ME</h3>
          </div>
          <div className="about-grid">
            {profileItems.map((item) => (
              <div className="about-card" key={item.label}>
                <div className="about-meta">
                  <span className="about-icon">{renderAboutIcon(item.label)}</span>
                  <span className="about-label">{item.label}</span>
                </div>
                <strong className="about-value">{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-accent reveal">
          <div className="section-head">
            <p className="section-eyebrow">Tech</p>
            <h3 className="section-title">SKILLS</h3>
          </div>
          <div className="skills-card">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.title}>
                <div className="skill-title-wrap">
                  <div className="skill-title">{group.title}</div>
                </div>
                <div className="skill-items">
                  {group.tags.map((tag) => (
                    <span className="skill-item-token" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="archiving" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Link</p>
            <h3 className="section-title">ARCHIVING</h3>
          </div>
          <div className="archive-grid">
            <a
              className="archive-card"
              href="https://github.com/wjsgusdn12"
              target="_blank"
              rel="noreferrer"
            >
              <strong>GitHub</strong>
              <span>github.com/wjsgusdn12</span>
              <em>프로젝트 코드, 커밋 이력, 브랜치 히스토리</em>
            </a>
            <div className="archive-card">
              <strong>Portfolio PDF</strong>
              <span>업데이트 예정</span>
              <em>핵심 기능 흐름과 개선 이력 요약본</em>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-projects reveal">
          <div className="section-head">
            <p className="section-eyebrow">Work</p>
            <h3 className="section-title">PROJECTS</h3>
          </div>
          <div className="project-brief-list">
            {projects.map((project) => (
              <article className="project-brief" key={project.id}>
                <div className="project-brief-head">
                  <span className="project-pill">{project.name}</span>
                </div>
                <p className="project-date">
                  {project.period} ({project.team})
                </p>
                <hr className="project-divider" />
                <h4 className="project-headline">{project.category}</h4>
                <ul className="project-bullets">
                  {project.readme.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-linkline">{project.deploymentUrl}</div>
                <div className="project-tech-box">
                  {project.stack.join(", ")}
                </div>
                <div className="project-actions">
                  <button
                    className="project-btn"
                    type="button"
                    onClick={() => openReadmeModal(project)}
                  >
                    README
                  </button>
                  {project.images.length > 0 && (
                    <button
                      className="project-btn project-btn-ghost"
                      type="button"
                      onClick={() => openImageModal(project)}
                    >
                      이미지
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="career" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Experience</p>
            <h3 className="section-title">CAREER</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h4>㈜피오솔루션</h4>
                <p>2025.07 ~ 현재</p>
                <ul>
                  <li>React 프론트 전담, Spring Boot 일부 기능 개발 참여</li>
                  <li>전표/결재/권한/첨부 등 핵심 업무 화면 설계/구현</li>
                  <li>로컬 테스트 -&gt; Demo AWS -&gt; 운영 AWS 배포 사이클 운영</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="contact-panel">
            <h3>CONTACT</h3>
            <div className="contact-list">
              <div>gusdntkd0410@gmail.com</div>
              <div>010-5056-4577</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Jeon Hyunwoo. All rights reserved.</footer>

      {activeModal === "readme" && activeProject && (
        <div
          className={`modal-overlay ${isModalClosing ? "is-closing" : ""}`}
          onClick={closeModals}
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
              <button className="modal-close" type="button" onClick={closeModals}>
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
      )}

      {activeModal === "image" && activeProject && (
        <div
          className={`modal-overlay ${isModalClosing ? "is-closing" : ""}`}
          onClick={closeModals}
        >
          <div
            className="modal-sheet modal-sheet-wide"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <p className="modal-kicker">IMAGE GALLERY</p>
                <h4>
                  {activeProject.name} ({selectedImageIndex + 1}/
                  {activeProject.images.length})
                </h4>
              </div>
              <button className="modal-close" type="button" onClick={closeModals}>
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
              <div className="gallery-preview">
                <button
                  className="gallery-nav-btn is-prev"
                  type="button"
                  onClick={goPrevImage}
                  aria-label="이전 이미지"
                >
                  <ArrowIcon direction="left" />
                </button>
                <div
                  className={`gallery-image-stage ${
                    isImageDragging ? "is-dragging" : ""
                  }`}
                  onPointerDown={onGalleryPointerDown}
                  onPointerMove={onGalleryPointerMove}
                  onPointerUp={endGalleryDrag}
                  onPointerCancel={endGalleryDrag}
                >
                  {leavingImage && !brokenImages[leavingImage.src] && (
                    <img
                      draggable={false}
                      className={`gallery-image gallery-image-leave ${
                        slideDirection === "prev" ? "to-right" : "to-left"
                      }`}
                      src={leavingImage.src}
                      alt={leavingImage.alt}
                      onError={() => markImageBroken(leavingImage.src)}
                    />
                  )}
                  {currentImage && !brokenImages[currentImage.src] ? (
                    <img
                      key={currentImage.src}
                      draggable={false}
                      className={`gallery-image gallery-image-enter ${
                        isImageSliding
                          ? slideDirection === "prev"
                            ? "from-left"
                            : "from-right"
                          : ""
                      }`}
                      src={currentImage.src}
                      alt={currentImage.alt}
                      style={
                        isImageDragging && !isImageSliding
                          ? { transform: `translateX(${dragOffsetX}px)` }
                          : undefined
                      }
                      onClick={() => {
                        if (dragMovedRef.current) {
                          dragMovedRef.current = false
                          return
                        }
                        window.open(currentImage.src, "_blank")
                      }}
                      onError={() => markImageBroken(currentImage.src)}
                      onDragStart={(event) => event.preventDefault()}
                    />
                  ) : (
                    <div className="image-fallback">이미지를 추가하면 여기에 표시됩니다.</div>
                  )}
                </div>
                <button
                  className="gallery-nav-btn is-next"
                  type="button"
                  onClick={goNextImage}
                  aria-label="다음 이미지"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
              <div className="gallery-nav-bar">
                {(() => {
                const total = activeProject.images.length
                const current = selectedImageIndex + 1
                const groupIndex = Math.floor((current - 1) / pageGroupSize)
                const start = groupIndex * pageGroupSize + 1
                const end = Math.min(start + pageGroupSize - 1, total)

                const goToPage = (page) => goToImage(page - 1)
                const goFirst = () => goToPage(1)
                const goLast = () => goToPage(total)
                const goPrevGroup = () => {
                  const prevStart = Math.max(1, start - pageGroupSize)
                  goToPage(prevStart)
                }
                const goNextGroup = () => {
                  const nextStart = Math.min(total, start + pageGroupSize)
                  goToPage(nextStart)
                }

                  return (
                    <div className="page-controls">
                      <button className="page-btn" type="button" onClick={goFirst}>
                        <ArrowIcon direction="left" double />
                      </button>
                      <button className="page-btn" type="button" onClick={goPrevGroup}>
                        <ArrowIcon direction="left" />
                      </button>
                      <div className="page-numbers">
                        {Array.from({ length: end - start + 1 }, (_, idx) => {
                          const page = start + idx
                          const isActive = page === current
                          return (
                            <button
                              key={page}
                              type="button"
                              className={`page-number ${isActive ? "is-active" : ""}`}
                              onClick={() => goToPage(page)}
                            >
                              {page}
                            </button>
                          )
                        })}
                      </div>
                      <button className="page-btn" type="button" onClick={goNextGroup}>
                        <ArrowIcon direction="right" />
                      </button>
                      <button className="page-btn" type="button" onClick={goLast}>
                        <ArrowIcon direction="right" double />
                      </button>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
