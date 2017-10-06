/** router for pages in #main region */
import appView from '../app-view';

const MainRouter = Marionette.AppRouter.extend({

/** here only routes to static pages */
  routes: {
    about: 'showAbout',
    contact: 'showContact'
  },

/** routes methods to show only "static" pages by app-view under #app div */
  showAbout() {
    appView.showAboutPage();
  },

  showContact() {
    appView.showContactPage();
  }
});

const mainRouter = new MainRouter();
export default mainRouter;

if (APP.Env === 'development') console.log('init main-router');
