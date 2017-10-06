import behavior from '../../behaviors/rest/rest-edit-item-behavior';

async function initRestEditItemBehavior() {
  APP.Behaviors.RestEditItemBehavior = behavior;
}

export default initRestEditItemBehavior;
