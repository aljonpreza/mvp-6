/**
 * This function defines an array of courses.
 * To be invoked in LoadDataModel.js.
 *
 * Created by Sorapong Khongnawang | January 18, 2016
 */
//ICS 481, ICS 483, ICS 484, ICS 485, EE 160
defineCoursesKhongnaw = function() {
    let khongnawCourses = [
        {
            name: "Introduction to Computer Graphics",
            slug: "ics481",
            number: "ICS 481",
            description: "Fundamentals of computer graphics including graphics hardware, representation, manipulation, and display of two- and three-dimensional objects, use of commercial software. Pre: 311 and either MATH 216, MATH 242, or MATH 252A; or consent.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS481.html).",
            tags: ["art", "computer-graphics"] 
        },
        {
            name: "Computer Vision",
            slug: "ics483",
            number: "ICS 483",
            description: "Introductory course in computer vision. Topics include image formation, image processing and filtering, edge detection, texture analysis and synthesis, binocular stereo, segmentation, tracking, object recognition and applications. A-F only. Pre: 212 and 311, or consent. Once a year.  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS483.html).",
            tags: ["computer-vision"] // To be implemented later
        },
        {
            name: "Data Visualization",
            slug: "ics484",
            number: "ICS 484",
            description: "ntroduction to data visualization through practical techniques for turning data into images to produce insight. Topics include: information visualization, geospatial visualization, scientific visualization, social network visualization, and medical visualization. Junior standing or higher. Pre: two ICS 300-level courses. (Spring only)  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS484.html).",
            tags: ["data-visualization"] // To be implemented later
        },
        {
            name: "Video Game Design and Development",
            slug: "ics485",
            number: "ICS 485",
            description: "Students will team design, build, and demonstrate video games or related interactive entertainment environments and applications. Topics will include emerging computer science techniques relevant to the development of these types of environments. Junior standing or higher. Pre: two ICS 300-level courses. (Spring only)  For more information see [here](http://courses.ics.hawaii.edu/syllabuses/ICS485.html).",
            tags: ["computer-graphics", "art"] // To be implemented later
        },
        {
            name: "Programming for Engineers",
            slug: "ee160",
            number: "EE 160",
            credithrs: 4,
            description: " Introductory course on computer programming and modern computing environments with an emphasis on algorithm and program design, implementation and debugging. Includes a hands-on laboratory to develop and practice programming skills. Restricted to engineering freshmen and sophomores. A-F only. Pre: Math 241 (or concurrent) or consent.  For more information see [here](https://www.google.com/url?q=https://drive.google.com/file/d/0B0yBjGINCgxEVDVvY0RkV2NqNWc/view?usp%3Ddrivesdk&sa=D&ust=1453183284483000&usg=AFQjCNGOsbZu9qc2ty44FvM2H_4u_lP4Iw).",
            tags: ["c","linux"] // To be implemented later
        }
    ];

    _.each(khongnawCourses, RadGrad.course.define);
};
