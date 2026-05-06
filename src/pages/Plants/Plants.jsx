import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../../components/Footer/Footer';
import PlantCard from '../../components/PlantCard/PlantCard';

const Plants = () => {
    const plantsData = useLoaderData()
    // console.log(plantsData)
    return (
        <div className="">
            <h2 className="text-center font-bold text-5xl mt-10 text-green-500">Our All Plants</h2>
            <div className='w-11/12 mx-auto py-10 px-30 grid  md:grid-cols-3 sm:grid-cols-1 gap-10 bg-blue-5'>
                {
                    plantsData.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default Plants;