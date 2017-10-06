function errorHandler(e) {
  const error = e.responseText || e.statusText || e.status;
  const message = `Server responded with error: ${error}`;
  $.notify(message, 'error');
  return message;
}

function getOwnerResources(options) {
  const collection = options.collection;
  const id = options.id;
  const resources = options.resources;
  return new Promise((resolve, reject) => {
    const uri = `${collection.url}/${id}/${resources}`;
    $.get(uri)
      .done((response, statusText) => {
        //const attributes = JSON.parse(response)[0];
        //const Model = this.collection.model;
        //let model = new Model({id: +id}, {collection: this.collection}).set(attributes);
        resolve(response);
      })
      .fail((response, statusText) => {
        const message = errorHandler(response);
        reject(message);
      });
  });
}

export default getOwnerResources;
