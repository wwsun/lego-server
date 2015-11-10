'use strict';

const db = {
  tobi: {name: 'tobi', species: 'ferret'},
  loki: {name: 'loki', species: 'ferret'},
  jane: {name: 'jane', species: 'ferret'}
};

const user = {

  list: function *(next) {
    if ('GET' !== this.method) return yield next;

    this.body = yield db;
  }

};

module.exports = user;