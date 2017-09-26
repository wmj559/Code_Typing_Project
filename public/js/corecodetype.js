// corecodetype.js
'use strict';
console.log('corecodetype.js');

var debug = true;
// var debug = false;

var typing = false;
var idx = 0;

// This is a reference for &nbsp; in the html.
// Needed to because a " " by &nbsp; does not
// equal " " from keyDown spacebar.
var ref_char = $('#spacebar_ref').text();

function getChar(idx) {
    // console.log('getChar');
    var char = $('.code span').eq(idx).text();
    return char;
}

function compareChar(char, event, keyid) {
    if (event.key == char || 
        (event.code == "Space" && char == ref_char)) { 
        return 1;
    } else {
        return -1;
    }
}

function updateDisplay(state) {
    var display = "";
    var last = idx - 1;

    if (state === 1) { 
        display = 'correct'
    } else if ( state === 0 ) {
        // right key wrong secondary shift key
        display = 'partial';
    }
    else if (state === -1) {
        display = 'incorrect';
    }
    
    $('.code span').eq(idx).addClass(display);
    
    if (!typing) { $('.code span').eq(0).removeClass('underline'); typing = true; }
    if (last >=0) { $('.code span').eq(idx).removeClass('underline'); }


    // $('.code span').eq(idx).removeClass('underline');

    idx++;

    $('.code span').eq(idx).addClass('underline');


} // updateDisplay


$('.code span').eq(idx).addClass('underline');

function keyHandler(event, keyid) {

    // $('.code span').eq(idx).addClass('underline');

    var char = getChar(idx);

    var state = compareChar(char, event, keyid);

    console.log('state',  state);

    updateDisplay(state);

}  // keyHandler



// var myBindings = { "a": function() {console.log('this is a bindings test \
// if it had been anything else you would have informed.');} };

var myBindings = { "a": keyHandler, "b": keyHandler, "c": keyHandler, 
"d": keyHandler, "e": keyHandler, "f": keyHandler, "g": keyHandler,
"h": keyHandler, "i": keyHandler, "j": keyHandler, "k": keyHandler,
"l": keyHandler, "m": keyHandler, "n": keyHandler, "o": keyHandler,
"p": keyHandler, "q": keyHandler, "r": keyHandler, "s": keyHandler,
"t": keyHandler, "u": keyHandler, "v": keyHandler, "w": keyHandler,
"x": keyHandler, "y": keyHandler, "z": keyHandler, 


// Cap lock held down
"A": keyHandler, "B": keyHandler, "C": keyHandler, "D": keyHandler,
"E": keyHandler, "F": keyHandler, "G": keyHandler, "H": keyHandler,
"I": keyHandler, "J": keyHandler, "K": keyHandler, "L": keyHandler,
"M": keyHandler, "N": keyHandler, "O": keyHandler, "P": keyHandler,
"Q": keyHandler, "R": keyHandler, "S": keyHandler, "T": keyHandler,
"U": keyHandler, "V": keyHandler, "W": keyHandler, "X": keyHandler, 
"Y": keyHandler, "Z": keyHandler, 

"shift_A": keyHandler, "shift_B": keyHandler, "shift_C": keyHandler, 
"shift_D": keyHandler, "shift_E": keyHandler, "shift_F": keyHandler,
"shift_G": keyHandler, "shift_H": keyHandler, "shift_I": keyHandler,
"shift_J": keyHandler, "shift_K": keyHandler, "shift_L": keyHandler,
"shift_M": keyHandler, "shift_N": keyHandler, "shift_O": keyHandler, 
"shift_P": keyHandler, "shift_Q": keyHandler, "shift_R": keyHandler,
"shift_S": keyHandler, "shift_T": keyHandler, "shift_U": keyHandler,
"shift_V": keyHandler, "shift_W": keyHandler, "shift_X": keyHandler,
"shift_Y": keyHandler, "shift_Z": keyHandler, 

"0": keyHandler, "1": keyHandler, "2": keyHandler, "3": keyHandler,
"4": keyHandler, "5": keyHandler, "6": keyHandler, "7": keyHandler,
"8": keyHandler, "9": keyHandler, "-": keyHandler, "=": keyHandler,
"[": keyHandler, "]": keyHandler, "\\": keyHandler, ";": keyHandler,
"'": keyHandler, ",": keyHandler, ".": keyHandler, "/": keyHandler,
"`": keyHandler,

// Cap lock on
")": keyHandler, "!": keyHandler, "@": keyHandler, "#": keyHandler,
"$": keyHandler, "%": keyHandler, "^": keyHandler, "&": keyHandler,
"*": keyHandler, "(": keyHandler, "_": keyHandler, "+": keyHandler,
"{": keyHandler, "}": keyHandler, "|": keyHandler, ":": keyHandler,
"\"": keyHandler, "<": keyHandler, ">": keyHandler, "?": keyHandler,
"~": keyHandler,"`": keyHandler,


"shift_)": keyHandler, "shift_!": keyHandler, "shift_@": keyHandler,
"shift_#": keyHandler, "shift_$": keyHandler, "shift_%": keyHandler,
"shift_^": keyHandler, "shift_&": keyHandler, "shift_*": keyHandler,
"shift_(": keyHandler, "shift__": keyHandler, "shift_+": keyHandler,
"shift_{": keyHandler, "shift_}": keyHandler, "shift_|": keyHandler,
"shift_:": keyHandler, "shift_\"": keyHandler, "shift_<": keyHandler,
"shift_>": keyHandler, "shift_?": keyHandler, "shift_~": keyHandler,



"Backspace": keyHandler, "spacebar": keyHandler, ".":keyHandler,
"Enter":keyHandler, "Tab": keyHandler,

// TEST  HERE
 // "shift_I": keyHandler,



};  // End myBindings

var myKeyMap = new Keymap(myBindings);

myKeyMap.install(document);

if (debug) {
    document.addEventListener('keydown', function(e) {
     e.key;
     // debugger;
     console.log('e.key: ', e.key);
     console.log('e.code: ', e.code);
     console.log('e.location: ', e.location);
    });    
}
