/** Products module: view: product index extends restfull index */

import Index from '../../../../shared_components/restfull/index/index';
import ProductItemsView from './product-items';

class ProductsIndex extends Index {
  constructor(itemsArray) {
    super(itemsArray, ProductItemsView);
    this.template = APP.Templates['main/products/products-index'];
  }

  // optional, register view in APP.Views and APP.Modules.Products.Views
  get behaviors() {
    return {
      ViewGlobalRegister: {
        viewName: 'main/products/index',
        module: 'Products'
      }
    };
  }
}

export default ProductsIndex;
