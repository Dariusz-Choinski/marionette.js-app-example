/** Users module: users layout view extends rest layout view */

import RestLayout from '../../../shared_components/restfull/layout-view';
import UsersIndexView from './index/users-index';
import UserShowView from './show/user-show';
import UserFormView from './form/user-form';
import usersCollection from '../../../collections/users-collection';

const CustomErrorPage = null; // use default error page

function UsersLayout(usersRouter) {
  const layoutView = new RestLayout({
    template: APP.Templates['main/users/users'],
    collection: usersCollection,
    region: 'users',
    path: 'users',
    router: usersRouter,
    behaviors: {
      // optional, register view in APP.Views and APP.Modules.Users.Views
      ViewGlobalRegister: {
        viewName: 'main/users/layout',
        module: 'Users'
      }
    },
    ModelsIndexView: UsersIndexView,
    ModelShowView: UserShowView,
    ModelFormView: UserFormView,
    ErrorPageView: CustomErrorPage,
  });

  layoutView.addRegion('users', '#users');
  return layoutView;
}

export default UsersLayout;
