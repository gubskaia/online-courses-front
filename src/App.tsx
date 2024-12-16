import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseDetails from "./pages/CourseDetails.tsx";
import BestsellerCourses from "./components/BestsellerCourses.tsx";


const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<BestsellerCourses />} />
                <Route path="/course/:id" element={<CourseDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
