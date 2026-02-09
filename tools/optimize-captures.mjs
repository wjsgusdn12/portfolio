import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const targetDir = path.resolve("public/captures/piosync")
const maxWidth = 1440
const quality = 82

const files = (await fs.readdir(targetDir))
  .filter((name) => name.toLowerCase().endsWith(".png"))
  .sort((a, b) => a.localeCompare(b))

for (const file of files) {
  const inputPath = path.join(targetDir, file)
  const outputPath = path.join(
    targetDir,
    file.replace(/\.png$/i, ".webp")
  )

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toFile(outputPath)

  const [inputStat, outputStat] = await Promise.all([
    fs.stat(inputPath),
    fs.stat(outputPath),
  ])

  const saved = Math.max(0, inputStat.size - outputStat.size)
  process.stdout.write(
    `${file} -> ${path.basename(outputPath)} (${Math.round(saved / 1024)}KB saved)\n`
  )
}

process.stdout.write(
  `Done: ${files.length} files optimized (maxWidth=${maxWidth}, quality=${quality}).\n`
)
