import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import UserLogin from './components/UserLogin/UserLogin';
import UserSignup from './components/UserSignup/UserSignup';

function App() {

  const [user, setUser] = useState('');
    useEffect(() => {
        const func = async () => {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => setUser(user?.displayName));
        }
        func()
    })

  return (
    <div className="App">
      <Link to={'/'}/>
      <Nav />
      <Routes>
        <Route path='/' element={<UserLogin setUser={setUser}/>} />
        <Route path='/signup' element={<UserSignup setUser={setUser}/>} />
        <Route path='/home' element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
