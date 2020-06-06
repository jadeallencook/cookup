#!/usr/bin/env node

const { argv } = process;

class Cookup {
    constructor() {
        this.filename = '';
        this.extension = '';
        this.parameters = [];
    }
    store() {

    }
    generate() {

    }
}

if (argv.length < 3) {
  console.log('NO PARAMS');
} else {
  console.log(new Cookup(argv));
}
