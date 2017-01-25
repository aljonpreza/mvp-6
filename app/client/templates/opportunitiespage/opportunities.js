/**if (Meteor.isClient) {
  Meteor.subscribe("Opportunities");
}*/

Template.Opportunities.helpers({

  opportunitiesList: function () {
    return _.map(RadGrad.opportunity.find({}, {sort: {name: 1}}).fetch(), function(opportunity) {
      let name = `${opportunity.name}`;
      let description = `${opportunity.description}`;
      let tags = `${RadGrad.tag.getTagNames(opportunity.tagIDs)}`;

      tags = tags.split(",");

      return {name: name, description: description, tags: tags};
    })
  }

});