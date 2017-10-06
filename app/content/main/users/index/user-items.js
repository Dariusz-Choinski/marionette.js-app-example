/** Users module: view: user items extends restfullt items */

import Items from '../../../../shared_components/restfull/index/items';
import UserItemView from './user-item';
import usersCollection from '../../../../collections/users-collection';

class UserItems extends Items {
  constructor(itemsArray) {
    super(itemsArray, usersCollection, UserItemView);
  }

  // optional, register view in APP.Views and APP.Modules.Users.Views
  get behaviors() {
    return {
      ViewGlobalRegister: {
        viewName: 'main/users/items',
        module: 'Users',
      }
    };
  }
}

export default UserItems;
