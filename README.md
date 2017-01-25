# Quick Links
- [About RadGrad MVP-6](https://github.com/radgrad/mvp-6#about-radgrad-mvp-6)
- [Functions](https://github.com/radgrad/mvp-6#functions)
  - [Home Page](https://github.com/radgrad/mvp-6#home-page)
  - [Degree Planner Page](https://github.com/radgrad/mvp-6#degree-planner-page)
  - [Profile Page](https://github.com/radgrad/mvp-6#profile-page)
  - [Opportunities Page](https://github.com/radgrad/mvp-6#opportunities-page)
  - [Vignettes Page](https://github.com/radgrad/mvp-6#vignettes-page)
  - [Petitions Page](https://github.com/radgrad/mvp-6#petitions-page)
- [Progress](https://github.com/radgrad/mvp-6#progress)
  - [Milestone 1](https://github.com/radgrad/mvp-6#milestone-1-changelog-april-14-2016)
  - [Milestone 2](https://github.com/radgrad/mvp-6#milestone-2-changelog-april-21-2016)
  - [Milestone 3](https://github.com/radgrad/mvp-6#milestone-3-changelog-april-28-2016)
  - [Milestone 4](https://github.com/radgrad/mvp-6#milestone-4-changelog-may-5-2016)
  - [Final Milestone](https://github.com/radgrad/mvp-6#final-milestone-changelog-may-10-2016)

# About [RadGrad MVP-6](http://radgrad-mvp-6.meteorapp.com/)
RadGrad analyzes current degree program progress with respect to future career desires, and helps students and their department actively plan in a data-driven fashion to improve post-graduation outcomes.

RadGrad helps computer science students evaluate the sometimes overwhelming number of academic and extracurricular opportunities, and determine ways to invest their time most productively given their career goals.

RadGrad also helps computer science departments by providing data-backed evidence regarding the success, failure, and as-yet unrealized opportunities for the department to help produce successful computer scientists.

## Functions
### HOME PAGE
<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/status.PNG" width="500">
<br>
Shows a user's status as of the previous semester.  The GPA, credits, courses remaining, and semester are currently static.

<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/recommendations.PNG" width="500">
<br>
Gives recommendations to the user of opportunities they should go to, vignettes they should view, and petitions that they should participate in.

<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/ice-rating.PNG" width="500">
<br>
Shows a user's ICE rating and progress as of the previous semester.

<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/interest_degreegoals.png" width="500">
<br>
Shows a user's interests and degree goals.  They can delete existing interests and degree goals, and add new ones.  Duplicates cannot be added and will display a warning.

### DEGREE PLANNER PAGE
<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/degreePlanner.png" width="500">
<br>
Shows a user a planner for a four school year schedule.  It contains all past courses, opportunities, and work hours the users has done.  Courses and opportunities with a red x next to them can be deleted from the planner.  Note that only current and future courses, and all opportunities can be deleted.

<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/courses.png" width="500">
<br>
Shows a user all courses and opportunities that they can add to their degree planner.  Clicking the dropdown button will show users more information about the course and an option to add it to the planner.  Note that courses/opportunities can only be added to current and future semesters.  User's can also search for courses/opportunities using the search bar or catergoizing them by their interests and/or degree goals.  This function is currently static.

<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/warning_recommendations.PNG" width="500">
<br>
Shows a user any warnings they have pertaining to their planner.  It also gives recommendations to help improve their planning experience, ICE rating, etc.  This function is currently static.

### PROFILE PAGE
<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/profile.png" width="500">
<br>
Shows a user their personal information such as their about me, email, interests, etc.  Also shows all vignettes and petitions created by them with the option to edit them (currently static).

### OPPORTUNITIES PAGE
<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/opportunities.png" width="500">
<br>
Shows a user all opportunities that are available with a description and tags that are related to it.

### VIGNETTES PAGE
<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/vignette.png" width="500">
<br>
Shows a user all vignettes created.  They can also create a vignette of their own and post it.

### PETITIONS PAGE
<img src="https://raw.githubusercontent.com/radgrad/mvp-6/master/app/public/images/petitions.png" width="500">
<br>
Shows a user all petitions created and participate in it if they want.  They can also create a petition of their own and post it.  The participation button is currently static.

## Progress
View our Huboard [here](https://huboard.com/radgrad/mvp-6#/).

### Milestone 1 Changelog (April 14, 2016)
Using Semantic UI, implemented skeleton pages for:
- **LANDING PAGE:**
 - Overall theme changed from Material Design to Semantic UI.
 - Changes made upon usability test.
 - Carousel removed.
 - Shorten explanation text.
 - Eliminated screen shots to avoid confusion with components.
 - Added "tell me more" button to ICE rating section that shows a more detailed description of ICE.
 - Removed graphs because they didn't fit in theme of the landing page.

- **HOME PAGE:**
 - Overall theme changed from Material Design to Semantic UI.
 - Each "module" put into templates for ease of access later with database.
 - Recommendations reformatted upon usability test.
 - Made side navbar smaller with icons.
 - Interests and degree goal will now be using search bars instead of modals to add items (currently not functioning).

- **DEGREE PLANNER PAGE:**
 - Overall theme changed from Material Design to Semantic UI.
 - Each "module" put into templates for ease of access later with database.
 - Changes made upon usability test.
 - Made side navbar smaller with icons.
 - Adding courses and opportunities to the planner will now be using add buttons instead of drag and drop (currently not functioning).
 - Moved instructions into an accordion at the top of screen so user's can view or hide when they want.
 - Changed color of recommendations.

### Tasks Assignment Milestone 1
#### aljonp
- Set up project files.
- Created Home page skeleton and blaze templates.
- Reimplemented slick carousel from mockup page.
- Helped revise README file.

#### kayama
- Created Degree Planner page skeleton and blaze templates.
- Helped implement iron route.
- Helped revise README file.
- Created GitHub page

#### khongnaw
- Created Landing page skeleton and blaze templates.
- Helped implement iron route.
- Helped revise README file.

### Milestone 2 Changelog (April 21, 2016)
- **OVERALL:**
 - Implemented log in system with the University of Hawaii CAS authentication.
 - Added RadGrad core package.
 - Added all databases from our [ics-data-model](https://github.com/radgrad/ics-data-model).
 - Added Galaxy deployment settings.

- **LANDING PAGE:**
 - Changed overall look.
 - Added link to our HuBoard page.
 - Added short descriptions of some features in RadGrad.
 - Added contact information about the developers.

- **HOME PAGE:**
 - Fixed spacing of panels.

- **DEGREE PLANNER PAGE:**
 - Moved add courses/opportunities below the degree planner.
 - Changed add courses/opportunities from a table to a list.
 - Changed recommendation color scheme from light green to cyan.
 - Fixed spacing of panels.

- **RADGRAD DATA PAGE:**
 - Shows all data from our ics-data-model.
 - Converted to Semantic UI.

### Tasks Assignment Milestone 2
#### aljonp
- Implemented UH CAS account login.
- Converted RadGrad data page to Semantic UI.
- Fixed look of the Landing Page.

#### kayama
- Fixed look of the Degree Planner Page.
- Added settings for Galaxy deployment.
- Revised README file and GitHub pages.
- Deployed system to Galaxy.

#### khongnaw
- Added RadGrad core package.
- Implemented all databases from our ics-data-model.
- Created RadGrad Data Page.

### Milestone 3 Changelog (April 28, 2016)
- **OVERALL:**
 - Associated UH CAS accounts to RadGrad users created from the ics-data-model.
 - Updated profile picture to take associated RadGrad users when logged in instead of mock profile picture.
 - Added "active page" functionality to sidebar.

- **LANDING PAGE:**
 - No updates.

- **HOME PAGE:**
 - Added edit button to status section (not working).
 - Associated recommendations with the ics-data-model.
 - Added modals to recommendations for more information.
 - Interests and degree goals are now associated with RadGrad user data.
 - Implemented interests and degree goal search function.

- **DEGREE PLANNER PAGE:**
 - No updates.

- **PROFILE PAGE:**
 - Created mockup of profile page.
 - Associated data on profile page with the ics-data-model.

- **OPPORTUNITIES PAGE:**
 - Created mockup of opportunities page.
 - Associated opportunities with the ics-data-model.

- **PETITION PAGE:**
 - Created mockup of petition page.
 - Created seeds for petition page.
 - Created form to add new petitions.

- **VIGNETTE PAGE:**
 - Created mockup of vignette page.
 - Created seeds for vignette page.
 - Created form to add new vignettes.

- **RADGRAD DATA PAGE:**
 - Made all RadGrad users and data visible.

### Tasks Assignment Milestone 3
#### aljonp
- Created mockup of vignette page.
- Created seeds for vignette page.
- Implemented interest and degree goal search function
- Pulled data from the ics-data-model of interests, degree goals, and recommendations onto the homepage.
- Created modals for the recommendation module.
- Added "active page" functionality to sidebar.

#### kayama
- Created mockup of petition page.
- Created seeds for petition page.
- Created mockup of opportunities page.
- Associated data from the ics-data-model to opportunities page.
- Revised README file and GitHub pages.
- Deployed system to Galaxy.

#### khongnaw
- Created mockup of profile page.
- Associated UH CAS accounts to RadGrad users.
- Made all RadGrad users and data visible.
- Associated data from ics-data-model to update correctly with correct accounts in the homepage and sidebar.

### Milestone 4 Changelog (May 5, 2016)
- **LANDING PAGE:**
 - No updates.

- **HOME PAGE:**
 - Implemented add/delete function to interests/degree goals.

- **DEGREE PLANNER PAGE:**
 - Pulled associated data from ics-data-model of logged in user onto the planner.
 - Had pulled data from ics-data-model match visual structure of the planner.
 - Pulled courses/opportunities data from ics-data-model onto the add courses/opportunities section.
 - Added dropdown buttons to the add courses/opportunities section.

- **PROFILE PAGE:**
 - No updates.

- **OPPORTUNITIES PAGE:**
 - No updates.

- **PETITION PAGE:**
 - Implemented add new petition function.

- **VIGNETTE PAGE:**
 - Implemented add new vignette function.

- **RADGRAD DATA PAGE:**
 - No updates.

### Tasks Assignment Milestone 4
#### aljonp
- Implemented add new petition function.
- Implemented add new vignette function.
- Implemented add/delete function to interests/degree goals.

#### kayama
- Pulled courses/opportunities data from ics-data-model onto the add courses/opportunities section.
- Added dropdown buttons to the add courses/opportunities section.
- Revised README file and GitHub pages.
- Deployed system to Galaxy.

#### khongnaw
- Pulled associated data from ics-data-model of logged in user onto the planner.
- Had pulled data from ics-data-model match visual structure of the planner.

### Final Milestone Changelog (May 10, 2016)
- **LANDING PAGE:**
 - No updates.

- **HOME PAGE:**
 - Changed degree planner summary from static to functional.  Updates changes made in the degree planner page.

- **DEGREE PLANNER PAGE:**
 - Changed instructions to explain how to use the degree planner page.
 - Fixed planner to pull correct course and work hour data from the ics-data-model.
 - Fixed planner to show opportunities.
 - Fixed planner to have placeholders for semesters with no courses or opportunities in them.
 - Fixed planner to show all semesters
 - Fixed planner to show semesters in the correct order.
 - Implemented the ICE system to show number of points earned for each course taken.
 - Added course names and descriptions to ICS/EE Courses module.
 - Implemented add/delete courses/opportunities for current to future semesters of the planner.
 - Implemented add work hours to the planner.

- **PROFILE PAGE:**
 - Changed look of the profile page.
 - Pulled user's interests, degree goals, petitions, and vignettes from the ics-data-model into the profile page.

- **OPPORTUNITIES PAGE:**
 - No updates.

- **PETITION PAGE:**
 - Added footer to bottom of page.

- **VIGNETTE PAGE:**
 - Added footer to bottom of page.

- **CATALOG PAGE:**
 - Changed name from "RadGrad Data Page" to Catalog.

### Tasks Assignment Final Milestone
#### aljonp
- Fixed planner to pull correct course and work hour data from the ics-data-model.
- Implemented the ICE system to show number of points earned for each course taken.
- Added course names and descriptions to ICS/EE Courses module.
- Implemented add/delete courses/opportunities for current to future semesters of the planner.
- Implemented add work hours to the planner.

#### kayama
- Changed instructions to explain how to use the degree planner page.
- Changed look of the profile page.
- Pulled user's interests, degree goals, petitions, and vignettes from the ics-data-model into the profile page.
- Revised README file and GitHub pages.
- Deployed system to Galaxy.

#### khongnaw
- Fixed planner to show opportunities.
- Fixed planner to show all semesters
- Fixed planner to show semesters in the correct order.
- Fixed planner to have placeholders for semesters with no courses or opportunities in them.