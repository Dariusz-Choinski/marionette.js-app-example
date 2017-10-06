/** Restfull component: index view */

const Router = Marionette.AppRouter.extend({});

export default Marionette.View.extend({
  navigation: Backbone.Radio.channel('navigation'),
  router: new Router(),
  regions: {
    tbody: {
      el: 'tbody',
      replaceElement: true,
    },
  },

  initialize(itemsArray, ItemsView) {
    this.items = itemsArray;
    this.ItemsView = ItemsView;
  },

  ui: {
    addItem: 'button.add-item',
  },

  events: {
    // 'click @ui.addItem': 'redirectToNewItem'
  },

  triggers: {
    'click @ui.addItem': 'new:model',
  },

  childViewEvents: {
    'show:item': 'listenShowItem',
  },

  childViewTriggers: {
    // region transfer event up to products view
    'show:item': 'layout:show:model',
  },

  onAttach() {
    this.showChildView('tbody', new this.ItemsView(this.items));
  },
});
