import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import LoginPage from './Page/LoginPage/LoginPage';
import CourseListPage from './Page/CourseListPage/CourseListPage';
import AboutPage from './Page/AboutPage/AboutPage';
import ContactPage from './Page/ContactPage/ContactPage';
import FooterSection from './Sections/Footer/FooterSection';
import CourseDetails from './Page/CourseDetails/CourseDetailsPage';
import DashboardPage from './Page/DashboardPage/DashboardPage';
import LearningPage from './Page/LearningPage/LearningPage';
import SphlashPage from './Page/SphlashPage/SphlashPage';
function App() {

  const location = useLocation();

  // ❗ hide cheyyenda routes arrayconst 
  const hideRoutes = ["/", "/dashboard"];

  const hideLayout = hideRoutes.includes(location.pathname);
  return (
    <div>
      {!hideLayout && <NavBar />}
      <Routes>
        <Route path="/" element={<SphlashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/courses/:CourseId" element={<CourseDetails />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/learn/:CourseId" element={<LearningPage />} />
      </Routes>
      {!hideLayout && <FooterSection />}
    </div>
  )
}

export default App