import behavior from '../../behaviors/rest/rest-form-behavior-with-collection';

async function initRestFormBehaviorWithCollection() {
  APP.Behaviors.RestFormBehaviorWithCollection = behavior;
}

export default initRestFormBehaviorWithCollection;
