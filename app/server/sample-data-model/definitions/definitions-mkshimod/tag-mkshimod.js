defineTagMkshimod = function() {
  let mkshimodTags = [
    {
      name: "Electrical Engineering",
      slug: "electrical-engineering",
      description: "Electrical engineering is a field of engineering that generally deals with the study and application of electricity, electronics, and electromagnetism. For more information, see [here](https://en.wikipedia.org/wiki/Electrical_engineering).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Mechanical Engineering",
      slug: "mechanical-engineering",
      description: "Mechanical engineering is the discipline that applies the principles of engineering, physics, and materials science for the design, analysis, manufacturing, and maintenance of mechanical systems. For more information, see [here](https://en.wikipedia.org/wiki/Mechanical_engineering).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Civil Engineering",
      slug: "civil-engineering",
      description: "Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams, and buildings. For more information, see [here](https://en.wikipedia.org/wiki/Civil_engineering).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Computer Engineering",
      slug: "computer-engineering",
      description: "Computer engineering is a discipline that integrates several fields of electrical engineering and computer science required to develop computer hardware and software. For more information, see [here](https://en.wikipedia.org/wiki/Computer_engineering).",
      tagType: "cs-disciplines"
    },
    {
      name: "REST",
      slug: "rest",
      description: "REST stands for Representational State Transfer, and is the software architectural style of the World Wide Web. REST's coordinated set of constraints, applied to the design of components in a distributed hypermedia system, can lead to a higher-performing and more maintainable software architecture. For more information, see [here](https://en.wikipedia.org/wiki/Representational_state_transfer).",
      tagType: "technologies"
    },
    {
      name: "dotNET",
      slug: "dotnet",
      description: ".NET (dotNET) 2015 is the umbrella that represents the key pieces of the .NET platform delivered from Microsoft, including the .NET Framework, the recently announced .NET Core, and a shared common layer of packages, compilers and runtime. For more information, see [here](http://blogs.msdn.com/b/dotnet/archive/2014/12/04/introducing-net-core.aspx).",
      tagType: "technologies"
    },
    {
      name: "SharePoint",
      slug: "share-point",
      description: "SharePoint is a web application platform in the Microsoft Office server suite. Launched in 2001,[3] SharePoint combines various functions which are traditionally separate applications: intranet, extranet, content management, document management, personal cloud, enterprise social networking, enterprise search, business intelligence, workflow management, web content management, and an enterprise application store. For more information, see [here](https://support.office.com/en-us/article/What-is-SharePoint-97b915e6-651b-43b2-827d-fb25777f446f).",
      tagType: "technologies"
    },
    {
      name: "jQuery",
      slug: "jquery",
      description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. For more information, see [here](http://api.jquery.com/).",
      tagType: "technologies"
    },
    {
      name: "iOS",
      slug: "ios",
      description: "iOS (originally iPhone OS) is a mobile operating system created and developed by Apple Inc. and distributed exclusively for Apple hardware. It is the operating system that presently powers many of the company's mobile devices, including the iPhone, iPad, and iPod touch.  For more information, see [here](https://en.wikipedia.org/wiki/IOS).",
      tagType: "technologies"
    },
    {
      name: "Object-Oriented Programming (OOP)",
      slug: "oop",
      description: "Object-oriented programming (OOP) is a programming language model organized around objects rather than 'actions' and data rather than logic. For more information, see [here](http://searchsoa.techtarget.com/definition/object-oriented-programming).",
      tagType: "technologies"
    },
    {
      name: "Integrated Circuit Design",
      slug: "integrated-circuit-design",
      description: "a subset of electronics engineering, encompassing the particular logic and circuit design techniques required to design integrated circuits, or ICs.  For more information, see [here](https://en.wikipedia.org/wiki/Integrated_circuit_design).",
      tagType: "technologies"
    },
    {
      name: "Business Administration",
      slug: "business-administration",
      description: "Business administration is the process of managing a business or non-profit organization, so that it remains stable and continues to grow. For more information, see [here](https://en.wikipedia.org/wiki/Business_administration).",
      tagType: "non-cs-disciplines"
    }
  ];

  _.each(mkshimodTags, RadGrad.tag.define);
}