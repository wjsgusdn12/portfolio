import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const checks = [
  {
    label: "PioSync",
    dir: path.join(root, "public", "captures", "piosync"),
    total: 39,
  },
]

const expectedName = (index) => `${String(index).padStart(2, "0")}.png`

let hasError = false

for (const check of checks) {
  const missing = []
  const existing = []

  for (let i = 1; i <= check.total; i += 1) {
    const name = expectedName(i)
    const target = path.join(check.dir, name)
    if (fs.existsSync(target)) {
      existing.push(name)
    } else {
      missing.push(name)
    }
  }

  const foundCount = existing.length
  const done = `${foundCount}/${check.total}`

  if (missing.length === 0) {
    console.log(`[OK] ${check.label}: ${done}`)
  } else {
    hasError = true
    console.log(`[MISSING] ${check.label}: ${done}`)
    console.log(`  dir: ${check.dir}`)
    console.log(`  missing: ${missing.join(", ")}`)
  }
}

if (hasError) {
  process.exitCode = 1
}
