const { test } = QUnit;

export default function AppModuleTest() {
  QUnit.module('App', () => {
    QUnit.module('Controller', () => {
      test('app', (t) => {
        t.ok(APP.Modules.App.Controller.app);
      });
    });

    QUnit.module('Views', () => {
      test('app', (t) => {
        t.ok(APP.Modules.App.Views.app);
      });
      test('navbar', (t) => {
        t.ok(APP.Modules.App.Views.navbar);
      });
      test('footer', (t) => {
        t.ok(APP.Modules.App.Views.footer);
      });
    });

    QUnit.module('Router', () => {
      QUnit.module('main', () => {
        QUnit.module('routes', () => {
          const routes = APP.Modules.App.Router.main.routes;
          test('route "/#about" => about page', (t) => {
            t.equal(routes['about'], 'showAbout');
          });
          test('route "/#contact" => contact page', (t) => {
            t.equal(routes['contact'], 'showContact');
          });
        });
      });
    });
  });
}
