/**
 * This function defines an array of degree goals.
 * To be invoked in LoadDataModel.js.
 * Created by Kelsie Yamakawa.
 */

defineDegreeGoalsKayama = function () {
  let kayamaDegreeGoals = [
    {
      name: "Robotics Engineer",
      slug: "robotics-engineer",
      description: "Robotics engineers use computer-aided design and drafting (CADD) and computer-aided manufacturing (CAM) systems to perform their tasks.  For more information see [here](http://www.sciencebuddies.org/science-engineering-careers/engineering/robotics-engineer)."
    },
    {
      name: "Bioinformatics Developer",
      slug: "bioinformatics-developer",
      description: "A bioinformatics developer will implement data analysis, communication, and visualization solutions critical to improving crop yield, primarily by improving photosynthetic metabolism. They implement robust data analysis pipelines and services that provide complex computational science analytic results to plant biologists and biochemists in a highly collaborative and integrative setting.  For more information see [here](http://www.bensonhillbio.com/Bioinformatics_Developer.html)."
    },
    {
      name: "Animation Designer",
      slug: "animation-designer",
      description: "An animation designer utilizes the latest computer technology to create images and effects for television, movies, websites and video games. They also coordinate projects and animators to produce 3D animation.  For more information see [here](http://learn.org/articles/What_is_an_Animation_Designer.html)."
    },
    {
      name: "Game Designer",
      slug: "game-designer",
      description: "Game designers work with a team developing and designing video games.  Game designers have duties like designing characters, levels, puzzles, art and animation, and writing code, using various computer programming languages.  For more information see [here](http://study.com/articles/Game_Designer_Job_Info_and_Requirements_for_Becoming_a_Game_Designer.html)."
    }
  ];

  _.each(kayamaDegreeGoals, RadGrad.degreegoal.define);
};
