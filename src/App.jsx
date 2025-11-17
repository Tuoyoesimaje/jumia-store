import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Mainpage from './mainpage.jsx'

function App() {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <Mainpage searchQuery={searchQuery} />
    </>
  )
}

export default App
