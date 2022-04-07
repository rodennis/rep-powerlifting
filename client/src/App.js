import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './screens/Home/Home'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import UserLogin from './screens/UserLogin/UserLogin';
import UserSignup from './screens/UserSignup/UserSignup';
import { ref as dbRef, onValue } from "firebase/database";
import { db } from './firebase/firebase'
import Upload from './components/Upload/Upload';


function App() {

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([])
  const [toggle, setToggle] = useState(false)
  const [media, setMedia] = useState('')

    useEffect(() => {
        const func = async () => {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => setUser(user));
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
      <Routes>
        <Route path='/' element={<UserLogin setUser={setUser}/>} />
        <Route path='/signup' element={<UserSignup setUser={setUser}/>} />
        {user && <Route path='/home' element={<Home posts={posts} user={user} media={media}/>} />}
        {user && <Route path='/upload' element={<Upload setMedia={setMedia} user={user} setToggle={setToggle}/> }/>}
    </Routes>
    </div>
  );
}

export default App;
