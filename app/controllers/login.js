import Ember from 'ember';

export default Ember.Controller.extend({

    init() {
        this._super(...arguments);
        this.email = '';
        this.password = '';
        this.loginFailed = false;
    },

    actions: {
        formSubmit: function () {

            this.get('session').open('firebase', {
                provider: 'password',
                email: this.get('email'),
                password: this.get('password')
            }).then(() => {
                this.transitionTo('index');
            }, () => {
                this.set('loginFailed', true);
            });

            return false;
        }
    }
});
