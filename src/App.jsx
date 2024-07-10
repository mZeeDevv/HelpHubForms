import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile'
import Forms from './Pages/Forms'
import About from './Pages/About'
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import PrivateRoute from './Components/PrivateRoute';
import Forgotpass from './Pages/Forgotpass';
import Rules from './Pages/Rules';
import Thread from './Pages/Thread';
import Education from './Pages/Forms/Education'
import Energy from './Pages/Forms/Energy'
import Health from './Pages/Forms/Health'
import Justice from './Pages/Forms/Justice'
import Createthread from './Pages/Createthread';
import Header from './Components/Header'
import './App.css'

function App() {
 
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Forms/>}/>
      <Route path='/profile' element={<PrivateRoute/>}>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
      <Route path='/newthread' element={<PrivateRoute/>}>
      <Route path='/newthread' element={<Createthread/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/rules' element={<Rules/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/threads/education' element={<Education/>}/>
      <Route path='/threads/peace' element={<Justice/>}/>
      <Route path='/threads/energy' element={<Energy/>}/>
      <Route path='/threads/health' element={<Health/>}/>
      <Route path='/forgotpassword' element={<Forgotpass/>}/>
      <Route path='/thread/:option/:threadId' element={<Thread/>}/>
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
