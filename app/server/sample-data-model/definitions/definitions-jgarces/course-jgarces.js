/**
 * This function defines an array of courses.
 * To be invoked in LoadDataModel.js.
 *
 * Created by Josephine Garces | February 2, 2016
 */
defineCoursesJgarces = function() {
  let jgarcesCourses = [
    {
      name: "Special Topics",
      slug: "ics491",
      number: "ICS 491",
      description: "Reflects special interests of faculty. Oriented toward juniors and seniors. Repeatable one time for BS/CS students.  For more information see [here](http://www.catalog.hawaii.edu/courses/departments/ics.htm).",
      tags: []
    }
  ];

  _.each(jgarcesCourses, RadGrad.course.define);
};