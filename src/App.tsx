import { PageBar } from './components/PageBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Artworks } from './pages/Artworks'
import { ArtPage } from './pages/ArtPage'
import { InkBlue } from './pages/InkBlue'
import { Xanthophobia } from './pages/Xanthophobia'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <PageBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Artpage' element={<ArtPage />} />
        <Route path='/Artworks' element={<Artworks />} />
        <Route path='/Xanthophobia' element={<Xanthophobia />} />
        <Route path='/Inkblue' element={<InkBlue />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
