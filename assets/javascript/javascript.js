
console.log("link success")

var config = {
    apiKey: "AIzaSyAJyvdItB5-MN1eoXOgy6gFOHBBo6Mr3e4",
    authDomain: "fir-hw-22d43.firebaseapp.com",
    databaseURL: "https://fir-hw-22d43.firebaseio.com",
    projectId: "fir-hw-22d43",
    storageBucket: "fir-hw-22d43.appspot.com",
    messagingSenderId: "365045219786"
  };
firebase.initializeApp(config);

var database = firebase.database();

var employee = {};

// function submitemployee(){

$("#submit").on("click", function(event){
 event.preventDefault();
 
 employee.name = $("#name-form").val().trim();
 employee.role = $("#role-form").val().trim();
 employee.start = $("#date-form").val().trim();
 employee.monthly = $("#rate-form").val().trim();
 console.log(employee);

database.ref().push(employee);

database.ref().on("child_added", function(childSnapshot){
  // var newemployee = $("<th id='newemployeerow'>")
  var employeename = childSnapshot.val().name;
  var employeerole = childSnapshot.val().role;
  var employeestart = childSnapshot.val().start;
  var employeemonthly = childSnapshot.val().monthly;

  console.log(childSnapshot.val());
  console.log("success");


  // $("#app-table").append(newemployee);
  $("#app-table > tbody").append("<tr> <td>" + employeename + "</td> <td>" + employeerole + "</td> <td>" + employeestart + "</td> <td>" + "</td> <td>" + employeemonthly +"</td> </tr>");

});
});
// };
