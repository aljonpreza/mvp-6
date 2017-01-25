defineTagLuong97 = function() {
    let luong97Tags = [
        {
            name: "High Performance Programming",
            slug: "high-performance-programming",
            description: "Programming associated with high performance computing (HPC). Programming for HPCs requires the use of special programming techniques to take advantage of their parallel archietecture. For more information see [here](https://en.wikipedia.org/wiki/Supercomputer#Software_and_system_management).",
            tagType: "cs-disciplines"
        },
        {
            name: "Machine Learning",
            slug: "machine-learning",
            description: "Machine learning is a subfield of computer science that explores the use of algorithms which can be used to make data-driven predictions or decisions. For more information [here](https://en.wikipedia.org/wiki/Machine_learning).",
            tagType: "cs-disciplines"
        },
        {
            name: "Theory Of Computation",
            slug: "theory-of-computation",
            description: "Theory of computation is a branch of theoretical computer science and mathematics that deals with how efficiently problems can be solved using computational algorithms. It is divided up into three additional branches - automa theory and language, computability theory and computational complexity theory. For more information see [here](https://en.wikipedia.org/wiki/Machine_learning)",
            tagType: "cs-disciplines"
        },
        {
            name: "Robotics",
            slug: "robotics",
            description: "Robotics is a branch of engineering that deals with the design, construction and application of robots as well as their associated computer systems. Robotics encompasses several fields including mechanical engineering, elecrical engineering, electronic engineering and computer science. For more information see [here](https://en.wikipedia.org/wiki/Machine_learning).",
            tagType: "cs-disciplines"
        },
        {
            name: "Game Design",
            slug: "game-design",
            description: "Game design is the application of design and asthetics to create a game. For more information see [here](https://en.wikipedia.org/wiki/Game_design)",
            tagType: "cs-disciplines"
        },
        {
            name: "Midwestern US",
            slug: "midwestern-us",
            description: "Also known as the Midwest, the Midwestern US is one of four major geographical regions in the United States encompassing 12 states. It includes: Illinois, Indiana, Iowa, Kansas, Michigan, Minnesota, Missouri, Nebraska, North Dakota, Ohio, South Dakota, and Wisconsin. For more information see [here](https://en.wikipedia.org/wiki/Midwestern_United_States)",
            tagType: "locations"
        },
        {
            name: "Japan",
            slug: "japan",
            description: "Japan is an country located in East Asia and in the Pacific Ocean made up of 6852 individual islands and a population of over 126 million. Japan also has the world's third largest economy by nominal GDP. For more information see [here](https://en.wikipedia.org/wiki/Japan).",
            tagType: "locations"
        },
        {
            name: "China",
            slug: "china",
            description: "Officially called The People's Republic of China (PRC), China is the world's most populous country and is located in East Asia. It is home to over 1.35 billion people and has become of the world's fastest growing economies. For more information see [here](https://en.wikipedia.org/wiki/China).",
            tagType: "locations"
        },
        {
            name: "Asia",
            slug: "asia",
            description: "Asia is the Earth's largest and most populous continent, comprising of 30% of Earth's land area as well as 60% of the human population. Asia is home to unusually dense and large settlements and is home to some of the world's most rapidly growing economies such as China and India. For more information see [here](https://en.wikipedia.org/wiki/Asia).",
            tagType: "locations"
        },
        {
            name: "India",
            slug: "india",
            description: "The Republic of India is a country in South Asia and is the second-most populous country in the world with over 1.2 billion people. India is one of the fastest growing major economies in the world. For more information see [here](https://en.wikipedia.org/wiki/India)",
            tagType: "locations"
        },
        {
            name: "Java",
            slug: "java",
            description: "Java is a general-purpose, class-based and object-oriented programming language that was released by Sun Microsystems in 1995. As of 2015, it is one of the most popular programming languages in use, with a reported 9 million developers using it. For more informatio see [here](https://en.wikipedia.org/wiki/Java_(programming_language)).",
            tagType: "technologies"
        },
        {
            name: "Spring",
            slug: "spring",
            description: "Spring is a framework that provides a model for the programming and configuration of Java-based enterprise applications. It focuses on the 'plumbing' aspect of enterprise applications, allowing developers to focus on higher, application-level business logic. For more information see [here](https://projects.spring.io/spring-framework/).",
            tagType: "technologies"
        },
        {
            name: "Hibernate",
            slug: "hibernate",
            description: "Hibernate, or more properly known as Hibernate ORM, is an Object/Relational Mapping framework which provides useful features in building data-persistant applications. For more information see [here](http://hibernate.org/orm/).",
            tagType: "technologies"
        },
        {
            name: "RDBMS",
            slug: "rdbms",
            description: "A RDBMS or Relational Database Managment System refers to a specific type of database management system that uses a relational model for data storage. Example of RDBMSs include MySQL, Microsoft SQL Server and Oracle Database. For more information see [here](https://en.wikipedia.org/wiki/Relational_database_management_system).",
            tagType: "technologies"
        },
        {
            name: "Calculus",
            slug: "calculus",
            description: "Calculus is the mathematical study of change, in the same way that geometry is the study of shape and algebra is the study of operations and their application to solving equations. For more information see [here](https://en.wikipedia.org/wiki/Calculus).",
            tagType: "cs-disciplines"
        },
        {
            name: "Javascript",
            slug: "javascript",
            description: "Javascript is a high-level programming language based on the ECMAScript language specification and is one of the major technologies used to create website content and is suppsrted by all modern web browsers. Javascript has become one of the most popular programming languages on the web with the proliferation of numerous frameworks, libraries, practice and usage in recent years. For more information see [here](https://en.wikipedia.org/wiki/JavaScript).",
            tagType: "technologies"
        }
    ];

    _.each(luong97Tags, RadGrad.tag.define);
};
