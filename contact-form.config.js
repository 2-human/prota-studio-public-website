// Prota Studios — contact-form Firebase config
//
// FIREBASE_CONFIG: live Web App config from the prota-studios-87dd8 project.
//   Safe to commit publicly; security is enforced by Realtime Database rules.
//
// CONTACTS_PATH: RTDB node where submissions land. Each submission is a
//   push() child with an auto-generated ID, so submissions are never
//   overwritten.

window.PROTA_CONTACT_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyB_NweRqniNYD-dAA1BLwZ3IetHVJDM8ko",
    authDomain: "prota-studios-87dd8.firebaseapp.com",
    databaseURL: "https://prota-studios-87dd8-default-rtdb.firebaseio.com",
    projectId: "prota-studios-87dd8",
    storageBucket: "prota-studios-87dd8.firebasestorage.app",
    messagingSenderId: "288182878069",
    appId: "1:288182878069:web:ec9968d3a63dc9ef9bdd3c",
  },
  CONTACTS_PATH: "contacts",
  ENABLED: true,
};
