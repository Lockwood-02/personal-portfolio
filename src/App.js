import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'
import Footer from './components/Footer'
import Contact from './pages/Contact'


function App() {
  return (
    <div className='bg-[#ecf0f3] text-[#2c2c2c] dark:bg-[#121212] dark:text-stone-300 min-h-screen font-inter'>
      <div className='max-w-5xl w-11/12 mx-auto'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
