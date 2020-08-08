'use strict';
const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {nanoid} = require(`nanoid`);
const {getRandomInt, shuffle, getPictureFileName, readContent} = require(`../utils.js`);
const {MAX_ID_LENGTH, MAX_COMMENTS} = require('../../constants');

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_COMMENTS_PATH = `./data/comments.txt`;

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const generateComments = (count, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    text: shuffle(comments).slice(0, getRandomInt(1, 3)).join(` `),
  }))
);

const generateOffers = (count, titles, categories, sentences, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    category: shuffle(categories).slice(0, getRandomInt(1, categories.length - 1)),
    description: shuffle(sentences).slice(1, 5).join(` `),
    picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
    comments: generateComments(getRandomInt(1, MAX_COMMENTS), comments),
    title: titles[getRandomInt(0, titles.length - 1)],
    type: Object.keys(OfferType)[getRandomInt(0, Object.keys(OfferType).length - 1)],
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;

    let titles;
    let categories;
    let sentences;
    let comments;
    try {
      titles = await readContent(FILE_TITLES_PATH);
      categories = await readContent(FILE_CATEGORIES_PATH);
      sentences = await readContent(FILE_SENTENCES_PATH);
      comments = await readContent(FILE_COMMENTS_PATH);
    } catch (err) {
      throw new Error(`Can't read content from the file, err: ${err}`);
    }

    const countOffer = (!isNaN(Number.parseInt(count, 10)) && count > 0 && count <= 1000) ? Number.parseInt(count, 10) : DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences, comments));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      throw new Error(`Can't write data to file, err: ${err}`);
    }
  }
};
