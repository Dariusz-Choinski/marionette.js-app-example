import AppModuleTest from './app-test';
import ProductsModuleTest from './products-test';
import UsersModuleTest from './users-test';

export default function AppModulesTest() {
  QUnit.module('APP.Modules', () => {
    AppModuleTest();
    ProductsModuleTest();
    UsersModuleTest();
  });
}
