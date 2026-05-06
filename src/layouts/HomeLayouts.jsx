import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PlantCare from '../components/PlantCare/PlantCare';
import GreenExperts from '../components/GreenExperts/GreenExperts';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;