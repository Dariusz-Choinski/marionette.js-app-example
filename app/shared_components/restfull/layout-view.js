/** Restfull component: layout view for child views index, show, new, edit */

import DefaultErrorPageView from '../error/error-page';

const Router = Marionette.AppRouter.extend({});

export default Marionette.View.extend({
  initialize(options) {
    this.template = options.template;
    this.collection = options.collection;
    this.region = options.region;
    this.path = options.path;
    this.router = options.router || new Router();
    this.bahaviors = options.bahaviors;
    this.ModelsIndexView = options.ModelsIndexView;
    this.ModelShowView = options.ModelShowView;
    this.ModelFormView = options.ModelFormView;
    this.ErrorPageView = options.ErrorPageView || DefaultErrorPageView;
  },

  childViewEvents: {
    'layout:show:model': 'showModelItem',
    'edit:model': 'editModel',
    'new:model': 'newModel',
  },

  childViewTriggers: {
    // region transfer event up to app-view
    'layout:show:model': 'app:show:model',
  },

  showIndex(itemsArray) {
    const indexView = new this.ModelsIndexView(itemsArray);
    this.router.navigate(`${this.path}`);
    this.showChildView(this.region, indexView);
  },

  showModel(model, subPath) {
    this.router.navigate(`${this.path}/${model.id}`);
    this.showChildView(this.region, new this.ModelShowView(model, subPath));
  },

  showModelItem(child) {
    this.showModel(child.model);
//    this.router.navigate(`${this.router.path}/${child.model.id}`);
  },

  showModelForm(model) {
    this.showChildView(this.region, new this.ModelFormView({ model: model }));
  },

  newModel() {
    const model = new this.collection.model();
    this._setOwnerIdOnModel(model);
    this.showModelForm(model);
    this.router.navigate(`${this.path}/new`);
  },

  editModel(id) {
    const model = this.collection.get(id);
    this._setOwnerIdOnModel(model);
    this.showModelForm(model);
    this.router.navigate(`${this.path}/edit/${model.id}`);
  },

  showError(error) {
    this.showChildView(this.region, new this.ErrorPageView(error));
  },

  onDestroy() {
    this.router.active = false;
  },

  _setOwnerIdOnModel(model) {
    if (this.router.controller.parentView.model) {
      model.set('ownerId', this.parentView.model.id);
    }
  }

});
