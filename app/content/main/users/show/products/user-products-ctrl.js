import ProductsCtrl from '../../../products/products-ctrl';

export default function UserProductsCtrl(options) {
  return new ProductsCtrl({
    router: options.router,
    parentView: options.parentView,
    parentViewRegion: options.parentViewRegion,
    path: options.path
  });
}
