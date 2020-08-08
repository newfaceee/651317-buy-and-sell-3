'use strict';

const {nanoid} = require('nanoid');
const {MAX_ID_LENGTH} = require(`../../constants`);

class OfferService {
  constructor(offers) {
    this._offers = offer;
  }

  findAll() {
    return this._offers;
  }

  findOne(id) {
    const findedOffer = this._offers.find((offer) => offer.id === id);
    return findedOffer;
  }

  create(offer) {
    const newOffer = Object.assign({}, offer, {
      id: nanoid(MAX_ID_LENGTH),
      comments: [],
    });

    this._offers.push(newOffer);
    return newOffer;
  }
  
  update(id, offer) {
    const oldOffer = this._offers
      .find((item) => item.id === id);

    return Object.assign(oldOffer, offer);
  }

  drop(id) {
    const offer = this._offers.find((item) => item.id === id);

    if (!offer) {
      return null;
    }

    this._offers = this._offers.filter((item) => item.id !== id);
    return offer;
  }

}

module.exports = OfferService;
