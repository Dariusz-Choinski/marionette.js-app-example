const { test } = QUnit;

export default function ViewGlobalRegisterTest() {
  QUnit.module('ViewGlobalRegister', () => {
    QUnit.module('TestView', (hooks) => {
      hooks.after(() => {
        delete APP.Views['testview'];
        delete APP.Modules.Test.Views['testview'];
      });

      test('register then unregister in APP.Views and APP.Modules.Test.Views', (t) => {
        const TestView = Marionette.View.extend({
          template: _.template('<h3>Test</h3>'),
          behaviors: {
            ViewGlobalRegister: { viewName: 'testview', module: 'Test' },
          }
        });
        const testView = new TestView();
        const testRegion = APP.Views.app.getRegion('test');

        testRegion.show(testView);
        t.ok(APP.Views.testview);
        t.ok(APP.Modules.Test.Views.testview);

        testRegion.empty();
        t.notOk(APP.Views.testview);
        t.notOk(APP.Modules.Test.Views.testview);
      });
    });
  });
}
