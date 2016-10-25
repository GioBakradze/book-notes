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

                // TODO: maybe move this in outside lifecycle method?
                this.set('password', '');
                this.set('loginFailed', false);
                this.set('email', '');

                this.transitionToRoute('user.books');
            }, () => {
                this.set('loginFailed', true);
            });

            return false;
        }
    }
});
