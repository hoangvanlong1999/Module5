import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import TopBar from './includes/TopBar';

function Masterlayout({ children }) {
    return (
        <>
        <TopBar/>
        <div id="wrapper" className="container">
            <Header />
                {children}
            <Footer />
        </div>
        </>
    );
}

export default Masterlayout;