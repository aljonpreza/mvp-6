Template.DegreePlanner.rendered = function () {
  $('.menu .item').tab();

  $('.ui.accordion')
      .accordion()
  ;

  $('#carousel').slick({
    prevArrow: "<button class=\"circular ui icon button light-green white-text\"><i class=\"icon left arrow\"></i></button>",
    nextArrow: "<button class=\"circular ui icon right floated button light-green white-text\"><i class=\"icon right arrow\"></i></button>",
    appendArrows: ".arrow-holder",
    dots: false,
    infinite: true,
    arrows: true
  });
};

Template.registerHelper('userdegree', ()=> {

  // retrieve user degreePlaneDoc
  let user = RadGrad.user.findBySlug(Meteor.user().profile.name);
  let degreePlanDoc = RadGrad.degreeplan.find({_id: user.degreePlanID}).fetch();

  // aggregate instances into arrays
  let courseInstanceArr = _.map(degreePlanDoc[0].courseInstanceIDs, function (id) {
    return RadGrad.courseinstance.find({_id: id}).fetch()
  });
  let interestInstanceArr = _.map(degreePlanDoc[0].opportunityInstanceIDs, function (id) {
    return RadGrad.opportunityinstance.find({_id: id}).fetch()
  });
  let workInstanceArr = _.map(degreePlanDoc[0].workInstanceIDs, function (id) {
    return RadGrad.workinstance.find({_id: id}).fetch()
  });
  let opportunityInstanceArr = _.map(degreePlanDoc[0].opportunityInstanceIDs, function (id) {
    return RadGrad.opportunityinstance.find({_id: id}).fetch()
  });

  // aggregate instance values into arrays
  let courseArr = _.map(courseInstanceArr, function (arr) {
    return {
      _id: arr[0]._id,
      course: RadGrad.course.findOne(arr[0].courseID).number,
      grade: arr[0].grade,
      verified: arr[0].verified,
      credithrs: arr[0].credithrs,
      semester: RadGrad.semester.toString((arr[0].semesterID))
    }
  });
  let othCourseArr = _.filter(courseArr, function (obj) {
    return obj.course.indexOf("OTH") > -1
  });
  let regCourseArr = _.filter(courseArr, function (obj) {
    return !(obj.course.indexOf("OTH") > -1)
  });
  let opportunityArr = _.map(opportunityInstanceArr, function (arr) {
    return {
      _id: arr[0]._id,
      opp: RadGrad.opportunity.findOne(arr[0].opportunityID).name,
      semester: RadGrad.semester.toString((arr[0].semesterID))
    }
  });
  let workArr = _.map(workInstanceArr, function (arr) {
    return {_id: arr[0]._id,hr: arr[0].hrswk, semester: RadGrad.semester.toString((arr[0].semesterID))}
  });

  // create objects that are grouped by semester
  let groupBySemOpp = _.groupBy(opportunityArr, function (obj) {
    return obj.semester
  });
  let groupBySemOthCourse = _.groupBy(othCourseArr, function (obj) {
    return obj.semester
  });
  let groupBySemRegCourse = _.groupBy(regCourseArr, function (obj) {
    return obj.semester
  });
  let groupBySemWork = _.groupBy(workArr, function (obj) {
    return obj.semester
  });

// aggregate regcourse, othcourse, work, opportunity into ONE object
  let obj = {}
  for (semester in groupBySemOpp) {
    obj[semester] = {semester: semester, opportunity: groupBySemOpp[semester]}
  }

  for (semester in groupBySemOthCourse) {
    if (typeof(obj[semester]) === "object") {
      obj[semester].other_course = groupBySemOthCourse[semester]
    }
    else {
      obj[semester] = {semester: semester, other_course: groupBySemOthCourse[semester]}
    }
  }

  for (semester in groupBySemRegCourse) {
    if (typeof(obj[semester]) === "object") {
      obj[semester].courses = groupBySemRegCourse[semester]
    }
    else {
      obj[semester] = {semester: semester, courses: groupBySemRegCourse[semester]}
    }
  }

  for (semester in groupBySemWork) {
    if (typeof(obj[semester]) === "object") {
      obj[semester].wkhr = groupBySemWork[semester][0]
    }
    else {
      obj[semester] = {semester: semester, wkhr: groupBySemWork[semester][0]}
    }
  }


// Identify all the semester string
let semesterList = []
for(var sem in obj){
  semesterList.push(sem)
}

// Identify all the years by identifying all the Fall semesters.
// i.e. if there exists "Spring 2016" then construct "Fall 2015".
let semObj = {}
while(semesterList.length != 0){
  var splited = semesterList[semesterList.length - 1].split(" ");

  if((splited[0] === "Spring" || splited[0] === "Summer")){
    if(typeof(semObj["Fall "+ (parseInt(splited[1])-1)]) === "undefined"){
      semObj["Fall "+ (parseInt(splited[1])-1)] = [semesterList.pop()]
    }

    else{
      semObj["Fall "+ (parseInt(splited[1])-1)].push(semesterList.pop())
    }
  }
  if(splited[0] === "Fall"){
    if(semObj[semesterList[semesterList.length - 1]] === "undefined"){
      semObj[semesterList[semesterList.length - 1]] = []
      semesterList.pop()
    }else{

      semesterList.pop()
    }
  }
}

// Construct a list of semesters based on
// identified Fall semesters.
// i.e. semObj = {Fall 2016: "exist"}
//      sortedSem = ["Fall 2016", "Spring 2017", "Summer 2017"]

// Compile a list of Fall semester
let fallSemesters = []
for(var semester in semObj){
  fallSemesters.push(semester)
}

// Sort the Fall semester list by year list
fallSemesters = _.sortBy(fallSemesters, function (val) {
  splited = val.split(" ");
  return parseInt(splited[1])
});

// Create a list of semesters based on give fall semesters.
let sortedSem = []
for(var i in fallSemesters){
  var splited = fallSemesters[i].split(" ")
  sortedSem.push(fallSemesters[i])
  sortedSem.push("Spring "+ (parseInt(splited[1])+1))
  sortedSem.push("Summer "+ (parseInt(splited[1])+1))

}


// group semesters into year object
// Create array of objects to be return to degree planner template
  let count = 0;
  let out = [];
  let size = out.length;
  out[size] = {year: []};

  for (var i in sortedSem) {
    if(count === 3){
      count = 0;
      size = out.length;
      out[size] = {year: []}
    }
    // three semesters per degree planner panel
    if (count < 3) {
      // create empty semester object
      if(typeof(obj[sortedSem[i]]) === "undefined"){
        out[size].year[out[size].year.length] = {semester: sortedSem[i]}
      }
      else {
        out[size].year[out[size].year.length] = obj[sortedSem[i]];
      }
      count++
    }

  }
//
  return out;
// WORKING EXAMPLE
  /*
   return [
   {
   year: [{semester:"FALL 2012", other_course: [{course:"MATH 241",grade: "A", verified: true, credithrs: 4, semester:"FALL 2012"},{course:"ENG 100"}], courses:[{course:"ICS111"},{course:"ICS141"}], wkhr:{hr:10, semester: "FALL 2012", verified: true}, opportunities:[{opp:"ACM MANOA"}]}, {semester:"SPRING 2013", other_course: [{course:"MATH 241"},{course:"ENG 100"}], courses:[{course:"ICS111"},{course:"ICS141"}], wkhr:{hr:10, semester: "FALL 2012", verified: true}, opportunities:[{opp:"ACM MANOA"}]}, {semester:"SUMMER 2013", other_course: [{course:"MATH 241"},{course:"ENG 100"}], courses:[{course:"ICS111"},{course:"ICS141"}], wkhr:{hr:10, semester: "FALL 2012", verified: true}, opportunities:[{opp:"ACM MANOA"},{opp:"ATT HACK"}]}]
   },
   {
   year: [{semester:"FALL 2013", other_course: [{course:"MATH 241"},{course:"ENG 100"}], courses:[{course:"ICS111"},{course:"ICS141"}], wkhr:{hr:10, semester: "FALL 2012", verified: true}, opportunities:[{opp:"ACM MANOA"}]}, {semester:"SPRING 2014", other_course: [{course:"MATH 241"},{course:"ENG 100"}], courses:[{course:"ICS111"},{course:"ICS141"}], wkhr:{hr:10, semester: "FALL 2012", verified: true}, opportunities:[{opp:"ACM MANOA"},{opp:"IEEE"}]}, {semester:"SUMMER 2014", other_course: [{course:"MATH 241"},{course:"ENG 100"}], courses:[{course:"ICS111"},{course:"ICS141"}], wkhr:{hr:10, semester: "FALL 2012", verified: true}, opportunities:[{opp:"ACM MANOA"}]}]
   }
   ];
   */



});






