import initViewGlobalRegisterBehavior from './view-global-register';
import initRestEditItemBehavior from './rest-edit-item-behavior';
import initRestFormBehaviorWithCollection from './rest-form-behavior-with-collection';

/** setup APP.Behaviors as behaviors storage */
Marionette.Behaviors.behaviorsLookup = function () {
  return APP.Behaviors;
};

/** register behaviors in APP.Behaviors */
export default async function initBehaviors() {
  await Promise.all([
    initViewGlobalRegisterBehavior(),
    initRestEditItemBehavior(),
    initRestFormBehaviorWithCollection(),
  ]);
}
