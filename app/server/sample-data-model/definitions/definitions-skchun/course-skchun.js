defineCoursesSkchun = function() {
  let SkchunCourses = [
    {
      name: "Theory of Computation",
      slug: "ics441",
      number: "ICS 441",
      description: "Grammars, sequential machines, equivalence, minimalization, analysis and synthesis, regular expressions, computability, unsolvability, Godel's theorem, Turing machines.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS441.html).",
      tags: ["theory-of-computation", "algorithms", "mathematics"]
    },
    {
      name: "Analytical Models and Methods",
      slug: "ics442",
      number: "ICS 442",
      description: "Applications of mathematical methods in computer science with emphasis on discrete mathematics, numerical computation, algebraic models, operations research.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS442.html).",
      tags: ["mathematics", "dynamic-programming", "analytical-modeling"]
    },
    {
      name: "Parallel Algorithms",
      slug: "ics443",
      number: "ICS 443",
      description: "Introduction to parallel models of computation and design and analysis of parallel algorithms.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS443.html).",
      tags: ["parallel-programming", "algorithms", "computer-architecture"]
    },
    {
      name: "Data Networks",
      slug: "ics451",
      number: "ICS 451",
      description: " Network analysis, architecture, digital signal analysis and design; circuit switching, packet switching, packet broadcasting; protocols and standards; local area networks; satellite networks; ALOHA channels; examples.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS451.html).",
      tags: ["network-design", "wireless-networks", "c"]
    },
    {
      name: "Software Design for Robotics",
      slug: "ics452",
      number: "ICS 452",
      description: "Sensors, actuators, signal processing, paradigms of robotic software design, introduction to machine learning, introduction to computer vision, and robot-to-human interaction. A-F only. Pre: two ICS 300-level courses or consent.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS452.html).",
      tags: ["robotics", "machine-learning", "computer-vision" ]
    }
  ];

  _.each(SkchunCourses, RadGrad.course.define);
};