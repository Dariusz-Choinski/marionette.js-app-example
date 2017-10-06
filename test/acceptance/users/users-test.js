import NewUserTest from './new-test';
import ShowUserTest from './show-test';
import EditUserTest from './edit-test';
import DeleteUserTest from './delete-test';

export default function UsersTests() {
  QUnit.module('users', () => {
    NewUserTest();
    ShowUserTest();
    EditUserTest();
    DeleteUserTest();
  });
}

