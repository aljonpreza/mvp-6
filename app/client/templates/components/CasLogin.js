Template.CasLogin.events({
  /**
   * Handle the click on the login link.
   * @param e The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function(e) {
    e.preventDefault();
    var callback = function loginCallback(error){
      if (error) {
        console.log(error);
      }
      //TODO: Move this code to the server side. allowed_users shouldn't be in public.
      else {
        if (_.contains(Meteor.settings.public.allowed_users, Meteor.user().profile.name)) {
          Router.go('/homepage');
        }
        else{
          Router.go('/invalidaccount');
        }
      }
    };

    Meteor.loginWithCas(callback);
    

    return false;
  }
});