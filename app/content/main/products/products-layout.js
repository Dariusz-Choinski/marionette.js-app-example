/** Products module: products layout view extends rest layout view */

import RestLayout from '../../../shared_components/restfull/layout-view';
import ProductsIndexView from './index/products-index';
import ProductShowView from './show/product-show';
import ProductFormView from './form/product-form';
import productsCollection from '../../../collections/products-collection';

const CustomErrorPage = null; // use default error page

function ProductsLayout(router, path) {
  const layoutView = new RestLayout({
    template: APP.Templates['main/products/products'],
    collection: productsCollection,
    region: 'products',
    path: path,
    router: router,
    behaviors: {
      // optional, register view in APP.Views and APP.Modules.Products.Views
      ViewGlobalRegister: {
        viewName: 'main/products/layout',
        module: 'Products'
      }
    },
    ModelsIndexView: ProductsIndexView,
    ModelShowView: ProductShowView,
    ModelFormView: ProductFormView,
    ErrorPageView: CustomErrorPage,
  });

  layoutView.addRegion('products', '#products');
  return layoutView;
}

export default ProductsLayout;
