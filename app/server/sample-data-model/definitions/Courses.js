defineCourses = function() {
  let Courses = [
    /*nonCS-disciplines*/
    {
      name: "Other 100-level course",
      slug: "oth1xx",
      number: "OTH 1xx",
      description: "Any other course at the 100 level.",
      tags: []
    },
    {
      name: "Other 200-level course",
      slug: "oth2xx",
      number: "OTH 2xx",
      description: "Any other course at the 200 level.",
      tags: []
    },
    {
      name: "Other 300-level course",
      slug: "oth3xx",
      number: "OTH 3xx",
      description: "Any other course at the 300 level.",
      tags: []
    },
    {
      name: "Other 400-level course",
      slug: "oth4xx",
      number: "OTH 4xx",
      description: "Any other course at the 400 level.",
      tags: []
    },
    {
      name: "Other 500-level course",
      slug: "oth5xx",
      number: "OTH 5xx",
      description: "Any other course at the 500 level.",
      tags: []
    },
    {
      name: "Other 600-level course",
      slug: "oth6xx",
      number: "OTH 6xx",
      description: "Any other course at the 600 level.",
      tags: []
    },
    {
      name: "Other 700-level course",
      slug: "oth7xx",
      number: "OTH 7xx",
      description: "Any other course at the 700 level.",
      tags: []
    },
    {
      name: "Other 800-level course",
      slug: "oth8xx",
      number: "OTH 8xx",
      description: "Any other course at the 800 level.",
      tags: []
    },
    /*CS-disciplines*/
    {
      name: "Discrete Mathematics for Computer Science II",
      slug: "ics241",
      number: "ICS 241",
      description: "Discrete Mathematics for Computer Science II (3) Program correctness, recurrence relations and their solutions, divide and conquer relations, relations and their properties, graph theory, trees and their applications, Boolean algebra, introduction to formal languages and automata theory.",
      tags: ["mathematics", "data-science"]
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      credithrs: 4,
      description: "Algorithms (4) (4 1-hr Lec) Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods. Complexity analyses using recurrence relations, probabilistic methods, and NP-completeness. Applications to order statistics, disjoint sets, B-trees and balanced trees, graphs, network flows, and string matching. For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ics.htm).",
      tags: ["software-engineering", "mathematics","theory-of-computation","java","mapreduce","algorithms"]
    },
    {
      name: "Machine-Level and Systems Programming",
      slug: "ics312",
      number: "ICS 312",
      description: "Machine-Level and Systems Programming (3) Machine organization, machine instructions, addressing modes, assembler language, subroutine linkage, linking to higher-level languages, interface to operating systems, introduction to assemblers, loaders and compilers.  For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ics.htm).",
      tags: ["microprocessor-design", "operating-systems", "computer-engineering","computer-architecture"]
    },
    {
      name: "Programming Language Theory",
      slug: "ics313",
      number: "ICS 313",
      description: "Programming Language Theory (3) Syntax, semantics, control structures, variable binding and scopes, data and control abstractions. Programming in functional (LISP) and logic (Prolog) programming styles.  For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ics.htm).",
      tags: ["software-engineering", "microprocessor-design", "linguistics"]
    },
    {
      name: "Basic Concepts of Computer Science",
      slug: "ics222",
      number: "ICS 222",
      description: "What is computer science about? What is the difference between computers and other machines? What are the limits of computation? Are there computers that are not machines? Understand the basic issues of computability, complexity, and network effects, and learn to apply them in the practice of computation.  For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ics.htm).",
      tags: [ "theory-of-computation","computer-architecture"]

     },
    {
      name: "Software Engineering I",
      slug: "ics314",
      number: "ICS 314",
      description: "Problem analysis and design, team-oriented development, quality assurance, configuration management, project planning.",
      tags: ["software-engineering", "javascript", "web-design"]
    },
    {
      name: "Data Storage and Retrieval",
      slug: "ics321",
      number: "ICS 321",
      description: "Data storage devices, timing and capacity, programming for files, hashed and indexed files, introduction to relational database systems.",
      tags: ["software-engineering", "database", "system-programming", "data-science"]
    },
    {
      name: "Logic Design and Microprocessors",
      slug: "ics331",
      number: "ICS 331",
      credithrs: 4,
      description: "Basic machine architecture, microprocessors, bus organization, circuit elements, logic circuit analysis and design, microcomputer system design.",
      tags: ["microprocessor-design", "circuit-design", "arduino", "machine-learning"]
    },
    {
      name: "Operating Systems",
      slug: "ics332",
      number: "ICS 332",
      description: "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems.",
      tags: ["software-engineering", "operating-systems", "computer-architecture", "windows", "ios", "osx"]
    },
    {
      name: "Network Design and Management",
      slug: "ics351",
      number: "ICS 351",
      description: "Overview of the internet and its capabilities; introduction to HTTP, TCP/IP, ethernet, and wireless 802.11; routers, switches, and NAT; network and wireless security; practical experience in designing and implementing networks.",
      tags: ["software-engineering", "network-design", "network-security", "wireless-networks"]
    },

    {
      name: "The Science, Psychology and Philosophy of Systems Design",
      slug: "ics419",
      number: "ICS 419",
      description: "Scientific, psychological and philosophical bases of systems design, including a survey of human-factors and ergonomic standards; the nature of innovation and creativity as it relates to systems design. Web-enhanced course.",
      tags: ["software-engineering", "computer-engineering"]
    },
    {
      name: "Database System",
      slug: "ics421",
      number: "ICS 421",
      description: "Principles of database systems, data modeling, relational models, database design, query languages, query optimization, concurrency control data security.",
      tags: ["software-engineering", "computer-engineering", "data-visualization"]
    },
    {
      name: "Data Processing",
      slug: "ics422",
      number: "ICS 422",
      description: "Role of data processing in organizations, programming practices, ethics, sequential and indexed file processing, report writing, online transaction processing.",
      tags: ["data-science","software-engineering", "computer-engineering"]
    },
    {
      name: "Data Security and Cryptography I",
      slug: "ics423",
      number: "ICS 423",
      description: "History of secret communication and confidential data storage. Elements of cryptography and cryptanalysis. Classical ciphers. Symmetric key cryptography. Public key cryptography. Data security in cyberspace.",
      tags: ["cryptography", "software-engineering", "computer-engineering"]
    },
    {
      name: "Application Frameworks",
      slug: "ics424",
      number: "ICS 424",
      description: "Experience producing applications with at least two different applications frameworks.",
      tags: ["software-engineering", "computer-engineering"]
    },
    {
      name: "Design for Mobile Devices",
      slug: "ics466",
      number: "ICS 466",
      description: " Lecture introducing design issues, programming languages, operating systems and mark-up languages for internet-enabled mobile devices, such as cell phones and PDAs.",
      tags: ["software-engineering", "silicon-valley", "mobile-devices"]
    },
    {
      name: "Cognitive Science",
      slug: "ics469",
      number: "ICS 469",
      description: "Introduces basic concepts, central problems, and methods from cognitive science. Identifies contributions from disciplines such as cognitive psychology, linguistics, artificial intelligence, philosophy, and neuroscience.",
      tags: ["psychology", "artificial-intelligence", "cognitive-science", "linguistics"]
    },
    {
      name: "Probability, Statistics, and Queuing",
      slug: "ics471",
      number: "ICS 471",
      description: "A hands-on introduction to probability, statistical inference, regression, Markov chains, queuing theory. Use of an interactive statistical graphics environment such as R.",
      tags: ["r", "mathematics", "data-science"]
    },
    {
      name: "Introduction to Bioinformatics Sequences and Genomes Analysis",
      slug: "ics475",
      number: "ICS 475",
      description: "Introduction to bioinformatics to computer sciences students by focusing on how computer sciences techniques can be used for the storage, analysis, prediction and simulation of biological sequences (DNA, RNA and proteins).",
      tags: ["bioinformatics", "data-visualization", "medical-informatics", "biology"]
    },
    {
      name: "Bioinformatics Algorithms and Tool Development",
      slug: "ics476",
      number: "ICS 476",
      description: "Study of commonly used bioinformatic algorithms, with an emphasis on string, tree, and graph algorithms. Presentation of probabilistic and clustering methods. Implementation of the studied algorithms and design of applications.",
      tags: ["bioinformatics", "data-visualization", "medical-informatics", "biology"]
    },
    {
      name: "Sophomore Project",
      slug: "ee296",
      number: "EE 296",
      credithrs: 1,
      description: "Sophomore Project.",
      tags: ["engineering"]
    },
    {
      name: "Junior Project",
      slug: "ee396",
      number: "EE 396",
      credithrs: 2,
      description: "Junior Project.",
      tags: ["engineering"]
    },
    {
      name: "Senior Project",
      slug: "ee496",
      number: "EE 496",
      credithrs: 3,
      description: "Senior Project.",
      tags: ["engineering"]
    }
  ];

  _.each(Courses, RadGrad.course.define);
};
