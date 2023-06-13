import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
// import Hero  from './components/hero'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <Navbar />
     {/* <Hero />  */}
      <Todo />
      </div>
    </>
  )
}

export default App
