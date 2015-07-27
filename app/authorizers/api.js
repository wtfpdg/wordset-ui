import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR) {
    var bearerKey = this.get("bearerKey")
    if (bearerKey) {
      jqXHR.setRequestHeader('Authorization', bearerKey);
    }
  },
  bearerKey: function() {
    var username = this.get('session').get('username');
    var authKey = this.get('session').get('auth_key');
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(username) && !Ember.isEmpty(authKey)) {
      var authData = username + ':' + authKey;
      return 'Bearer ' + authData;
    } else {
      return false;
    }
  }.property("session.username", "session.auth_key", "session.isAuthenticated"),
});
