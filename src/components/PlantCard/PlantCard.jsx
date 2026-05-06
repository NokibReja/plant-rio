import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    const { plantId, plantName, image, price, rating } = plant
    // console.log(plant)
    return (
        <div className='mx-auto'>
            <div className="card bg-base-100 w- shadow-sm hover:shadow-2xl transition duration-300 hover:scale-105">
                <figure>
                    <img
                        className=' w-96 h-50 object-cover'
                        src={image}
                        alt="tree" />
                </figure>
                <div className="card-body bg-green-50">
                    <h2 className="card-title font-bold text-2xl text-green-500">{plantName}</h2>
                    <p className='font-bold text-xl '>Price: {price}$</p>
                    <p className='text-orange-600 font-bold'>Rating : {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/plant-details/${plantId}`} className="btn bg-green-600 text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;