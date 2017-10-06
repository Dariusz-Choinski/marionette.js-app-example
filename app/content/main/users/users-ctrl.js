import UsersLayout from './users-layout';
import usersCollection from '../../../collections/users-collection';
import RestController from '../../../shared_components/restfull/rest-controller';

export default function UsersCtrl(options) {
  return new RestController({
    router: options.router,
    parentView: options.parentView,
    parentViewRegion: options.parentViewRegion,
    path: options.path,
    layout: UsersLayout,
    collection: usersCollection
  });
}
