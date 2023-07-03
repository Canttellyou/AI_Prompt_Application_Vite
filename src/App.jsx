import './App.css'
import ImageGeneration from './pages/ImageGeneration/ImageGeneration';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import OptionTranslate from './components/OptionTranslate';

function App() {

  return (
    <BrowserRouter>
      <div className="app-main">
        <Routes>
          <Route path="/image-generation" element={<ImageGeneration />} />
          <Route path="/" element={<OptionTranslate />} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>

      </div>
      <div >


      </div>
    </BrowserRouter>

  )
}

export default App
