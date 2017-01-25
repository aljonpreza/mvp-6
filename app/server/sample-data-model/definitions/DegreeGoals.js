defineDegreeGoals = function () {
  let DegreeGoals = [
    {
      name: "Web developer",
      slug: "web-developer",
      description: "Web developers typically handle both server-side and front-end logic. This usually involves implementing all the visual elements that users see and use in the web application, as well as all the web services and APIs that are necessary to power the front-end. For more information see [here](http://money.usnews.com/careers/best-jobs/web-developer)."
    },
    {
      name: "Business intelligence analyst",
      slug: "business-intelligence-analyst",
      description: "Provides historical, current and predictive views of business operations.  Intelligence is gleamed through  reporting, online analytical processing, analytics, data mining, process mining, complex event processing, business performance management, benchmarking, text mining, predictive analytics and prescriptive analytics. For more information see [here](http://www.snagajob.com/job-descriptions/business-intelligence-analyst/)."
    },
    {
      name: "Computer system engineer",
      slug: "computer-system-engineer",
      description: "A combination of computer science, engineering, and mathematical analysis employed to develop, test and evaluate software, circuits, personal computers and more. A systems engineer doesn't simply engineer computer technology, but understand how that technology fits into the larger scheme of professional and personal needs. For more information see [here](https://www.sokanu.com/careers/computer-systems-engineer/)."
    },
    {
      name: "Database Administrator",
      slug: "database-administrator",
      description: "An IT professional who ensures that the software used to manage a database is properly maintained to allow rapid access when needed. Because constant access, searches, traffic are likely to have a damaging effect on any company database, the DBA works to maintain the efficiency of the servers. For more information see [here](http://money.usnews.com/careers/best-jobs/database-administrator)."
    },
    {
      name: "Network Engineer",
      slug: "network-engineer",
      description: "Network engineers are responsible for implementing, maintaining, supporting, developing and, in some cases designing communication networks within an organization. Their goal is to ensure the integrity of high availability network infrastructure in order to provide maximum performance for their users. For more information see [here](http://www.prospects.ac.uk/network_engineer_job_description.htm)."
    },
    {
      name: "Information Security Analyst",
      slug: "information-security-analyst",
      description: "Information security analysts are responsible for planning and implementing security measures to protect computer systems, networks and data. Information security analysts are expected to stay up-to-date on the latest intelligence, including hackers' methodologies, in order to anticipate security breaches. They also are responsible for preventing data loss and service interruptions by researching new technologies that will effectively protect a" +
      " network. For more information see [here](http://www.newenglandcollegeonline.com/resources/computer-science/information-security-analyst-career-outlook-and-salary/)."
    },
    {
      name: "Data Mining",
      slug: "data-mining",
      description: "The Data Mining Specialist's role is to design data modeling/analysis services that are used to mine enterprise systems and applications for knowledge and information that enhances business processes. This individual is also responsible for building, deploying and maintaining data support tools, metadata inventories and definitions for database file/table creation. For more information see [here](http://www.itbusinessedge.com/itdownloads/job-description-data-mining-specialist/88817)."
    },
    {
      name: "Operations Research Analyst",
      slug: "operations-research-analyst",
      description: "An operations research analyst is someone who formulates and applies mathematical modeling and other optimizing methods to develop and interpret information that assists management with decision making, policy formulation, or other managerial functions. May collect and analyze data and develop decision support software, service, or products. May develop and supply optimal time, cost, or logistics networks for program evaluation, review, or implementation. For more information see" +
      " [here](http://www.myplan.com/careers/operations-research-analysts/description-15-2031.00.html)."
    },
    {
      name: "User Experience Designer",
      slug: "user-experience-designer",
      description: "A user experience designer defines interaction models, user task flows, and UI specifications. Communicates scenarios, end-to-end experiences, interaction models, and screen designs to stakeholders. For more" +
      " information see [here](http://www.fastcodesign.com/3032719/ui-ux-who-does-what-a-designers-guide-to-the-tech-industry)."
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: " Data Scientist role is responsible for modeling complex problems, discovering insights and identifying opportunities through the use of statistical, algorithmic, mining and visualization techniques. In addition to advanced analytic skills, this role is also proficient at integrating and preparing large, varied datasets, architecting specialized database and computing environments, and communicating results. For more information see [here](https://ist.mit.edu/sites/default/files/about/org/roles/Data_Scientist_Position_Description_v4.pdf)."
    }

  ];

  _.each(DegreeGoals, RadGrad.degreegoal.define);
};