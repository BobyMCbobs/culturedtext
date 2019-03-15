# c u l t u r e d  t e x t
Give your text some culture

## Install it through npm
```bash
npm i culturedtext
```

## Usage
```javascript
// import it
var culture = require('culturedtext')

console.log(culture.oddcase("How do I import a library in nodejs?"))
console.log(culture.aethstetic("nvm I found it."))
console.log(culture.surreal("surreal anyone?"))
console.log(culture.stretched("woah"))
```

| Function | Description | Example output |
| - | - | - |
| oddcase | adjusts the case of each letter randomly | My wEBservER IS WriTtEn in WHIteSpaCe | 
| aethstetic | lower cases text and adds one space between each character of input | a e t h s t e t i c |
| surreal | either applies random accents to each applicable character, uses aethstetic (minus double spacing), or applies uppercase on all characters with a trailing fullstop | ýõür téxt héré; y o u r  t e x t  h e r e; YOUR TEXT HERE. |
| stretched | multiplies characters in a string | wwwwooooaaaaaahhhh |

## License
Copyright 2018-2019 BobyMCbobs.  
This project is licensed under the [GPL-3.0](http://www.gnu.org/licenses/gpl-3.0.html) and is [Free Software](https://www.gnu.org/philosophy/free-sw.en.html).  
This program comes with absolutely no warranty.  

