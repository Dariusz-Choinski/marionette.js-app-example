import productsRouter from '../../content/main/products/products-router';
import products from '../../collections/products-collection';

/** Products module initialization */
export default async function initProductsModule() {
  APP.Modules.Products = {};
  APP.Modules.Products.Views = {};
  APP.Modules.Products.Router = {};
  APP.Modules.Products.Collection = {};

  APP.Modules.Products.Collection.products = products;
  APP.Modules.Products.Router.products = productsRouter;
  APP.Collections.products = products;
}

if (APP.Env === 'development') console.log('-- init products-module');
