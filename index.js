// Command Line Arguments Parser
// Author: Calcaware

class ArgumentParser {

	constructor(argv) {
		this.args = argv;
	}

	get() {
		return this.args;
	}

	set(argv = null) {
		if (argv != null)
			this.args = argv;
		return this;
	}

	getNodePath() {
		return this.args[0];
	}

	getFilePath() {
		return this.args[1];
	}

	getFilename(delimiter = "/") {
		let filename = this.args[1].split(delimiter);
		return filename[filename.length - 1];
	}

	shift() {
		this.args.shift();
		return this;
	}

	unshift(value) {
		this.args.unshift(value);
		return this;
	}

	pop() {
		this.args.pop();
		return this;
	}

	push(value) {
		this.args.push(value);
		return this;
	}

	hasName(...names) {
		if (typeof names[0] === "object")
			names = names[0];
		for (let i = 0; i < names.length; i++)
			if (this.args.indexOf(names[i]) !== -1)
				return true;
		return false;
	}

	getName(...names) {
		if (typeof names[0] === "object")
			names = names[0];
		for (let i = 0; i < names.length; i++)
			if (this.args.indexOf(names[i]) !== -1)
				return names[i];
		return null;
	}

	getValue(name) {
		let value = this.args[this.args.indexOf(name) + 1];
		if (value === undefined)
			return null;
		return value;
	}

	help() {
		return `Installation: npm install argument-parser # You already knew that.
Your Code:
  const ArgumentParser = require("argument-parser"); // You already knew that, too.
  let ap = new ArgumentParser(process.argv); // And this.

  // Get this Help Information
  let help = ap.help(); // You have made it at least this far.

  // Check if Argument Exists
  let exists = ap.hasName("-n", "--name");
  // Also Works with an Array for Dynamic Argument Handling
  exists = ap.hasName( [ "-n", "--name" ] );

  // Get the Name of the Passed ArgumentParser
  let name = ap.getName("-n", "--name");
  // Also Works with an Array for Dynamic Argument Handling
  name = ap.getName( [ "-n", "--name" ] );

  // Get the Value of an Argument by Name
  let value = ap.getValue(name);

  // Advanced Usage:
  ap.get(); // Get the Arguments as a String Array
  ap.shift(); // Remove First Item from Arguments
  ap.unshift(value); // Add a Value to the Beginning of Arguments
  ap.pop(); // Remove Last Item from Arguments
  ap.push(value); // Add a Value to the End of Arguments
  // Shift, Unshift, Push, and Pop are Chainable
  ap.pop().pop(); // Removes Last 2 Items from Arguments
  ap.getNodePath(); // Get the Node Binary File Path
  ap.getFilePath(); // Get the Path of the File Being Executed
  ap.getFilename(); // Get the Name of the File Being Executed
  // Note: These Operations Don't Return the Value Modified

  // All Argument Values are Returned as Strings
  // Up to you how to handle them. Maybe a future update.
  `;
	}

}
if (require.main === module) {
    let ap = new ArgumentParser(process.argv);
	console.log(ap.help());
}
module.exports = ArgumentParser;