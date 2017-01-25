/**
 * This function defines an array of tags.
 * To be invoked in LoadDataModel.js.
 *
 * Created by Aljon Preza | January 17, 2016
 */
defineTagAljonp = function() {
  let aljonpTags = [
    /* CS DISCIPLINES */
    {
      name: "Computer Graphics",
      slug: "computer-graphics",
      description: "The set of technologies used to create art with computers. For more information see [here](https://en.wikipedia.org/wiki/Computer_graphics).",
      tagType: "cs-disciplines"
    },
    {
      name: "Computer Vision",
      slug: "computer-vision",
      description: "A field that includes methods for acquiring, processing, analyzing, and understanding images and, in general, high-dimensional data from the real world in order to produce numerical or symbolic information.  For more information see [here](https://en.wikipedia.org/wiki/Computer_vision).",
      tagType: "cs-disciplines"
    },
    {
      name: "Data Visualization",
      slug: "data-visualization",
      description: "Communicates information clearly and efficiently to users via the statistical graphics, plots, information graphics, tables, and charts selected. Effective visualization helps users in analyzing and reasoning about data and evidence.  For more information see [here](https://en.wikipedia.org/wiki/Data_visualization).",
      tagType: "cs-disciplines"
    },
    {
      name: "Circuit Design",
      slug: "circuit-design",
      description: "A graphic representation of an electric circuit in which actual circuit components are represented by standard symbols.  For more information see [here](https://en.wikipedia.org/wiki/Circuit_design).",
      tagType: "cs-disciplines"
    },
    /* TECHNOLOGIES */
    {
      name: "Objective-C",
      slug: "objective-c",
      description: "The primary programming language you use when writing software for OS X and iOS.  It’s a superset of the C programming language and provides object-oriented capabilities and a dynamic runtime.  For more information see [here](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html).",
      tagType: "technologies"
    },
    {
      name: "Node",
      slug: "node",
      description: "As an asynchronous event driven framework, Node.js is designed to build scalable network applications.  For more information see [here](https://nodejs.org/en).",
      tagType: "technologies"
    },
    {
      name: "Angular",
      slug: "angular",
      description: "A structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and briefly.  For more information see [here](https://angularjs.org).",
      tagType: "technologies"
    },
    {
      name: "Django",
      slug: "django",
      description: "is a free and open source web application framework, written in Python. A web framework is a set of components that helps you to develop websites faster and easier.  For more information see [here](https://www.djangoproject.com).",
      tagType: "technologies"
    },
    {
      name: "OS/X",
      slug: "osx",
      description: "OS X is the operating system that powers every Mac. Built on a rock-solid UNIX foundation, it’s engineered to take full advantage of what the hardware is capable of.  For more information see [here](http://www.apple.com/osx/what-is/).",
      tagType: "technologies"
    },
    /* LOCATIONS */
    {
      name: "Mexico",
      slug: "mexico",
      description: "A country between the U.S. and Central America that's known for its Pacific and Gulf of Mexico beaches and its diverse landscape of mountains, deserts and jungles.  For more information see [here](https://en.wikipedia.org/wiki/Mexico).",
      tagType: "locations"
    },
    {
      name: "Central America",
      slug: "central-america",
      description: "The southernmost, isthmian portion of the North American continent, which connects with South America on the southeast.  For more information see [here](https://en.wikipedia.org/wiki/Central_America).",
      tagType: "locations"
    }
  ];

  _.each(aljonpTags, RadGrad.tag.define);
};