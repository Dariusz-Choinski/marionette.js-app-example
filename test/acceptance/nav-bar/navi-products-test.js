import UI from '../../helpers/ui-helper';

const { test } = QUnit;

export default function NaviProducts() {
  QUnit.module('products');
  test('menu "products" show products page', async (t) => {
    const done = t.async();
    const navLinkProducts = $("a[href='#products']").get(0);
    await UI.visit('/#about');
    await UI.click(navLinkProducts, { view: 'main/products/layout' });
    const pageProductsHeader = $('#main h3').text();
    t.equal(pageProductsHeader.toLowerCase(), 'PRODUCTS'.toLowerCase());
    done();
  });

  test('url "/#products" show products page', async (t) => {
    const done = t.async();
    await UI.visit('/#about');
    await UI.visit('/#products')
    const pageProductsHeader = $('#main h3').text();
    t.equal(pageProductsHeader.toLowerCase(), 'PRODUCTS'.toLowerCase());
    done();
  });
}
