import usersCtrl from './users-ctrl';
import appView from '../../app-view';

/** router to manage Users */
const UsersRouter = Marionette.AppRouter.extend({
  path: 'users',
  active: false,
  initialize() {
    this.controller = usersCtrl({
      router: this,
      parentView: appView,
      parentViewRegion: 'main',
      path: this.path
    });
    this.routes = this.appRoutes;
  },

  appRoutes: {
    'users(/)': 'showModels',
    'users/new(/)': 'showNewModel',
    'users/edit/:id(/)': 'showEditModel',
    'users/:id(/*path)': 'showModel',
  },
});

const usersRouter = new UsersRouter();
export default usersRouter;

if (APP.Env === 'development') console.log('init users-router');

