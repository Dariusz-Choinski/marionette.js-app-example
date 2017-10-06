const { test } = QUnit;

export default function UsersModuleTest() {
  QUnit.module('Users', () => {
    QUnit.module('Collection', () => {
      QUnit.module('users', () => {
        test('instance of Users', (t) => {
          t.ok(APP.Modules.Users.Collection.users instanceof Users);
        });
      });
    });

    QUnit.module('Views', () => {
      test('{}', (t) => {
        t.ok(APP.Modules.Users.Views);
      });
    });

    QUnit.module('Router', () => {
      QUnit.module('users', () => {
        QUnit.module('routes', () => {
          const routes = APP.Modules.Users.Router.users.routes;
          test('route "/#users"  => users (index) page', (t) => {
            t.equal(routes['users(/)'], 'showModels');
          });
          test('route "/#users/:id" => user (show) page', (t) => {
            t.equal(routes['users/:id(/*path)'], 'showModel');
          });
          test('route "/#users/new"  => form (new) page', (t) => {
            t.equal(routes['users/new(/)'], 'showNewModel');
          });
          test('route "/#users/edit/:id" => form (edit) page', (t) => {
            t.equal(routes['users/edit/:id(/)'], 'showEditModel');
          });
        });
      });
    });
  });
}
