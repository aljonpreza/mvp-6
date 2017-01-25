/**
 * Created by Rory on 1/19/2016.
 */
defineCoursesRorya = function() {
  let Courses = [
    /*CS-disciplines*/

    {
      name: "Computer Security and Ethics",
      slug: "ics425",
      number: "ICS 425",
      description: "Theoretical results, security policy, encryption, key management, digital signatures, certificates, passwords. Ethics: privacy, computer crime, professional ethics. Effects of the computer revolution on society. For more information click [here](http://courses.ics.hawaii.edu/syllabuses/ICS425.html).",
      tags: ["computer-security"]
    },
    {
      name: "Computer System Security",
      slug: "ics426",
      number: "ICS 426",
      description: " Information flow, confinement, information assurance, malicious programs, vulnerability analysis, network security, writing secure programs. For more information click [here](http://courses.ics.hawaii.edu/syllabuses/ICS426.html).",
      tags: ["computer-security", "network-security"]
    },
    {
      name: "Computer Architecture",
      slug: "ics431",
      number: "ICS 431",
      description: "Memory management, control flow, interrupt mechanisms, multiprocessor systems, special-purpose devices. For more information click [here](http://courses.ics.hawaii.edu/syllabuses/ICS431.html).",
      tags: ["computer-architecture"]
    },
    {
      name: "Concurrent and High-Performance Programming",
      slug: "ics432",
      number: "ICS 432",
      description: "Principles of concurrent and high performance programming. Multi-threading in C and Java for shared-memory programming. Distributed memory programming with Java. Introduction to cluster computing. For more information click [here](http://courses.ics.hawaii.edu/syllabuses/ICS432.html).",
      tags: ["parallel-programming", "high-performance-programming"]
    },
    {
      name: "Machine Learning Fundamentals",
      slug: "ics435",
      number: "ICS 435",
      description: "Introduction to machine learning concepts with a focus on relevant ideas from computational neuroscience. Information processing and learning in the nervous system. Neural networks. Supervised and unsupervised learning. Basics of statistical learning theory. For more information click [here](http://courses.ics.hawaii.edu/syllabuses/ICS435.html).",
      tags: ["machine-learning"]
    },
    {
      name: "Web Design and Management",
      slug: "ics315",
      number: "ICS 315",
      description: "Web design principles, XML and HTML, tables, forms, and frames, multimedia objects, security, scripting for web applications, web servers, commercial aspects, new technology. For more information click [here](http://courses.ics.hawaii.edu/syllabuses/ICS315.html).",
      tags: ["web-design"]
    },
    {
      name: "Computer Project",
      slug: "ics499",
      number: "ICS 499",
      description: "Individual or small-group projects in system design or application under faculty supervision.",
      tags: []
    }

  ];

  _.each(Courses, RadGrad.course.define);
};
