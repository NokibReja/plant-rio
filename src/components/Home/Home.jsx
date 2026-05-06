import React from 'react';
import Header from '../Header/Header';
import PlantCare from '../PlantCare/PlantCare';
import GreenExperts from '../GreenExperts/GreenExperts';
import { Link, useLoaderData } from 'react-router';
import PlantCard from '../PlantCard/PlantCard';

const Home = () => {
    const plantsData = useLoaderData()
    // const homePlantData = plantsData.slice(0, 4)
    const topPlants = plantsData.filter(data => data.rating > 4.6)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <div className='w-11/12 mx-auto py-10 px-30  bg-blue-50'>
                <h2 className='text-center font-bold text-5xl my-10 text-orange-500'>Top Rated Indoor Plants</h2>
                <div className="grid  md:grid-cols-4 sm:grid-cols-2 gap-10">
                    {
                        topPlants.map(plant => <PlantCard key={plant.plantId} plant={plant}></PlantCard>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/plants' className='btn mt-10 bg-green-600 text-white'>See More</Link>
                </div>
            </div>
            <div>
                <PlantCare></PlantCare>
                <GreenExperts></GreenExperts>
            </div>
        </div>
    );
};

export default Home;