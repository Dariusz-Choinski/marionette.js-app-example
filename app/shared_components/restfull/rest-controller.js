export default Marionette.Object.extend({
  initialize(options) {
    this.router = options.router;
    this.parentView = options.parentView;
    this.parentViewRegion = options.parentViewRegion;
    this.layout = options.layout;
    this.collection = options.collection;
    this.path = options.path;
    this.active = this.router.active;
  },

  showModelsLayout() {
    this._fetchModels();
    this.modelsLayout = this.layout(this.router, this.path);
    this.parentView.showChildView(this.parentViewRegion, this.modelsLayout);
  },

  showModels(models) {
    if (!this.active) this.showModelsLayout();
    this.modelsLayout.showIndex(models);
  },

  showNewModel() {
    if (!this.active) this.showModelsLayout();
    const model = new this.collection.model();
    this.router.navigate(`${this.path}/new`);
    this.modelsLayout.showModelForm(model);
  },

  showEditModel(id) {
    if (!this.active) this.showModelsLayout();
    this._getModel(id)
      .then((model) => {
        this.router.navigate(`${this.path}/edit/${model.id}`);
        this.modelsLayout.showModelForm(model);
      });
  },

  showModel(id, subPath) {
    if (!this.active) this.showModelsLayout();
    this._getModel(id)
      .then((model) => { this.modelsLayout.showModel(model, subPath); });
  },

  _fetchModels() {
    const models = this.collection.models;
    if (_.isEmpty(models)) {
      this.collection.fetch({
        error: error => ($.notify(error, 'error'))
      });
    }
  },

  _getModel(id) {
    return new Promise((resolve, reject) => {
      const item = this.collection.get(id);
      if (item) {
        resolve(item);
      } else {
        const newModel = new this.collection.model();
        newModel.url = `${this.collection.url}/${id}`;
        newModel.fetch({
          wait: true,
          success: (model) => { resolve(model); },
          error: (error) => {
            $.notify(error, 'error');
            reject(error);
          }
        });
      }
    });
  }
});
