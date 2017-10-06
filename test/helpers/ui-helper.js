let y = 0;
let u = 1000;

const UI = {
  /** redirect to path, after it expected view as option */
  visit(path, option = {}) {
    const viewName = option.view;
    const appEvents = Backbone.Radio.channel('app:events');
    return new Promise((resolve) => {
      if (location.hash === path.slice(1)) {
        resolve();
      } else {
        appEvents.on('register:view', (event) => {
          if (viewName === undefined) {
            if (event.match(path.slice(2))) resolve(event);
          } else {
            if (event === viewName) resolve(event);
          }
        });
      }
      location = path;
    });
  },

  /** element to click(), on click expected view or action as option */
  click(element, option = {}) {
    return new Promise((resolve, reject) => {
      if (option.view) {
        const viewName = option.view;
        const appEvents = Backbone.Radio.channel('app:events');
        appEvents.on('register:view', (e) => {
          if (e === viewName) resolve();
        });
      } else

      if (option.action) {
        // To Do
        reject();
      }

      element.click();
    });
  },

  /** filling form with test values, then submit form */
  async fillProductFormThenSubmit() {
    y++;
    const inputName = $('#product-name');
    const inputQts = $('#product-qts');
    const submitButton = $('#products button.btn-submit').get(0);
    inputName.val(`Product no Y${y}`);
    inputQts.val(10 + y);

    // Important! before submit, manually trigger inputs update,
    // this run validation on inputs.
    // Submit can be clicked only when validation passed.
    APP.Views['main/products/form'].triggerMethod('update:model:attr', 'name');
    APP.Views['main/products/form'].triggerMethod('update:model:attr', 'qts');

    await UI.click(submitButton, { view: 'main/products/show' });
    const product = _.last(APP.Collections.products.models);
    return product;
  },

  async fillUserFormThenSubmit() {
    u++;
    const inputName = $('#user-name');
    const inputSurname = $('#user-surname');
    const inputEmail = $('#user-email');
    const submitButton = $('#users button.btn-submit').get(0);
    inputName.val(`User ${u}`);
    inputSurname.val(u);
    inputEmail.val(`User${u}@test.com`);

    // Important! before submit, manually trigger inputs update,
    // this run validation on inputs.
    // Submit can be clicked only when validation passed.
    APP.Views['main/users/form'].triggerMethod('update:model:attr', 'name');
    APP.Views['main/users/form'].triggerMethod('update:model:attr', 'surname');
    APP.Views['main/users/form'].triggerMethod('update:model:attr', 'email');

    await UI.click(submitButton, { view: 'main/users/show' });
    const user = _.last(APP.Collections.users.models);
    return user;
  },

  wait(ms) {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(); }, ms);
    });
  }
};

export default UI;
