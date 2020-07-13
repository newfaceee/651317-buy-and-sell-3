'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const fs = require(`fs`);
const {HttpCode, ExitCode, FILE_NAME} = require(`../../constants`);


const DEFAULT_PORT = 3000;

const app = express();

app.use(express.json());

app.get(`/offers`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(FILE_NAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
  }
});

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = {
  name: `--server`,
  async run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    try {
      app.listen(port, (err) => {
        if (err) {
          return console.error(`Error while creating server`, err);
        }

        return console.info(chalk.green(`Waiting for connection on port: ${port}`));
      });

    } catch (err) {
      console.error(`Something went wrong, error: ${err.message}`);
      process.exit(ExitCode.ERROR);
    }
  }
};
