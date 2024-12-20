import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseDetails from "./pages/CourseDetails";
import BestsellerCourses from "./components/BestsellerCourses";
import LoginForm from "./pages/LoginForm";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    // Проверяем, находится ли пользователь на странице логина
    const isLoginPage = location.pathname === "/login";

    return (
        <>
            {!isLoginPage && <Header />} {/* Хэдер отображается только вне страницы логина */}
            <main>{children}</main>
            {!isLoginPage && <Footer />} {/* Футер отображается только вне страницы логина */}
        </>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bestseller" element={<BestsellerCourses />} />
                    <Route path="/course/:id" element={<CourseDetails />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
