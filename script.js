

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyA22HVLbx5RUAy0Hf5OXKPBuBj-ut0WEN8",
   authDomain: "kaktux-train-project.firebaseapp.com",
   databaseURL: "https://kaktux-train-project.firebaseio.com",
   projectId: "kaktux-train-project",
   storageBucket: "kaktux-train-project.appspot.com",
   messagingSenderId: "577200030529"
 };
 firebase.initializeApp(config);

var database = firebase.database();

var trainName = [] ;
var destination = [];
var firstTrainTime = [];
var frequency = [];

//Capture click form the HTML
$("#submit").on("click", function() {
//Prevent page to refresh in a sec
event.preventDefault();

trainName = $("#trainName").val().trim();
destination = $("#destination").val().trim();
firstTrainTime = $("#firstTrainTime").val().trim();
frequency = $("#destination").val().trim();

console.log(trainName);
console.log(destination);
console.log(firstTrainTime);
console.log(frequency);

database.ref().push({
trainName: trainName,
destination: destination,
firstTrainTime: firstTrainTime,
frequency: frequency

});

});

database.ref().on("child_added", function(snapshot){

console.log(snapshot.val());
console.log(snapshot.val().trainName);
console.log(snapshot.val().destination);
console.log(snapshot.val().firstTrainTime);
console.log(snapshot.val().frequency);

$("#trainName").html(snapshot.val().trainName);
$("#destination").html(snapshot.val().destination);
$("#firstTrainTime").html(snapshot.val().firstTrainTime);
$("#frequency").html(snapshot.val().frequency);


})
