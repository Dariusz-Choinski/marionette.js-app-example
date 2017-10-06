import ProductsLayout from './products-layout';
import productsCollection from '../../../collections/products-collection';
import RestController from '../../../shared_components/restfull/rest-controller';

export default function ProductsCtrl(options) {
  return new RestController({
    router: options.router,
    parentView: options.parentView,
    parentViewRegion: options.parentViewRegion,
    path: options.path,
    layout: ProductsLayout,
    collection: productsCollection
  });
}
