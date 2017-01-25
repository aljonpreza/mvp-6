/**
 * Definitions for courses.
 * Created by brianjyriel on 1/20/16.
 */
// ICS 455, ICS 461, ICS 462, ICS 464, ICS 465
defineCoursesbjboado = function() {
  let bjboadoCourses = [
    {
      name: "Security and Trust II: Information Assurance",
      slug: "ics455",
      number: "ICS 455",
      description: "Channel security. Trojan and noninterference. Basic concepts of cryptology. Cryptographic primitives. Protocols for authentication and key establishment. Pre: 355. (Fall only).",
      tags: ["network-security"]
    },
    {
      name: "Artificial Intelligence",
      slug: "ics461",
      number: "ICS 461",
      description: "Survey of artificial intelligence: natural language processing, vision and robotics, expert systems. Emphasis on fundamental concepts: search, planning, and problem solving, logic, knowledge representation. Pre: 311 or consent.",
      tags: ["algorithms"]
    },
    {
      name: "Artificial Intelligence for Games",
      slug: "ics462",
      number: "ICS 462",
      description: "Techniques to stimulate intelligence in video games: movement, pathfinding with A* search, decision/behavior trees, state machines, machine learning, tactics. Extend games with your own AI implementations; experience 'shootout' contests for the best AI algorithm/implementation. Pre: 212 and (314 or 361) and (PHYS 151 or PHYS 170). (Alt. years)",
      tags: ["algorithms"]
    },
    {
      name: "Human Computer Interaction I",
      slug: "ics464",
      number: "ICS 464",
      description: "Application of concepts and methodologies of human factors, psychology and software engineering to address ergonomic, cognitive, and social factors in the design and evaluation of human-computer systems. Pre: two ICS 300-level courses or consent.",
      tags: ["software-engineering"]
    },
    {
      name: "Introduction to Hypermedia",
      slug: "ics465",
      number: "ICS 465",
      description: "Basic issues of interactive access to information in various formats on computers. Available hardware and software: editing, integration, programming. Implementation of a sample information system. Pre: 311.",
      tags: ["algorithms"]
    }
  ];

  _.each(bjboadoCourses, RadGrad.course.define);
};