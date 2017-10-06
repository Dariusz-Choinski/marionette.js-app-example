import Marionette from 'backbone.marionette';

export default Marionette.Behavior.extend({

/*
  ui: {
    name: 'input#product-name',
    qts: 'input#product-qts',
    submit: '.btn-submit'
  },

  events: {
    // use input instead keyup , change, paste
    //'keyup @ui.name': 'editName',
    //'change @ui.name': 'editName',
    'input @ui.name': 'editName',       
    'input @ui.qts': 'editQts',
    'click @ui.submit': 'formSubmit'
    
  },
*/
  childViewEvents: {
    //'update:model:attr': '_updateModelAttr',
    //'form:submit': '_formSubmit'
  },

  onBeforeRender(){
    this.modelClone = this.view.model.clone();
  },

  onFormSubmit(e) {
    //e.preventDefault();
    this.view.productStore.saveModel(this.view.model, this.modelClone.attributes)
      .then(
        (model) => {
          console.log('new redirect to show');
          this.view.triggerMethod('parent:show:model', { model: model });
        },
        (reject) => {
          this._validateEach( _.clone(this.modelClone.attributes));
          alert('Can not be saved, correct wrong input data');
        }
      );
  },

  onUpdateModelAttr(attr) {
    console.log('update');
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
    }
    else {
      InputContainer.removeClass('has-error');
      ErrorLabel.text('');      
    }  
  },

  _validateEach(attributes) {
    const Keys = Object.keys(attributes);
    const ID = Keys.shift();
    for (let key of Keys) {
      console.log(key)
      this.onUpdateModelAttr(key);
    }
  }
});