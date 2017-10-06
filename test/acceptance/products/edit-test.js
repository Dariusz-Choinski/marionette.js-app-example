import UI from '../../helpers/ui-helper';
import Helper from './helper';

const { test } = QUnit;

export default function EditProductTest() {
  QUnit.module('edit product', (hooks) => {
    hooks.before(async (t) => {
      await Helper.createTestProduct(t);
    });
    hooks.after(async () => {
      await Helper.deleteTestProduct();
    });

    test('edit button show product form', async (t) => {
      const done = t.async();
      const id = APP.Test.testProduct1.id;
      await UI.visit(`/#products/${id}`, { view: 'main/products/show' });
      const editButton = $('#products #edit').get(0);

      await UI.click(editButton, { view: 'main/products/form' });
      const numberOfFormGroups = $('#products .form-group').get().length;

      t.equal(3, numberOfFormGroups);
      t.equal(location.hash, `#products/edit/${id}`);
      done();
    });

    test('url "/#products/edit/id" show product form', async (t) => {
      const done = t.async();
      const testProduct1 = APP.Test.testProduct1;
      await UI.visit('/#about');
      await UI.visit(`#products/edit/${testProduct1.id}`, { view: 'main/products/form' });
      const inputProductName = $('#products #product-name').val();
      const inputProductQts = $('#products #product-qts').val();
      const testProductName = testProduct1.get('name');
      const testProductQts = testProduct1.get('qts');

      t.equal(location.hash, `#products/edit/${testProduct1.id}`);
      t.equal(testProductName, inputProductName);
      t.equal(testProductQts, inputProductQts);
      done();
    });

    QUnit.module('form', () => {
      test('after submit the product is updated', async (t) => {
        const done = t.async();
        const testProduct1 = $.extend({}, APP.Test.testProduct1);
        const testProduct1Id = testProduct1.id;
        const testProduct1Name = testProduct1.get('name');
        const testProduct1Qts = testProduct1.get('qts');
        await UI.visit('/#about');
        await UI.visit(`#products/edit/${testProduct1.id}`,
          { view: 'main/products/form' });
        const testProduct2 = await UI.fillProductFormThenSubmit();
        const testProduct2Id = testProduct2.id;
        const testProduct2Name = testProduct2.get('name');
        const testProduct2Qts = testProduct2.get('qts');

        t.equal(testProduct1Id, testProduct2Id);
        t.notEqual(testProduct1Name, testProduct2Name);
        t.notEqual(testProduct1Qts, testProduct2Qts);
        done();
      });
    });
  });
}
