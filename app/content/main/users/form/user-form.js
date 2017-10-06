import usersCollection from '../../../../collections/users-collection';

export default Marionette.View.extend({
  collection: usersCollection,
  template: APP.Templates['main/users/user-form'],
  behaviors: {
    RestFormBehaviorWithCollection: {},
    ViewGlobalRegister: {
      viewName: 'main/users/form',
      module: 'Users'
    }
  },

  ui: {
    name: 'input#user-name',
    surname: 'input#user-surname',
    email: 'input#user-email',
    submit: '.btn-submit'
  },

  events: {
    // can use input instead of: keyup , change, paste
    // 'keyup @ui.name': 'editName',
    // 'change @ui.name': 'editName',
    'input @ui.name': 'editName',
    'input @ui.surname': 'editSurname',
    'input @ui.email': 'editEmail',
    'click @ui.submit': 'formSubmit'
  },

  editName() {
    this.triggerMethod('update:model:attr', 'name');
  },

  editSurname() {
    this.triggerMethod('update:model:attr', 'surname');
  },

  editEmail() {
    this.triggerMethod('update:model:attr', 'email');
  },

  formSubmit() {
    this.triggerMethod('form:submit');
  }

});
