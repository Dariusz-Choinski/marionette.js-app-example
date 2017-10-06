import productsCtrl from './products-ctrl';
import appView from '../../app-view';

/** router to manage Products */
const ProductsRouter = Marionette.AppRouter.extend({
  path: 'products',
  active: false,
  initialize() {
    this.controller = productsCtrl({
      router: this,
      parentView: appView,
      parentViewRegion: 'main',
      path: this.path
    });
    this.routes = this.appRoutes;
  },

  appRoutes: {
    'products(/)': 'showModels',
    'products/new(/)': 'showNewModel',
    'products/edit/:id(/)': 'showEditModel',
    'products/:id(/)': 'showModel',
  },
});

const productsRouter = new ProductsRouter();
export default productsRouter;

if (APP.Env === 'development') console.log('init products-router');

