// culturedtext

//
// Copyright (C) 2018 Caleb Woodbine <calebwoodbine.public@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function oddcase(input) {
 // masH thOse CaSES
	var output = "";
	for (var i in input) {
		output += Math.round(Math.random() * 1) === 0 ? input[i].toUpperCase() : input[i];
	}
	return output;
}

function aethstetic(input) {
  // spacing is  s o  a e t h s t e t i c
	var output = "";
	for (var i in input) {
		output += `${input[i]} `;
	}
	return output.toLowerCase().trim();
}

function surreal(input) {
  // r/surrealmemes style
  var output = "";
  const chars = {
    "a": ["à", "á", "â", "ã", "ä", "å", "æ"],
    "c": ["ç"],
    "d": ["ð"],
    "e": ["è", "é", "ê", "ë"],
    "f": ["ƒ"],
    "i": ["ì", "í", "î", "ï"],
    "n": ["ñ"],
    "o": ["ò", "ó", "ô", "õ", "ö", "ø", "œ"],
    "s": ["š"],
    "u": ["ù", "ú", "û", "ü"],
    "y": ["ý", "ÿ"]
  }

  switch(["accents", "uppercase", "surrealaesthetic"].random()) {
    case "accents":
      for (var i in input) {
        var adjustment = chars[input[i].toLowerCase()],
          charIsUpper = input[i] === input[i].toUpperCase();
        if (adjustment === undefined) adjustment = input[i];
        else {
          adjustment = adjustment.random();
        }
        output += charIsUpper === true ? adjustment.toUpperCase() : adjustment;
      }
      break;
    case "uppercase":
      output = `${input.toUpperCase()}.`;
      break;
    case "surrealaesthetic":
      var re = new RegExp(/  /g);
      output = aethstetic(input).toLowerCase();
      output = output.replace(re, " ");
      break;
  }
  return output;
}

exports.oddcase = oddcase;
exports.aethstetic = aethstetic;
exports.surreal = surreal;
exports.version = require("./package.json").version;
