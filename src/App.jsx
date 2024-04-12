import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signinpage from './pages/Signinpage';
import NoPage from './pages/NoPage';
import Onboarding1A from './pages/Onboarding1A';
import Onboarding2A from './pages/Onboarding2A';
import Onboarding3A from './pages/Onboarding3A';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signinpage />} />
        <Route path="/onboarding1A" element={<Onboarding1A />} />
        <Route path="/onboarding2A" element={<Onboarding2A />} />
        <Route path="/onboarding3A" element={<Onboarding3A />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
