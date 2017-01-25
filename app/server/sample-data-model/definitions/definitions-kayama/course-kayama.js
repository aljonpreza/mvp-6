/**
 * This function defines an array of courses.
 * To be invoked in LoadDataModel.js.
 * Created by Kelsie Yamakawa.
 */

defineCoursesKayama = function() {
  let kayamaCourses = [
    {
      name: "Security and Trust I: Resource Protections",
      slug: "ics355",
      number: "ICS 355",
      description: "Security and trust in computers, networks, and society. Security models. Access and authorization. Availability and Denial-of-Service. Trust processes and network interactions.  For more information see [here](http://www.asecolab.org/courses/ics355/).",
      tags: ["network-security"]
    },
    {
      name: "Introduction to Artificial Intelligence Programming",
      slug: "ics361",
      number: "ICS 361",
      description: "Introduction to the theory of Artificial Intelligence and the practical application of AI techniques in Functional (Common LISP and/or Scheme) and Logic (Prolog) programming languages. Students gain practical experience through programming assignments and projects.  For more information see [here](http://www2.hawaii.edu/~nreed/ics361/).",
      tags: ["artificial-intelligence", "common-lisp", "scheme", "prolog"]
    },
    {
      name: "Computing Ethics for Lab Assistants",
      slug: "ics390",
      number: "ICS 390",
      description: "A lecture/discussion/internship on ethical issues and instructional techniques for students assisting a laboratory section of ICS 101. The class uses multiple significant writing and oral presentation activities to help students learn course content.",
      tags: ["computer-ethics", "communications"]
    },
    {
      name: "Software Engineering II",
      slug: "ics414",
      number: "ICS 414",
      description: "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project.  For more information see [here](http://philipmjohnson.github.io/ics414s16/).",
      tags: ["web-design", "software-engineering"]
    },
    {
      name: "Introduction to Programming for the Web",
      slug: "ics415",
      number: "ICS 415",
      description: "Introduction to emerging technologies for construction of World Wide Web (WWW)-based software. Covers programming and scripting languages used for the creation of WWW sites and client-server programming. Students will complete a medium-sized software project that uses languages and concepts discussed in class.  For more information see [here](https://ics415f13.wordpress.com/).",
      tags: ["web-design", "software-engineering"]
    },
    {
      name: "Ethics in Electrical Engineering",
      slug: "ee495",
      number: "EE 495",
      credithrs: 1,
      description: "Equip electrical engineers with the necessary background for ethical reasoning, as it pertains to technology, society, workplace issues, and the environment.  For more information see [here](https://ics415f13.wordpress.com/).",
      tags: ["engineering-ethics"]
    },
    {
      name: "Digital Systems and Computer Design Lab",
      slug: "ee361l",
      number: "EE 361L",
      credithrs: 1,
      description: "Laboratory for 361, experiments on digital systems and interfacing.  For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxERGhlQUVId3VWbG8/view).",
      tags: ["microprocessor-design", "electrical-engineering", "computer-engineering"]
    },
    {
      name: "Microelectronic Circuits I Lab",
      slug: "ee323l",
      number: "EE 323L",
      credithrs: 1,
      description: "Experiments on linear and logic properties of diodes and transistor networks.  For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxEd3BYVUhYQ2t1T2M/view).",
      tags: ["electrical-engineering", "circuit-design"]
    },
    {
      name: "Computer Data Structures and Algorithms Lab",
      slug: "ee367l",
      number: "EE 367L",
      credithrs: 1,
      description: "Laboratory for 367.  For more information see [here](https://drive.google.com/file/d/0B0yBjGINCgxEVlFnc2pwZEx4eWs/view).",
      tags: ["electrical-engineering", "algorithms", "system-programming", "cplusplus"]
    }
  ];

  _.each(kayamaCourses, RadGrad.course.define);
};
