/**
 * This file holds the information for Henie Brose.
 */

defineKelsie = function() {
  let acID = RadGrad.user.findBySlug("kayama")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), hrswk: 25, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), hrswk: 25, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2014), hrswk: 2, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 20, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), hrswk: 20, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), hrswk: 10, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), hrswk: 25, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 25, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2016), hrswk: 25, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2017), hrswk: 25, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), hrswk: 25, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "ics111", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "ics141", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "C", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics211", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics241", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "C", studentID: acID},

    {semesterID: RadGrad.semester.get("Summer", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics212", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics311", verified: true, grade: "C", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth2xx", verified: true, grade: "A", studentID: acID, credithrs: 4},

    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics321", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics312", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Summer", 2015), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), course: "oth2xx", verified: true, grade: "C", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics313", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth3xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth3xx", verified: true, grade: "C", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics332", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth3xx", verified: false, studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Summer", 2016), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics464", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics314", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics415", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2017), course: "ics414", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "ics481", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "ics484", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth3xx", verified: false, studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2017), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "hichi", verified: false, studentID: acID}
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
        RadGrad.slug.getEntityID("web-developer", "DegreeGoal"),
        RadGrad.slug.getEntityID("bs-cs", "DegreeGoal")
      ]);

  RadGrad.user.setInterestTagIDs(acID,
      [
        RadGrad.slug.getEntityID("ruby", "Tag"),
        RadGrad.slug.getEntityID("rails", "Tag"),
        RadGrad.slug.getEntityID("css", "Tag"),
        RadGrad.slug.getEntityID("web-design", "Tag"),
        RadGrad.slug.getEntityID("software-engineering", "Tag")
      ]);

  RadGrad.user.setPicture(acID, "https://kelsieayamakawa.files.wordpress.com/2015/08/profile-e1440890483423.jpg");
  RadGrad.user.setAboutMe(acID, "I am a part-time student that loves to design and develop web sites.");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2017));

};