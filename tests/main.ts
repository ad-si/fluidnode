import fs from "node:fs/promises"
import path from "node:path"

function makeAbs(fileName: string) {
  return path.join(__dirname, fileName)
}

// @ts-expect-error - Path can't end with '.ts'
import { renderFile } from "../index.ts"

async function main() {
  const wavBuffer = await renderFile(makeAbs("./drum_sample.mid"))
  const outPath = makeAbs("drum_sample.wav")

  await fs.writeFile(outPath, wavBuffer)
  console.log(`✅ Created ${outPath}`)
}

main()
