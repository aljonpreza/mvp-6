/**
 * This function defines an array of users.
 * To be invoked in LoadDataModel.js.
 *
 * Created by Aljon Preza | January 17, 2016
 */

defineUsersAljonp = function() {
  let sampleUsers = [
    {
      firstName: "Amadi",
      middleName: "",
      lastName: "Clarus",
      slug: "amadiclarus",
      password: "foo",
      uhEmail: "aclarus@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Lisa",
      middleName: "",
      lastName: "Chen",
      slug: "lisachen",
      password: "foo",
      uhEmail: "lchen@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Lalo",
      middleName: "",
      lastName: "Thatom",
      slug: "lalothatom",
      password: "foo",
      uhEmail: "lthatom@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Sophie",
      middleName: "",
      lastName: "Wedekind",
      slug: "sophiewedekind",
      password: "foo",
      uhEmail: "swedekind@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Lara",
      middleName: "",
      lastName: "Bryan",
      slug: "larabryan",
      password: "foo",
      uhEmail: "lbryan@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Henie",
      middleName: "",
      lastName: "Brose",
      slug: "heniebrose",
      password: "foo",
      uhEmail: "hbrose@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Sorapong",
      middleName: "M.",
      lastName: "K.",
      slug: "khongnaw",
      password: "foo",
      uhEmail: "khongnaw@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Kelsie",
      middleName: "",
      lastName: "Yamakawa",
      slug: "kayama",
      password: "foo",
      uhEmail: "kayama@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Aljon",
      middleName: "",
      lastName: "Preza",
      slug: "aljonp",
      password: "foo",
      uhEmail: "aljonp@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Nowell",
      middleName: "",
      lastName: "Althaus",
      slug: "nowellalthaus",
      password: "foo",
      uhEmail: "nalthaus@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Philip",
      middleName: "Meadows",
      lastName: "Johnson",
      slug: "johnson",
      password: "foo",
      uhEmail: "johnson@hawaii.edu",
      role: RadGrad.role.student
    }
  ];

  _.each(sampleUsers, RadGrad.user.define);
};

