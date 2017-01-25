if (Meteor.isClient) {
  Meteor.subscribe("Petition");
}

Template.Petition.helpers({

  petitionList: function() {
    return Petition.find().fetch();
  },

  formatDate: function(date) {
    return moment(date).fromNow();
  }

});

Template.Petition.events({

  'click #addPetition': function() {
    var title = $("#petitionInput").form('get value', 'title');
    var description = $("#petitionInput").form('get value', 'description');

    if (title == "" || description == "") {
      $('#petitionWarning').removeClass('hidden');
    }
    else {
      Petition.insert({title: title, description: description});
    }
  },

  'click #petitionWarning': function(e) {
    e.preventDefault();

    $('#petitionWarning').closest('.message')
        .transition('fade');
  }


});