import behavior from '../../behaviors/view-global-register';

async function initViewGlobalRegisterBehavior() {
  APP.Behaviors.ViewGlobalRegister = behavior;
}

export default initViewGlobalRegisterBehavior;
