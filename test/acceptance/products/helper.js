import UI from '../../helpers/ui-helper';
import AP from '../../helpers/app-helper';

const APP = window.APP;

const Helper = {
  async createTestProduct(t) {
    await UI.visit('/#products/new', { view: 'main/products/form' });
    const testProduct1 = await UI.fillProductFormThenSubmit();
    APP.Test.testProduct1 = testProduct1;
    const pageProductsHeader = $('#main h3').text();
    t.equal(pageProductsHeader.toLowerCase(), 'PRODUCT'.toLowerCase());
    t.equal(location.hash, `#products/${testProduct1.id}`);
  },

  async deleteTestProduct() {
    const testProduct1 = APP.Test.testProduct1;
    await AP.deleteProduct(testProduct1);
    APP.Test.testProduct1 = null;
    await UI.visit('/#about');
  }
};

export default Helper;
