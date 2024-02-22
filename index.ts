import path from "node:path"
import * as fs from "node:fs/promises"

import { promisify } from "node:util"

import temp from "temp"
import { execFile } from "child_process"

const execFileAsync = promisify(execFile)

type ConfigOptions = {
  gain: number
  soundfont: string
}

const defaultOptions = {
  gain: 2,
  soundfont: "./node_modules/generaluser/GeneralUser.sf2",
}

export async function render(
  midiBuffer: Buffer,
  options: ConfigOptions = defaultOptions
) {
  const optionsNorm = Object.assign({}, defaultOptions, options)
  console.info("Specified options: ", optionsNorm)

  throw new Error("This function is not implemented yet")
}

export async function renderFile(
  filePath: string,
  options: ConfigOptions = defaultOptions
): Promise<Buffer> {
  const optionsNorm = Object.assign({}, defaultOptions, options)
  const tempFile = temp.path()
  const synthRes = await execFileAsync(
    "fluidsynth",
    [
      ["--fast-render", tempFile],
      ["--gain", String(optionsNorm.gain)],
      [path.resolve(__dirname, optionsNorm.soundfont)],
      [filePath],
    ].flat()
  )

  if (synthRes.stderr) {
    throw new Error(synthRes.stderr)
  } //
  else {
    const fileContent = await fs.readFile(tempFile, {})
    await fs.unlink(tempFile)
    return fileContent
  }
}
