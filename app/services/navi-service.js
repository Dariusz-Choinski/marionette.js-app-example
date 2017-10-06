//import Marionette from 'backbone.marionette';


const ServiceObject = Marionette.Object.extend({
    chanelName: 'navigation',
    radioEvents: {
        'show:about': 'showAbout',
    },

    showAbout() {
        console.log('clicked about from Service')
    }
});

const Service = new ServiceObject;
export default Service;