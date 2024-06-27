import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile'
import Forms from './Pages/Forms'
import About from './Pages/About'
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
