Template.degreegoals.rendered = function () {
  $('select.dropdown')
      .dropdown()
  ;
};

Template.degreegoals.helpers({

  degreeGoalList: function() {
    return _.map(RadGrad.degreegoal.find({}, {sort: {name: 1}}).fetch(), function(degreeGoal) {
      let name = `${degreeGoal.name}`;
      let slugName = `${RadGrad.slug.findBySlug(degreeGoal.slugID).name}`;
      return {name: name, slugName: slugName}
    })
  }

});

Template.degreegoals.events ({

  'click .removeDegreeGoals': function(e) {
    e.preventDefault();

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;
    /* User Name */
    let user = RadGrad.user.findBySlug(Meteor.user().profile.name);

    var degreeGoalName = this.id;
    var degreeGoalNames = user.degreeGoalIDs;
    let degreeGoalNames1 = _.map(user.degreeGoalIDs, function(degreeGoalID) {
      return RadGrad.degreegoal.findOne(degreeGoalID).name;
    });

    var index;
    for (var i = 0; i < degreeGoalNames1.length; i++) {
      if (degreeGoalName == degreeGoalNames1[i]) {
        index = i;
      }
    }

    degreeGoalNames.splice( index, 1 );

    RadGrad.user.setDegreeGoalIDs(acID, degreeGoalNames);
  },

  'click #degreeGoalsSubmit': function(e) {
    e.preventDefault();

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;
    /* User Name */
    let user = RadGrad.user.findBySlug(Meteor.user().profile.name);

    /* Get the value of degree goals table */
    var degreeGoalsTable = $('#degreeGoalsInput').dropdown('get value');
    /* Array of values is inserted on the last index: get that table */
    var degreeGoalsTable1 = degreeGoalsTable[degreeGoalsTable.length - 1];

    var degreeGoalsInputIDs = [];
    /* Get the values and return them as slug IDs */
    for (var i = 0; i < degreeGoalsTable1.length; i++) {
      degreeGoalsInputIDs.push(RadGrad.slug.getEntityID(degreeGoalsTable1[i], "DegreeGoal"));
    }

    /* Get the user's interest tag IDs */
    var degreeGoalNames = user.degreeGoalIDs;

    /* Check for duplicates */
    var flag = 0;
    for (var j = 0; j < degreeGoalsInputIDs.length; j++) {
      for (var k = 0; k < degreeGoalNames.length; k++) {
        if (degreeGoalsInputIDs[j] == degreeGoalNames[k]) {
          //console.log("Duplicate!");
          flag = 1;
        }
      }
    }

    if (flag == 0) {
      /* Concatenate the two arrays */
      var newDegreeGoalsList = degreeGoalsInputIDs.concat(degreeGoalNames);

      /* Update User's Interests */
      RadGrad.user.setDegreeGoalIDs(acID, newDegreeGoalsList);
    }
    else {
      /* Pops up warning */
      $('#degreeGoalsWarning').removeClass('hidden');
    }
  },

  'click #degreeGoalsWarning': function(e) {
    e.preventDefault();

    $('#degreeGoalsWarning').closest('.message')
        .transition('fade');
  }




});