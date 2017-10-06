export default Marionette.View.extend({
  template: APP.Templates['footer/footer'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'footer', module: 'App' },
  },

});
