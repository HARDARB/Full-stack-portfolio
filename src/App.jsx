
// import './App.css'
import { Routes, Route } from 'react-router-dom';
import { MainAbout } from './Components.jsx/About/MainAbout'
import { MainArticle } from './Components.jsx/Articles/MainArticle'
import { MainContact } from './Components.jsx/Contact/MainContact'
import MainHome from './Components.jsx/Home/MainHome'
import { MainProject } from './Components.jsx/Project/MainProject'
import BackToTopButton from './Components.jsx/Effects/BackToTop';
import { Header } from './Components.jsx/Header';
import { Footer } from './Components.jsx/Footer';

function App() {
  return (
    <div className="dark:bg-black">
      <div className="relative md:max-w-6xl mx-auto dark:bg-neutral-900 bg-white border-x border-gray-200 dark:border-gray-700">
        
        {/* Sticky Header */}
        <Header />

        {/* Spacer */}
        <div className="pt-[72px] md:pt-[80px]"> {/* Adjust based on your header height */}
          <BackToTopButton />

          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/about" element={<MainAbout />} />
            <Route path="/projects" element={<MainProject />} />
            <Route path="/articles" element={<MainArticle />} />
            <Route path="/contact" element={<MainContact />} />
          </Routes>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App


