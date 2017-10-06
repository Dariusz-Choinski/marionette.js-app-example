/** Products module: view: product items extends restfullt items */

import Items from '../../../../shared_components/restfull/index/items';
import ProductItemView from './product-item';
import productsCollection from '../../../../collections/products-collection';

class ProductItems extends Items {
  constructor(itemsArray) {
    super(itemsArray, productsCollection, ProductItemView);
  }

  // optional, register view in APP.Views and APP.Modules.Products.Views
  get behaviors() {
    return {
      ViewGlobalRegister: {
        viewName: 'main/products/items',
        module: 'Products',
      }
    };
  }
}

export default ProductItems;
