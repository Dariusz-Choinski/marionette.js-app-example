import usersRouter from '../../content/main/users/users-router';
import users from '../../collections/users-collection';

/** Users module initialization */
export default async function initUsersModule() {
  APP.Modules.Users = {};
  APP.Modules.Users.Views = {};
  APP.Modules.Users.Router = {};
  APP.Modules.Users.Collection = {};

  APP.Modules.Users.Collection.users = users;
  APP.Modules.Users.Router.users = usersRouter;
  APP.Collections.users = users;
}

if (APP.Env === 'development') console.log('-- init users-module');
