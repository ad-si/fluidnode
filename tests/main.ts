import fs from "node:fs"
import path from "node:path"

function makeAbs(fileName: string) {
  return path.join(__dirname, fileName)
}

// @ts-expect-error - Path can't end with '.ts'
import { renderFile } from "../index.ts"

async function main() {
  const wavBuffer = await renderFile(makeAbs("./drum_sample.mid"))

  fs.writeFileSync(makeAbs("drum_sample.wav"), wavBuffer)
}

main()
