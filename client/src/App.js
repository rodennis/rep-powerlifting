import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      let res = await axios.get('http://localhost:8080/users')
      setUsers(res)
    }
    getUsers()
  }, [])

  return (
    <div className="App">
      <Link to={'/'}/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
