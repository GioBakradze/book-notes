import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.authenticatedRoute('user', function() {
      this.route('books');
      this.route('book', { path: 'book/:book_id' });
  });

  this.route('loading');
});

export default Router;
