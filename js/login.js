const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBP4h7uClvWB7zgj5SXjY0RNUz_Lny4M0o",
    authDomain: "sweets-295207.firebaseapp.com",
    databaseURL: "https://sweets-295207.firebaseio.com",
    projectId: "sweets-295207",
    storageBucket: "sweets-295207.appspot.com",
    messagingSenderId: "789397849359",
    appId: "1:789397849359:web:7f185c10ec9a7883986a7a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


    const auth = firebase.auth();
    
    
    function signUp(){
      
      var email = document.getElementById("email_signup");
      var password = document.getElementById("password_signup");
      
      const promise = auth.createUserWithEmailAndPassword(email_signup.value, password_signup.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
    }
    
    
    
    function signIn(){
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

    }
    
    
    function signOut(){
      
      auth.signOut();
      alert("Signed Out");
      
    }
    
    
    
    auth.onAuthStateChanged(function(user){


      if (user){
        
        var email = user.email;
        alert("Active User " + email);
        
        //Take user to a different or home page
        if(confirm("Click Ok for Redirect\nor\nClick Cancel for Sign Out")){

        window.location.href = "/html/index.html";}
        //is signed in
        
        else{}
        
      }else{
        
        alert("No Active User, Please Register or Login");
        //no user is signed in
      }
      
      
      
    });
    

  