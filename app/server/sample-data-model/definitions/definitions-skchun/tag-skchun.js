defineTagSkchun = function() {
  let SkchunTags = [
    /*CS Disciplines*/
    {
      name: "Dynamic Programming",
      slug: "dynamic-programming",
      description: "Dynamic programming is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions - ideally, using a memory-based data structure.  For more information, see [here](https://en.wikipedia.org/wiki/Dynamic_programming)",
      tagType: "cs-disciplines"
    },
    {
      name: "Analytical Modeling",
      slug: "analytical-modeling",
      description: "Analytical models are mathematical models that have a closed form solution, i.e. the solution to the equations used to describe changes in a system can be expressed as a mathematical analytic function. For more information, see [here](http://serc.carleton.edu/introgeo/mathstatmodels/Analytical.html)",
      tagType: "cs-disciplines"
    },
    {
      name: "Distributed Computing",
      slug: "distributed-computing",
      description: "A distributed system is a software system in which components located on networked computers communicate and coordinate their actions by passing messages. The components interact with each other in order to achieve a common goal.",
      tagType: "cs-disciplines"
    },

    /*non-CS Disciplines*/
    {
      name: "Law",
      slug: "law",
      description: "Law is a system of rules that are enforced through social institutions to govern behaviour.  For more information, see [here](https://en.wikipedia.org/wiki/Law)",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Linguistics",
      slug: "linguistics",
      description: "The scientific study of language and its structure, including the study of morphology, syntax, phonetics, and semantics.  There are three aspects to this study: language form, language meaning, and language in context.  For more information, see [here](https://en.wikipedia.org/wiki/Linguistics)",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Marketing",
      slug: "marketing",
      description: "Marketing describe the means of communication between the company and the consumer audience.  For more information, see [here](https://en.wikipedia.org/wiki/Marketing)",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Mathematics",
      slug: "mathematics",
      description: "Mathematics is the study of topics such as quantity (numbers), structure, space, and change.  For more information, see [here](en.wikipedia.org/?title=Mathematics)",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Medicine",
      slug: "medicine",
      description: "Medicine is the science and practice of the diagnosis, treatment, and prevention of disease.  For more information, see [here](https://en.wikipedia.org/wiki/Medicine)",
      tagType: "non-cs-disciplines"
    },

    //*technologies*/
    {
      name: "NumPy",
      slug: "numpy",
      description: "NumPy is the fundamental package for scientific computing with Python.  For more information, see [here](www.numpy.org/)",
      tagType: "technologies"
    },
    {
      name: "SciPy",
      slug: "scipy",
      description: "SciPy is an open source Python library used by scientists, analysts, and engineers doing scientific computing and technical computing.  For more information, see [here](www.scipy.org/)",
      tagType: "technologies"
    },
    {
      name: "SimPy",
      slug: "simpy",
      description: "SimPy is a process-based discrete-event simulation framework based on standard Python.  For more information, see [here](https://simpy.readthedocs.org/)",
      tagType: "technologies"
    },
    {
      name: "S3",
      slug: "s3",
      description: "Amazon S3 is an online file storage web service offered by Amazon Web Services.  For more information, see [here](https://en.wikipedia.org/wiki/Amazon_S3)",
      tagType: "technologies"
    },
    {
      name: "Amazon Web Services",
      slug: "amazon-web-services",
      description: "Amazon Web Services, is a collection of cloud computing services, also called web services, that make up a cloud-computing platform offered by Amazon.com. These services operate from 12 geographical regions across the world.  For more information, see [here](https://en.wikipedia.org/wiki/Amazon_Web_Services)",
      tagType: "technologies"
    },
  ];

  _.each(SkchunTags, RadGrad.tag.define);
};