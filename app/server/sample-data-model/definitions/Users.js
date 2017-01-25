defineUsers = function() {
  let sampleUsers = [
    {
      firstName: "Philip",
      middleName: "Meadows",
      lastName: "Johnson",
      slug: "philipjohnson",
      password: "foo",
      uhEmail: "jj@hawaii.edu",
      role: RadGrad.role.admin
    },
    {
      firstName: "Anthony",
      lastName: "Kriste",
      slug: "anthonykriste",
      password: "foo",
      uhEmail: "kriste@hawaii.edu",
      role: RadGrad.role.student
    }
  ];

  _.each(sampleUsers, RadGrad.user.define);
};