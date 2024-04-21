import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { Course } from './Pages/Course'
import { OverView } from './Pages/OverView'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'


// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/overView" element={<OverView/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
