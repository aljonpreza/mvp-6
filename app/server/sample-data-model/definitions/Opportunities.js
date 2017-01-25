defineOpportunities = function() {
  let sampleOpportunities = [
    //{
    //  name: "ATT Hackathon 2015",
    //  slug: "hack15",
    //  description: "Da best",
    //  opportunityType: "event",
    //  sponsor: "philipjohnson",
    //  tags: ["software-engineering"],
    //  startActive: moment("2015-01-12").toDate(),
    //  endActive: moment("2015-02-12").toDate()
    //},
    //{
    //  name: "ACM Manoa Membership",
    //  slug: "acm-manoa",
    //  description: "ACM Student Chapter",
    //  opportunityType: "club",
    //  sponsor: "henricasanova",
    //  tags: ["software-engineering", "silicon-valley"],
    //  startActive: moment("2015-01-12").toDate(),
    //  endActive: moment("2016-02-12").toDate()
    //}
    {
      name: "HICapacity",
      slug: "hicapacity",
      description: "At HI Capacity, we focus on providing education and raising the awareness of all these topics in the local community.  If you are passionate about a subject and would love to help organize a Community Night, we are always looking for you. For more information see [here](https://hicapacity.org/).",
      opportunityType: "club",
      sponsor: "philipjohnson",
      tags: ["engineering", "software-engineering", "computer-engineering"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "ATT Hackathon 2016",
      slug: "atthack16",
      description: "Come turn your ideas into apps and put your coding skills to the test.  Compete for cash and prices as you work with other developers and industry experts to fast-build an app from scratch in 24 hours. For more information see [here](https://devsummit.att.com/).",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["computer-engineering", "software-engineering"],
      startActive: moment("2016-01-02").toDate(),
      endActive: moment("2016-01-03").toDate()
    },
    {
      name: "ACM Manoa",
      slug: "acm-manoa",
      description: "ACM is the world's largest education and scientific computing society.  It delivers resrouces that advance computing as a science and a profession.  ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications, conferences, and career resources.  For more information see [here](http://acmmanoa.acm.org/index.html).",
      opportunityType: "club",
      sponsor: "philipjohnson",
      tags: ["computer-engineering", "software-engineering"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "IEEE Student Chapter",
      slug: "ieee-manoa",
      description: "IEEE is a non-profit, technical professional association of more than 380,000 individual members in 150 countries.  IEEE is the largest professional organization in the world.  Through its members, IEEE is a leading authority in technical areas ranging from computer engineering, biomedical technology, electric power, telecommunications, aerospace and consumer electronics.  For more information see [here](http://ieeeatuhm.com/).",
      opportunityType: "club",
      sponsor: "philipjohnson",
      tags: ["computer-engineering", "electrical-engineering", "software-engineering"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "ITMA Student Chapter",
      slug: "itma-manoa",
      description: "The Information Technology Management Association (ITMA) is a business club motivated and dedicated to provide its members social and professional relationships, provide access to technical resources, and be an example of a growing technical environment to foster career development. The Purposes of the ITMA are to provide a better understanding of the nature and functions of information systems and related areas. For more information see [here](http://itmahawaii.com/).",
      opportunityType: "club",
      sponsor: "philipjohnson",
      tags: ["business", "finance", "it"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "LiveAction internship",
      slug: "liveaction-internship",
      description: "LiveAction was originally founded as ActionPacked Networks to aid the US Department of Defense in the operation of its networks.  LiveAction Software was created including an innovative visual display, real-time big data analytics for decision-making and deep integration with routers and switches for unparalleled network control.  For more information see [here](http://liveaction.com/careers/).",
      opportunityType: "internship",
      sponsor: "philipjohnson",
      tags: ["hawaii", "silicon-valley", "network-design", "computer-engineering", "software-engineering"],
      startActive: moment("2016-05-20").toDate(),
      endActive: moment("2016-07-20").toDate()
    },
    {
      name: "Global Game Jam",
      slug: "global-game-jam",
      description: "The Global Game Jam (GGJ) is the world's largest game jam event (game creation) taking place around the world at physical locations. At each site, participants gather to develop ideas, form small groups, create new, creative, innovative games, and present them to their peers and the global community, all in a limited time span.  For more information see [here](http://globalgamejam.org).",
      opportunityType: "event",
      sponsor: "philipjohnson",
      tags: ["game-design"],
      startActive: moment("2016-01-29").toDate(),
      endActive: moment("2016-01-31").toDate()
    }
  ];

  _.each(sampleOpportunities, RadGrad.opportunity.define);
};