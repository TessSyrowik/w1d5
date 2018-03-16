var chalk = require("chalk");

var message = chalk.bgYellow("Hello ") + chalk.magenta.italic.bold("World!");

console.log(message);