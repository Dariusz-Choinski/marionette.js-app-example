/** Optional bahavior.
 * Register View in APP.Views &/or APP.Modules.<% moduleName %>.Views as global variable.
 * 1.Helpfull in app state inspection (debugging),
 * 2.Gives handfull access to modules, routers views and controllers.
 * 3.View triger instantiation event.
 * 4.App testing make easy
 * Highlly recomended !
 */

export default Marionette.Behavior.extend({
  onAttach() {
    this._registerView();
    this._registerModuleView();
  },

  onDestroy() {
    this._unregisterView();
    this._unregisterModuleView();
  },

  _registerView() {
    const viewName = this.getOption('viewName');
    const appEvents = Backbone.Radio.channel('app:events');
    APP.Views[viewName] = this.view;
    appEvents.trigger('register:view', viewName);
  },

  _registerModuleView() {
    const viewName = this.getOption('viewName');
    const moduleName = this.getOption('module');
    if (moduleName) {
      const appModuleViews = APP.Modules[moduleName].Views;
      if (appModuleViews) {
        appModuleViews[viewName.split('/').pop()] = this.view;
      }
    }
  },

  _unregisterView() {
    const viewName = this.getOption('viewName');
    delete APP.Views[viewName];
  },

  _unregisterModuleView() {
    const viewName = this.getOption('viewName');
    const moduleName = this.getOption('module');
    if (moduleName) {
      delete APP.Modules[moduleName].Views[viewName.split('/').pop()];
    }
  }
});
