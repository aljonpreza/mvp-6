
Template.addcourses.helpers({

  addcoursesList: function () {
    var coursesList =  _.map(RadGrad.course.find({}, {sort: {number: 1}}).fetch(), function(course) {
      let name = `${course.name}`;
      let number = `${course.number}`;
      let slugName = `${RadGrad.slug.findBySlug(course.slugID).name}`;
      let tagNames = `${RadGrad.tag.getTagNames(course.tagIDs)}`;
      tagNames = tagNames.replace(/,/g, ", ");
      let description = `${course.description}`;
      let credithrs = `${course.credithrs}`;
      return {name: name, number: number, slug: slugName, tags: tagNames, description: description, credithrs: credithrs}
    });

    return _.filter(coursesList, function(course) {
      return course.slug.indexOf("ics") > -1 || course.slug.indexOf("ee") > -1;
    });
  }

});


Template.addcourses.rendered = function () {
  $('.ui.dropdown')
      .dropdown()
  ;
};

Template.addcourses.events({


  'click .spr2016': function(e) {
    e.preventDefault();
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var newCourse = RadGrad.courseinstance.define({semesterID: RadGrad.semester.get("Spring", 2016), course: this.slug, verified: false, studentID: acID});
    //console.log("New Course ID: " + newCourse);

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;
    //console.log("My Degree Plan: ");
    //console.log(degreePlanDocs);

    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
    //console.log("List of Courses: ");
    //console.log(courseArray);

    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
    var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

    courseArray.push(newCourse);

    var sampleDegreePlan = RadGrad.degreeplan.define({
      courseInstanceIDs: courseArray,
      opportunityInstanceIDs: oppArray,
      workInstanceIDs: workArray,
      studentID: acID
    });

    //var oldDegreeID = RadGrad.user.findBySlug(Meteor.user().profile.name).degreePlanID;
    //console.log(oldDegreeID);
    //RadGrad.degreeplan.remove(oldDegreeID);
    //console.log(sampleDegreePlan);
    RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

    //console.log(degreePlanDocs);
    //console.log(courseArray);

  },

  'click .sum2016': function(e) {
    e.preventDefault();
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var newCourse = RadGrad.courseinstance.define({semesterID: RadGrad.semester.get("Summer", 2016), course: this.slug, verified: false, studentID: acID});
    //console.log("New Course ID: " + newCourse);

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;
    //console.log("My Degree Plan: ");
    //console.log(degreePlanDocs);

    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
    //console.log("List of Courses: ");
    //console.log(courseArray);

    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
    var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

    courseArray.push(newCourse);

    var sampleDegreePlan = RadGrad.degreeplan.define({
      courseInstanceIDs: courseArray,
      opportunityInstanceIDs: oppArray,
      workInstanceIDs: workArray,
      studentID: acID
    });

    //var oldDegreeID = RadGrad.user.findBySlug(Meteor.user().profile.name).degreePlanID;
    //console.log(oldDegreeID);
    //RadGrad.degreeplan.remove(oldDegreeID);
    //console.log(sampleDegreePlan);
    RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

    //console.log(degreePlanDocs);
    //console.log(courseArray);

  },

  'click .fall2016': function(e) {
    e.preventDefault();
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    var newCourse = RadGrad.courseinstance.define({semesterID: RadGrad.semester.get("Fall", 2016), course: this.slug, verified: false, studentID: acID});
    //console.log("New Course ID: " + newCourse);

    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;
    //console.log("My Degree Plan: ");
    //console.log(degreePlanDocs);

    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
    //console.log("List of Courses: ");
    //console.log(courseArray);

    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
    var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

    courseArray.push(newCourse);

    var sampleDegreePlan = RadGrad.degreeplan.define({
      courseInstanceIDs: courseArray,
      opportunityInstanceIDs: oppArray,
      workInstanceIDs: workArray,
      studentID: acID
    });

    //var oldDegreeID = RadGrad.user.findBySlug(Meteor.user().profile.name).degreePlanID;
    //console.log(oldDegreeID);
    //RadGrad.degreeplan.remove(oldDegreeID);
    //console.log(sampleDegreePlan);
    RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

    //console.log(degreePlanDocs);
    //console.log(courseArray);

  }


  
});