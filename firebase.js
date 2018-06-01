// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOTYf9Mf9RDammx_7x36FhWlcZgn_47hc",
    authDomain: "newproject-984f8.firebaseapp.com",
    databaseURL: "https://newproject-984f8.firebaseio.com",
    projectId: "newproject-984f8",
    storageBucket: "newproject-984f8.appspot.com",
    messagingSenderId: "647209738679"
  };
  firebase.initializeApp(config);
  // Get a reference to the database service
   var database = firebase.database();

   // Initial Values
    var name = "";
    var email = "";
    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();

      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      database.ref().set({
        name: name,
        email: email
      });
    });

    // Firebase watcher + initial loader
       database.ref().on("value", function(snapshot) {
         // Log everything that's coming out of snapshot
         console.log(snapshot.val());
         console.log(snapshot.val().name);
         console.log(snapshot.val().email);

         // Change the HTML to reflect
         $("#name-display").text(snapshot.val().name);
         $("#email-display").text(snapshot.val().email);
        
         // Handle the errors
       }, function(errorObject) {
         console.log("Errors handled: " + errorObject.code);
       });
