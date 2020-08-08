'use strict';

const {nanoid} = require('nanoid');
const {MAX_ID_LENGTH} = require(`../../constants`);

class CategoryService {
  constructor(offers) {
    this._offers = offers;  
  }

  findAll() {
    const categories = this_offers.reduce((acc, offer) => {
      offer.category.forEach((cat) => acc.add(cat));
      return acc;
    }, new Set());
    return [...categories];
  }
}