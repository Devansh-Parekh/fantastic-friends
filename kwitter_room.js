
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="welcome "+user_name;
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
    console.log("roomname"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    
    
          //End code
          });});}
    getData();
    function addroom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    
    