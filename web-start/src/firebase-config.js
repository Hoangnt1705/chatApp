/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBsYS1Epvy0-61iJwE3nwDwb58FwR5e-Ms",
  authDomain: "friendlychat-143db.firebaseapp.com",
  projectId: "friendlychat-143db",
  storageBucket: "friendlychat-143db.appspot.com",
  messagingSenderId: "448504853331",
  appId: "1:448504853331:web:22f3791da0994055f427a6"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}