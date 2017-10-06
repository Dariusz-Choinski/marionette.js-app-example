const { test } = QUnit;

export default function ProductsModuleTest() {
  QUnit.module('Products', () => {
    QUnit.module('Collection', () => {
      QUnit.module('products', () => {
        test('instance of Products', (t) => {
          t.ok(APP.Modules.Products.Collection.products instanceof Products);
        });
      });
    });

    QUnit.module('Views', () => {
      test('{}', (t) => {
        t.ok(APP.Modules.Products.Views);
      });
    });

    QUnit.module('Router', () => {
      QUnit.module('products', () => {
        QUnit.module('routes', () => {
          const routes = APP.Modules.Products.Router.products.routes;
          test('route "/#products"  => products (index) page', (t) => {
            t.equal(routes['products(/)'], 'showModels');
          });
          test('route "/#products/:id" => product (show) page', (t) => {
            t.equal(routes['products/:id(/)'], 'showModel');
          });
          test('route "/#products/new"  => form (new) page', (t) => {
            t.equal(routes['products/new(/)'], 'showNewModel');
          });
          test('route "/#products/edit/:id" => form (edit) page', (t) => {
            t.equal(routes['products/edit/:id(/)'], 'showEditModel');
          });
        });
      });
    });
  });
}
