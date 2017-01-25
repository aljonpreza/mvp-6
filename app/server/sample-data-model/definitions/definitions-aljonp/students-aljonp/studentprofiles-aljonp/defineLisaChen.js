/**
 * This file holds the information for Lisa Chen.
 */

defineLisaChen = function() {
  let acID = RadGrad.user.findBySlug("lisachen")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), hrswk: 15, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2014), hrswk: 40, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), hrswk: 30, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), hrswk: 15, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics111", verified: true, grade: "A", studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics141", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics211", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics241", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics212", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: true, grade: "B", studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics321", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics312", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth2xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics313", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics462", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth3xx", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth3xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth3xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics332", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics314", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics485", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2017), course: "ics414", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "ics483", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "ics484", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2017), course: "ics481", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "global-game-jam", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "global-game-jam", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2017), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "global-game-jam", verified: false, studentID: acID}
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
        RadGrad.slug.getEntityID("game-designer", "DegreeGoal"),
        RadGrad.slug.getEntityID("ba-ics", "DegreeGoal")
      ]);

  RadGrad.user.setInterestTagIDs(acID,
      [
        RadGrad.slug.getEntityID("artificial-intelligence", "Tag"),
        RadGrad.slug.getEntityID("unity", "Tag"),
        RadGrad.slug.getEntityID("game-design", "Tag"),
        RadGrad.slug.getEntityID("software-engineering", "Tag")
      ]);

  RadGrad.user.setPicture(acID, "https://s-media-cache-ak0.pinimg.com/736x/5b/02/90/5b02900d7dae0880ae0362fe766ef0bb.jpg");
  RadGrad.user.setAboutMe(acID, "I love to play games and have been playing ever since I was young.");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2017));

};