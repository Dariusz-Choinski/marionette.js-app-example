export default Marionette.View.extend({
  className: '.intro',
  template: APP.Templates['main/intro'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'intro' }, // optional
  }
});
