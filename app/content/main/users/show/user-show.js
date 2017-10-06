import usersCollection from '../../../../collections/users-collection';
import userProductsCtrl from './products/user-products-ctrl';
import usersRouter from '../users-router';
import getOwnerResources from '../../../../services/get-owner-resources';

export default Marionette.View.extend({
  template: APP.Templates['main/users/user-show'],
  behaviors: {
    RestEditItemBehavior: {},

    // optional, register view in APP.Views and APP.Modules.Users.Views
    ViewGlobalRegister: {
      viewName: 'main/users/show',
      module: 'Users'
    }
  },
  ui: { userProducts: '#user-products' },
  events: { 'click #user-products': 'showUserProducts' },
  regions: { products: '#products' },
  modelEvents: {
    change: 'rerender'
  },
  rerender() { this.render(); },

  initialize(model, subPath) {
    this.model = model;
    this.subPath = subPath;
    this.userProductsController = userProductsCtrl({
      router: usersRouter,
      parentView: this,
      parentViewRegion: 'products',
      path: this.userProductsUrlPath()
    });
  },

  userProductsUrlPath() { return `users/${this.model.id}/products`; },

  showUserProducts() {
    getOwnerResources({
      collection: usersCollection,
      id: this.model.id,
      resources: 'products'
    })
    .then(
      (products) => { this.userProductsController.showModels(products); },
      (message) => { console.log(message); }
    );
  },
  showUserProduct(id) { this.userProductsController.showModel(id); },
  showUserProductNewForm() { this.userProductsController.showNewModel(); },
  showUserProductEditForm(id) { this.userProductsController.showEditModel(id); },

  onAttach() {
    if (/^products[/]?$/.test(this.subPath)) {
      this.showUserProducts();
    }

    if (/^products\/new[/]?$/.test(this.subPath)) {
      this.showUserProductNewForm();
    }

    if (/^products\/\d+[/]?$/.test(this.subPath)) {
      const id = this.subPath.split('/')[1];
      this.showUserProduct(id);
    }

    if (/^products\/edit\/\d+[/]?$/.test(this.subPath)) {
      const id = this.subPath.split('/')[2];
      this.showUserProductEditForm(id);
    }
  },

});
