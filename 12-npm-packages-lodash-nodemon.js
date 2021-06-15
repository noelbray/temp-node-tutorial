// npmjs.com // The worlds biggest code store
// node package manager: npm
// npm enables us to:
// reuse our own code in other projects
// use code written by other developers
// share our own solutions with other developers

// npm calls reusable code a "package"
// and a package is a folder that contains a javascript folder
// packages are also called: 
// package(s)
// module(s)
// dependency(ies)

// There is no quality control for publishing packages so you have to figure out which ones are good and etc. 
// A good indication of security, reliability, and such of a package is the number of weekly downloads it has. 

// Installing external modules, packages from npm: 

// npm - global command, comes with node
// npm --version or --v shows what version is currently installed

// Install as a local dependency: 
// local dependency - use it only in this particular project
// npm i <packageName> or npm install <packageName>
// you'll most likely install things locally

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// Install the latest stable version of npm globally:
// npm install npm@latest -g

// package.json - manifest file (stores important information about the project)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// He says it's just quicker to run "npm init -y"
// and then edit the package.json

// if you publish a package, the name has to be unique, no other online package can have the same name on npm

const _ = require('lodash');

const items = [ 1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('You are great God.');
console.log('Nodemon is working.');
console.log('Nodemon automatically runs the node app that was specified in the script object of the package.json file like so: "dev": "nodemon app.js".')

// I ran into this powershell notification, error when trying to 
// run "git init":
/*
git init
git : The term 'git' is not 
recognized as the name of a       
cmdlet, function, script file, or 
operable program. Check the       
spelling of the name, or if a     
path was included, verify that    
the path is correct and try again.
At line:1 char:1
+ git init
+ ~~~
    + CategoryInfo          : Obj  
   ectNotFound: (git:String) [],   
   CommandNotFoundException        
    + FullyQualifiedErrorId : Com  
   mandNotFoundException 
   */