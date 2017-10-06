/** Restfull component: items view */

const EmptyView = Marionette.View.extend({
  template: _.template('Nothing to display.'),
});

export default Marionette.CollectionView.extend({
  tagName: 'tbody',
  emptyView: EmptyView,

  initialize(itemsArray, collection, ItemView) {
    this.childView = ItemView;
    this._setCollection(itemsArray, collection);
  },

  childViewEvents: {
    'show:item': 'listenShowItem',
  },

  childViewTriggers: {
    // empty
  },

/** condition to control when the EmptyView is rendered
* by default the collection.models array is checked
*
  isEmpty() {
    return _.isEmpty(this.collection.models);
  },
*/

  _setCollection(itemsArray, collection) {
    let collects = collection;
    if (!_.isEmpty(itemsArray)) {
      let models = Object.keys(itemsArray).map((k) => itemsArray[k]);
      collects = new Backbone.Collection(models);
    }
    this.collection = collects;
  },

});
