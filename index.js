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

function oddcase(input) {
	var output = "";
	for (var i in input) {
		output += Math.round(Math.random() * 1) === 0 ? input[i].toUpperCase() : input[i];
	}
	return output;
}

function aethstetic(input) {
	var output = "";
	for (var i in input) {
		output += `${input[i]} `;
	}
	return output.toLowerCase().trim();
}

exports.oddcase = oddcase;
exports.aethstetic = aethstetic;