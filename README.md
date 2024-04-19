# FluidNode

FluidNode is a wrapper for the
[FluidSynth](http://fluidsynth.org) software synthesizer.


## Installation

```sh
npm install fluidnode
```

Futhermore, the `fluidsynth` binary must be installed on your system.
You can find installation instructions for your system
[here](https://github.com/FluidSynth/fluidsynth/wiki/Download).


## Usage

Use FluidNode in your files like this:

```ts
import "fs" from "fs/promises"
import { renderFile } from "fluidnode"

const wavBuffer = await renderFile(
  filePath, // Path to MIDI file to get rendered
  options,  // Set gain and alternative soundfont path (both optional)
)

await fs.writeFile("out.wav", wavBuffer, { encoding: "binary" })
```

Default soundfont is [GeneralUser](https://github.com/adius/GeneralUser).

Check out the [test/main.ts] file for a complete example.


## Development

Check out the makefile for available commands.
