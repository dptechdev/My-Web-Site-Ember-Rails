App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('contact');
  this.resource('books');
});

App.IndexRoute = Ember.Route.extend({

 model: function() {
    return(GREETING);
  }

});

App.AboutRoute = Ember.Route.extend({

  model: function() {
    return(ABOUTME);
  }

});

App.ContactRoute = Ember.Route.extend({

  model: function() {
    return(CONTACTME);
  }

});

App.BooksRoute = Ember.Route.extend({
  model: function() {
    return(TESTBOOKS);
  }
});




//var ROUTEIFWORKS = "route works";

//Index constant
var GREETING = "Hello Ember!";

//About constant
var ABOUTME = "Hi! My name is Derek. I'm an application developer!";

//Contact constant
var CONTACTME = "You can feel free to hit me up on twitter @dptechdev or my email --- droc37191@gmail.com";

var TESTBOOKS = [

  {"title": "programming ember", author: "tom dale"},
  {"title": "programming backbone", author: "some guy who made backbone"},
  {"title": "programming anuglar", author: "some stupid guy"}
];

