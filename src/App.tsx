import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllCoursesPage from './pages/AllCoursesPage';
import Header from './components/Header';
import Footer from './components/Footer';


const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<AllCoursesPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
