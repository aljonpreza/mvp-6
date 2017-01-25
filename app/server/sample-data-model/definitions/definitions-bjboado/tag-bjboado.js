/**
 * Created by brianjyriel on 1/19/16.
 */

/**
 * Definitions for assigned tags
 * Created by brianjyriel on 1/19/16.
 */


defineTagbjboado = function() {
  let bjboadoTags = [

    /* CS DISCIPLINES */
    {
      name: "Algorithms",
      slug: "algorithms",
      description: "A concentration on computer science, it is a self-contained step-by-step set of operations to be performed. Algorithms exist that perform calculation, data processing, and automated reasoning. For more information see [here](https://en.wikipedia.org/wiki/Algorithm).",
      tagType: "cs-disciplines"
    },
    {
      name: "System Programming",
      slug: "system-programming",
      description: "The activity of programming computer system software. For more information see [here](https://en.wikipedia.org/wiki/System_programming).",
      tagType: "cs-disciplines"
    },
    {
      name: "Web Design",
      slug: "web-design",
      description: "Encompasses many different skills and disciplines in the production and maintenance of websites. For more information see [here](https://en.wikipedia.org/wiki/Web_design).",
      tagType: "cs-disciplines"
    },
    {
      name: "Database",
      slug: "database",
      description: "Database is an organized collection of data. It is the collection of schemas, tables, queries, reports, views and other objects. For more information see [here](https://en.wikipedia.org/wiki/Database).",
      tagType: "cs-disciplines"
    },

    /* NON-CS DISCIPLINES */
    {
      name: "Meteorology",
      slug: "meteorology",
      description: "The interdisciplinary scientific study of the atmosphere. For more information see [here](https://en.wikipedia.org/wiki/Meteorology).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Music",
      slug: "music",
      description: "The study of an art form and cultural activity whose medium is sound and silence.. For more information see [here](https://en.wikipedia.org/wiki/Music).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Natural Resources",
      slug: "natural-resources",
      description: "The study of resources and supplies that originate from Earth. For more information see [here](https://en.wikipedia.org/wiki/Resource).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Nursing",
      slug: "nursing",
      description: "The study of care of individuals, families, and communities so they may attain, maintain, or recover optimal health and quality of life. For more information see [here](https://en.wikipedia.org/wiki/Nursing).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Oceanography",
      slug: "oceanography",
      description: "The study of Earth science that studies the ocean. For more information see [here](https://en.wikipedia.org/wiki/Oceanography).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Ilokano",
      slug: "ilokano",
      description: "The study of the language of the Northern region of the Philippines. For more information see [here](http://manoa.hawaii.edu/ilokano/affiliations/timpuyog.html)",
      tagType: "non-cs-disciplines"
    },
    /* TECHNOLOGIES */
    {
      name: "ElasticSearch",
      slug: "elasticsearch",
      description: "Designed to take data from any source and search, analyze, and visualize it in real time. For more information see [here](https://www.elastic.co/).",
      tagType: "technologies"
    },
    {
      name: "Bootstrap",
      slug: "bootstrap",
      description: "An HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. For more information see [here](http://getbootstrap.com/).",
      tagType: "technologies"
    },
    {
      name: "Eclipse",
      slug: "eclipse",
      description: "Known for Java IDE, C/C++, JavaScript and PHP IDEs built on extensible platforms for creating desktop, Web and cloud IDEs. For more information see [here](https://eclipse.org/).",
      tagType: "technologies"
    },
    {
      name: "Atom",
      slug: "atom",
      description: "A text editor that's modern, approachable, yet hackable to the core—a tool you can customize to do anything but also use productively without ever touching a config file.  For more information see [here](https://atom.io/).",
      tagType: "technologies"
    },
    {
      name: "JUnit",
      slug: "junit",
      description: "A simple framework to write repeatable tests. It is an instance of the xUnit architecture for unit testing frameworks..  For more information see [here](http://junit.org/).",
      tagType: "technologies"
    }

  ];

  _.each(bjboadoTags, RadGrad.tag.define);
};