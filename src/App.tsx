import { PageBar } from './components/PageBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Artworks } from './pages/Artworks'
import { ArtPage } from './pages/ArtPage'
import { ArtPage2 } from './pages/ArtPage2'
import { Yelloware } from './pages/Yellow-WebcomicPages'
import { Xanthophobia } from './pages/Xanthophobia'
import { Stories } from './pages/ProjectOpt'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <PageBar />
      <div className='pt-20 md:pt-36'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Artpage' element={<ArtPage />} />
          <Route path='/Artpage2' element={<ArtPage2 />} />
          <Route path='/Artworks' element={<Artworks />} />
          <Route path='/Xanthophobia' element={<Xanthophobia />} />
          <Route path='/ProjectOpt' element={<Stories />} />
          <Route path='/Inkblue' element={<Yelloware />} />
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App
