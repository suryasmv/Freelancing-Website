import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ClientLogin from "./components/Client/ClientLogin";
import FreelancerLogin from "./components/Freelancer/FreelancerLogin";
import Home from './components/Home';
import ClientRegistrationForm from './components/Client/ClientSignUp';
import FreelancerRegistrationForm from './components/Freelancer/FreelancerSignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/freelancer-login" element={<FreelancerLogin />} />
        <Route path="/client-signup" element={<ClientRegistrationForm />} />
        <Route path="/freelancer-signup" element={<FreelancerRegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
