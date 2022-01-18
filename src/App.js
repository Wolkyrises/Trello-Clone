import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import WebSiteHome from './components/WebSite/WebSiteHome';
<<<<<<< HEAD

import { initializeApp } from "firebase/app";

import SignUp from './components/WebSite/header/SignUp';



=======


import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Routi,
  Routes,
  Route
} from "react-router-dom";
>>>>>>> 18264c1c171e49103a1c5d2c4cee226f525ab5ea

const firebaseConfig = {
  apiKey: "AIzaSyCGRUqj42db9BeNPPOxKihY73pT93d0r9k",
  authDomain: "trello-project-bac7d.firebaseapp.com",
  projectId: "trello-project-bac7d",
  storageBucket: "trello-project-bac7d.appspot.com",
  messagingSenderId: "446819331212",
  appId: "1:446819331212:web:6348faa3ccdfce9b769fa9",
};

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<WebSiteHome/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </Router>
=======
    
    <Router>
      <Routes>
        <Route path="/" element={<WebSiteHome/>} />
      </Routes>
    </Router>

    
>>>>>>> 18264c1c171e49103a1c5d2c4cee226f525ab5ea
  );
}

export default App;
