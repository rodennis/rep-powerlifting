import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'

function App() {
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
