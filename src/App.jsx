import {BrowserRouter, Routes, Route} from 'react-router'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/to-learn" element={<About />} />
      <Route path="/in-progress" element={<Contact />} />
      <Route path="/blogs/:id" element={<BlogItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
