defineTagRorya = function () {

  let Tags = [
    //technologies
    {
      name: "Windows",
      slug: "windows",
      description: "Windows is an operating system developed and sold by Microsoft. For more information click [here](https://www.microsoft.com/en-us/windows).",
      tagType: "technologies"
    },
    {
      name: "Matlab",
      slug: "matlab",
      description: "Matlab is a high-level language and interactive environment used by engineers and scientists for numerical computing, data analysis, and algorithm development, and application development. For more information click [here](http://www.mathworks.com/products/matlab/).",
      tagType: "technologies"
    },
    {
      name: "Mathematica",
      slug: "mathematica",
      description: "Mathematica is a symbolic mathematical computation program used for technical computing in areas such as science, engineering, mathematics, and computing. For more information click [here](https://www.wolfram.com/mathematica/).",
      tagType: "technologies"
    },
    {
      name: "Unity",
      slug: "unity",
      description: "Unity is a cross-platform game engine and game development platform. For more information click [here](https://unity3d.com/).",
      tagType: "technologies"
    },
    {
      name: "Azure",
      slug: "azure",
      description: "Azure is a cloud computing platform and infrastructure created by Microsoft for developing and deploying apps, storing and recovering data, or doing large scale computations. For more information click [here](https://azure.microsoft.com/en-us/).",
      tagType: "technologies"
    },

    //cs disciplines
    {
      name: "Computer Security",
      slug: "computer-security",
      description: "Computer Security is the protection of information systems from theft or damage to the hardware, the software, and to the information on them, as well as from disruption or misdirection of the services they provide. For more information click [here](https://en.wikipedia.org/wiki/Computer_security).",
      tagType: "cs-disciplines"
    },

    //non-cs disciplines
    {
      name: "Finance",
      slug: "finance",
      description: "Finance is the planning, management, and control of financial resources to achieve financial goals. For more information click [here](http://shidler.hawaii.edu/fei).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Geology and Geophysics",
      slug: "geology-geophysics",
      description: "Geology and Geophysics is centered around the scientific study of the exterior and interior of the Earth and other planetary bodies. For more information click [here](http://www.soest.hawaii.edu/GG).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Hawaiian",
      slug: "hawaiian",
      description: "The study of the Hawaiian language. For more information click [here](http://manoa.hawaii.edu/hshk/kawaihuelani/).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "History",
      slug: "history",
      description: "History is the study of change and continuity in human society over time. For more information click [here](http://manoa.hawaii.edu/history/).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Journalism",
      slug: "journalism",
      description: "Journalism is gathering, processing, and reporting information as news through many media platforms such as print, broadcast, and online. For more information click [here](http://www.communications.hawaii.edu/jour/index.html).",
      tagType: "non-cs-disciplines"
    }
  ];

  _.each(Tags, RadGrad.tag.define);
};