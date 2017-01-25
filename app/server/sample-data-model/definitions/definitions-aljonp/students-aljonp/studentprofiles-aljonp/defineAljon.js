/**
 * This file holds the information for Amadi Clarus.
 */

defineAljon = function() {
  let acID = RadGrad.user.findBySlug("aljonp")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2017), hrswk: 40, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {
      semesterID: RadGrad.semester.get("Fall", 2015),
      course: "ics111",
      verified: true,
      grade: "A",
      studentID: acID,
      credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics141", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth1xx", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics211", verified: true, studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics241", verified: true, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth1xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth1xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth1xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Summer", 2016), course: "oth1xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2016), course: "oth2xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2016), course: "oth2xx", verified: false, studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "atthack16", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "acm-manoa", verified: false, studentID: acID}
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
        RadGrad.slug.getEntityID("ba-ics", "DegreeGoal"),
        RadGrad.slug.getEntityID("web-developer", "DegreeGoal"),
        RadGrad.slug.getEntityID("user-experience-designer", "DegreeGoal")
      ]);

  RadGrad.user.setInterestTagIDs(acID,
      [
        RadGrad.slug.getEntityID("web-design", "Tag"),
        RadGrad.slug.getEntityID("software-engineering", "Tag"),
        RadGrad.slug.getEntityID("computer-graphics", "Tag")
      ]);

  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATgAAAAJDUxNWU3ODgwLWM2NTYtNDRhMy1hY2UxLWI0MmY5MzdhNDIyZA.jpg");
  RadGrad.user.setAboutMe(acID, "I am a freshman whose major is undecided but considering ICS.");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2019));

};