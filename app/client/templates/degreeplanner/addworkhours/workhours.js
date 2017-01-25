/**
 * Created by aljonp on 5/6/16.
 */
Template.workhours.events({

  'click #spr2016': function (e) {
    e.preventDefault();

    var workHours = $('#workHoursInput').form('get value', 'workhours');

    if (workHours =="") {
      $('#workHoursWarning').removeClass('hidden');
    }
    else {
      /* User ID */
      let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

      var newWork = RadGrad.workinstance.define({semesterID: RadGrad.semester.get("Spring", 2016),
        hrswk: workHours,
        studentID: acID});

      /* Find the degree plan of user */
      var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
      var lastCreated = degreePlanDocs.length - 1;

      /* Grab the last created id arrays of user */
      var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
      var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
      var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

      /* Push new opportunity */
      workArray.push(newWork);

      /* Create a new degree plan id */
      var sampleDegreePlan = RadGrad.degreeplan.define({
        courseInstanceIDs: courseArray,
        opportunityInstanceIDs: oppArray,
        workInstanceIDs: workArray,
        studentID: acID
      });

      /* Set new degree plan id to user */
      RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

    }
  },

  'click #sum2016': function (e) {
    e.preventDefault();

    var workHours = $('#workHoursInput').form('get value', 'workhours');

    if (workHours =="") {
      $('#workHoursWarning').removeClass('hidden');
    }
    else {
      /* User ID */
      let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

      var newWork = RadGrad.workinstance.define({semesterID: RadGrad.semester.get("Summer", 2016),
        hrswk: workHours,
        studentID: acID});

      /* Find the degree plan of user */
      var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
      var lastCreated = degreePlanDocs.length - 1;

      /* Grab the last created id arrays of user */
      var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
      var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
      var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

      /* Push new opportunity */
      workArray.push(newWork);

      /* Create a new degree plan id */
      var sampleDegreePlan = RadGrad.degreeplan.define({
        courseInstanceIDs: courseArray,
        opportunityInstanceIDs: oppArray,
        workInstanceIDs: workArray,
        studentID: acID
      });

      /* Set new degree plan id to user */
      RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

    }
  },

  'click #fall2016': function (e) {
    e.preventDefault();

    var workHours = $('#workHoursInput').form('get value', 'workhours');

    if (workHours =="") {
      $('#workHoursWarning').removeClass('hidden');
    }
    else {
      console.log(workHours);
      /* User ID */
      let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

      var newWork = RadGrad.workinstance.define({semesterID: RadGrad.semester.get("Fall", 2016),
        hrswk: workHours,
        studentID: acID});

      /* Find the degree plan of user */
      var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
      var lastCreated = degreePlanDocs.length - 1;

      /* Grab the last created id arrays of user */
      var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
      var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
      var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

      /* Push new opportunity */
      workArray.push(newWork);

      /* Create a new degree plan id */
      var sampleDegreePlan = RadGrad.degreeplan.define({
        courseInstanceIDs: courseArray,
        opportunityInstanceIDs: oppArray,
        workInstanceIDs: workArray,
        studentID: acID
      });

      /* Set new degree plan id to user */
      RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

    }
  },

  'click #workHoursWarning': function(e) {
    e.preventDefault();

    $('#workHoursWarning').closest('.message')
        .transition('fade');
  }
  
  
  
});