import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NavbarDemo from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import LeaderBoard from "./pages/leaderboard.jsx";


function App() {
    return (
        <div >
            <NavbarDemo />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
            <Footer />
        </div>





    );
}

export default App;
