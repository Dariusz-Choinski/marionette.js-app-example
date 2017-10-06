import ViewGlobalRegisterTest from './view-global-register-test';

export default function IntegrationTests() {
  QUnit.module('Integration', () => {
    ViewGlobalRegisterTest();
  });
}
