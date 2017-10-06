/** Restfull component: view: item */

export default Marionette.View.extend({
  tagName: 'tr',

  ui: {
    show: 'td.item',
    destroy: 'td.item-destroy',
  },

  events: {
    'click @ui.destroy': 'itemDestroy',
  },

  triggers: {
    'click @ui.show': 'show:item',
  },

  itemDestroy() {
    this.model.destroy({ wait: true });
  },
});
