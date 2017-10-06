/** Product model.
 * Validation rules included.
 */

const Product = {
  id: null,
  name: null,
  qts: null,
};

export default Backbone.Model.extend({
  defaults: Product,
  idAttribute: 'id',
  parse(data) {
    if (_.isArray(data)) return data[0];
    return data;
  },

  validate(attrs) {
    /** attribute "name" validation rules */
    if (Object.prototype.hasOwnProperty.call(attrs, 'name') && !attrs.name) {
      return 'required';
    }

    if (attrs.name) {
      if (!attrs.name || attrs.name.length < 3) {
        return 'can not be shorter than 3 letters';
      }
    }

    /** attribute "qts" validation rule */
    if (attrs.qts) {
      if (!Number.isInteger(+attrs.qts)) {
        return 'must be a integer number';
      }
    }
  },
});
