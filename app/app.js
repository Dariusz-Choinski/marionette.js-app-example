/** Application Controller */
const AppCtrl = Marionette.Application.extend({

  /** div in layout to attach the instance of app-view */
  region: '#app',

  /** event calback to attach app-view to region, start history */
  onStart() {
    this.showView(APP.Modules.App.Views.app);
    Backbone.history.start();
  }
});

const appCtrl = new AppCtrl();
export default appCtrl;

if (APP.Env === 'development') console.log('init app-ctrl');
