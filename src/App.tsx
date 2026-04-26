import Header from './components/Header'
import { PageBar } from './components/PageBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {


  return (
    <>
      <Header/>
      <PageBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>

      
    </>
  )
}

export default App
