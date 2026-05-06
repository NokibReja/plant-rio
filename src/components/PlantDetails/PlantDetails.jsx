// import { details } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const PlantDetails = () => {
    const plantsData = useLoaderData()
    const { id } = useParams()
    // console.log(id, plantsData)

    const [plant, setPlant] = useState({})

    useEffect(() => {
        const detailsData = plantsData.find(data => data.plantId === parseInt(id))
        setPlant(detailsData)
    }, [plantsData, id])


    const { plantName, category, price, rating, availableStock, careLevel, description, image, providerName } = plant

    // console.log(plantName)

    return (
        <div className='w-11/12 mx-auto flex gap-10 bg-green-50 p-10'>
            <section>
                <div>
                    <img className='md:h-100 md:w-100 sm:h-60 sm:w-60 rounded-2xl' src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold mt-5 ml-15">{plantName}</h2>
                </div>
            </section>
            <section>
                <p className='mt-10 text-2xl font-bold'>{description}</p>
                <div className='my-5 flex gap-2'>
                    <span className='py-2 px-5 bg-blue-400 text-white  rounded-l text-xl font-bold'>{category}</span>
                    <span className='py-2 px-5 bg-red-400  text-white  rounded-l text-xl font-bold'>{careLevel}</span>
                </div>

                <p className='my-2 text-2xl font-bold '>Provider : <span className='py-2 px-5 bg-green-400  text-white  rounded-l text-sm font-bold'>{providerName}</span></p>
                <p className='flex items-center gap-3 my-5 font-semibold text-2xl text-orange-600'>
                    Rating : {rating} 
                    <FaStar ></FaStar>
                    <FaStar ></FaStar>
                    <FaStar ></FaStar>
                    <FaStar ></FaStar>
                    <FaStarHalfAlt ></FaStarHalfAlt>
                </p>
                <p className='my-2 text-xl font-semibold text-gray-600'>Available Stock: {availableStock}</p>
                <p className='my-5 text-3xl font-bold'>Price: {price}$</p>
                <button className="btn bg-green-400 text-white">Order now</button>
            </section>
            <div>

            </div>
        </div>
    );
};

export default PlantDetails;