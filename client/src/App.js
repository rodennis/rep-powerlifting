import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Nav from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import UserLogin from './components/UserLogin/UserLogin';
import UserSignup from './components/UserSignup/UserSignup';
import { ref as dbRef, onValue } from "firebase/database";
import { db } from './firebase/firebase'


function App() {

  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const func = async () => {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => setUser(user?.displayName));
        }
        func()
    }, [])

    useEffect(() => {
      setPosts([])
      onValue( dbRef(db), (snapshot) => {
        const data = snapshot.val()
        if(data !== null) {
          Object.values(data).map(post => (setPosts(oldArray => [...oldArray, post])))
        }
      })
    }, [toggle])

  return (
    <div className="App">
      <Link to={'/'}/>
      <Nav setToggle={setToggle}/>
      <Routes>
        <Route path='/' element={<UserLogin setUser={setUser}/>} />
        <Route path='/signup' element={<UserSignup setUser={setUser}/>} />
        <Route path='/home' element={<Home posts={posts} user={user}/>} />
    </Routes>
    </div>
  );
}

export default App;
