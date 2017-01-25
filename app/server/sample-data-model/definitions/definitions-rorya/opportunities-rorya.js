/**
 * Created by Rory on 1/19/2016.
 */
defineOpportunitiesRorya = function() {
  let sampleOpportunities = [
    {
      name: "Data Science Specialization",
      slug: "data-science-specialization",
      description: "This Specialization covers the concepts and tools you'll need throughout the entire data science pipeline, from asking the right kinds of questions to making inferences and publishing results. In the final Capstone Project, you'll apply the skills learned by building a data product using real-world data. At completion, students will have a portfolio demonstrating their mastery of the material. For more information see [here](https://www.coursera.org/specializations/jhu-data-science).",
      opportunityType: "cloud-ed",
      sponsor: "philipjohnson",
      tags: ["data-science", "r", "machine-learning"],
      startActive: moment("2016-01-01").toDate(),
      endActive: moment("2016-01-17").toDate()
    },
    {
      name: "Shidler Business Plan Competition 2016",
      slug: "business-plan-competition2016",
      description: "Form teams and compete to come up with the best business plan. Substantial cash prizes for highest scoring teams. Teams that reach the semi-final round will gain access to mentors who can advise during the business plan process and business pitch preparation. For more information see [here](http://pace.shidler.hawaii.edu/bpc).",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["business"],
      startActive: moment("2016-01-17").toDate(),
      endActive: moment("2016-01-31").toDate()
    }
  ];

  _.each(sampleOpportunities, RadGrad.opportunity.define);
};