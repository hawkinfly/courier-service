const bcrypt = require('bcrypt-nodejs');


const hash = (str) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => { 
      if (err) {
        return reject(err);
      }
      bcrypt.hash(str, salt, null, (err, hash) => {
        if (err) {
          return reject(err);
        }
        return resolve(hash);
      });
    });
  });
}

const compare = (str, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(str, hash, (err, result) => {
      if (err) {
        return reject(err);
      }
      return result ? resolve() : reject();
    });
  });
}

module.exports = {
  hash,
  compare
};