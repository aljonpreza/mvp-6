
defineOpportunityTypes = function () {
  let initialOpportunityTypes = [
    {name: "Research", slug: "research", description: "A research project."},
    {name: "Club", slug: "club", description: "A student club related to ICS."},
    {name: "Internship", slug: "internship", description: "An internship related to ICS."},
    {name: "CloudEd", slug: "cloud-ed", description: "Online education via coursera, udacity, etc."},
    {name: "Event", slug: "event", description: "An event related to ICS."}
  ];

  _.each(initialOpportunityTypes, RadGrad.opportunitytype.define);
};