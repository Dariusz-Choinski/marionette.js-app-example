import productHelper from './product-helper.js';
import userHelper from './user-helper';

const AP = {
  wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(); }, ms);
    });
  }
};

Object.assign(AP, productHelper);
Object.assign(AP, userHelper);

export default AP;
