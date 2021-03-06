/**
 * This file holds the information for Sophie Wedekind.
 */

defineSophieWedekind = function() {
  let acID = RadGrad.user.findBySlug("sophiewedekind")._id;

  /* Work Instances */
  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2013), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2013), hrswk: 30, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2014), hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2014), hrswk: 30, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Summer", 2015), hrswk: 30, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 5, studentID: acID},
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  /* Courses */
  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "ics111", verified: true, grade: "A", studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "ics141", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2013), course: "ics211", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "ics241", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2013), course: "oth1xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics212", verified: true, grade: "B", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "ics311", verified: true, grade: "B", studentID: acID, credithrs: 4
    },
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "oth2xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics331", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "ics321", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth2xx", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), course: "oth1xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics361", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "C", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth2xx", verified: true, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "oth3xx", verified: true, grade: "B", studentID: acID},

    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics332", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "ics415", verified: false, studentID: acID, credithrs: 4},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), course: "oth2xx", verified: false, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics464", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics465", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "ics314", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth3xx", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), course: "oth1xx", verified: false, studentID: acID, credithrs: 4},

    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics414", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics481", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics484", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "oth2xx", verified: false, studentID: acID, credithrs: 4}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  /* Opportunities */
  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2014), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2014), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2015), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},

    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "acm-manoa", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "acm-manoa", verified: false, studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2016), opportunity: "hichi", verified: true, hrswk: 5, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "hichi", verified: false, studentID: acID}
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
        RadGrad.slug.getEntityID("user-experience-designer", "DegreeGoal"),
        RadGrad.slug.getEntityID("ba-ics", "DegreeGoal")
      ]);

  RadGrad.user.setInterestTagIDs(acID,
      [
        RadGrad.slug.getEntityID("marketing", "Tag"),
        RadGrad.slug.getEntityID("perl", "Tag"),
        RadGrad.slug.getEntityID("rails", "Tag"),
        RadGrad.slug.getEntityID("web-design", "Tag"),
        RadGrad.slug.getEntityID("php", "Tag"),
        RadGrad.slug.getEntityID("human-computer-interaction", "Tag")
      ]);

  RadGrad.user.setPicture(acID, "http://www.kellogg.northwestern.edu/~/media/Images/Web2014/Programs/One-Year-Program/Desktop/small-d-cheng-li.ashx");
  RadGrad.user.setAboutMe(acID, "I love user-interface design.  I strive to make a better experience for all people when it comes to UI.");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Spring", 2016));

};