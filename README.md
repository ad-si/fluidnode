# FluidNode

FluidNode is a node.js wrapper for the [FluidSynth](http://fluidsynth.org) software synthesizer.


## Installation

```
npm install fluidnode
```

## Usage

Require FluidNode in your javascript files like this:

```
var fluidnode = require('fluidnode')
```

## Interface

```
fluidnode.renderFile(filePath, options, callback)
```

### filePath

Path to MIDI file to get rendered.


### options

Options object to configure the rendering.


#### Available properties

`soundfont`: Path to an alternative soundfont to use instead of the default [GeneralUser](https://github.com/adius/GeneralUser) soundfont.


### callback

Function to be called after the rendering. Expects the two arguments `error` and `output`.
`output` is a buffer containing the rendered wave file which can then for example be saved to a file.
