export default Marionette.View.extend({
  template: APP.Templates['error-page'],
  model: {},
  initialize(message) {
      this.model.attributes = message;
  }
});
