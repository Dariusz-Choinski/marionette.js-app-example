/** The collection of Products */

import Product from '../models/product-model';

const Products = Backbone.Collection.extend({
  model: Product,
  url: `${APP.ServerUrl}/products`,
});

const products = new Products();
// products.fetch();
// if you want to fetch models during app initialization
// otherwise medels are fetched by products router

export default products;
