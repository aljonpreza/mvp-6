/**
 * Created by aljonp on 4/22/16.
 */
tempDate = new Date();
tempDate.setDate(tempDate.getDate());

var vignetteSeeds = [
  { title: "Live Action Internship",
    slug: "live-action-internship-aljonp",
    uhEmail: "aljonp", 
    hook: "I feel like this internship opened a huge door to my future.",
    description: "I feel like this internship opened a huge door to my future.  I learned a lot through this internship" +
    " as they have treated me well throughout my time there.  They have taught me many things that I will definitely be using" +
    " outside of school.",
    tags: ["Computer Engineering"],
    createdAt: tempDate
  },

  { title: "Ikayzo Internship",
    slug: "ikayzo-internship-kayama",
    uhEmail: "kayama",
    hook: "This experience has helped me solidify and clarify my plans for the future that I want to (I need to) do work that helps make the world a better place.",
    description: "This experience has helped me solidify and clarify my plans for the future that I want to (I need to) do work that helps make the world a beter place.  At first, I was a bit skeptical as I do not know how much of an impact an internship can be.  However, I've learned many things that I have used even outside of the internship.  It was really beneficial for me!",
    tags: ["Database"],
    createdAt: tempDate
  },

  { title: "Apple Internship",
    slug: "apple-internship-aljonp",
    uhEmail: "aljonp",
    hook: "No amount of past experience and stories could’ve prepared me for the amazing time I had at Apple and I think I made one of the wisest decisions in my career this summer.",
    description: "No amount of past experience and stories could’ve prepared me for the amazing time I had at Apple and I think I made one of the wisest decisions in my career this summer. My internship position at Apple was part of the Core OS group, which is mainly responsible for Mac OS X. However, this wasn’t just any Core OS internship — my job was at the forefront of Apple’s most anticipated product in decades — the iPhone.",
    tags: ["Computer Engineering", "C++"],
    createdAt: tempDate
  },

  { title: "parWinr Internship",
    slug: "parwinr-internship-khongnaw",
    uhEmail: "khongnaw",
    hook: "I was given repeated opportunities to add my ideas and advice, to learn, observe, and create-and not simply work on tedious tasks.",
    description: "I was given repeated opportunities to add my ideas and advice, to learn, observe, and create-and not simply work on tedious tasks.  It was pretty much an opportunity for me to show my skills and also learn from other internees.  My mentor was really helpful in guiding me throughout the internship.  The tasks given to me were beneficial to what I want to do after graduation.",
    tags: ["Computer Engineering","Database","C"],
    createdAt: tempDate
  }

];

if (Vignette.find().count() == 0) {
  _.each(vignetteSeeds, function(vignette) {
    Vignette.insert(vignette);
  });
}