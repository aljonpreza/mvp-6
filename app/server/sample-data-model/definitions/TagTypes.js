
defineTagTypes = function() {
  let initialTagTypes = [
    {name: "CS Disciplines", slug: "cs-disciplines", description: "Computer science and engineering areas of interest."},
    {name: "Non-CS Disciplines", slug: "non-cs-disciplines", description: "Areas of interest apart from computer science and engineering."},
    {name: "Locations", slug: "locations", description: "Geographic areas of interest."},
    {name: "Technologies", slug: "technologies", description: "Computer science and engineering languages, tools, and technologies"}
  ];

  _.each(initialTagTypes, RadGrad.tagtype.define);
};