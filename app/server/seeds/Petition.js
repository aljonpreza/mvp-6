
tempDate = new Date();
tempDate.setDate(tempDate.getDate());

var petitionSeeds = [
  { title: "Decrease Homework Workload",
    slug: "decrease-homework-workload",
    uhEmail: "aljonp",
    description: "Most classes are programming intensive. It is hard to keep up!",
    createdAt: tempDate
  },

  { title: "Add More Sections",
    slug: "add-more-sections",
    uhEmail: "aljonp",
    description: "Required classes should have more sections if the first class is full.",
    createdAt: tempDate
  },

  { title: "More Web Development Courses",
    slug: "More-web-development-courses",
    uhEmail: "aljonp",
    description: "There are not enough web development courses that are available throughout every semester.",
    createdAt: tempDate
  },

  { title: "Classroom Location Diversity",
    slug: "classroom-location-diversity",
    uhEmail: "kayama",
    description: "I've been in the same class room for the past two years!",
    createdAt: tempDate
  },

  { title: "More Courses",
    slug: "more-courses",
    uhEmail: "kayama",
    description: "There are too little courses for the amount of students majoring in this field.",
    createdAt: tempDate
  },

  { title: "More Available Times",
    slug: "more-available-times",
    uhEmail: "khongnaw",
    description: "Some courses are either too early or too late.",
    createdAt: tempDate
  }

];

if (Petition.find().count() == 0) {
  _.each(petitionSeeds, function(petition) {
    Petition.insert(petition);
  });
}