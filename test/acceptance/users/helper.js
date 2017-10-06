import UI from '../../helpers/ui-helper';
import AP from '../../helpers/app-helper';

const APP = window.APP;

const Helper = {
  async createTestUser(t) {
    await UI.visit('/#users/new', { view: 'main/users/form' });
    const testUser1 = await UI.fillUserFormThenSubmit();
    APP.Test.testUser1 = testUser1;
    const pageUsersHeader = $('#main h3').text();
    t.equal(pageUsersHeader.toLowerCase(), 'USER'.toLowerCase());
    t.equal(location.hash, `#users/${testUser1.id}`);
  },

  async deleteTestUser() {
    const testUser1 = APP.Test.testUser1;
    await AP.deleteUser(testUser1);
    APP.Test.testUser1 = null;
    await UI.visit('/#about');
  }
};

export default Helper;
