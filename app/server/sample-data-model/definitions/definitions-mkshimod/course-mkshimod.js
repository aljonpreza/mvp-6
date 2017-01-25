defineCoursesMkshimod = function() {
  let mkshimodCourse = [
    {
      name: "Introduction to Computer Science I",
      slug: "ics111",
      number: "ICS 111",
      credithrs: 4,
      description: "Overview of computer science, writing programs.",
      tags: ["java"]
    },
    {
      name: "Discrete Mathematics for Computer Science I",
      slug: "ics141",
      number: "ICS 141",
      description: "Logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, probability theory.",
      tags: ["mathematics", "algorithms"]
    },
    {
      name: "Introduction to Computer Science II",
      slug: "ics211",
      number: "ICS 211",
      credithrs: 4,
      description: "Algorithms and their complexity, introduction to software engineering, data structures, searching and sorting algorithms, numerical errors. Pre: grade of 'B' or higher in 111 or consent.",
      tags: ["algorithms"]
    },
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages. Pre: 211 or consent.",
      tags: ["c", "cplusplus"]
    },
    {
      name: "Introduction to Scripting",
      slug: "ics215",
      number: "ICS 215",
      description: "Introduction to scripting languages for the integration of applications and systems. Scripting in operating systems, web pages, server-side application integration, regular expressions, event handling, input validation, selection, repetition, parameter passing, Perl, JavaScript, and PHP. A-F only. Pre: 211 (or concurrent), or consent. (Once a year)",
      tags: ["perl", "javascript", "ruby"]
    },
    {
      name: "Computer Communication Networks",
      slug: "ee449",
      number: "EE 449",
      description: "ISO Reference Model. Physical Layer, Data Link Layer, Network Layer and Transport Layer protocols. Wired and wireless local-area networks. Structure and operation of the Internet including routing, congestion control and flow control. Pre: 315 and one of 342, or MATH 371 or MATH 471; or consent.",
      tags: ["computer-engineering", "electrical-engineering"]
    },
    {
      name: "Computer Architecture",
      slug: "ee461",
      number: "EE 461",
      description: "Structure of stored program machines, data flow machines, pipelining, fault-tolerant computing, instruction set design, effects of compilation on architecture, RISC vs. CISC architecture, uses of parallelism. Pre: 361.",
      tags: ["computer-engineering", "computer-architecture"]
    },
    {
      name: "Object-oriented Software Engineering",
      slug: "ee467",
      number: "EE 467",
      description: "Introduction to advanced techniques for designing, implementing, and testing computer software with a particular focus on using object-oriented design, analysis, and programming to produce high-quality computer programs that solve non-trivial problems. Pre: 367 or consent.",
      tags: ["software-engineering", "computer-engineering", "oop"]
    },
    {
      name: "Introduction to Operating Systems",
      slug: "ee468",
      number: "EE 468",
      description: "Computer system organization; multiprocessor systems, memory hierarchies, assemblers, compilers, operating systems, virtual machine, memory management, processor management; information management. Pre: 361 (or concurrent) and 367 or consent.",
      tags: ["computer-engineering", "operating-systems"]
    }
  ];

  _.each(mkshimodCourse, RadGrad.course.define);
}