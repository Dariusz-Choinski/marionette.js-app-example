export default Marionette.View.extend({
  template: APP.Templates['main/products/product-show'],
  behaviors: {
    RestEditItemBehavior: {},

    // optional, register view in APP.Views and APP.Modules.Products.Views
    ViewGlobalRegister: {
      viewName: 'main/products/show',
      module: 'Products'
    }
  },
  initialize(model) {
    this.model = model;
  }
});
