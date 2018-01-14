
 var config = {
   apiKey: "AIzaSyCaQyCB5VXoSxuCI9T0sxg3NdXALJDq5M8",
   databaseURL: "https://project-fire-e17d6.firebaseio.com"
 };

 firebase.initializeApp(config);

var database = firebase.database();

var name;
var employee = {};


function submitemployee(){

$("#submit").on("click", function(){
 event.preventDefault();
 employee.name = $("#name").val().trim();
 employee.role = $("#role").val().trim();
 employee.start = $("#start").val().trim();
 employee.monthly = $("#monthly").val().trim();
 // employee.push(employees);

 database.ref().push(employee);
});

submitemployee();
};
