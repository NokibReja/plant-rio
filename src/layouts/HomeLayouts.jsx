import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PlantCare from '../components/PlantCare/PlantCare';
import GreenExperts from '../components/GreenExperts/GreenExperts';
import { Outlet, useNavigate } from 'react-router';
import Loading from '../components/Loading/Loading';

const HomeLayouts = () => {
    const { state } = useNavigate()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div >
    );
};

export default HomeLayouts;