/**
 *
 * To be invoked in LoadDataModel.js.
 *
 * Created by Josephine Garces | February 2, 2016
 */


defineDegreeGoalsJgarces = function () {
  let jgarcesDegreeGoals = [
    {
      name: "Graduate School",
      slug: "graduate-school",
      description: "Graduate School awards you with advanced academic degrees - Masters or Doctoral degrees. For more information see [here](http://www.gradschools.com/)."
    }
  ];

  _.each(jgarcesDegreeGoals, RadGrad.degreegoal.define);
};
