import appView from '../../content/app-view';
import appCtrl from '../../app';
import mainRouter from '../../content/main/main-router';

/** Application module initialization */
export default async function initAppModule() {
  APP.Modules.App = {};
  APP.Modules.App.Views = {};
  APP.Modules.App.Controller = {};
  APP.Modules.App.Router = {};

  APP.Modules.App.Views.app = appView;
  APP.Modules.App.Controller.app = appCtrl;
  APP.Modules.App.Router.main = mainRouter;
  APP.Views.app = appView;
}

if (APP.Env === 'development') console.log('-- init app-module');
