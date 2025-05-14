import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Layout from './components/Layout.js';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './styles/animations.css';

// Pages
import Home from './pages/index.jsx';
import About from './pages/about.jsx';
import Admission from './pages/admission.jsx';
import Gallery from './pages/gallery.jsx';
import Academics from './pages/academics.jsx';
import Faculty from './pages/faculty.jsx';
import Facilities from './pages/facilities.jsx';
import Notices from './pages/notices.jsx';
import Contact from './pages/contact.jsx';
import Login from './pages/Login.jsx';
import Unauthorized from './pages/Unauthorized.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ErrorBoundary>
          <Router>
            <Layout>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/notices" element={<Notices />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/unauthorized" element={<Unauthorized />} />

                {/* Protected Routes */}
                <Route
                  path="/admin/*"
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Layout>
          </Router>
        </ErrorBoundary>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
