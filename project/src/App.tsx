import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import Contact from './pages/Contact';
import { AwsCloudSupportPage } from './pages/AwsCloudSupportPage';
import { WebsiteRebranding } from './pages/website-rebranding';
import { Consult } from './pages/Consult';
import { WhoWeHelpPage } from './pages/WhoWeHelpPage';
import { WellnessAutomationPage } from './pages/WellnessAutomationPage';
import { AIWellnessFormPage } from './pages/AIWellnessFormPage';
import AutomationCheckout from './pages/automation_checkout_flow';
import SuccessPage from './pages/success';

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
          <Route path="/WhoWeHelpPage" element={<WhoWeHelpPage />} />
          <Route path="/aws-support" element={<AwsCloudSupportPage />} />
          <Route path="/website-rebranding" element={<WebsiteRebranding />} />
          <Route path="/ai-wellness-automation" element={<WellnessAutomationPage />} />
          <Route path="/ai-wellness-form" element={<AIWellnessFormPage />} />
          <Route path="/checkout" element={<AutomationCheckout/>} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
