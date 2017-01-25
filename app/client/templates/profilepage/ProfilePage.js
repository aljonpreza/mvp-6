/**
 * Created by sorap on 4/25/2016.
 */
Template.registerHelper('userinfo',()=>{
       let user = RadGrad.user.findBySlug(Meteor.user().profile.name);
       let name = `${user.firstName} ${user.lastName}`;
       let roles = `(${user.roles}) `;
       let slug = `*Slug:* ${RadGrad.slug.findBySlug(user.slugID).name} `;
       let email = `${RadGrad.user.getEmail(user._id)} `;
       // Optional fields
       let aboutMe = (_.isEmpty(user.aboutMe)) ? "" : `${user.aboutMe} `;
       let degreeGoalNames = _.map(user.degreeGoalIDs, function(degreeGoalID) {
           return RadGrad.degreegoal.findOne(degreeGoalID).name;
       }) ;

       let degreeGoals = (_.isEmpty(degreeGoalNames)) ? "" : `${degreeGoalNames}`;

       var newList = degreeGoals.split(",");


       var primaryGoal;
       for (var i = 0; i < newList.length; i++) {
              if (newList[i] == "B.A. in Information and Computer Sciences" ||
                  newList[i] == "B.S. in Computer Science" ||
                  newList[i] == "B.S. in Computer Engineering") {
                     primaryGoal = newList[i];
              }
       }


       let tagNames = RadGrad.tag.getTagNames(user.interestTagIDs);
       let tags = (_.isEmpty(tagNames)) ? "" : `${tagNames}`;
       tags = tags.split(",");
       let degreePlanString = (user.degreePlanID) ? RadGrad.degreeplan.toString(user.degreePlanID) : "";
       let degreePlan = (_.isEmpty(degreePlanString)) ? "" : `<br>*Degree Plan:* ${degreePlanString} `;
       let gradSemester = (_.isEmpty(user.semesterID)) ? "" : `${RadGrad.semester.toString(user.semesterID)}`;

       return [{ picture: user.picture, name: name, role: roles, email: email, aboutMe: aboutMe, degreeGoals: newList,
       tagNames:tagNames, tags:tags, degreePlanString: degreePlanString, degreePlan: degreePlan, gradSemester:gradSemester, primaryGoal: primaryGoal}];
});

Template.ProfilePage.helpers({

       vignetteList: function() {
              return Vignette.find({uhEmail: Meteor.user().profile.name}).fetch();
       },

       formatDate: function(date) {
              return moment(date).fromNow();
       },

       tagList: function () {
              return _.map(RadGrad.tag.find({}, {sort: {name: 1}}).fetch(), function(tag) {
                     let name = `${tag.name}`;
                     let slug = `${RadGrad.slug.findBySlug(tag.slugID).name}`;
                     return {name: name, slug: slug};
              })
       },

       petitionList: function() {
              return Petition.find({uhEmail: Meteor.user().profile.name}).fetch();
       },

       removeParenthesis: function(name) {
              return name.substr(1, name.length-3);
       }
});