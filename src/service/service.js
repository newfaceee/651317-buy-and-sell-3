'use strict';

const chalk = require(`chalk`);
const {Cli} = require(`./cli`);

const {DEFAULT_COMMAND, USER_ARGV_INDEX, ExitCode} = require(`../constants.js`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

const runCliCommand = (command, args) => {
  try {
    Cli[command].run(args);
  } catch (err) {
    console.error(chalk.red(`Something went wrong while running CLI command, err: ${err}`));
    process.exit(ExitCode.ERROR);
  }
};

if (userArguments.length === 0 || !Cli[userCommand]) {
  runCliCommand(DEFAULT_COMMAND);
  process.exit(ExitCode.success);
}

runCliCommand(userCommand, userArguments.slice(1));
