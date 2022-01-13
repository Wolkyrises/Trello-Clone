import logo from './logo.svg';
import './App.css';

import { initializeApp } from "firebase/app";

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
    <div className="App">
      trello
    </div>
  );
}

export default App;
