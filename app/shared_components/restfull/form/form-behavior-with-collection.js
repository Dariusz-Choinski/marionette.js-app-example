/** Restfull component: form view behavior */

export default Marionette.Behavior.extend({

  onBeforeRender() {
    this.view.model.url = `${this.view.collection.url}/${this.view.model.id}`;
    this.modelClone = this.view.model.clone();
  },

  onFormSubmit() {
    if (this.view.model.isNew()) {
      this.view.collection.create(this.modelClone.attributes, {
        wait: true,
        success: (model) => {
          this.view.triggerMethod('layout:show:model', { model: model }); // redirect to show view
        },
        error: (model, response) => {
          const message = `${response.status}: ${response.responseText}`;
          $.notify(message, 'error');
        }
      });
    } else {
      this.view.model.save(this.modelClone.attributes, {
        wait: true,
        success: (model) => {
          this.view.triggerMethod('layout:show:model', { model: model }); // redirect to show view
        },
        error: (model, response) => {
          const message = `${response.status}: ${response.responseText}`;
          $.notify(message, 'error');
        }
      })
    }
  },

  onUpdateModelAttr(attr) {
    const Input = this.getUI(attr);
    const InputValue = Input.val();
    this.modelClone.set(attr, InputValue);
    const input = {};
    input[attr] = InputValue;
    const Error = this.modelClone.validate(input);
    this._updateInput(Input, Error);
  },

  _updateInput(Input, Error) {
    const ErrorLabel = Input.next('.validation-error');
    const InputContainer = Input.closest('.form-group');
    if (Error) {
      InputContainer.addClass('has-error');
      ErrorLabel.text(Error);
    } else {
      InputContainer.removeClass('has-error');
      ErrorLabel.text('');
    }
  },

  _validateEach(attributes) {
    const Keys = Object.keys(attributes);
    for (let key of Keys) {
      this.onUpdateModelAttr(key);
    }
  }
});
