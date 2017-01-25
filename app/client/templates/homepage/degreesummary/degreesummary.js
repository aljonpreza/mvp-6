Template.degreesummary.helpers({

  hasGrade: function(grade) {
    return grade !== undefined;
  },

  changeGradetoC: function(grade) {
    if (grade == "A") {
      return 9;
    }
    else if (grade == "B") {
      return 5;
    }
    else {
      return 0;
    }
  },

  hasWorkHours: function(workHours) {
    return workHours !== undefined;
  },

  notPastSemester: function(semester) {
    var year = semester.split(" ");

    return year[1] > 2015;
  }

});