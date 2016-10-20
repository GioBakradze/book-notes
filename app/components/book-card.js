import Ember from 'ember';

export default Ember.Component.extend({

    init() {
        this._super(...arguments);
        this.isZoomed = false;
    },

    actions: {
        zoomCard: function () {

            if (!this.get('isZoomed')) {
                this.set('isZoomed', true);
            } else {
                this.set('isZoomed', false);
            }

            return true;
        }
    }
});
