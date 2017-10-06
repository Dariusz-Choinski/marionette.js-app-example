import initBehaviors from './behaviors/manifest';
import initAppModule from './app_module/manifest';
import initProductsModule from './products_module/manifest';
import initUsersModule from './users_module/manifest';

/** Initialization flow control */
export default async function InitApplication() {
  await initBehaviors();
  await initAppModule();
  await initProductsModule();
  await initUsersModule();
}
