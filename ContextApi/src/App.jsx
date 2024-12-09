import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    < UserContextProvider>
   <h1>Ract Video of Context API</h1>
   <Login/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
