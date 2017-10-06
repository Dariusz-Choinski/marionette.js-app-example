export default Marionette.View.extend({
  template: APP.Templates['main/contact/contact'],
  behaviors: {
    ViewGlobalRegister: { viewName: 'main/contact', module: 'App' }, // optional
  },
});
