var scale = require('./src/Scale.js');
var fretBoard = require('./src/FretBoard.js');
var config = require('./config.js');

/* FretBoards */
// var stringsAndFrets = new fretBoard(true, true);
// stringsAndFrets.print();

// var fretsNoStrings = new fretBoard(true, false);
// fretsNoStrings.print();

// var stringsNoFrets = new fretBoard(false, true);
// stringsNoFrets.print();

// var noStringsNoFrets = new fretBoard(false, false);
// noStringsNoFrets.print();


/* Scales */
for(var i = 0; i < config.notes.length; i++) {
	var notes = config.notes[i].split('/');
	for(var j = 0; j < notes.length; j++) {
		(new scale(notes[j], 'major', {})).print();
		(new scale(notes[j], 'minor', {})).print();
	}
}