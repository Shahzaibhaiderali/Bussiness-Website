import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CyberBackground } from './components/CyberBackground';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { LogoDesign } from './pages/LogoDesign';
import { WebDesign } from './pages/WebDesign';
import { Copywriting } from './pages/Copywriting';
import { VideoAnimation } from './pages/VideoAnimation';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { Portfolio } from './pages/Portfolio';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen relative bg-black text-white selection:bg-cyan-500 selection:text-white">
    <CyberBackground />
    <Navbar />
    <main className="flex-grow relative z-10">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/copywriting" element={<Copywriting />} />
          <Route path="/video-animation" element={<VideoAnimation />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;