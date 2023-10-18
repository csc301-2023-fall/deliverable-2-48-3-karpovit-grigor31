//Display retrieved data from HTTP response in the 'returned data' element
function displayData(data) {
    document.getElementById("returnedData").innerHTML = data;
}

//Insertion functions start here
//Insert user and display success/failure message
//General format for this function/event handler based on code from https://www.javascript-coder.com/javascript-form/javascript-submit-form-post-method/
function submitUsers(e) {
  e.preventDefault(); //Prevent default html submit form action from happening
   
  var userForm = document.getElementById("user-input");
  var formData = new FormData(userForm); //Retrieve inputted form data
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/users", { //Create POST request with inputted data
    method: "POST",
    body: formData,
  })  
    
  .then(response => { //Upon receiving response, turn it into a string and call displayData
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
    
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
    
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var userForm = document.getElementById("user-input"); //Add this function with an eventlistener on the form element
userForm.addEventListener("submit", submitUsers);

//Insert student and display success/failure message
function submitStudents(e) {
  e.preventDefault();
   
  var studentForm = document.getElementById("student-input");
  var formData = new FormData(studentForm);
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/students", {
    method: "POST",
    body: formData,
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var studentForm = document.getElementById("student-input");
studentForm.addEventListener("submit", submitStudents);

//Insert student preference and display success/failure message
function submitPreferences(e) {
  e.preventDefault();
   
  var preferenceForm = document.getElementById("student-preference");
  var formData = new FormData(preferenceForm);
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/friendpreferences", {
    method: "POST",
    body: formData,
  })
    
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var preferenceForm = document.getElementById("student-preference");
preferenceForm.addEventListener("submit", submitPreferences);

//Insert room and display success/failure message
function submitRooms(e) {
  e.preventDefault();
   
  var roomForm = document.getElementById("room-input");
  var formData = new FormData(roomForm);
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/rooms", {
    method: "POST",
    body: formData,
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var roomForm = document.getElementById("room-input");
roomForm.addEventListener("submit", submitRooms);

//Insert counselor and display success/failure message
function submitCounselors(e) {
  e.preventDefault();
   
  var counselorForm = document.getElementById("counselor-input");
  var formData = new FormData(counselorForm);
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/counselors", {
    method: "POST",
    body: formData,
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var counselorForm = document.getElementById("counselor-input");
counselorForm.addEventListener("submit", submitCounselors);

//Select functions start here
//Retrieve stored user data and display it or failure message
function getUsers(e) {
  e.preventDefault();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/users", { //Get requests are fetched with no body
    method: "GET"
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var usersRetrieve = document.getElementById("GetUsers");
usersRetrieve.addEventListener("submit", getUsers);

//Retrieve stored student data and display it or failure message
function getStudents(e) {
  e.preventDefault();
   
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/students", {
    method: "GET"
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var studentsRetrieve = document.getElementById("GetStudents");
studentsRetrieve.addEventListener("submit", getStudents);

//Retrieve stored student preference data and display it or failure message
function getPreferences(e) {
  e.preventDefault();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/friendpreferences", {
    method: "GET"
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var preferencesRetrieve = document.getElementById("GetPreferences");
preferencesRetrieve.addEventListener("submit", getPreferences);

//Retrieve stored room data and display it or failure message
function getRooms(e) {
  e.preventDefault();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/rooms", {
    method: "GET"
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var roomsRetrieve = document.getElementById("GetRooms");
roomsRetrieve.addEventListener("submit", getRooms);

//Retrieve stored counselor data and display it or failure message
function getCounselors(e) {
  e.preventDefault();
   
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/counselors", {
    method: "GET"
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.json();
  })
      
  .then((response) => {
    displayData(JSON.stringify(response, null, 1));
  })
      
  .catch((err) => {
    console.log("Error: ", err);
  });
}
  
var counselorsRetrieve = document.getElementById("GetCounselors");
counselorsRetrieve.addEventListener("submit", getCounselors);
