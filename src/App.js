
import React from 'react';
import WebSiteHome from './components/WebSite/WebSiteHome' // récupére grâce à l'index automatiquement le composant
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Routi,
  Routes,
  Route
} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyCGRUqj42db9BeNPPOxKihY73pT93d0r9k",
  authDomain: "trello-project-bac7d.firebaseapp.com",
  projectId: "trello-project-bac7d",
  storageBucket: "trello-project-bac7d.appspot.com",
  messagingSenderId: "446819331212",
  appId: "1:446819331212:web:6348faa3ccdfce9b769fa9"
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Routi>
      <Routes>
        <Route path="/" element={<WebSiteHome/>}/>
      </Routes>
    </Routi>
    
  );
}

export default App;
