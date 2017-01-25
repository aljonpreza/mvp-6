defineTags = function () {

  let Tags = [
    /*CS Disciplines*/
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    /*
     {
     name: "Silicon Valley",
     slug: "silicon-valley",
     description: "The southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
     tagType: "locations"
     },
     */
    {
      name: "Microprocessor Design",
      slug: "microprocessor-design",
      description: "Microprocessor Design is the design engineering task of creating a microprocessor, an integrated circuit that contains the functions of a central processing unit of a computer. For more information see [here](https://en.wikibooks.org/wiki/Microprocessor_Design). ",
      tagType: "cs-disciplines"
    },
    {
      name: "Operating Systems",
      slug: "operating-systems",
      description: "The study of the system software that manages the computer's hardware and software resources. For more information see [here](https://en.wikipedia.org/wiki/Operating_system).",
      tagType: "cs-disciplines"
    },
    {
      name: "Network Design",
      slug: "network-design",
      description: "Network Design, which includes topological design, network synthesis, and network realization, is the design task of ensuring a new telecommunications network or service. For more information see [here](https://en.wikipedia.org/wiki/Network_planning_and_design).",
      tagType: "cs-disciplines"
    },
    {
      name: "Wireless Networks",
      slug: "wireless-networks",
      description: "Wireless Networks is the discipline and study of telecommunication networks that are not connected by cables of any kind. For more information see [here](https://en.wikipedia.org/wiki/Wireless_network).",
      tagType: "cs-disciplines"
    },
    {
      name: "Network Security",
      slug: "network-security",
      description: "Network Security is the discipline and study that involves securing a computer network infrastructure through a set of policies and procedures in order to track and avoid unauthorized access and exploitation of network services and resources. For more information see [here](https://en.wikipedia.org/wiki/Network_security).",
      tagType: "cs-disciplines"
    },
    /*non-CS Disciplines*/
    {
      name: "Accounting",
      slug: "accounting",
      description: "Accounting is the measurement, processing and communication of financial information about economic entities.  For more information see [here](https://en.wikipedia.org/wiki/Accounting).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Aerospace",
      slug: "aerospace",
      description: "Aerospace is the human effort in science, engineering and business to fly in the atmosphere of Earth (aeronautics) and surrounding space (astronautics). For more information see [here](https://en.wikipedia.org/wiki/Aerospace).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Agriculture",
      slug: "agriculture",
      description: "Agriculture is the cultivation of animals, plants, fungi, and other life forms for food, fiber, biofuel, medicinal and other products used to sustain and enhance human life. For more information see [here](https://en.wikipedia.org/wiki/Agriculture).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Animal Sciences",
      slug: "animal-sciences",
      description: "The study of the biology of Animals including genetics, microbiology, animal behavior, nutrition, physiology, and reproduction. For more information see [here](https://en.wikipedia.org/wiki/Animal_science).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Anthropology",
      slug: "anthropology",
      description: "The study of humanity and the workings of societies around the world.  Topics include sociocultural, biological, archaeological and linguistic anthropology. For more information see [here](https://en.wikipedia.org/wiki/Anthropology).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Architecture",
      slug: "architecture",
      description: "The process and the product of planning, designing, and constructing buildings and other physical structures. For more information see [here](https://en.wikipedia.org/wiki/Architecture).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Art",
      slug: "art",
      description: "A diverse range of human activities in creating visual, auditory or performing artifacts" +
      " artworks, expressing the author's imaginative or technical skill, intended to be appreciated for their beauty or emotional power. For more information see [here](https://en.wikipedia.org/wiki/Art).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Astronomy",
      slug: "astronomy",
      description: " The study of celestial objects (such as stars, galaxies, planets, moons, asteroids, comets and nebulae) and processes (such as supernovae explosions, gamma ray bursts, and cosmic microwave background radiation), the physics, chemistry, and evolution of such objects and processes, and more generally all phenomena that originate outside the atmosphere of Earth. For more information see [here](https://en.wikipedia.org/wiki/Astronomy).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Biology",
      slug: "biology",
      description: "A natural science concerned with the study of life and living organisms, including their structure, function, growth, evolution, distribution, and taxonomy. For more information see [here](https://en.wikipedia.org/wiki/Biology).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Botany",
      slug: "botany",
      description: "Also called plant science(s) or plant biology, is the science of plant life and a branch of" +
      " biology. For more information see [here](https://en.wikipedia.org/wiki/Botany).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Physics",
      slug: "physics",
      description: "The study and branch of science concerned with matter and motion, including the study of the properties and mechanics of heat, light, sound, electricity, magnetism, and the structure of atoms. For more information see [here](http://www.physics.org/).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Political Science",
      slug: "political-science",
      description: "The study and branch of knowledge that is concerned with government and political institutions, as well as analysis of political actions and behaviors. For more information see [here](https://en.wikipedia.org/wiki/Political_science).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context. For more information see [here](https://en.wikipedia.org/wiki/Psychology).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Public Health",
      slug: "public-health",
      description: "The study of protecting and improving the population's health through healthy lifestyle,  research for disease and injury prevention, as well as the detection and control of infectious diseases. For more information see [here](https://en.wikipedia.org/wiki/Public_health).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Sociology",
      slug: "sociology",
      description: "The study and science of the development, structure, and function of human social relationships. For more information see [here](https://en.wikipedia.org/wiki/Sociology).",
      tagType: "non-cs-disciplines"
    },
    /*technologies*/
    {
      name: "Linux",
      slug: "linux",
      description: " A Unix-like and mostly POSIX-compliant computer operating system (OS) assembled under the model of free and open-source software development and distribution.",
      tagType: "technologies"
    },
    {
      name: "Python",
      slug: "python",
      description: "A high level programming language used for object oriented programming and scripting.",
      tagType: "technologies"
    },
    {
      name: "Telecommunications",
      slug: "telecommunications",
      description: "Telecommunication occurs when the exchange of information between two or more entities (communication) includes the use of technology. Communication technology uses channels to transmit information (as electrical signals), either over a physical medium (such as signal cables), or in the form of electromagnetic waves.",
      tagType: "technologies"
    },
    {
      name: "IT",
      slug: "it",
      description: "Information technology (IT) is the application of computers and telecommunications equipment to store, retrieve, transmit and manipulate data, often in the context of a business or other enterprise.",
      tagType: "technologies"
    },
    {
      name: "Perl",
      slug: "perl",
      description: "A high-level general-purpose Unix scripting language.",
      tagType: "technologies"
    },
    {
      name: "React",
      slug: "react",
      description: "An open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags.",
      tagType: "technologies"
    },
    {
      name: "Android",
      slug: "android",
      description: "A mobile operating system based on the Linux kernel designed for touchscreen mobile devices.",
      tagType: "technologies"
    },
    {
      name: "R",
      slug: "r",
      description: "A programming language and software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. For more information see [here](https://en.wikipedia.org/wiki/R_%28programming_language%29).",
      tagType: "technologies"
    },
    {
      name: "TensorFlow",
      slug: "tensorflow",
      description: "An open source software library for numerical computation using data flow graphs. For more" +
      " information see [here](https://www.tensorflow.org/).",
      tagType: "technologies"
    },
    {
      name: "MapReduce",
      slug: "mapreduce",
      description: "A programming model and an associated implementation for processing and generating large data sets with a parallel, distributed algorithm on a cluster. For more information see" +
      " [here](https://en.wikipedia.org/wiki/MapReduce).",
      tagType: "technologies"
    },
    {
      name: "Hadoop",
      slug: "hadoop",
      description: "A free, Java-based programming framework that supports the processing of large data sets in a distributed computing environment. It is part of the Apache project sponsored by the Apache Software Foundation. For more" +
      " information see [here](https://en.wikipedia.org/wiki/Apache_Hadoop).",
      tagType: "technologies"
    },
    {
      name: "SQL",
      slug: "sql",
      description: "Also known as Structured Query Language, is a special-purpose programming language designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). For more information see [here](https://en.wikipedia.org/wiki/SQL).",
      tagType: "technologies"
    },
    {
      name: "Economics",
      slug: "economics",
      description: "A social science that studies how individuals, governments, firms and nations make choices on allocating scarce resources to satisfy their unlimited wants.  For more information see [here](https://en.wikipedia.org/wiki/Economics).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Education",
      slug: "education",
      description: "A field of study that deals with the methods and problems of teaching.  For more information see [here](https://bigfuture.collegeboard.org/majors/education-education).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Engineering",
      slug: "engineering",
      description: "The work of designing and creating large structures or new products or systems by using scientific methods.  For more information see [here](https://bigfuture.collegeboard.org/majors/engineering-engineering-general).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "English",
      slug: "english",
      description: "The study of literature written in the English language, English linguistics, and English sociolinguistics.  For more information see [here](https://bigfuture.collegeboard.org/majors/english-language-literature-english).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "MySQL",
      slug: "mysql",
      description: "The world's most popular open-source database, enabling the cost-effective delivery of reliable, high-performance and scalable web-based and embedded database application.  For more information see [here](http://www.mysql.com/).",
      tagType: "technologies"
    },
    {
      name: "Mongo",
      slug: "mongo",
      description: "A cross-platform document-oriented database.  Mongo eschews the traditional table-based relation database structure in favor of JSON-like documents with dynamic schemas, making integration of data in certain types of application easier and faster.  For more information see [here](https://www.mongodb.org/).",
      tagType: "technologies"
    },
    {
      name: "NoSQL",
      slug: "nosql",
      description: "A database that provides mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases.  For more information see [here](http://nosql-database.org/).",
      tagType: "technologies"
    },
    {
      name: "D3",
      slug: "d3",
      description: "D3, also known as data-driven documents is a JavaScript library for manipulating documents based on data.  D3 helps bring data to life using HTML, SVG, and CSS.  For more information see [here](http://d3js.org/).",
      tagType: "technologies"
    },
    {
      name: "PHP",
      slug: "php",
      description: "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.  For more information see [here](https://en.wikipedia.org/wiki/PHP).",
      tagType: "technologies"
    },

    {
      name: "Selenium",
      slug: "selenium",
      description: "A portable suite of tools that automates web drivers across many platforms, enabling the user to test software in a number of programming languages. For more information see [here](http://www.seleniumhq.org/).",
      tagType: "technologies"
    },
    {
      name: "Arduino",
      slug: "arduino",
      description: "An open-source computer hardware - micro-controller kits - for building devices that can communicate and interact with objects in the physical world. For more information see [here](https://www.arduino.cc/).",
      tagType: "technologies"
    },
    {
      name: "Raspberry PI",
      slug: "raspberry-pi",
      description: "A series of small, single-board computers that enables users to learn programming. For more information see [here](https://www.raspberrypi.org/).",
      tagType: "technologies"
    },
    {
      name: "Human Computer Interaction",
      slug: "human-computer-interaction",
      description: "The design and use of computer technology, focusing particularly on the interfaces between people (users) and computers. For more information see [here](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction).",
      tagType: "cs-disciplines"
    },
    {
      name: "Mobile Devices",
      slug: "mobile-devices",
      description: "A small computing device, typically small enough to be handheld having a display screen with touch input and/or a miniature keyboard. For more information see [here](https://en.wikipedia.org/wiki/Mobile_device).",
      tagType: "cs-disciplines"
    },
    {
      name: "Cognitive Science",
      slug: "cognitive-science",
      description: "The interdisciplinary scientific study of the mind and its processes. For more information see [here](https://en.wikipedia.org/wiki/Cognitive_science).",
      tagType: "cs-disciplines"
    },
    {
      name: "Bioinformatics",
      slug: "bioinformatics",
      description: "An interdisciplinary field that develops methods and software tools for understanding biological data. For more information see [here](https://en.wikipedia.org/wiki/Bioinformatics).",
      tagType: "cs-disciplines"
    },
    {
      name: "Medical Informatics",
      slug: "medical-informatics",
      description: "is informatics in health care. It is a multidisciplinary field that uses health information technology (HIT) to improve health care via any combination of higher quality, higher efficiency (spurring lower cost and thus greater availability), and new opportunities. For more information see [here](https://en.wikipedia.org/wiki/Health_informatics).",
      tagType: "cs-disciplines"
    },
    {
      name: "C",
      slug: "c",
      description: "A general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. For more information see [here](https://en.wikipedia.org/wiki/C_(programming_language)).",
      tagType: "technologies"
    },
    {
      name: "C++",
      slug: "cplusplus",
      description: "A general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation. For more information see [here](https://en.wikipedia.org/wiki/C%2B%2B).",
      tagType: "technologies"
    },
    {
      name: "C-Sharp",
      slug: "c-sharp",
      description: "A multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. For more information see [here](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)).",
      tagType: "technologies"
    },
    {
      name: "Swift",
      slug: "swift",
      description: "A multi-paradigm, compiled programming language created for iOS, OS X, watchOS and tvOS" +
      " development by Apple Inc. For more information see [here](https://en.wikipedia.org/wiki/Swift_(programming_language)).",
      tagType: "technologies"
    },
    {
      name: "Git",
      slug: "git",
      description: "A widely-used source code management system for software development. For more information see [here](https://en.wikipedia.org/wiki/Git_(software)).",
      tagType: "technologies"
    },
    {
      name: "Australia",
      slug: "australia",
      description: "An Oceanian country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. For more information see [here](https://en.wikipedia.org/wiki/Australia).",
      tagType: "locations"
    },
    {
      name: "Africa",
      slug: "africa",
      description: "The world's second-largest and second-most-populous continent. For more information see [here](https://en.wikipedia.org/wiki/Africa).",
      tagType: "locations"
    },
    {
      name: "Europe",
      slug: "europe",
      description: "A continent that comprises the westernmost part of Eurasia. For more information see [here](https://en.wikipedia.org/wiki/Europe).",
      tagType: "locations"
    },
    {
      name: "South America",
      slug: "south-america",
      description: "A continent located in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. For more information see [here](https://en.wikipedia.org/wiki/South_America).",
      tagType: "locations"
    },
    {
      name: "Canada",
      slug: "canada",
      description: "A country in the northern part of North America. For more information see [here](https://en.wikipedia.org/wiki/Canada).",
      tagType: "locations"
    },
    {
      name: "Department of Defence",
      slug: "dod",
      description: "The Department of Defence (DoD, USDOD, or DOD) is an executive branch department of the federal government of the United States charged with coordinating and supervising all agencies and functions of the government concerned directly with national security and the United States Armed Forces. The Department is also the largest employer in the world, with more than 2.13 million active duty servicemen and women as well as their support staff of civilian workers. For more information see [here](http://www.defense.gov/).",
      tagType: "locations"
    }


  ];

  _.each(Tags, RadGrad.tag.define);
};
