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
  var bodyData = new URLSearchParams({
    'username': formData.get('username'),
    'password': formData.get('password')
  }).toString();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/users", { //Create POST request with inputted data
    method: "POST",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    body: bodyData,
  })  
    
  .then(response => { //Upon receiving response, turn it into a string and call displayData
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.text();
  })
    
  .then((response) => {
    displayData(response);
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
  var bodyData = new URLSearchParams({
    'first_name': formData.get('first_name'),
    'last_name': formData.get('last_name'),
    'SID': formData.get('SID'),
    'grade': formData.get('grade'),
    'gender': formData.get('gender'),
  }).toString();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/students", {
    method: "POST",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    body: bodyData,
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.text();
  })
      
  .then((response) => {
    displayData(response);
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
  var bodyData = new URLSearchParams({
    'first_pref_SID': formData.get('first_pref_SID'),
    'second_pref_SID': formData.get('second_pref_SID'),
    'relationship': formData.get('relationship'),
  }).toString();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/friendpreferences", {
    method: "POST",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    body: bodyData,
  })
    
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.text();
  })
      
  .then((response) => {
    displayData(response);
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
  var bodyData = new URLSearchParams({
    'room_num': formData.get('room_num'),
    'room_type': formData.get('room_type'),
  }).toString();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/rooms", {
    method: "POST",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    body: bodyData,
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.text();
  })
      
  .then((response) => {
    displayData(response);
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
  var bodyData = new URLSearchParams({
    'counselor_firstname': formData.get('counselor_firstname'),
    'counselor_lastname': formData.get('counselor_lastname'),
  }).toString();
  
  fetch("http://ec2-3-139-102-34.us-east-2.compute.amazonaws.com:3001/counselors", {
    method: "POST",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
    body: bodyData,
  })
      
  .then(response => {
    if (!response.ok) {
      throw new Error('RESPONSE ERROR');
    }
    return response.text();
  })
      
  .then((response) => {
    displayData(response);
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
