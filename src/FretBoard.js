var config = require('../config.js');

var FretBoard = function(fretNotation, stringNotation, options) {
	this.init = function() {
		this.options = options || {};
		this.options.fretNotation = fretNotation;
		this.options.stringNotation = stringNotation;
		this.buildFretBoard();
	}

	this.buildFretBoard = function() {
		this.fretBoardDisplay = [];
		this.fretBoardDisplay.push('|-------------------------------------');
		this.fretBoardDisplay.push('|-------------------------------------');
		this.fretBoardDisplay.push('|-------------------------------------');
		this.fretBoardDisplay.push('|-------------------------------------');
		this.fretBoardDisplay.push('|-------------------------------------');
		this.fretBoardDisplay.push('| x --- x  --- x --- x  x --- x --- x ');

		if (this.options.stringNotation) {
			for( var i = 0; i < config.strings.length; i++ ) {
				this.fretBoardDisplay[i] = config.strings[i] + ' ' + this.fretBoardDisplay[i];
			}
		}

		// this should be static static right???
		if (this.options.fretNotation) {
			var fretNotationDisplay = '0 1  2  3   4  5  6  7  8  9  10 11 12';
			if (this.options.stringNotation) {
				fretNotationDisplay = '  ' + fretNotationDisplay;
			}
			this.fretBoardDisplay.push(fretNotationDisplay);
		}

		this.fretBoardDisplay.push('');
	};

	this.print = function() {
		for( var i = 0; i < this.fretBoardDisplay.length; i++) {
			console.log(this.fretBoardDisplay[i]);
		}
	};

	this.init();
};

module.exports = FretBoard;