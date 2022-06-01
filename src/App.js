
import NavFooter from './Nav+Footer_Components/Nav+Footer.jsx';
import About from './Nav+Footer_Components/About.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import INDEX_PAGE from './INDEX_PAGE.jsx';
import './App.css';
import OurStory from './Nav+Footer_Components/OurStory.js';
import ContactUs from './Nav+Footer_Components/ContactUs.js';
function App() {
  return (
    /*
    The main route that will always render in the Navbar and the Footer at the top and bottom of the page
    The home page is the index page which is the form and the headers
    If you click the link to the about, our story or contact us page it will send you to that page
    */
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Pickup_Comps" element={ <NavFooter /> }>
            <Route index element={(<INDEX_PAGE/>)} />
            <Route path="/Pickup_Comps/about" element={<About />} />
            <Route path="/Pickup_Comps/our_story" element={<OurStory />} />
            <Route path="/Pickup_Comps/contact_us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;