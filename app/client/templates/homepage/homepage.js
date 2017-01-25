
Template.Home.rendered = function () {
  Meteor.subscribe("Work");

  $('.menu .item').tab();

  $('#innovation-bar').progress({autoSuccess: false});

  $('#competency-bar').progress({autoSuccess: false});

  $('#experience-bar').progress({autoSuccess: false});

  $('#carousel').slick({
    prevArrow: "<button class=\"circular ui icon button light-green white-text\"><i class=\"icon left arrow\"></i></button>",
    nextArrow: "<button class=\"circular ui icon right floated button light-green white-text\"><i class=\"icon right arrow\"></i></button>",
    appendArrows: ".arrow-holder",
    dots: false,
    infinite: true,
    arrows: true
  });

  //console.log(Meteor.user().profile.name);

};


