
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCEiUC4fkJOZL-Sby-iPPxu3YgP_rxsWxA",
      authDomain: "kwitter-c2fb3.firebaseapp.com",
      databaseURL: "https://kwitter-c2fb3-default-rtdb.firebaseio.com",
      projectId: "kwitter-c2fb3",
      storageBucket: "kwitter-c2fb3.appspot.com",
      messagingSenderId: "895491542368",
      appId: "1:895491542368:web:18183c4522a36c4ea7e205"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room Name -"+Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomname(name){
console.log(name);
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}