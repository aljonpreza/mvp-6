/**
 * This file holds the information for Lara Bryan.
 */

defineLaraBryan = function() {
  let acID = RadGrad.user.findBySlug("larabryan")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2016), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 15, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {
      semesterID: RadGrad.semester.get("Fall", 2016),
      course: "ics111",
      verified: true,
      grade: "A",
      studentID: acID,
      credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics141", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics211", verified: false, studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics241", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth1xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth1xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth1xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2017), course: "ics212", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "ics311", verified: false, studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "oth2xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "oth2xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2017), course: "oth2xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2017), course: "ics321", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "ics312", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth2xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth2xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), course: "oth2xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2018), course: "ics313", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2018), course: "ics451", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2018), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2018), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2018), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2018), course: "ics332", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2018), course: "ics484", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2018), course: "ics351", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2018), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2018), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2019), course: "ics421", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2019), course: "ics423", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2019), course: "ics425", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2019), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2019), course: "oth3xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2019), course: "ics422", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), course: "oth3xx", verified: false, studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "atthack16", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2017), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2017), opportunity: "data-science-specialization", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2018), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2018), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2018), opportunity: "data-science-specialization", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2019), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2019), opportunity: "data-science-specialization", verified: false, studentID: acID}
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
      RadGrad.slug.getEntityID("network-engineer", "DegreeGoal"),
      RadGrad.slug.getEntityID("data-mining", "DegreeGoal"),
      RadGrad.slug.getEntityID("ba-ics", "DegreeGoal")
    ]);

  RadGrad.user.setInterestTagIDs(acID,
    [
      RadGrad.slug.getEntityID("rdbms", "Tag"),
      RadGrad.slug.getEntityID("database", "Tag"),
      RadGrad.slug.getEntityID("data-science", "Tag"),
      RadGrad.slug.getEntityID("computer-security", "Tag")
    ]);

  RadGrad.user.setPicture(acID, "http://statistics.unl.edu/images/featuredperson/Jessica%20Burow.jpg");
  RadGrad.user.setAboutMe(acID, "I love everything about data, numbers, and statistics!");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2019));

};