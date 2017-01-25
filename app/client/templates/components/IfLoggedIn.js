/**
 * Created by sorap on 4/25/2016.
 */
Template.IfLoggedIn.helpers({
    authInProcess: function () {
        return Meteor.loggingIn();
    },
    canShow: function () {
        return !!Meteor.user();
    }
})
