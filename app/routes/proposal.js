import Ember from 'ember';
import Proposal from '../models/proposal'

export default Ember.Route.extend({

  afterModel: function(model) {
    var word = this.modelFor('proposal').get('wordName');
    this.send("log", "viewed proposal");
    Ember.$(document).attr('title', word + ' – proposal from Wordset');
  }
});
