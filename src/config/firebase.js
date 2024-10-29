import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxBTZ6XaVrGDailnVGJookaZGFaGhLsm8",
  authDomain: "reeed-nation-chat.firebaseapp.com",
  projectId: "reeed-nation-chat",
  storageBucket: "reeed-nation-chat.appspot.com",
  messagingSenderId: "416198036199",
  appId: "1:416198036199:web:7ac4c8703c2e7568d73042",
  measurementId: "G-4Q46M69SRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign-up function
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "salem alykom",
      lastSeen: Date.now(),
    });

    // Create an empty chat document for the user
    await setDoc(doc(db, "chats", user.uid), {
      chatData: [],
    });

    toast.success("User registered successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(""));
  }
};

// Login function
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Fetch user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log("User Data:", userData);
      toast.success("Login successful!");
      // Here you can navigate to another page or update the app state based on the login
    } else {
      console.error("No such user document!");
      toast.error("User data not found.");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(""));
  }
};

export { signup, login };
