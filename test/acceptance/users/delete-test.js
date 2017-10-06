import UI from '../../helpers/ui-helper';
import Helper from './helper';

const { test } = QUnit;

export default function DeleteUserTest() {
  QUnit.module('delete user', (hooks) => {
    hooks.before(async (t) => {
      await Helper.createTestUser(t);
    });
    hooks.after(async () => {
      APP.Test.testUser1 = null;
      await UI.visit('/#about');
    });

    test('click "X" on user in index table, delete user', async (t) => {
      const done = t.async();
      await UI.visit('/#users');
      const countUsersBefore = APP.Collections.users.length;
      const countUsersInIndexBefore = $('#users table tr').length;
      const X = $('#users table tr:last td.item-destroy').get(0);
      X.click();
      await UI.wait(300);
      const countUsersAfter = APP.Collections.users.length;
      const countUsersInIndexAfter = $('#users table tr').length;

      t.equal(-1, countUsersAfter - countUsersBefore);
      t.equal(-1, countUsersInIndexAfter - countUsersInIndexBefore);
      done();
    });
  });
}
