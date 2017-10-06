/** Users module: view: user item extends restfull item */

import Item from '../../../../shared_components/restfull/index/item';

class UserItem extends Item {
  constructor(model) {
    super(model);
    this.template = APP.Templates['main/users/user-item'];
  }
}

export default UserItem;
