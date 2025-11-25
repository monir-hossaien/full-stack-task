import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FeedPage from "./pages/feed.page.jsx";
import ErrorPage from "./pages/error.page.jsx";
import LoginPage from "./pages/login.page.jsx";
import RegisterPage from "./pages/register.page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/sign-up" element={<RegisterPage />} />

                {/*protected route*/}
                <Route path="/feed" element={<FeedPage />} />

                {/*unknown routes*/}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;