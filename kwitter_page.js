//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB6sW1wN0sFEB7kVNhvkAgWvjjmz2NYszA",
      authDomain: "project-kwitter-44314.firebaseapp.com",
      databaseURL: "https://project-kwitter-44314-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-44314",
      storageBucket: "project-kwitter-44314.appspot.com",
      messagingSenderId: "1095569792246",
      appId: "1:1095569792246:web:cf4f64acf02cea4efda0d7"
    };
    
    
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0

});
document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
