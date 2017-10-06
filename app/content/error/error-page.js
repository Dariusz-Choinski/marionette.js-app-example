export default Marionette.View.extend({
    template: APP.Templates['error-template'],
    model: {},
    initialize(message) {
        this.model.attributes = message;
    },
});
