
import Footer from './/Footer_Components//Footer.jsx';
import About from './/Footer_Components//About.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import INDEX_PAGE from './INDEX_PAGE.jsx';
import './App.css';
import Navbar from './Navbar_Components/Navbar.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Footer /> }>
            <Route index element={(<INDEX_PAGE/>)} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
