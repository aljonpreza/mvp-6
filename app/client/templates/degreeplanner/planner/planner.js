Template.planner.helpers({

  hasGrade: function(grade) {
    return grade !== undefined;
  },

  changeGradetoC: function(grade) {
    if (grade == "A") {
      return 9;
    }
    else if (grade == "B") {
      return 5;
    }
    else {
      return 0;
    }
  },

  hasWorkHours: function(workHours) {
    return workHours !== undefined;
  },

  notPastSemester: function(semester) {
    var year = semester.split(" ");

    return year[1] > 2015;
  }

});

Template.planner.events({

  'click .deleteCourse': function(e) {
    e.preventDefault();

    if (confirm("Are you sure you would like to delete " + this.course + " from your planner?") == true) {
      /* User ID */
      let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

      var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
      var lastCreated = degreePlanDocs.length - 1;

      var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
      var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
      var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

      /* Find the index of the course to delete */
      var indexOfCourse = _.indexOf(courseArray, this._id);

      /* Delete the course from array */
      courseArray.splice( indexOfCourse, 1 );

      var sampleDegreePlan = RadGrad.degreeplan.define({
        courseInstanceIDs: courseArray,
        opportunityInstanceIDs: oppArray,
        workInstanceIDs: workArray,
        studentID: acID
      });

      RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
    }

  },

  'click .deleteOpp': function(e) {
    e.preventDefault();

    if (confirm("Are you sure you would like to delete " + this.opp + " from your planner?") == true) {

      /* User ID */
      let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

      var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
      var lastCreated = degreePlanDocs.length - 1;

      var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
      var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
      var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

      /* Find the index of the opp to delete */
      var indexOfOpp = _.indexOf(oppArray, this._id);

      /* Delete the opp from array */
      oppArray.splice( indexOfOpp, 1 );

      var sampleDegreePlan = RadGrad.degreeplan.define({
        courseInstanceIDs: courseArray,
        opportunityInstanceIDs: oppArray,
        workInstanceIDs: workArray,
        studentID: acID
      });

      RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
    }


  }


});