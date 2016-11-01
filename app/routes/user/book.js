import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {

        if (params.book_id === 'add') {
            return this.store.createRecord('book', {
                title: '',
                notes: []
            });
        }

        return this.get('store').findRecord('book', params.book_id);
    },

    deactivate() {
        this.currentModel.get('notes').map(note => note).forEach(note => {
            note.rollbackAttributes();
        });
        this.currentModel.rollbackAttributes();
    }

});
