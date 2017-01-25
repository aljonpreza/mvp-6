/**
 * This function defines an array of degree goals.
 * To be invoked in LoadDataModel.js.
 * Created by Aljon Preza.
 */

defineDegreeGoalsAljonp = function () {
  let aljonpDegreeGoals = [
    {
      name: "B.A. in Information and Computer Sciences",
      slug: "ba-ics",
      description: "The Bachelor of Arts degree in Information and Computer Sciences (BA ICS) allows students to combine computer science with another discipline.  For more information see [here](http://www.ics.hawaii.edu/academics/undergraduate-degree-programs/ba-ics/)."
    },
    {
      name: "B.S. in Computer Science",
      slug: "bs-cs",
      description: "The Bachelor of Science degree in Computer Science (BS CS) focuses on software technology and gives the student a firm foundation in science and math.  For more information see [here](http://www.ics.hawaii.edu/academics/undergraduate-degree-programs/bs-ics/)."
    },
    {
      name: "B.S. in Computer Engineering",
      slug: "bs-ce",
      description: "The Bachelor of Science degree in Computer Engineering (BS CE) focuses on hardware and software technologies and how they are used together to create systems.  For more information see [here](http://www.ics.hawaii.edu/academics/undergraduate-degree-programs/bs-ce/)."
    }
  ];

  _.each(aljonpDegreeGoals, RadGrad.degreegoal.define);
};
