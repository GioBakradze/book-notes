import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.hasMany('book-note')
});
