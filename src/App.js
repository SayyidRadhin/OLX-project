import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import './App.css';
import Login from './Pages/Login'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Route exact path='/'>
         <Home />
        </Route>
        <Route path='/signup'>
         <Signup />
        </Route>
        <Route path='/login'>
         <Login />
        </Route>
       
       
      </Router>
    </div>
  );
}

export default App;
