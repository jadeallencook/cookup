#!/usr/bin/env node

const messages = require('./messages');
const { argv } = process;
const length = argv.length;

class Cookup {
  constructor() {
    const name = argv[2].split('.');
    this.filename = name.length >= 2 ? name[0] : null;
    this.extension = name.length >= 2 ? name[name.length - 1] : null;
    this.parameters = length > 3 ? argv.splice(3, length) : null;
    this.command = !this.filename ? name[0] : null;
  }
  store() {}
  generate() {}
}

console.log(length < 3 ? messages.default : new Cookup());
