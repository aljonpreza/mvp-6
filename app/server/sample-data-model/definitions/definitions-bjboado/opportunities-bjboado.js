/**
 * Created by brianjyriel on 1/20/16.
 */
defineOpportunitiesbjboado = function() {
  let bjboadoOpportunities = [
    {
      name: "College of Engineering (COE) Student Research Symposium",
      slug: "student-research-symposium",
      description: "Provides undergraduate engineering students the opportunity to present their scholarly works in a friendly yet professional setting similar to national and international conferences. For more information, see [here](http://www.eng.hawaii.edu/wp-content/uploads/2014/08/Announcement-of-Funding-2014.pdf)",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["electrical-engineering"],
      startActive: moment("2015-10-10").toDate(),
      endActive: moment("2016-04-20").toDate()
    },
    {
      name: "Summer Intern - Survey",
      slug: "summer-intern",
      description: "Hawaiian Electric Engineering Summer Internships offer students an opportunity to gain real life survey experience working on professional level projects and 'hands-on' challenges.  Interns are coached and mentored by employees who are committed to helping the interns develop their technical skills and explore future professional opportunities. For more information, see [here](https://irecruitment.heco.com/OA_HTML/OA.jsp?page=/oracle/apps/irc/candidateSelfService/webui/VisVacDispPG&OAHP=IRC_EXT_SITE_VISITOR_APPL&OASF=IRC_VIS_VAC_DISPLAY&akRegionApplicationId=821&transactionid=1927322114&retainAM=N&addBreadCrumb=RP&p_svid=29751&p_spid=1312736&oapc=7&oas=_WdxFuF52AArgIFQ6zkakg..)",
      opportunityType: "internship",
      sponsor: "philipjohnson",
      tags: ["electrical-engineering"],
      startActive: moment("2016-01-01").toDate(),
      endActive: moment("2016-01-29").toDate()
    },
    {
      name: "Software Engineering Internships @ Qualcomm (Summer 2016)",
      slug: "qualcomm",
      description: "Headquartered in San Diego, Qualcomm develops, manufactures, markets, licenses, and operates advanced 4G & 3G communications systems and products based on its proprietary digital wireless technologies. For more information, see [here](https://jobs.qualcomm.com/public/jobDetails.xhtml?requisitionId=1937504)",
      opportunityType: "internship",
      sponsor: "philipjohnson",
      tags: ["electrical-engineering", "software-engineering"],
      startActive: moment("2015-12-04").toDate(),
      endActive: moment("2016-03-01").toDate()
    },
    {
      name: "Qualcomm Research Center Internship (Vienna, Austria)",
      slug: "qualcomm-research-center-vienna",
      description: "Join our Corporate R&D team in Vienna, Austria and interact closely with system engineers and software developers in a world-class Computer Vision team. For more information, see [here](https://jobs.qualcomm.com/public/jobDetails.xhtml?requisitionId=1938800)",
      opportunityType: "internship",
      sponsor: "philipjohnson",
      tags: ["electrical-engineering", "software-engineering"],
      startActive: moment("2016-01-12").toDate(),
      endActive: moment("2016-03-10").toDate()
    },
    {
      name: "National Student Exchange",
      slug: "national-student-exchange",
      description: "A study away experience that fits into university initiatives for globalization, diversity and engagement. NSE participants have found their exchanges culturally enriching, academically rewarding, and one of the most significant experiences of their undergraduate education. For more information see [here](http://www.nse.org/exchange/campusprofile.asp?c=102)",
      opportunityType: "club",
      sponsor: "philipjohnson",
      tags: ["electrical-engineering", "software-engineering"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-05-13").toDate()
    }
  ];

  _.each(bjboadoOpportunities, RadGrad.opportunity.define);
};