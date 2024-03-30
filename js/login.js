// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCHzDNPDBzfBLSR86V9L0fhqLwGJOOXBtA",
//   authDomain: "again-5f41e.firebaseapp.com",
//   databaseURL: "https://again-5f41e-default-rtdb.firebaseio.com",
//   projectId: "again-5f41e",
//   storageBucket: "again-5f41e.appspot.com",
//   messagingSenderId: "193935378121",
//   appId: "1:193935378121:web:4d5c29c7d06210a26e2f18"
// };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();

// var btn = document.getElementById("loginBtn")
// btn.addEventListener("click", () => {
//   var email = document.getElementById("email").value
//   var password = document.getElementById("pass").value
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       Swal.fire({
//         text: `User Signed Up !`,
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         window.location.href = '../dashboard/dashboard.html'
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       if (errorMessage === "Firebase: Error (auth/invalid-email).") {
//         Swal.fire({
//           text: `Invalid Email Address`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//       else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
//         Swal.fire({
//           text: `This email Is Not Signed Up`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//       else if (errorMessage === "Firebase: Error (auth/missing-password).") {
//         Swal.fire({
//           text: `Enter Password First`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//       else if (errorMessage === "Firebase: Error (auth/wrong-password).") {
//         Swal.fire({
//           text: `Wrong Password Entered`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//     });
// })

// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//       location.replace("../dashboard/dashboard.html")
//   }
// })