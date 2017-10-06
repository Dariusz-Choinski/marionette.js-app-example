const { test } = QUnit;

export default function BehaviorsTest() {
  QUnit.module('APP.Behaviors', () => {
    QUnit.module('ViewGlobalRegister', () => {
      test('function', (t) => {
        t.ok(typeof APP.Behaviors.ViewGlobalRegister === 'function');
      });
    });

    QUnit.module('RestEditItemBehavior', () => {
      test('function', (t) => {
        t.ok(typeof APP.Behaviors.RestEditItemBehavior === 'function');
      });
    });

    QUnit.module('RestFormBehaviorWithCollection', () => {
      test('function', (t) => {
        t.ok(typeof APP.Behaviors.RestFormBehaviorWithCollection === 'function');
      });
    });
  });
}
