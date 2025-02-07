import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"trilok",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 roun'>tailwind test</h1>
      <Card username='trilok ' btntext="hi maga"/>
      <Card username="shankar" btntext="hib bir"/>
    </>
  )
}

export default App
