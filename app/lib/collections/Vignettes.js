vignette = "Vignette";
Vignette = new Mongo.Collection(vignette);

Meteor.methods({
  addVignette: function(doc) {
    check(doc, Vignette.simpleSchema());
    Vignette.insert(doc);
  },

  editVignette: function(doc, docID) {
    check(doc, Vignette.simpleSchema());
    Vignette.update({_id: docID}, doc);
  },

  deleteVignette: function (docID) {
    Vignette.remove(docID);
  }
});

if (Meteor.isServer) {
  Meteor.publish(vignette, function() {
    return Vignette.find();
  });
}

Vignette.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    max: 140,
    optional: false,
    autoform: {
      group: vignette,
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
      group: vignette,
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
      group: vignette,
      placeholder: "UH Email"
    }
  },
  
  description: {
    label: "Description",
    type: String,
    optional: false,
    autoform: {
      group: vignette,
      palceholder: "Description"
    }
  },

  tags: {
    label: "Tags",
    type: [String],
    optional: true,
    autoform: {
      group: vignette,
      placeholder: "Tags"
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
      group: vignette,
      placeholder: "Date"
    }
  }

}));