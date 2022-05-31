
import Footer from './Nav+Footer_Components/Nav+Footer.jsx';
import About from './Nav+Footer_Components/About.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import INDEX_PAGE from './INDEX_PAGE.jsx';
import './App.css';
import Our_Story from './Nav+Footer_Components/Our_Story.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Footer /> }>
            <Route index element={(<INDEX_PAGE/>)} />
            <Route path="about" element={<About />} />
            <Route path="our_story" element={<Our_Story />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;