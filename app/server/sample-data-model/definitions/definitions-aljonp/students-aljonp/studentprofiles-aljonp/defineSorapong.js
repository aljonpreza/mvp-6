/**
 * This file holds the information for Aksel Reachtain.
 */

defineSorapong = function() {
  let acID = RadGrad.user.findBySlug("khongnaw")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Summer", 2016), hrswk: 15, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {
      semesterID: RadGrad.semester.get("Fall", 2013),
      course: "ics111",
      verified: true,
      grade: "A",
      studentID: acID,
      credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "ics141", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth2xx", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2013), course: "ics211", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "ics241", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics212", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics311", verified: true, grade: "A", studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics331", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics321", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics361", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth3xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics332", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics485", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth3xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth3xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics481", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics465", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics461", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics314", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth1xx", verified: true, grade: "B", studentID: acID, credithrs: 4},

    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics484", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics424", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics414", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth2xx", verified: false, studentID: acID, credithrs: 4}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "global-game-jam", verified: true, hrswk: 20, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "global-game-jam", verified: true, hrswk: 20, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "hicapacity", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "global-game-jam", verified: false, studentID: acID},
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  /* Degree Plan */
  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceIDs,
    studentID: acID
  });

  /* Set User Profile */
  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID,
      [
        RadGrad.slug.getEntityID("animation-designer", "DegreeGoal"),
        RadGrad.slug.getEntityID("bs-cs", "DegreeGoal")
      ]);

  RadGrad.user.setInterestTagIDs(acID,
      [
        RadGrad.slug.getEntityID("art", "Tag"),
        RadGrad.slug.getEntityID("computer-graphics", "Tag"),
        RadGrad.slug.getEntityID("software-engineering", "Tag"),
        RadGrad.slug.getEntityID("game-design", "Tag"),
        RadGrad.slug.getEntityID("unity", "Tag")
      ]);

  RadGrad.user.setPicture(acID, "https://www.now.cornell.edu/images/carousel/scholarships/themes-student-portrait2.jpg");
  RadGrad.user.setAboutMe(acID, "I have my own Youtube channel with animations I've made myself.");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2016));

};