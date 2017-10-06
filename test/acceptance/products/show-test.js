import UI from '../../helpers/ui-helper';
import AP from '../../helpers/app-helper';

const { test } = QUnit;

export default function ShowProductTest() {
  QUnit.module('show product', (hooks) => {
    hooks.before(async () => {
      AP.pushProductToCollection({
        id: 1000,
        name: 'Product no 1000',
        qts: 100
      });
    });
    hooks.after(async () => {
      await UI.visit('/#about');
      AP.popProductFromCollection(1000);
    });

    test('url "/#products/id" show product page', async (t) => {
      const done = t.async();
      await UI.visit('/#products/1000', { view: 'main/products/show' });
      const productPageHeader = $('#main h3').text();
      const idText = $('#products #id').text();
      const path = '#products/1000';

      t.equal(location.hash, path);
      t.equal(productPageHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
      t.ok(idText.match(1000));
      done();
    });

    test('click product row on index table, show product page', async (t) => {
      const done = t.async();
      await UI.visit('/#products');
      const lastProductRow = _.last($('#products table tbody tr'));
      const columnId = $(lastProductRow).find('td')[0];
      const productId = $(columnId).text();

      await UI.click(columnId, { view: 'main/products/show' });
      const productPageHeader = $('#main h3').text();
      const idText = $('#products #id').text();
      const path = `#products/${productId}`;

      t.equal(location.hash, path);
      t.equal(productPageHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
      t.ok(idText.match(productId));
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

