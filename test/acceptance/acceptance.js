import NavigationTests from './nav-bar/navi-test';
import ProductsTests from './products/products-test';
import UsersTests from './users/users-test';

export default async function IntegrationTests() {
  QUnit.module('acceptance', () => {
    NavigationTests();
    ProductsTests();
    UsersTests();
  });
}
