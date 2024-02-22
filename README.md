# FluidNode

FluidNode is a Node.js wrapper for the
[FluidSynth](http://fluidsynth.org) software synthesizer.


## Installation

```sh
npm install fluidnode
```


## Usage

Require FluidNode in your files like this:

```ts
import { renderFile } from "fluidnode"

const wavBuffer = await renderFile(
  filePath, // Path to MIDI file to get rendered
  options,  // Set gain and alternative soundfont path (both optional)
)
```

Default soundfont is [GeneralUser](https://github.com/adius/GeneralUser).

Check out the [test/main.ts] file for a complete example.


## Development

Check out the makefile for available commands.
