import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addNote: function () {
            var newNote = this.store.createRecord('book-note', {
                title: ''
            });
            this.model.get('notes').pushObject(newNote);
        },
        saveBook: function () {
            Ember.RSVP.all(
                this.model.get('notes').map(note => note.save())
            ).then(() => {
                this.model.save();
            });
        }
    }
});
