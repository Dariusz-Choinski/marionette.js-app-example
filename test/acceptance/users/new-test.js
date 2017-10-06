import UI from '../../helpers/ui-helper';
import AP from '../../helpers/app-helper';

const { test } = QUnit;

export default function NewUserTest() {
  QUnit.module('add user', () => {
    test('click "add user" show user form', async (t) => {
      const done = t.async();
      await UI.visit('/#users');
      const addUserButton = $('#users .add-item').get(0);
      UI.click(addUserButton, { view: 'main/users/form' });
      const numberOfFormGroups = $('#users .form-group').get().length;

      t.equal(4, numberOfFormGroups);
      t.equal(location.hash, '#users/new');
      done();
    });

    test('url "/#users/new" show user form', async (t) => {
      const done = t.async();
      await UI.visit('/#about');
      await UI.visit('/#users/new', { view: 'main/users/form' });
      const numberOfFormGroups = $('#users .form-group').get().length;

      t.equal(4, numberOfFormGroups);
      t.equal(location.hash, '#users/new');
      done();
    });

    QUnit.module('form', {
      afterEach: async function deleteNewUser() {
        await UI.visit('/#about');
        await AP.deleteLastUser();
      }
    });

    test('submit redirect to show user page', async (t) => {
      const done = t.async();
      await UI.visit('/#users/new', { view: 'main/users/form' });
      await UI.fillUserFormThenSubmit();
      const pageUsersHeader = $('#main h3').text();

      t.equal(pageUsersHeader.toLowerCase(), 'USER'.toLowerCase());
      done();
    });

    test('after submit the new user is created ', async (t) => {
      const done = t.async();
      await UI.visit('/#users/new', { view: 'main/users/form' });
      const numberOfUsersBeforeSubmit = APP.Collections.users.length;

      await UI.fillUserFormThenSubmit();
      const numberOfUsersAfterSubmit = APP.Collections.users.length;
      const diff = numberOfUsersAfterSubmit - numberOfUsersBeforeSubmit;

      t.equal(1, diff);
      done();
    });
  });
}
