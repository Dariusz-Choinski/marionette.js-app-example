import UI from '../../helpers/ui-helper';
import Helper from './helper';

const { test } = QUnit;

export default function DeleteProductTest() {
  QUnit.module('delete product', (hooks) => {
    hooks.before(async (t) => {
      await Helper.createTestProduct(t);
    });
    hooks.after(async () => {
      APP.Test.testProduct1 = null;
      await UI.visit('/#about');
    });

    test('click "X" on product in index table, delete product', async (t) => {
      const done = t.async();
      await UI.visit('/#products');
      const countProductsBefore = APP.Collections.products.length;
      const countProductsInIndexBefore = $('#products table tr').length;
      const X = $('#products table tr:last td.item-destroy').get(0);
      X.click();
      await UI.wait(300);
      const countProductsAfter = APP.Collections.products.length;
      const countProductsInIndexAfter = $('#products table tr').length;

      t.equal(-1, countProductsAfter - countProductsBefore);
      t.equal(-1, countProductsInIndexAfter - countProductsInIndexBefore);
      done();
    });
  });
}
