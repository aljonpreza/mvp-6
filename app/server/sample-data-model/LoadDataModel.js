
// Before loading sample data model, delete all pre-existing data.
 //RadGrad.deleteAll();
 //RadGrad.verifyEmptyDataModel();

// See the definitions/ directory for the definitions of these functions.
// Order of invocation of the following functions is sometimes important.
// For example, Tag definitions refer to TagTypes, so TagTypes must be defined first.

defineOpportunityTypes();
defineTagTypes();

/* Define tags */
defineTags();
defineTagMkshimod();
defineTagAljonp();
defineTagKayama();
defineTagbjboado();
defineTagkhongnaw();
defineTagRorya();
defineTagLuong97();
defineTagSkchun();

/* Define Semesters */
defineSemesters();

/* Define Users */
defineUsers();
defineUsersAljonp();

/* Define Opportunities */
defineOpportunities();
defineOpportunitiesRorya();
defineSkchunOpportunities();
defineOpportunitiesbjboado();

/* Define Courses */
defineCourses();
defineCoursesAljonp();
defineCoursesKayama();
defineCoursesKhongnaw();
defineCoursesRorya();
defineCoursesLuong97();
defineCoursesSkchun();
defineCoursesbjboado();
defineCoursesMkshimod();
defineCoursesSy();
defineCoursesJgarces();

/* Define Degree Goals */
defineDegreeGoals();
defineDegreeGoalsKayama();
defineDegreeGoalsAljonp();
defineDegreeGoalsJgarces();

/* Define Profiles */
defineStudentProfile();
defineStudentProfilesAljonp();
