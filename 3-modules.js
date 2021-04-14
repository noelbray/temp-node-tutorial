// CommonJs, every file is module (by default)
// Modules - Ecapsulated Code (only share the minimum, what we want between files/modules)
// You can use "require" by itself
// or assign "require" to a variable: 
// const names = require('./4-names.js'); // ./ looks at same level folder, ../ looks up one level of folder(s) , ../../ looks up two levels of folder(s) 
const names = require('./4-names');
// used object destructuring for the rest: 
const { matthew, mark, luke, peter } = require('./4-names');
const sayHi = require('./5-utils');
// console.log(names);
// sayHi('Hope');
// sayHi(`${names.john}`);
// sayHi(`${luke}`);
// sayHi(`${peter}`);
// sayHi(`${matthew}`);
// sayHi(`${mark}`);

// module.exports alternatives:
const data = require('./6-alternative-export-methods');
// console.log(data);

// If a module as a function that is invoked, called within it, 
// the function will be immediately runs here: 
require('./7-mind-grenade'); // invokes the addValues() function that was called in that file.

// Remember: when you export a module you actually invoke it.
// When the node exports a module it wraps it in the function

// Beginning of tutorial original code.
// const secret = 'SUPER SECRET'
// const john = "John";
// const peter = "peter";
// const matthew = "Matthew";
// const mark = "Mark";
// const luke = "Luke";

// const sayHi = (name) => {
//     console.log(`Hellow there ${name}`);
// };

// Invoke the sayHi function expression: 
// sayHi('Hope');
// sayHi(`${john}`);
// sayHi(`${luke}`);
// sayHi(`${peter}`);
// sayHi(`${matthew}`);
// sayHi(`${mark}`);
// End of original tutorial code.

