import productsCollection from '../../../../collections/products-collection';

export default Marionette.View.extend({
  collection: productsCollection,
  template: APP.Templates['main/products/product-form'],
  behaviors: {
    RestFormBehaviorWithCollection: {},
    ViewGlobalRegister: {
      viewName: 'main/products/form',
      module: 'Products'
    }
  },

  ui: {
    name: 'input#product-name',
    qts: 'input#product-qts',
    submit: '.btn-submit'
  },

  events: {
    // can use input instead of: keyup , change, paste
    // 'keyup @ui.name': 'editName',
    // 'change @ui.name': 'editName',
    'input @ui.name': 'editName',
    'input @ui.qts': 'editQts',
    'click @ui.submit': 'formSubmit'
  },

  editName() {
    this.triggerMethod('update:model:attr', 'name');
  },

  editQts() {
    this.triggerMethod('update:model:attr', 'qts');
  },

  formSubmit() {
    this.triggerMethod('form:submit');
  }

});
