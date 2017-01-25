Template.recommendations.helpers({

  opportunitiesList: function () {
    var list =  _.map(RadGrad.opportunity.find({}, {sort: {name: 1}}).fetch(), function(opportunity) {
      let name = `${opportunity.name}`;
      let description = `${opportunity.description}`;
      if (description[description.length - 1] !== ".") {
        description = description + ".";
      }

      let slug = `${RadGrad.slug.findBySlug(opportunity.slugID).name}`;
      var firstSentence = description.split(".");

      let tags = `${RadGrad.tag.getTagNames(opportunity.tagIDs)}`;

      tags = tags.split(",");

      console.log(slug);
      return {name: name, hook: firstSentence[0] + ".", description: description, tags: tags, slug: slug};
    }),

    list = _.sample(list, 3);

    return list;
  },

  vignetteList: function() {
    var vignetteList =  Vignette.find().fetch();

    var vignette =  Vignette.find({uhEmail: "aljonp"}).fetch();
    console.log(vignette);
    var meep  =_.last(vignetteList, [3]);
    for (var i = 0; i < meep.length; i++) {
      console.log(meep[i].slug);
    }

    return _.last(vignetteList, [3]);
  },

  petitionList: function() {
    var petitionList = Petition.find().fetch();
    return _.last(petitionList, [3]);
  },

  getHook: function(description) {
    var hook = description.split(".");
    var hookString = hook[0];
    var lastLetter = hookString[hookString.length - 1];

    if (lastLetter == "!" || lastLetter == "?") {
      return hook[0];
    }

    return hook[0] + ".";
  },

  formatDate: function(date) {
    return moment(date).format('l');
  }

});

Template.recommendations.rendered = function () {

  $('a.header').click(function() {
    var href = $(this).attr('href');

    $(href).modal('show');
  });
};