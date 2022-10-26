import Header from './components/Header'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import About from './components/About'
import BlogList from './components/BlogList'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'
import {Routes ,Route } from 'react-router-dom';

const App = () => (
  <div className='bg-container'>
    <div className='bg-card'>
      <div className='bg-body'>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<BlogList/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path="/blogs/:id" element={<BlogItemDetails/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  </div>
)

export default App