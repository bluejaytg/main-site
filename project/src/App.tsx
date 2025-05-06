import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { Services } from './pages/Services';
import { AIDemos } from './pages/AIDemos';
import { CaseStudies } from './pages/CaseStudies';
import { About } from './pages/About';
import Contact from './pages/Contact';
import { WebsiteRebranding } from './pages/website-rebranding';
import { Consult } from './pages/Consult';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/ai-demos" element={<AIDemos />} />
          <Route path="/case-studies" element={<CaseStudies />} /> */}
          <Route path="/consult" element={<Consult />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-rebranding" element={<WebsiteRebranding />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
