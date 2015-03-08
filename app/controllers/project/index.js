import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  actions: {
    signUp: function() {
      this.transitionToRoute("users.new");
    }
  }
});