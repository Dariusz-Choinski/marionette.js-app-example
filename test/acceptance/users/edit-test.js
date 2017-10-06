import UI from '../../helpers/ui-helper';
import Helper from './helper';

const { test } = QUnit;

export default function EditUserTest() {
  QUnit.module('edit user', (hooks) => {
    hooks.before(async (t) => {
      await Helper.createTestUser(t);
    });
    hooks.after(async () => {
      await Helper.deleteTestUser();
    });

    test('edit button show user form', async (t) => {
      const done = t.async();
      const id = APP.Test.testUser1.id;
      await UI.visit(`/#users/${id}`, { view: 'main/users/show' });
      const editButton = $('#users #edit').get(0);

      await UI.click(editButton, { view: 'main/users/form' });
      const numberOfFormGroups = $('#users .form-group').get().length;

      t.equal(4, numberOfFormGroups);
      t.equal(location.hash, `#users/edit/${id}`);
      done();
    });

    test('url "/#users/edit/id" show user form', async (t) => {
      const done = t.async();
      const testUser1 = APP.Test.testUser1;
      await UI.visit('/#about');
      await UI.visit(`#users/edit/${testUser1.id}`, { view: 'main/users/form' });
      const inputUserName = $('#users #user-name').val();
      const inputUserSurname = $('#users #user-surname').val();
      const testUserName = testUser1.get('name');
      const testUserSurname = testUser1.get('surname');

      t.equal(location.hash, `#users/edit/${testUser1.id}`);
      t.equal(testUserName, inputUserName);
      t.equal(testUserSurname, inputUserSurname);
      done();
    });

    QUnit.module('form', () => {
      test('after submit the user is updated', async (t) => {
        const done = t.async();
        const testUser1 = $.extend({}, APP.Test.testUser1);
        const testUser1Id = testUser1.id;
        const testUser1Name = testUser1.get('name');
        const testUser1Surname = testUser1.get('surname');
        const testUser1Email = testUser1.get('email');
        await UI.visit('/#about');
        await UI.visit(`#users/edit/${testUser1.id}`,
          { view: 'main/users/form' });
        const testUser2 = await UI.fillUserFormThenSubmit();
        const testUser2Id = testUser2.id;
        const testUser2Name = testUser2.get('name');
        const testUser2Surname = testUser2.get('surname');
        const testUser2Email = testUser2.get('email');

        t.equal(testUser1Id, testUser2Id);
        t.notEqual(testUser1Name, testUser2Name);
        t.notEqual(testUser1Surname, testUser2Surname);
        t.notEqual(testUser1Email, testUser2Email);
        done();
      });
    });
  });
}
