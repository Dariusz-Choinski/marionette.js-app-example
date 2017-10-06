import UI from '../../helpers/ui-helper';

const { test } = QUnit;

function navLinkTest() {
  QUnit.module('navi link > about');
  test('"about" link redirect to about page', async (t) => {
    const done = t.async();
    const navLinkAbout = $("a[href='#about']").get(0);
    await UI.visit('/#contact');
    await UI.click(navLinkAbout, { view: 'main/about' });
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'ABOUT'.toLowerCase());
    done();
  });
}

function navUrlTest() {
  QUnit.module('navi url > about');
  test('url "/#about" show about page', async (t) => {
    const done = t.async();
    await UI.visit('/#contact');
    await UI.visit('/#about')
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'ABOUT'.toLowerCase());
    done();
  });
}

export default function NaviAbout() {
  QUnit.module('about');
  test('menu "about" show about page', async (t) => {
    const done = t.async();
    const navLinkAbout = $("a[href='#about']").get(0);
    await UI.visit('/#contact');
    await UI.click(navLinkAbout, { view: 'main/about' });
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'ABOUT'.toLowerCase());
    done();
  });

  test('url "/#about" show about page', async (t) => {
    const done = t.async();
    await UI.visit('/#contact');
    await UI.visit('/#about')
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'ABOUT'.toLowerCase());
    done();
  });
}
