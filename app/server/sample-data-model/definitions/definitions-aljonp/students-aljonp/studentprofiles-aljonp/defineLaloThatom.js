/**
 * This file holds the information for Lalo Thatom.
 */

defineLaloThatom = function() {
  let acID = RadGrad.user.findBySlug("lalothatom")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Summer", 2013), hrswk: 30, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2014), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), hrswk: 15, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2014), hrswk: 30, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 15, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), hrswk: 20, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), hrswk: 20, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), hrswk: 10, studentID: acID},
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {
      semesterID: RadGrad.semester.get("Fall", 2013),
      course: "oth1xx",
      verified: true,
      grade: "A",
      studentID: acID,
      credithrs: 1
    },
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth2xx", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2013), course: "ee160", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth2xx", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ee211", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ee260", verified: true, grade: "B", studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth2xx", verified: true, grade: "B", studentID: acID, credithrs: 1},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth2xx", verified: true, grade: "A", studentID: acID, credithrs: 1},

    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ee213", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ee205", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth2xx", verified: true, grade: "C", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ee324", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ee371", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ee396", verified: true, grade: "C", studentID: acID, credithrs: 2},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics141", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ee361", verified: true, grade: "A", studentID: acID, credithrs: 4},

    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ee315", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ee323", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ee367", verified: true, grade: "A", studentID: acID, credithrs: 4},

    {semesterID: RadGrad.semester.get("Summer", 2015), course: "oth3xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ee342", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ee468", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics314", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth3xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth2xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2019), course: "ee496", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "ee495", verified: false, studentID: acID, credithrs: 1},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "ics414", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth1xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth3xx", verified: false, studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), opportunity: "csdl", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "csdl", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "csdl", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "csdl", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "csdl", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "hicapacity", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "csdl", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "hicapacity", verified: false, studentID: acID}
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
        RadGrad.slug.getEntityID("robotics-engineer", "DegreeGoal"),
        RadGrad.slug.getEntityID("bs-ce", "DegreeGoal")
      ]);

  RadGrad.user.setInterestTagIDs(acID,
      [
        RadGrad.slug.getEntityID("robotics", "Tag"),
        RadGrad.slug.getEntityID("mathematics", "Tag"),
        RadGrad.slug.getEntityID("common-lisp", "Tag"),
        RadGrad.slug.getEntityID("artificial-intelligence", "Tag"),
        RadGrad.slug.getEntityID("machine-learning", "Tag")
      ]);

  RadGrad.user.setPicture(acID, "http://gritslab.gatech.edu/Pickem/wp-content/gallery/cs6601_ai_portfolio/self_portrait.jpg");
  RadGrad.user.setAboutMe(acID, "I have built many things throughout my life.  Now to build my education!");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2016));

};