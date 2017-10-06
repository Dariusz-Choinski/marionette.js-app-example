import UnitTests from './unit/unit';
import AcceptanceTests from './acceptance/acceptance';
import IntegrationTests from './integration/integration';


function runTests() {
  const appEvents = Backbone.Radio.channel('app:events');
  appEvents.on('init:app', async () => {
    addTestGlobals();
    UnitTests();
    IntegrationTests();
    await AcceptanceTests();
  });
}

runTests();

function addTestGlobals() {
  APP.Test = {};
  APP.Modules.Test = {};
  APP.Modules.Test.Views = {};
  $('#app :first-child').append('<div id="test"></div>');
  APP.Views.app.addRegion('test', '#test');
}
