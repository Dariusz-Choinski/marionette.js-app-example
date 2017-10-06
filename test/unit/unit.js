import GeneralGlobalsTest from './app_globals/general-globals-test';
import BehaviorsTest from './behaviors/behaviors-test';
import CollectionsTest from './collections/collections-test';
import AppModulesTest from './modules/modules';

export default function UnitTests() {
  QUnit.module('Unit', () => {
    GeneralGlobalsTest();
    BehaviorsTest();
    CollectionsTest();
    AppModulesTest();
  });
}
