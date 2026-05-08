import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const PlantDetails = () => {

    const plantsData = useLoaderData();
    const { id } = useParams();

    const [plant, setPlant] = useState({});

    useEffect(() => {

        if (plantsData) {
            const detailsData = plantsData.find(
                data => data.plantId === parseInt(id)
            );

            setPlant(detailsData);
        }

    }, [plantsData, id]);

    const {
        plantName,
        category,
        price,
        rating,
        availableStock,
        careLevel,
        description,
        image,
        providerName
    } = plant;

    const handleConsultation = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        // console.log(name, email);

        toast.success(`Consultation Booked Successfully! Name:${name} Email:${email}`);
        form.reset();
    };

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='grid md:grid-cols-2 gap-10 items-center bg-green-50 p-8 rounded-2xl shadow-lg'>
                <section>
                    <img
                        className='w-full md:h-125 object-cover rounded-2xl'
                        src={image}
                        alt={plantName}
                    />
                    <h2 className="text-4xl font-bold mt-5 text-green-700">
                        {plantName}
                    </h2>

                </section>

                <section>

                    <p className='mt-5 text-lg font-medium text-gray-700'>
                        {description}
                    </p>

                    <div className='my-5 flex flex-wrap gap-3'>

                        <span className='py-2 px-5 bg-blue-500 text-white rounded-xl text-lg font-bold'>
                            {category}
                        </span>

                        <span className='py-2 px-5 bg-red-500 text-white rounded-xl text-lg font-bold'>
                            {careLevel}
                        </span>

                    </div>

                    <p className='my-4 text-xl font-bold'>
                        Provider :
                        <span className='ml-2 py-2 px-4 bg-green-500 text-white rounded-xl text-sm'>
                            {providerName}
                        </span>
                    </p>

                    <p className='flex items-center gap-2 my-5 font-semibold text-2xl text-orange-500'>
                        Rating : {rating}
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </p>

                    <p className='my-3 text-xl font-semibold text-gray-600'>
                        Available Stock: {availableStock}
                    </p>

                    <p className='my-5 text-3xl font-bold text-green-700'>
                        Price: ${price}
                    </p>

                    <button className="btn bg-green-500 hover:bg-green-600 text-white border-none">
                        Order Now
                    </button>

                </section>

            </div>

            {/* Consultation Form */}
            <div className='mt-16 bg-white shadow-xl rounded-2xl p-8 md:w-2/3 mx-auto'>
                <h2 className='text-3xl font-bold text-center text-green-700 mb-8'>Book Consultation</h2>

                <form onSubmit={handleConsultation} className='space-y-5' >

                    {/* Name */}
                    <div>
                        <label className='font-semibold text-lg'>Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='input input-bordered w-full mt-2'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className='font-semibold text-lg'>Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Enter your email'
                            className='input input-bordered w-full mt-2'
                            required
                        />
                    </div>

                    <button type='submit' className='btn bg-green-600 hover:bg-green-700 text-white w-full'> Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default PlantDetails;