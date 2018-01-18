
//confirm link to js file
console.log("link success");
//initialize firebase
var config = {
   apiKey: "AIzaSyAJyvdItB5-MN1eoXOgy6gFOHBBo6Mr3e4",
   authDomain: "fir-hw-22d43.firebaseapp.com",
   databaseURL: "https://fir-hw-22d43.firebaseio.com",
   projectId: "fir-hw-22d43",
   storageBucket: "fir-hw-22d43.appspot.com",
   messagingSenderId: "365045219786"
 };
firebase.initializeApp(config);


//establish variable to firebase
var database = firebase.database();

var currentTime = moment();
var frequency = $("#frequency-form").val();
var nextArrival = $("#trainTime-form").val();
var minutesAway = currentTime.diff(nextArrival);

var getIDTest = $('#form-group')
var idRef = firebase.database().ref().child('form-group');


//empty variable to store information
var train = {};

//push the entered information to firebase on click of submit button.
$(function () {
$("#submit").on("click", function() {
    event.preventDefault();

    train.name = $("#name-form").val().trim();
    train.destination = $("#destination-form").val().trim();
    train.first_train = $("#trainTime-form").val().trim();
    train.frequency = $("#frequency-form").val().trim();
    train.stamp = firebase.database.ServerValue.TIMESTAMP;
    console.log(train);
    database.ref().push(train);

  });
});
 console.log(database);


//bellow I attempt to retrieve information from the database. didnt work as planned.

database().on("child_added", function(childSnapshot){

  console.log(childSnapshot.val().name);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().first_train);
  console.log(childSnapshot.val().frequency);

$("#putInfoHere").append("<span class='name>" + childSnapshot.val().name + "</span><span class='destination>" + childSnapshot.val().destination + "</span><span class='first_train>" + childSnapshot.val().first_train + "</span><span class='frequency>" + childSnapshot.val().frequency + "</span>");

function(errorObject) {
   console.log("Errors handled: " + errorObject.code);
 };

});

database.ref()orderByChild("stamp").limitToLast(1).on("child_added", function(snapshot) {

$("#tnameHere").text(snapshot.val().name);
$("#destHere").text(snapshot.val().destination);
$("#ftrainHere").text(snapshot.val().first_train);
$("#freqHere").text(snapshot.val().frequency);

});

//

//previous activity for reference, plus extra junk

// database.ref().on("child_added", function(childSnapshot){
//   // var newemployee = $("<th id='newemployeerow'>")
//   var employeename = childSnapshot.val().name;
//   var employeerole = childSnapshot.val().role;
//   var employeestart = childSnapshot.val().start;
//   var employeemonthly = childSnapshot.val().monthly;
//
//   console.log(childSnapshot.val());
//   console.log("success");
//
//
//   // $("#app-table").append(newemployee);
//   $("#app-table > tbody").append("<tr> <td>" + employeename + "</td> <td>" + employeerole + "</td> <td>" + employeestart + "</td> <td>" + "</td> <td>" + employeemonthly +"</td> </tr>");
//
// });
// });
// };
