import fs from "node:fs/promises"
import path from "node:path"

const targets = [
  path.resolve("public/captures/piosync"),
  path.resolve("docs/captures/piosync"),
]

for (const dir of targets) {
  let files = []
  try {
    files = await fs.readdir(dir)
  } catch {
    continue
  }

  const pngFiles = files.filter((name) => name.toLowerCase().endsWith(".png"))
  for (const file of pngFiles) {
    await fs.unlink(path.join(dir, file))
  }
  process.stdout.write(`${dir}: removed ${pngFiles.length} png files\n`)
}
