export function ArrowIcon({ direction = "right", double = false }) {
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

export function ActionIcon({ type }) {
  const commonProps = {
    className: "action-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  }

  if (type === "readme") {
    return (
      <svg {...commonProps}>
        <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H20v15.5H8.8A2.8 2.8 0 0 0 6 21V5.5Z" />
        <path d="M6 5.5A2.5 2.5 0 0 0 3.5 3H2v15.5h3.2A2.8 2.8 0 0 1 8 21" />
        <path d="M10 8h7M10 11h7M10 14h5" />
      </svg>
    )
  }

  if (type === "image") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.2" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="m5.5 16 4.3-4.1a1 1 0 0 1 1.4 0l2.6 2.5 1.7-1.6a1 1 0 0 1 1.4 0l2.1 2" />
      </svg>
    )
  }

  return (
    <svg
      className="action-icon action-icon-github"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .6A11.4 11.4 0 0 0 .6 12a11.4 11.4 0 0 0 7.8 10.8c.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.3-3.9-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.2 3.3 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 2.9 0 4.4-2.7 5.3-5.2 5.6.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.4 11.4 0 0 0 23.4 12 11.4 11.4 0 0 0 12 .6Z" />
    </svg>
  )
}

export function AboutIcon({ label }) {
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
    case "GitHub":
      return (
        <svg {...commonProps}>
          <path d="M12 3.8a7.9 7.9 0 0 0-2.5 15.4c.4.1.5-.2.5-.4v-1.5c-2 .4-2.5-.8-2.5-.8-.3-.8-.8-1-1-1.1-.7-.5 0-.5 0-.5.8 0 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.6-.2-3.3-.8-3.3-3.5 0-.8.3-1.4.7-1.9-.1-.2-.3-.9.1-1.9 0 0 .6-.2 2 .7.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.4-.9 2-.7 2-.7.4 1 .2 1.7.1 1.9.5.5.7 1.2.7 1.9 0 2.7-1.7 3.3-3.3 3.5.3.2.5.7.5 1.4v2.1c0 .2.1.5.5.4A7.9 7.9 0 0 0 12 3.8Z" />
        </svg>
      )
    default:
      return null
  }
}
