/**
 * This function defines an array of tags.
 * To be invoked in LoadDataModel.js.
 *
 * Created by Sorapong Khongnawang | January 18, 2016
 */

defineTagkhongnaw = function() {
    let khongnawTags = [

        // ICS discipline
        {
            name: "Cryptography",
            slug: "cryptography",
            description: "The practice and study of techniques for secure communication. For more information see [here](https://en.wikipedia.org/wiki/Cryptography).",
            tagType: "cs-disciplines"
        },
        {
            name: "Artificial intelligence",
            slug: "artificial-intelligence",
            description: "The study of how to create computer software that are capable of intelligent behavior.  For more information see [here](https://en.wikipedia.org/wiki/Artificial_intelligence).",
            tagType: "cs-disciplines"
        },
        {
            name: "Data science",
            slug: "data-science",
            description: "The interdisciplinary field about processes and systems to extract knowledge or insights from data in various forms.  For more information see [here](https://en.wikipedia.org/wiki/Data_science).",
            tagType: "cs-disciplines"
        },
        {
            name: "Computer architecture",
            slug: "computer-architecture",
            description: "A set of rules and methods that describe the functionality, organization and implementation of computer systems.  For more information see [here](https://en.wikipedia.org/wiki/Computer_architecture).",
            tagType: "cs-disciplines"
        },
        {
            name: "Parallel programming",
            slug: "parallel-programming",
            description: "A type of computation in which many calculations are carried out simultaneously.  For more information see [here](https://en.wikipedia.org/wiki/Parallel_computing).",
            tagType: "cs-disciplines"
        },
        // Non ICS discipline
        {
            name: "Theater",
            slug: "theater",
            description: "A collaborative form of fine art that uses live performers to present the experience to the audience.  For more information see [here](https://en.wikipedia.org/wiki/Theatre).",
            tagType: "non-cs-disciplines"
        },
        {
            name: "Travel Industry Management",
            slug: "travel-industry",
            description: "Hospitality management and tourism transportation management.  For more information see [here](http://www.catalog.hawaii.edu/schoolscolleges/tim/undergrad.htm).",
            tagType: "non-cs-disciplines"
        },
        {
            name: "Urban and Regional Planning",
            slug: "urban-reg-planning",
            description: "A technical and political process concerned with the use of land, protection and use of the environment, public welfare, and the design of the urban environment.  For more information see [here](https://en.wikipedia.org/wiki/Urban_planning).",
            tagType: "non-cs-disciplines"
        },
        {
            name: "Women's Studies",
            slug: "women-studies",
            description: "An interdisciplinary field of academic study that examines gender as a social and cultural construct.  For more information see [here](https://en.wikipedia.org/wiki/Women%27s_studies).",
            tagType: "technologies"
        },
        /* LOCATIONS */
        {
            name: "Hawaii",
            slug: "hawaii",
            description: "The 50th U.S. state located in Oceania.  For more information see [here](https://en.wikipedia.org/wiki/Hawaii).",
            tagType: "locations"
        },
        {
            name: "Silicon Valley",
            slug: "silicon-valley",
            description: "A nickname for the southern portion of the San Francisco Bay Area. Home to the world's largest high-tech corporations.  For more information see [here](https://en.wikipedia.org/wiki/Silicon_Valley).",
            tagType: "locations"
            },
        {
            name: "Western US",
            slug: "west-us",
            description: "The westernmost portion of the North American continent.  For more information see [here](https://en.wikipedia.org/wiki/Western_United_States).",
            tagType: "locations"
            },
        {
            name: "Eastern US",
            slug: "east-us",
            description: "The easternmost portion of the North American continent.  For more information see [here](https://en.wikipedia.org/wiki/Eastern_United_States).",
            tagType: "locations"
            },
        {
            name: "Southern US",
            slug: "south-us",
            description: "The southernmost portion of the North American continent.  For more information see [here](https://en.wikipedia.org/wiki/Southern_United_States).",
            tagType: "locations"
            }
    ];

    _.each(khongnawTags, RadGrad.tag.define);
};