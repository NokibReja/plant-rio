import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PlantCare from '../components/PlantCare/PlantCare';
import GreenExperts from '../components/GreenExperts/GreenExperts';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Header></Header>
            </header>
            <main>
                <div>
                    <PlantCare></PlantCare>
                </div>
                <div>
                    <GreenExperts></GreenExperts>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayouts;