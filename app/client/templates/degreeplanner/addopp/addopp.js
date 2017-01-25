
Template.addopp.helpers({

  addoppList: function () {
    return _.map(RadGrad.opportunity.find({}, {sort: {name: 1}}).fetch(), function(opportunity) {
      let name = `${opportunity.name}`;
      let slug = `${RadGrad.slug.findBySlug(opportunity.slugID).name}`;
      let opportunityType = `${RadGrad.opportunitytype.findOne(opportunity.opportunityTypeID).name}`;
      let sponsor = `${RadGrad.user.findOne(opportunity.sponsorID).lastName}`;
      let tags = `${RadGrad.tag.getTagNames(opportunity.tagIDs)}`;
      tags = tags.replace(/,/g, ", ");
      let description = `${opportunity.description}`;

      return {name: name, slug: slug, opportunityType: opportunityType, sponsor: sponsor, tags: tags, description: description};
    })
  }

});

Template.addopp.rendered = function () {
  $('.ui.dropdown')
      .dropdown()
  ;
};

Template.addopp.events({

  'click .spr2016': function(e) {
    e.preventDefault();
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    /* Define a new opportunity */
    var newOpp = RadGrad.opportunityinstance.define({semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: this.slug,
      verified: false,
      studentID: acID});

    /* Find the degree plan of user */
    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;

    /* Grab the last created id arrays of user */
    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
    var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

    /* Push new opportunity */
    oppArray.push(newOpp);

    /* Create a new degree plan id */
    var sampleDegreePlan = RadGrad.degreeplan.define({
      courseInstanceIDs: courseArray,
      opportunityInstanceIDs: oppArray,
      workInstanceIDs: workArray,
      studentID: acID
    });

    /* Set new degree plan id to user */
    RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

  },

  'click .sum2016': function(e) {
    e.preventDefault();
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    /* Define a new opportunity */
    var newOpp = RadGrad.opportunityinstance.define({semesterID: RadGrad.semester.get("Summer", 2016),
      opportunity: this.slug,
      verified: false,
      studentID: acID});

    /* Find the degree plan of user */
    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;

    /* Grab the last created id arrays of user */
    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
    var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

    /* Push new opportunity */
    oppArray.push(newOpp);

    /* Create a new degree plan id */
    var sampleDegreePlan = RadGrad.degreeplan.define({
      courseInstanceIDs: courseArray,
      opportunityInstanceIDs: oppArray,
      workInstanceIDs: workArray,
      studentID: acID
    });

    /* Set new degree plan id to user */
    RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);

  },

  'click .fall2016': function(e) {
    e.preventDefault();
    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;

    /* Define a new opportunity */
    var newOpp = RadGrad.opportunityinstance.define({semesterID: RadGrad.semester.get("Fall", 2016),
      opportunity: this.slug,
      verified: false,
      studentID: acID});

    /* Find the degree plan of user */
    var degreePlanDocs = RadGrad.degreeplan.find({studentID: acID}).fetch();
    var lastCreated = degreePlanDocs.length - 1;

    /* Grab the last created id arrays of user */
    var oppArray  = degreePlanDocs[lastCreated].opportunityInstanceIDs;
    var courseArray  = degreePlanDocs[lastCreated].courseInstanceIDs;
    var workArray  = degreePlanDocs[lastCreated].workInstanceIDs;

    /* Push new opportunity */
    oppArray.push(newOpp);

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



});