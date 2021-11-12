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
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
