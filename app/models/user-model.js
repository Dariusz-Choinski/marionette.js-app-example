/** User model.
 * Validation rules included.
 */

const User = {
  id: null,
  name: null,
  surname: null,
  email: null
};

export default Backbone.Model.extend({
  defaults: User,
  idAttribute: 'id',
  parse(data) {
    if (_.isArray(data)) return data[0];
    return data;
  },

  validate(attrs) {
    /** name validation rules */
    if (attrs.hasOwnProperty('name') && !attrs.name) {
      return 'required';
    }
    if (attrs.name) {
      if (!attrs.name || attrs.name.length < 3) {
        return "can't be shorter than 3 letters";
      }
    }
    /** surname validation rules */
    if (attrs.hasOwnProperty('surname') && !attrs.surname) {
      return 'required';
    }
    if (attrs.surname) {
      if (!attrs.surname || attrs.surname.length < 1) {
        return "can't be shorter than 3 letters";
      }
    }
    /** email validation rules */
    if (attrs.hasOwnProperty('email') && !attrs.email) {
      return 'required';
    }
    if (attrs.email) {
      if ( !attrs.email.includes('@') ) {
        return "invalid email";
      }
    }
  }
});
