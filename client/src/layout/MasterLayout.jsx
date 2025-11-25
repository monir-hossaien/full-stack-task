import React from 'react';
import Navbar from "../components/navbar/Navbar.jsx";
import BottomNavbar from "../components/navbar/Bottom.navbar.jsx";

const MasterLayout = ({children}) => {

    return (
        <div>
            <Navbar/>
            <main className="container px-4">
                {children}
            </main>
            <BottomNavbar/>
        </div>
    );
};

export default MasterLayout;