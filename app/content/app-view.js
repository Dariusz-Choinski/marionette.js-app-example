// content for regions
import Navbar from './nav-bar/nav-bar';
import Footer from './footer/footer';
import Intro from './main/intro';
import About from './main/about/about';
import Contact from './main/contact/contact';

 if (APP.Env === 'development') console.log('init app-view');

/** application view */
const AppView = Marionette.View.extend({
  template: APP.Templates['layout'],
  regions: {
    nav: '#nav',
    main: '#main',
    footer: '#footer'
  },

  onRender() {
    this.showChildView('nav', new Navbar());
    this.showChildView('main', new Intro());
    this.showChildView('footer', new Footer());
  },

  showAboutPage() {
    this.showChildView('main', new About());
  },

  showContactPage() {
    this.showChildView('main', new Contact());
  },
});

const appView = new AppView();
export default appView;
