import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'

import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'



export const MainApp = () => {
  return (
    <UserProvider>      
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/login" element={ <LoginPage /> } />

        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        {/* Ruta willcard cuando se ingresa a una ruta que no existe */}
        <Route path="/*" element={ <Navigate to="/about" /> } />
      </Routes>
    </UserProvider>
  )
}
