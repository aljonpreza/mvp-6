/**
 * This function defines an array of courses.
 * To be invoked in LoadDataModel.js.
 *
 * Created by Aljon Preza | January 17, 2016
 */
defineCoursesAljonp = function() {
  let aljonpCourses = [
    {
      name: "Digital Systems and Computer Design",
      slug: "ee361",
      number: "EE 361",
      description: "Design methodology, processor design, control design, memory organization, system organization. Pre: 160 and 260, or consent.  For more information see [here](https://www.google.com/url?q=https://drive.google.com/file/d/0B0yBjGINCgxESkdoTDhDZjR1T00/view?usp%3Ddrivesdk&sa=D&ust=1453094144271000&usg=AFQjCNHT7cWGgAiF7psHH_1q6seUdmxgOQ).",
      tags: ["microprocessor-design", "electrical-engineering", "computer-engineering"]
    },
    {
      name: "CMOS VLSI Design",
      slug: "ee366",
      number: "EE 366",
      credithrs: 4,
      description: "Introduction to the design of very large scale integrated (VLSI) systems and use of CAD tools and design languages. Lab includes hands-on use of CAD tools and experiments with field programmable logic devices. Pre: 260.  For more information see [here](https://www.google.com/url?q=https://drive.google.com/file/d/0B0yBjGINCgxEMmRrZ3JyOEk3eWM/view?usp%3Ddrivesdk&sa=D&ust=1453094144271000&usg=AFQjCNHBg8-WeKC9yIS-b2QiYWDrpOReJA).",
      tags: ["electrical-engineering", "circuit-design"]
    },
    {
      name: "Computer Data Structures and Algorithms",
      slug: "ee367",
      number: "EE 367",
      description: "Introduction to computer programming algorithms with emphasis on advanced data structures, input-output routines, files, and interpreters. Pre: 205 (with a minimum grade of C-) and ICS 141.  For more information see [here](https://www.google.com/url?q=https://drive.google.com/file/d/0B0yBjGINCgxEaHc0R3FaTTJFaTg/view?usp%3Ddrivesdk&sa=D&ust=1453094144271000&usg=AFQjCNFxlezFEMTCOmwVNBY5Wv2Gaft9qw).",
      tags: ["electrical-engineering", "algorithms", "system-programming", "cplusplus"]
    },
    {
      name: "Engineering Electromagnetics I",
      slug: "ee371",
      number: "EE 371",
      description: "Transient and steady-state waves on transmission lines. Plane wave solutions of Maxwell's equations. Application of Maxwell's equations under static and time-varying conditions.  For more information see [here](https://www.google.com/url?q=https://drive.google.com/file/d/0B0yBjGINCgxEWjRndlFESnphWjQ/view?usp%3Ddrivesdk&sa=D&ust=1453094144272000&usg=AFQjCNEoUSEhHesrjXjz3S--kW2LE9sD6A).",
      tags: ["electrical-engineering", "mathematics", "physics"]
    },
    {
      name: "Wireless Data Networks",
      slug: "ee469",
      number: "EE 469",
      description: "Mobile agent's platforms and systems, mobile agent-based service implementation, middleware, and configuration, wireless local area networks, wireless protocols, network architecture supporting wireless applications, routing protocols in mobile and wireless networks, handoff in mobile and wireless networks. Pre: 344 and 367, or consent.  For more information see [here](https://www.google.com/url?q=https://drive.google.com/file/d/0B0yBjGINCgxEdzJWeUtKSG5zdzg/view?usp%3Ddrivesdk&sa=D&ust=1453094144274000&usg=AFQjCNEeZgOJBN2JoUk4ZqqxTgqW5Mk8FA).",
      tags: ["electrical-engineering", "wireless-networks", "network-design"]
    }
  ];

  _.each(aljonpCourses, RadGrad.course.define);
};