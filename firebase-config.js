// ============================================================
// CONFIGURACION DE FIREBASE  -  personal-choco-cvm
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyCsi_mV-I8liJHdqcPVDXBMXjzOpXmfT3s",
  authDomain: "personal-choco-cvm.firebaseapp.com",
  databaseURL: "https://personal-choco-cvm-default-rtdb.firebaseio.com",
  projectId: "personal-choco-cvm",
  storageBucket: "personal-choco-cvm.firebasestorage.app",
  messagingSenderId: "324713522900",
  appId: "1:324713522900:web:0dcbb6e63114755be0bd41"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
window.db = db;
