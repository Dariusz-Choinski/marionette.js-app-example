const userHelper = {
  async createUser(options) {
    const model = new APP.Collections.users.model({
      name: options.name,
      surname: options.surname,
      email: options.email
    });
    const user = await APP.Collections.users.create(model);
    return user;
  },

  deleteUser(user) {
    return new Promise((resolve, reject) => {
      user.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  deleteLastUser() {
    return new Promise((resolve, reject) => {
      const user = _.last(APP.Collections.users.models);
      user.destroy({
        wait: true,
        success: () => { resolve(); },
        error: (e) => { console.log(e); reject(e); }
      });
    });
  },

  pushUserToCollection(options) {
    const model = new APP.Collections.users.model({
      id: options.id,
      name: options.name,
      surname: options.surname,
      email: options.email
    });
    APP.Collections.users.push(model);
  },

  popUserFromCollection(id) {
    APP.Collections.users.pop(id);
  },
};

export default userHelper;
