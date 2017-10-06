const productHelper = {
  async createProduct(options) {
    const model = new APP.Collections.products.model({
      name: options.name,
      qts: options.qts
    });
    const product = await APP.Collections.products.create(model);
    return product;
  },

  deleteProduct(product) {
    return new Promise((resolve, reject) => {
      product.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  deleteLastProduct() {
    return new Promise((resolve, reject) => {
      const product = _.last(APP.Collections.products.models);
      product.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  pushProductToCollection(options) {
    const model = new APP.Collections.products.model({
      id: options.id,
      name: options.name,
      qts: options.qts
    });
    APP.Collections.products.push(model);
  },

  popProductFromCollection(id) {
    APP.Collections.products.pop(id);
  },
};

export default productHelper;
