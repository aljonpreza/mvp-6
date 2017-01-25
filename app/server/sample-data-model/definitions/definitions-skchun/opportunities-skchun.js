defineSkchunOpportunities = function() {
  let SkchunOpportunities = [
    {
      name: "ASECOLab",
      slug: "aseco-lab",
      description: "We study how security is achieved through adaptation, and how fortifications give an illusion of security. This has to do with economics, but also with cryptography. For more information see [here](http://www.asecolab.org/).",
      opportunityType: "research",
      sponsor: "philipjohnson",
      tags: ["computer-security", "economics", "cryptography"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "Bioinformatics Laboratory",
      slug: "bil-lab",
      description: "The main research projects at BiL Manoa are Bioinformatics and Computational Biology. For more information see [here](http://navet.ics.hawaii.edu/~poisson/BiL/index.html).",
      opportunityType: "research",
      sponsor: "philipjohnson",
      tags: ["bioinformatics", "biology", "hawaii"],
      startActive: moment("2016-01-02").toDate(),
      endActive: moment("2016-01-03").toDate()
    },
    {
      name: "Collaborative Software Development Laboratory",
      slug: "csdl",
      description: "Our goal is to support collaborative development of world-class software development skills.   Through research, education, and technology transfer, we pursue this goal for CSDL members, the University of Hawaii, our affiliates, and the Hawaiian, U.S., and international software research and development communities.  For more information see [here](http://csdl.ics.hawaii.edu/).",
      opportunityType: "research",
      sponsor: "philipjohnson",
      tags: ["education", "software-engineering", "electrical-engineering"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "Concurrency Research Group",
      slug: "corg",
      description: "CoRG researchers develop novel simulation models, algorithms, and systems for parallel and distributed computing platforms and applications. We study platforms including single clusters, grids that aggregate multiple high-end clusters across different institutions, and even thousands of volatile PCs scattered over the Internet.  For more information see [here](http://navet.ics.hawaii.edu/~casanova/corg/index.html).",
      opportunityType: "research",
      sponsor: "philipjohnson",
      tags: ["algorithms", "parallel-programming", "distributed-computing"],
      startActive: moment("2016-01-11").toDate(),
      endActive: moment("2016-12-31").toDate()
    },
    {
      name: "Hawaii Computer-Human Interaction Lab",
      slug: "hichi",
      description: "We are an interdisciplinary team of researchers interested in understanding how people use information systems and dedicated to informing design based on human performance data.  For more information see [here](http://manoa.hawaii.edu/hichi/).",
      opportunityType: "research",
      sponsor: "philipjohnson",
      tags: ["human-computer-interaction", "cognitive-science", "engineering"],
      startActive: moment("2016-05-20").toDate(),
      endActive: moment("2016-07-20").toDate()
    }
  ];

  _.each(SkchunOpportunities, RadGrad.opportunity.define);
};