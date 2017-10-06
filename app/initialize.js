import initApplication from './init_app/initialize';
import app from './app';

const appEvents = Backbone.Radio.channel('app:events');

document.addEventListener('DOMContentLoaded', () => {
  initApplication()
  .then(
    () => {
      app.start();
      appEvents.trigger('init:app');
    })
  .catch(
    (error) => {
      if (APP.Env !== 'production') console.log(error);
    });
});

if (APP.Env === 'development') console.log('--- init app');
