# Node.js Argument Parser
##### Make it easy to parse command line arguments in your node.js project.

ArgumentParser is a simple, fast, and effective parser for command line arguments in node.js
Usage is simple and code is self-documenting. Literally.
Run `console.log( argumentParser.help() )`
## Installation

From NPM:
- Make sure you have npm installed.
- cd to your project directory `cd my_project`
- Clone the project. `npm install argument-parser-node`

From GitHub:
- Make sure you have git installed.
- cd to your project directory `cd my_project`
- Clone the project. `git clone https://github.com/aburnette-gsc/argument-parser-node.git`

## Usage
- Import into your project.
    - NPM Install: `const ArgumentParser = require("argument-parser-node")`
    - GitHub Install: `const ArgumentParser = require("./argument-parser-node")`
- Create an instance. `var ap = new ArgumentParser(process.argv)`;
- Start parsing arguments.

## Examples
Example Command Line: `node index.js --name Aaron --type user`

##### Get the Help Info
`let help = ap.help();`
`console.log(help);`

##### Check if an Argument was Passed
`let passed = ap.hasName("-n", "--name")`
Also works with arrays.
`passed = ap.hasName( [ "-n", "--name" ] );`
`console.log(passed); // true/false`

##### Get the Name of the Passed Argument
`let name = ap.getName("-n", "--name");`
Also works with arrays.
`name = ap.getName( [ "-n", "--name" ] );`
`console.log(name); // "-n"/"--name" in this case.`

##### Get the Value of the Passed Argument (If There is One)
`let value = ap.getValue(name);`
`console.log(value); // "Aaron" in this case.`

##### Put it All Together
````
var ap = new ArgumentParser(process.argv);
if (!ap.hasName("-u", "--user")) // Prevent Continuation
    return console.error("A user is required.");

let user = ap.getValue( ap.getName("-u", "--user") );
console.log(`Hello, ${user}!`); // Hello, Aaron!
````
    

##### Advanced Usage
`ap.get();` - Get the Arguments as a String Array
`ap.shift();` - Remove First Item from Arguments
`ap.unshift(value);` - Add a Value to the Beginning of Arguments
`ap.pop();` - Remove Last Item from Arguments
`ap.push(value);` - Add a Value to the End of Arguments
Note: These Operations Don't Return the Value Modified
###### Shift, Unshift, Push, and Pop are Chainable
`ap.pop().pop();` - Removes Last 2 Items from Arguments

##### Get Execution-Related Stuff
`ap.getNodePath();` - Get the Node Binary File Path
`ap.getFilePath();` - Get the Path of the File Being Executed
`ap.getFilename();` - Get the Name of the File Being Executed


##### Additional Notes
- All Argument Values are Returned as Strings
- Up to you how to handle them. Maybe a future update.