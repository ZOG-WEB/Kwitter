var firebaseConfig = {
      apiKey: "AIzaSyCjKVoY8gBVeAGqbWPoGwb0cXcau2mKaGI",
      authDomain: "kwitter-9ed78.firebaseapp.com",
      databaseURL: "https://kwitter-9ed78-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ed78",
      storageBucket: "kwitter-9ed78.appspot.com",
      messagingSenderId: "796982826024",
      appId: "1:796982826024:web:6bd2f2dcf2a2e1d69fd11d",
      measurementId: "G-518M18WWHJ"
    };
    
  
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";
function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"

});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";

}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name-"+Room_names);
       row="<div class='room_name' id='+Room_names+' onclick='redirecttoRoomName(this.id)'> #"+Room_names+" </div> <hr>";
       document.getElementById("output").innerHTML+=row;
     
      });
});
}
getData();
function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
