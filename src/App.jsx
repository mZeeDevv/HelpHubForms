import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile'
import Forms from './Pages/Forms'
import About from './Pages/About'
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Forgotpass from './Pages/Forgotpass';
import Header from './Components/Header'
import './App.css'

function App() {
 
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Forms/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/forgotpassword' element={<Forgotpass/>}/>
      </Routes>
    </Router>







     
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
