import UI from '../../helpers/ui-helper';
import AP from '../../helpers/app-helper';

const { test } = QUnit;

export default function NewProductTest() {
  QUnit.module('add product', () => {
    test('click "add product" show product form', async (t) => {
      const done = t.async();
      await UI.visit('/#products');
      const addProductButton = $('#products .add-item').get(0);
      UI.click(addProductButton, { view: 'main/products/form' });
      const numberOfFormGroups = $('#products .form-group').get().length;

      t.equal(3, numberOfFormGroups);
      t.equal(location.hash, '#products/new');
      done();
    });

    test('url "/#products/new" show product form', async (t) => {
      const done = t.async();
      await UI.visit('/#about');
      await UI.visit('/#products/new', { view: 'main/products/form' });
      const numberOfFormGroups = $('#products .form-group').get().length;

      t.equal(3, numberOfFormGroups);
      t.equal(location.hash, '#products/new');
      done();
    });

    QUnit.module('form', {
      afterEach: async function deleteNewProduct() {
        await UI.visit('/#about');
        await AP.deleteLastProduct();
      }
    });

    test('submit redirect to show product page', async (t) => {
      const done = t.async();
      await UI.visit('/#products/new', { view: 'main/products/form' });
      await UI.fillProductFormThenSubmit();
      const pageProductsHeader = $('#main h3').text();

      t.equal(pageProductsHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
      done();
    });

    test('after submit the new product is created ', async (t) => {
      const done = t.async();
      await UI.visit('/#products/new', { view: 'main/products/form' });
      const numberOfProductsBeforeSubmit = APP.Collections.products.length;

      await UI.fillProductFormThenSubmit();
      const numberOfProductsAfterSubmit = APP.Collections.products.length;
      const diff = numberOfProductsAfterSubmit - numberOfProductsBeforeSubmit;

      t.equal(1, diff);
      done();
    });
  });
}
