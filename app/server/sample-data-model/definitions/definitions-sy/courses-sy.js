defineCoursesSy = function () {
  let syCourses = [
    {
      name: "Microelectronic Circuits I",
      slug: "ee323",
      number: "EE 323",
      description: "Semiconductor structures, operating principles and characteristics of diodes and amplifying devices. Their application as circuit elements in building basic digital, analog, and integrated circuit subsystems. For more information see [here](https://www.sis.hawaii.edu/uhdad/bwckctlg.p_disp_course_detail?cat_term_in=201630&inst_in=MAN&subj_code_in=EE&crse_numb_in=323).",
      tags: ["electrical-engineering", "circuit-design"]
    },
    {
      name: "Physical Electronics",
      slug: "ee324",
      number: "EE 324",
      description: "Review of quantum mechanics fundamentals, H-atom, and chemical bonding. Introduction to band structure models and materials. Semiconductor doping, charge carrier statistics and charge transport, including ambipolar transport. Metal-semiconductor and PN junctions. For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ee.htm).",
      tags: ["electrical-engineering", "circuit-design"]
    },
    {
      name: "Probability and Statistics",
      slug: "ee342",
      number: "EE 342",
      description: "Probability, statistics, random variables, distributions, densities, expectations, limit theorems, and applications to electrical engineering. For more information see [here](https://www.sis.hawaii.edu/uhdad/bwckctlg.p_disp_course_detail?cat_term_in=201630&inst_in=MAN&subj_code_in=EE&crse_numb_in=342).",
      tags: ["electrical-engineering", "mathematics"]
    },
    {
      name: "Networking I",
      slug: "ee344",
      number: "EE 344",
      credithrs: 4,
      description: "Covers 4 semesters from the Cisco Networking Academy plus supplementary material; hands-on experience with routers and switches; prepares students for the CCNA. Topics include TCP/IP, LANs, WANs, routing protocols, network security; PPP; ISDN, frame relay. For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ee.htm).",
      tags: ["electrical-engineering", "wireless-networks"]
    },
    {
      name: "Introduction to Computer and Network Security",
      slug: "ee406",
      number: "EE 406",
      description: "Review basic network mechanisms, introduce basic cryptography concepts, and study algorithms and protocols used in computer and network security. Discuss practical security mechanisms. For more information see [here](https://www.sis.hawaii.edu/uhdad/bwckctlg.p_disp_course_detail?cat_term_in=201630&inst_in=MAN&subj_code_in=EE&crse_numb_in=406).",
      tags: ["electrical-engineering", "network-security", "cryptography"]
    }
  ];

  _.each(syCourses, RadGrad.course.define);
};