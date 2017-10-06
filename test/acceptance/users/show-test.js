import UI from '../../helpers/ui-helper';
import AP from '../../helpers/app-helper';

const { test } = QUnit;

export default function ShowUserTest() {
  QUnit.module('show user', (hooks) => {
    hooks.before(async () => {
      AP.pushUserToCollection({
        id: 1000,
        name: 'User',
        surname: 1000,
        email: 'User1000@test.com'
      });
    });
    hooks.after(async () => {
      await UI.visit('/#about');
      AP.popUserFromCollection(1000);
    });

    test('url "/#users/id" show user page', async (t) => {
      const done = t.async();
      await UI.visit('/#users/1000', { view: 'main/users/show' });
      const userPageHeader = $('#main h3').text();
      const idText = $('#users #id').text();
      const path = '#users/1000';

      t.equal(location.hash, path);
      t.equal(userPageHeader.toLowerCase(), 'USER'.toLowerCase());
      t.ok(idText.match(1000));
      done();
    });

    test('click user row on index table, show user page', async (t) => {
      const done = t.async();
      await UI.visit('/#users');
      const lastUserRow = _.last($('#users table tbody tr'));
      const columnId = $(lastUserRow).find('td')[0];
      const userId = $(columnId).text();

      await UI.click(columnId, { view: 'main/users/show' });
      const userPageHeader = $('#main h3').text();
      const idText = $('#users #id').text();
      const path = `#users/${userId}`;

      t.equal(location.hash, path);
      t.equal(userPageHeader.toLowerCase(), 'USER'.toLowerCase());
      t.ok(idText.match(userId));
      done();
    });
/*
    // sometimes such hook could be necessery: a closing test
    // allows to finally close previous async test
    test('closing empty test', async (t) => {
      const done = t.async();
      await AP.wait(200);
      t.expect(0);
      done();
    });
*/
  });
}

