if (Meteor.isClient) {
  Meteor.subscribe("Vignette");
}

Template.Vignette.rendered = function () {

  $('select.dropdown')
      .dropdown()
  ;

};

Template.Vignette.helpers({

  vignetteList: function() {
    return Vignette.find().fetch();
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
  }

});

Template.Vignette.events({
  'click #addTags': function() {
    var title = $('#vignetteInput').form('get value', 'title');
    var description = $('#vignetteInput').form('get value', 'description');
    var tagTable = $('#tagInput').dropdown('get value');
    tagTable = tagTable[tagTable.length - 1];

    if (title == "" || description == "") {
      $('#vignetteWarning').removeClass('hidden');
    }
    else {
      Vignette.insert({title: title, description: description, tags: tagTable});
    }
  },

  'click #vignetteWarning': function(e) {
    e.preventDefault();

    $('#vignetteWarning').closest('.message')
        .transition('fade');
  }


});