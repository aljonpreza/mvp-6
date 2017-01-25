Template.studentice.helpers({

  getCompetency: function(grade) {
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

  getVerification: function(status) {
    if (status) {
      return "Verified";
    }
    else {
      return "Not Verified";
    }
  },

  recentCourseList: function () {

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;
    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;

    var recentCourses = [];

    for (var i = 0; i < courseArray.length; i++) {
      var course = RadGrad.courseinstance.findOne(courseArray[i]);
      //console.log(course);

      //console.log(RadGrad.course.findOne(course.courseID.toString()));

      var courseDesc = RadGrad.course.findOne(course.courseID.toString());

      if (RadGrad.semester.toString(course.semesterID.toString()) == "Fall 2015" && !courseDesc.number.startsWith("OTH")) {
        var courseName = courseDesc.name;
        recentCourses.push({courseName: courseName, grade: course.grade, verified: course.verified});
      }

    }

    return recentCourses;
  },

  recentOpportunities: function() {

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;

    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;

    var recentOpportunities = [];

    for (var i = 0; i < oppArray.length; i++) {
      var opp = RadGrad.opportunityinstance.findOne(oppArray[i]);
      //console.log(opp);

      var oppDesc = RadGrad.opportunity.findOne(opp.opportunityID.toString());
      //console.log(opp); // verified
      //console.log(oppDesc); //name sponsorID
      //console.log(oppDesc.sponsorID);
      //console.log(RadGrad.user.find({_id: oppDesc.sponsorID}).fetch()[0].lastName);

      if (RadGrad.semester.toString(opp.semesterID.toString()) == "Fall 2015") {
        recentOpportunities.push({oppName: oppDesc.name,
          verified: opp.verified,
          sponsor: RadGrad.user.find({_id: oppDesc.sponsorID}).fetch()[0].lastName,
          innovation: 10,
          experience: 10})
      }

    }

    return recentOpportunities;
  },

  getSubTotalInnovation: function(array) {

    var recentTotal = 0;
    for (var i = 0; i < array.length; i++) {
      recentTotal += array[i].innovation;
    }

    return recentTotal;
  },

  getSubTotalCompetency: function(array) {
    var recentTotal = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i].grade == "A") {
        recentTotal += 9;
      }
      else if (array[i].grade == "B") {
        recentTotal += 5;
      }
      else {
        recentTotal += 0;
      }
    }

    return recentTotal;
  },

  getTotalInnovation: function() {
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;

    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;

    return oppArray.length * 10;
  },

  getTotalCompetency: function() {
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;
    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;

    var totalCompetency = 0;
    for (var i = 0; i < courseArray.length; i++) {
      var course = RadGrad.courseinstance.findOne(courseArray[i]);

      var courseDesc = RadGrad.course.findOne(course.courseID.toString());
      if (!courseDesc.number.startsWith("OTH")) {

        if (course.grade == "A") {
          totalCompetency += 9;
        }
        else if (course.grade == "B") {
          totalCompetency += 5;
        }
        else {
          totalCompetency += 0;
        }
      }
    }

    return totalCompetency;
  },

  getICETotal: function(i, c, e) {
    return i + c + e;
  }

});

Template.studentice.events({

  'click .test': function() {

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;
    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;

    var totalCompetency = 0;
    for (var i = 0; i < courseArray.length; i++) {
      var course = RadGrad.courseinstance.findOne(courseArray[i]);

      var courseDesc = RadGrad.course.findOne(course.courseID.toString());
      if (!courseDesc.number.startsWith("OTH")) {

        if (course.grade == "A") {
          totalCompetency += 9;
        }
        else if (course.grade == "B") {
          totalCompetency += 5;
        }
        else {
          totalCompetency += 0;
        }
      }
    }




  }

  
});