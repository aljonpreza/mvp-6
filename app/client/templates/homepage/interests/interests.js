Template.interests.rendered = function () {

  $('select.dropdown')
      .dropdown()
  ;

};

Template.interests.helpers({

  tagList: function () {
    return _.map(RadGrad.tag.find({}, {sort: {name: 1}}).fetch(), function(tag) {
      let name = `${tag.name}`;
      let slug = `${RadGrad.slug.findBySlug(tag.slugID).name}`;
      return {name: name, slug: slug};
    })
  }

});

Template.interests.events({

  'click .removeInterest': function(e) {
    e.preventDefault();

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;
    /* User Name */
    let user = RadGrad.user.findBySlug(Meteor.user().profile.name);

    var interestName = this.id;
    var tagNames = user.interestTagIDs;
    let tagNames1 = RadGrad.tag.getTagNames(user.interestTagIDs);

    var index;
    for (var i = 0; i < tagNames1.length; i++) {
      if (interestName == tagNames1[i]) {
        index = i;
      }
    }

    tagNames.splice( index, 1 );

    RadGrad.user.setInterestTagIDs(acID, tagNames);
  },

  'click #interestSubmit': function(e) {
    e.preventDefault();

    /* User ID */
    let acID = RadGrad.user.findBySlug(Meteor.user().profile.name)._id;
    /* User Name */
    let user = RadGrad.user.findBySlug(Meteor.user().profile.name);

    /* Get the value of interest table */
    var interestTable = $('#interestInput').dropdown('get value');
    /* Array of values is inserted on the last index: get that table */
    var interestTable1 = interestTable[interestTable.length - 1];

    //console.log(interestTable1); Print Interest Value's slug ID
    var interestInputIDs = [];
    /* Get the values and return them as slug IDs */
    for (var i = 0; i < interestTable1.length; i++) {
      interestInputIDs.push(RadGrad.slug.getEntityID(interestTable1[i], "Tag"));
    }

    /* Get the user's interest tag IDs */
    var tagNames = user.interestTagIDs;

    /* Check for duplicates */
    var flag = 0;
    for (var j = 0; j < interestInputIDs.length; j++) {
      for (var k = 0; k < tagNames.length; k++) {
        if (interestInputIDs[j] == tagNames[k]) {
          //console.log("Duplicate!");
          flag = 1;
        }
      }
    }

    if (flag == 0) {
      /* Concatenate the two arrays */
      var newTagList = interestInputIDs.concat(tagNames);

      /* Update User's Interests */
      RadGrad.user.setInterestTagIDs(acID, newTagList);
    }
    else {
      /* Pops up warning */
      $('#interestWarning').removeClass('hidden');
    }
  },

  'click #interestWarning': function(e) {
    e.preventDefault();

    $('#interestWarning').closest('.message')
        .transition('fade');
  }

});