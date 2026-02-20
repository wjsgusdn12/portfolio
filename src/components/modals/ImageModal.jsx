import { useEffect, useRef, useState } from "react"
import { ArrowIcon } from "../icons"

export default function ImageModal({
  activeProject,
  isModalClosing,
  onClose,
  selectedImageIndex,
  currentImage,
  imageTransitionDirection,
  goPrevImage,
  goNextImage,
  goToImage,
  pageGroupSize,
}) {
  const GALLERY_TRANSITION_MS = 760
  const [leavingImage, setLeavingImage] = useState(null)
  const [transitionTick, setTransitionTick] = useState(0)
  const prevImageRef = useRef(currentImage ?? null)
  const leaveTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!currentImage?.src) {
      setLeavingImage(null)
      prevImageRef.current = null
      return
    }

    const previous = prevImageRef.current
    if (previous?.src && previous.src !== currentImage.src) {
      setLeavingImage(previous)
      setTransitionTick((value) => value + 1)
      if (leaveTimerRef.current) {
        clearTimeout(leaveTimerRef.current)
      }
      leaveTimerRef.current = setTimeout(() => {
        setLeavingImage(null)
        leaveTimerRef.current = null
      }, GALLERY_TRANSITION_MS)
    }
    prevImageRef.current = currentImage
  }, [currentImage])

  const openOriginalImage = () => {
    if (!currentImage?.src) return
    window.open(currentImage.src, "_blank", "noopener,noreferrer")
  }

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
            <p className="modal-kicker">IMAGE GALLERY</p>
            <h4>
              {activeProject.name} ({selectedImageIndex + 1}/{activeProject.images.length})
            </h4>
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
          <div className="gallery-preview">
            <button
              className="gallery-nav-btn is-prev"
              type="button"
              onClick={goPrevImage}
              aria-label="이전 이미지"
            >
              <ArrowIcon direction="left" />
            </button>
            <div className="gallery-image-stage">
              {leavingImage && (
                <img
                  key={`leave-${leavingImage.src}-${transitionTick}`}
                  draggable={false}
                  className={`gallery-image gallery-image-leave ${
                    imageTransitionDirection === "next" ? "to-left" : "to-right"
                  }`}
                  src={leavingImage.src}
                  alt={leavingImage.alt}
                  decoding="async"
                />
              )}
              {currentImage ? (
                <button
                  type="button"
                  className="gallery-image-origin-btn"
                  onClick={openOriginalImage}
                  title="원본 이미지 새 탭으로 열기"
                >
                  <img
                    key={`enter-${currentImage.src}-${transitionTick}`}
                    draggable={false}
                    className={`gallery-image ${
                      leavingImage
                        ? `gallery-image-enter ${
                            imageTransitionDirection === "next"
                              ? "from-right"
                              : "from-left"
                          }`
                        : ""
                    }`.trim()}
                    src={currentImage.src}
                    alt={currentImage.alt}
                    decoding="async"
                    onDragStart={(event) => event.preventDefault()}
                  />
                </button>
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
          <p className="gallery-origin-hint">이미지를 클릭하면 원본을 새 탭에서 볼 수 있습니다.</p>
          <div className="gallery-nav-bar">
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
          </div>
          {activeProject.readme?.notice && (
            <p className="modal-note">{activeProject.readme.notice}</p>
          )}
        </div>
      </div>
    </div>
  )
}
