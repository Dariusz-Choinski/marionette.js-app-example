import UI from '../../helpers/ui-helper';

const { test } = QUnit;

export default function NaviAbout() {
  QUnit.module('contact');
  test('menu "contact" show contact page', async (t) => {
    const done = t.async();
    const navLinkContact = $("a[href='#contact']").get(0);
    await UI.visit('/#about');
    await UI.click(navLinkContact, { view: 'main/contact' });
    const pageContactHeader = $('#main h3').text();
    t.equal(pageContactHeader.toLowerCase(), 'CONTACT'.toLowerCase());
    done();
  });

  test('url "/#contact" show contact page', async (t) => {
    const done = t.async();
    await UI.visit('/#about');
    await UI.visit('/#contact')
    const pageAboutHeader = $('#main h3').text();
    t.equal(pageAboutHeader.toLowerCase(), 'CONTACT'.toLowerCase());
    done();
  });
}
