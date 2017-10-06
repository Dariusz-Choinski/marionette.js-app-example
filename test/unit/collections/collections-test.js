const { test } = QUnit;

export default function CollectionsTest() {
  QUnit.module('APP.Collections', () => {
    QUnit.module('products', () => {
      test('instance of Products', (t) => {
        t.ok(APP.Modules.Products.Collection.products instanceof Products);
      });
    });
    QUnit.module('users', () => {
      test('instance of Users', (t) => {
        t.ok(APP.Modules.Users.Collection.users instanceof Users);
      });
    });
  });
}
