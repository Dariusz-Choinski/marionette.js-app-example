/** The collection of Products */

import User from '../models/user-model';

const Users = Backbone.Collection.extend({
  model: User,
  url: `${APP.ServerUrl}/users`,
});

const users = new Users();
// users.fetch();
// if you want to fetch models during app initialization
// otherwise medels are fetched by users router
export default users;
