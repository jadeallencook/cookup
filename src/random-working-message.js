const messages = require('./messages.js');

module.exports = function() {
    return messages.working[Math.floor(Math.random() * messages.working.length)];
}