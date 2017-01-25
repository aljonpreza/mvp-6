/**
 * This function defines an array of tags.
 * To be invoked in LoadDataModel.js.
 * Created by Kelsie Yamakawa.
 */

defineTagKayama = function() {
  let kayamaTags = [
    /* non-CS DISCIPLINES */
    {
      name: "Business",
      slug: "business",
      description: "A business, also known as an enterprise, agency, or a firm, is an entity involved in the provision of goods, services, or both to consumers. For more information see [here](https://en.wikipedia.org/wiki/Business).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Chemistry",
      slug: "chemistry",
      description: "Chemistry is a branch of physical science that studies the composition, structure, properties and change of matter.  For more information see [here](https://en.wikipedia.org/wiki/Chemistry).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Foreign Languages",
      slug: "foreign-languages",
      description: "A foreign language is a language indigenous to another country. It is also a language not spoken in the native country of the person referred to.  For more information see [here](https://en.wikipedia.org/wiki/Foreign_language).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Communications",
      slug: "communications",
      description: "Communication is the purposeful activity of information exchange between two or more participants in order to convey or receive the intended meanings through a shared system of signs and semiotic rules.  For more information see [here](https://en.wikipedia.org/wiki/Communication).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Dance",
      slug: "dance",
      description: "Dance is a performance art form consisting of purposefully selected sequences of human movement.  For more information see [here](https://en.wikipedia.org/wiki/Dance).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Computer Ethics",
      slug: "computer-ethics",
      description: "Computer Ethics is a part of practical philosophy which concern with how computing professionals should make decisions regarding professional and social conduct.  For more information see [here](https://en.wikipedia.org/wiki/Computer_ethics).",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Engineering Ethics",
      slug: "engineering-ethics",
      description: "Engineering ethics is the field of applied ethics and system of moral principles that apply to the practice of engineering. The field examines and sets the obligations by engineers to society, to their clients, and to the profession.  For more information see [here](https://en.wikipedia.org/wiki/Engineering_ethics).",
      tagType: "non-cs-disciplines"
    },

    /* TECHNOLOGIES */
    {
      name: "Postgres",
      slug: "postgres",
      description: "PostgreSQL is a powerful, open source object-relational database system.  For more information see [here](http://www.postgresql.org/about/).",
      tagType: "technologies"
    },
    {
      name: "Ruby",
      slug: "ruby",
      description: "Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.  For more information see [here](https://www.ruby-lang.org/en/).",
      tagType: "technologies"
    },
    {
      name: "Rails",
      slug: "rails",
      description: "Ruby on Rails is an open-source web framework that's optimized for programmer happiness and sustainable productivity. It lets you write beautiful code by favoring convention over configuration.  For more information see [here](http://rubyonrails.org/).",
      tagType: "technologies"
    },
    {
      name: "CSS",
      slug: "css",
      description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.  For more information see [here](https://en.wikipedia.org/wiki/Cascading_Style_Sheets).",
      tagType: "technologies"
    },
    {
      name: "Docker",
      slug: "docker",
      description: "An open platform for distributed applications for developers and sysadmins.  For more information see [here](https://www.docker.com/).",
      tagType: "technologies"
    },
    {
      name: "Common Lisp",
      slug: "common-lisp",
      description: "Common Lisp is the modern, multi-paradigm, high-performance, compiled, ANSI-standardized, most prominent descendant of the long-running family of Lisp programming languages.  For more information see [here](https://common-lisp.net/).",
      tagType: "technologies"
    },
    {
      name: "Scheme",
      slug: "scheme",
      description: "Scheme is a principal dialect of the computer programming language Lisp. It follows a minimalist design philosophy that specifies a small standard core accompanied by powerful tools for language extension.  For more information see [here](https://en.wikipedia.org/wiki/Scheme_(programming_language)).",
      tagType: "technologies"
    },
    {
      name: "Prolog",
      slug: "prolog",
      description: "Prolog is a general purpose logic programming language associated with artificial intelligence and computational linguistics.  It has its roots in first-order logic, a formal logic, and is declarative: the program logic is expressed in terms of relations, represented as facts and rules.  For more information see [here](https://en.wikipedia.org/wiki/Prolog).",
      tagType: "technologies"
    }
  ];

  _.each(kayamaTags, RadGrad.tag.define);
};
