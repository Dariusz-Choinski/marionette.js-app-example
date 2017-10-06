import NaviAbout from './navi-about-test';
import NaviContact from './navi-contact-test';
import NaviProducts from './navi-products-test';

export default function NavigationTests() {
  QUnit.module('navi', () => {
    NaviAbout();
    NaviContact();
    NaviProducts();
  });
}
