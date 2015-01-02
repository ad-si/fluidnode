var path = require('path'),
	fs = require('fs'),
	temp = require('temp'),
	childProcess = require('child_process')


// TODO: Return promise when no callback is given

module.exports.render = function (midiBuffer, options, callback) {
	// TODO
}

module.exports.renderSync = function (midiBuffer, options) {
	// TODO
	return
}


module.exports.renderFile = function (filePath, options, callback) {

	var defaults = {
			gain: 2,
			soundfont: './node_modules/generaluser/GeneralUser.sf2'
		},
		shellCommand,
		tempFile,
		key


	// Set defaults
	options = options || {}

	for (key in defaults)
		if (defaults.hasOwnProperty(key))
			options[key] = options[key] || defaults[key]

	tempFile = temp.path()

	shellCommand = [
		'fluidsynth',
		'-F ' + tempFile,
		'--gain ' + options.gain,
		path.resolve(__dirname, options.soundfont),
		filePath
	]


	childProcess.exec(
		shellCommand.join(' '),
		function (error, stdout, stderr) {

			if (error) {
				callback(error)
				return
			}

			fs.readFile(tempFile, {}, function (error, data) {

				if (error) {
					callback(error)
					return
				}
				else
					callback(null, data)

				fs.unlink(tempFile, function (error) {
					if (error && error.code !== 'ENOENT')
						throw error
				})
			})
		}
	)
}

module.exports.renderFileSync = function (filePath, options) {
	// TODO
	return
}
