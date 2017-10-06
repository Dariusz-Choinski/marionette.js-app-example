export default Marionette.View.extend({
  template: APP.Templates['main/about/about'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'main/about', module: 'App' },  // optional
  },
});
