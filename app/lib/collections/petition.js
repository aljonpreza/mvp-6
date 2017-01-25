petition = "Petition";
Petition = new Mongo.Collection(petition);

Meteor.methods({
  addPetition: function(doc) {
    check(doc, Petition.simpleSchema());
    Petition.insert(doc);
  },

  editPetition: function(doc, docID) {
    check(doc, Petition.simpleSchema());
    Petition.update({_id: docID}, doc);
  },

  deletePetition: function (docID) {
    Petition.remove(docID);
  }
});

if (Meteor.isServer) {
  Meteor.publish(petition, function() {
    return Petition.find();
  });
}

Petition.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    max: 140,
    optional: false,
    autoform: {
      group: petition,
      placeholder: "Title"
    }
  },

  slug: {
    label: "Slug",
    type: String,
    optional: false,
    autoValue: function() {
      var slugTitle = this.field('title').value;
      slugTitle = slugTitle.toLowerCase();
      slugTitle = slugTitle.replace(/ /g, "-");

      slugTitle = slugTitle + "-" + this.field('uhEmail').value;

      return slugTitle;
    },
    autoform: {
      group: petition,
      placeholder: "Slug"
    }
  },

  uhEmail: {
    label: "UH Email",
    type: String,
    optional: false,
    autoValue: function() {
      if (Meteor.isClient) {
        return Meteor.user().profile.name;
      }
    },
    autoform: {
      group: petition,
      placeholder: "UH Email"
    }
  },

  description: {
    label: "Description",
    type: String,
    optional: false,
    autoform: {
      group: petition,
      palceholder: "Description"
    }
  },

  createdAt: {
    type: Date,
    label: "Date",
    optional: false,
    autoValue: function() {
      tempDate = new Date();
      tempDate.setDate(tempDate.getDate());
      return tempDate;
    },
    autoform: {
      group: petition,
      placeholder: "Date"
    }
  }

}));