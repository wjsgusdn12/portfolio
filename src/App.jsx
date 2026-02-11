import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import ProjectCard from "./components/ProjectCard"
import HeroSection from "./components/HeroSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import { AboutIcon } from "./components/icons"
import ImageModal from "./components/modals/ImageModal"
import ReadmeModal from "./components/modals/ReadmeModal"
import {
  getProjectStartValue,
  profileItems,
  projects,
  skillGroups,
} from "./data/portfolioData"

const HERO_DELAY_FACTOR = 0.72
const SKILL_ICON_COLOR = "9f7344"
const iconUrl = (iconName, useColor = true) =>
  `https://api.iconify.design/${encodeURIComponent(iconName)}.svg${
    useColor ? `?color=%23${SKILL_ICON_COLOR}` : ""
  }`

const SKILL_ICON_MAP = {
  JavaScript: iconUrl("simple-icons:javascript"),
  Java: iconUrl("mdi:language-java"),
  HTML: iconUrl("simple-icons:html5"),
  CSS: iconUrl("simple-icons:css"),
  React: iconUrl("simple-icons:react"),
  Vite: iconUrl("simple-icons:vite"),
  "React Router": iconUrl("simple-icons:reactrouter"),
  Axios: iconUrl("simple-icons:axios"),
  "Spring Boot": iconUrl("simple-icons:springboot"),
  JPA: iconUrl("mdi:database-cog-outline"),
  Swagger: iconUrl("simple-icons:swagger"),
  PostgreSQL: iconUrl("simple-icons:postgresql"),
  Oracle: iconUrl("simple-icons:oracle"),
  MSSQL: iconUrl("simple-icons:microsoftsqlserver"),
  "AWS EC2": iconUrl("simple-icons:amazonec2"),
  S3: iconUrl("simple-icons:amazons3"),
  CloudFront: iconUrl("mdi:cloud-outline"),
  Git: iconUrl("simple-icons:git"),
  GitHub: iconUrl("simple-icons:github"),
  "VS Code": iconUrl("simple-icons:visualstudiocode"),
  IntelliJ: iconUrl("simple-icons:intellijidea"),
}

const getSkillIcon = (tag) => SKILL_ICON_MAP[tag] ?? iconUrl("mdi:code-tags")

const renderAnimatedChars = (text, startDelay = 0, step = 22, extraClass = "") =>
  Array.from(text).map((char, index) => (
    <span
      key={`${text}-${index}`}
      className={`char-reveal ${extraClass}`.trim()}
      style={{
        "--char-delay": `${Math.round((startDelay + index * step) * HERO_DELAY_FACTOR)}ms`,
        "--char-index": index,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))

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
  const closeTimerRef = useRef(null)
  const imageSlideTimerRef = useRef(null)
  const dragPointerIdRef = useRef(null)
  const dragStartXRef = useRef(0)
  const dragDeltaXRef = useRef(0)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  )

  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) => getProjectStartValue(b.period) - getProjectStartValue(a.period)
      ),
    []
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

  const closeModals = useCallback(() => {
    if (!activeModal || isModalClosing) return
    setIsModalClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setActiveModal(null)
      setIsModalClosing(false)
      closeTimerRef.current = null
    }, 360)
  }, [activeModal, isModalClosing])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModals()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [closeModals])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      if (imageSlideTimerRef.current) clearTimeout(imageSlideTimerRef.current)
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

  const onGalleryPointerDown = (event) => {
    if (isImageSliding) return
    if (event.pointerType === "mouse" && event.button !== 0) return
    if (event.target.closest(".gallery-nav-btn")) return
    dragPointerIdRef.current = event.pointerId
    dragStartXRef.current = event.clientX
    dragDeltaXRef.current = 0
    setIsImageDragging(true)
    setDragOffsetX(0)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onGalleryPointerMove = (event) => {
    if (dragPointerIdRef.current !== event.pointerId) return
    const delta = event.clientX - dragStartXRef.current
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
    if (Math.abs(delta) < 8 && activeProject?.images[selectedImageIndex]) {
      window.open(activeProject.images[selectedImageIndex].src, "_blank")
      return
    }
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

  const onProjectCtaClick = useCallback((event) => {
    event.preventDefault()
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [])

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
        </div>
      </header>

      <main>
        <HeroSection
          heroDescLine1={heroDescLine1}
          heroDescLine2={heroDescLine2}
          renderAnimatedChars={renderAnimatedChars}
          onProjectCtaClick={onProjectCtaClick}
        />

        <section id="about" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Profile</p>
            <h3 className="section-title">ABOUT ME</h3>
          </div>
          <div className="about-grid">
            {profileItems.map((item) => (
              <div className="about-card" key={item.label}>
                <div className="about-meta">
                  <span className="about-icon">
                    <AboutIcon label={item.label} />
                  </span>
                  <span className="about-label">{item.label}</span>
                </div>
                <strong className="about-value">{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <SkillsSection skillGroups={skillGroups} getSkillIcon={getSkillIcon} />

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

        <ProjectsSection
          sortedProjects={sortedProjects}
          onOpenReadme={openReadmeModal}
          onOpenImage={openImageModal}
        />

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

      </main>

      <footer className="footer">© 2026 Jeon Hyunwoo. All rights reserved.</footer>

      {activeModal === "readme" && activeProject && (
        <ReadmeModal
          activeProject={activeProject}
          isModalClosing={isModalClosing}
          onClose={closeModals}
        />
      )}

      {activeModal === "image" && activeProject && (
        <ImageModal
          activeProject={activeProject}
          isModalClosing={isModalClosing}
          onClose={closeModals}
          selectedImageIndex={selectedImageIndex}
          isImageDragging={isImageDragging}
          dragOffsetX={dragOffsetX}
          isImageSliding={isImageSliding}
          slideDirection={slideDirection}
          leavingImage={leavingImage}
          currentImage={currentImage}
          onGalleryPointerDown={onGalleryPointerDown}
          onGalleryPointerMove={onGalleryPointerMove}
          endGalleryDrag={endGalleryDrag}
          goPrevImage={goPrevImage}
          goNextImage={goNextImage}
          goToImage={goToImage}
          pageGroupSize={pageGroupSize}
        />
      )}
    </div>
  )
}

export default App
