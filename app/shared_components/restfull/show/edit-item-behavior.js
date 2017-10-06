export default Marionette.Behavior.extend({
  ui: {
    edit: '#edit',
  },
  events: {
    'click @ui.edit': 'editModel',
  },

  editModel() {
    this.view.triggerMethod('edit:model', this.view.model.id);
  },
});
