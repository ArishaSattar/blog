
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getDownloadURL, getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHzDNPDBzfBLSR86V9L0fhqLwGJOOXBtA",
    authDomain: "again-5f41e.firebaseapp.com",
    databaseURL: "https://again-5f41e-default-rtdb.firebaseio.com",
    projectId: "again-5f41e",
    storageBucket: "again-5f41e.appspot.com",
    messagingSenderId: "193935378121",
    appId: "1:193935378121:web:4d5c29c7d06210a26e2f18"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
var storage = getStorage()

const btn = document.getElementById('signBtn');
btn.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const spassword = document.getElementById('spass').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    var abc = document.getElementById('img').value
    if (!fname || !email || !password || !lname || !spassword) {
        Swal.fire({
            text: 'Please fill all the fields',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    else if (!abc) {
        Swal.fire({
            text: `Please Select Profile Photo`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    if (password !== spassword) {
        Swal.fire({
            text: 'Passwords do not match',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        Swal.fire({
            text: 'Password should be at least 8 characters long and include both uppercase and lowercase letters',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (fname.length < 3) {
        Swal.fire({
            text: 'First name should be at least 3 characters long',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return; // Exit the function early
    }

    if (lname.length < 1) {
        Swal.fire({
            text: 'Last name should have at least one character',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return; // Exit the function early
    }
    if ((fname + lname).length > 20) {
        Swal.fire({
            text: 'Combined first name and last name should not exceed 20 characters',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid), {
            fname,
            lname,
            email,
            uid: user.uid
        });
        const storageRef = ref(storage, email);
        var file = document.getElementById('img');
        uploadBytes(storageRef, file.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

        Swal.fire({
            text: `User Signed Up !`,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = '../login/login.html';
        });
        console.log(user);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
            Swal.fire({
                text: `Invalid Email Address`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else if (errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
            Swal.fire({
                text: `Password Should Be Atleast 6 Characters Long`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            Swal.fire({
                text: `This email Is Already Taken`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            console.log(errorMessage);
        }
    }


    Swal.fire({
        text: `User Signed Up !`,
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = '../login/login.html'
    }
    )
})
onAuthStateChanged(auth, async (user) => {
    if (user) {
        location.replace("../dashboard/dashboard.html")
    }
})
