import { ArrowIcon } from "../icons"

export default function ImageModal({
  activeProject,
  isModalClosing,
  onClose,
  selectedImageIndex,
  isImageDragging,
  dragOffsetX,
  isImageSliding,
  slideDirection,
  leavingImage,
  currentImage,
  onGalleryPointerDown,
  onGalleryPointerMove,
  endGalleryDrag,
  goPrevImage,
  goNextImage,
  goToImage,
  pageGroupSize,
}) {
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
      <div className="modal-sheet modal-sheet-wide" onClick={(event) => event.stopPropagation()}>
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
            <div
              className={`gallery-image-stage ${isImageDragging ? "is-dragging" : ""}`}
              onPointerDown={onGalleryPointerDown}
              onPointerMove={onGalleryPointerMove}
              onPointerUp={endGalleryDrag}
              onPointerCancel={endGalleryDrag}
            >
              {leavingImage && (
                <img
                  draggable={false}
                  className={`gallery-image gallery-image-leave ${
                    slideDirection === "prev" ? "to-right" : "to-left"
                  }`}
                  src={leavingImage.src}
                  alt={leavingImage.alt}
                  decoding="async"
                />
              )}
              {currentImage ? (
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
                  decoding="async"
                  style={
                    isImageDragging && !isImageSliding
                      ? { transform: `translateX(${dragOffsetX}px)` }
                      : undefined
                  }
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
