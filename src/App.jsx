import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';
import LearnView from './pages/LearnView';
import { AboutPage, CareerPage, BlogPage } from './pages/InfoPages';
import Profile from './pages/Profile';
import ResumeBuilder from './pages/ResumeBuilder';
import CertificateView from './pages/CertificateView';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn/:id" element={<LearnView />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/certificate/:id" element={<CertificateView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
