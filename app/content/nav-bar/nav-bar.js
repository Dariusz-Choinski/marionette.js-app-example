export default Marionette.View.extend({
  template: APP.Templates['nav-bar/nav-bar'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'navbar', module: 'App' }, // optional
  },
});
