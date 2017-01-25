Template.sidebar.events({

  /**
   * Log out of meteor when button is clicked.
   * @param e
   * @returns {boolean}
   */
  'click .cas-logout': function(e) {
    e.preventDefault();
    Meteor.logout();
    Router.go('/');
    return false;
  }

});

Template.registerHelper('currentRouteIs', function (route) {
  return Router.current().route.getName() === route;
});