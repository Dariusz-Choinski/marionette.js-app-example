/** Products module: view: product item extends restfull item */

import Item from '../../../../shared_components/restfull/index/item';

class ProductItem extends Item {
  constructor(model) {
    super(model);
    this.template = APP.Templates['main/products/product-item'];
  }
}

export default ProductItem;
