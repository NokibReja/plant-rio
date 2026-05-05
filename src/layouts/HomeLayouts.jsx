import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Header></Header>
            </header>
            <main>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;