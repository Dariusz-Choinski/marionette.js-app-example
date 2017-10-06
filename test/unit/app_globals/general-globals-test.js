const { test } = QUnit;

export default function GeneralGlobals() {
  QUnit.module('general globals', () => {
    QUnit.module('APP', () => {
      test('Collections', (t) => {
        t.ok(APP.Collections, 'exist');
      });
      test('Modules', (t) => {
        t.ok(APP.Modules, 'exist');
      });
      test('Views', (t) => {
        t.ok(APP.Views, 'exist');
      });
      test('Behaviors', (t) => {
        t.ok(APP.Behaviors, 'exist');
      });
      test('Services', (t) => {
        t.ok(APP.Services, 'exist');
      });
      test('Mixins', (t) => {
        t.ok(APP.Mixins, 'exist');
      });
      test('Utilities', (t) => {
        t.ok(APP.Utilities, 'exist');
      });
      test('Test', (t) => {
        t.ok(APP.Test, 'exist');
      });
    });
  });
}
