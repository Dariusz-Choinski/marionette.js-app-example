/** Users module: view: user index extends restfull index */

import Index from '../../../../shared_components/restfull/index/index';
import UserItemsView from './user-items';

class UsersIndex extends Index {
  constructor(itemsArray) {
    super(itemsArray, UserItemsView);
    this.template = APP.Templates['main/users/users-index'];
  }

  // optional, register view in APP.Views and APP.Modules.Users.Views
  get behaviors() {
    return {
      ViewGlobalRegister: {
        viewName: 'main/users/index',
        module: 'Users'
      }
    };
  }
}

export default UsersIndex;
