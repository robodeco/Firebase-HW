
console.log("link success");

var config = {
    apiKey: "AIzaSyAJyvdItB5-MN1eoXOgy6gFOHBBo6Mr3e4",
    authDomain: "fir-hw-22d43.firebaseapp.com",
    databaseURL: "https://fir-hw-22d43.firebaseio.com",
    projectId: "fir-hw-22d43",
    storageBucket: "fir-hw-22d43.appspot.com",
    messagingSenderId: "365045219786"
  };
firebase.initializeApp(config);

var currentTime = moment();
var frequency = $("#frequency-form").val();
var nextArrival = $("#trainTime-form").val();
var minutesAway = currentTime.diff(nextArrival);



var database = firebase.database();

var train = {};
$("#submit").on("click", function() {
    event.preventDefault();

    train.name = $("#name-form").val().trim();
    train.destination = $("#destination-form").val().trim();
    train.first_train = $("#trainTime-form").val().trim();
    train.first_train = $("#frequency-form").val().trim();

    console.log(train);
    database.ref().push(train);
  });


//
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
