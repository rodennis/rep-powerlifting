import './App.css';
import { Link, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Link to={'/'}/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />}/>
    </Routes>
    </div>
  );
}

export default App;
