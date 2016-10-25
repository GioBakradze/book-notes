import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel() {
        if (this.get('session').get('isAuthenticated')) {
            this.transitionTo('user.books');
        } else {
            this.transitionTo('login');
        }
    }

});
