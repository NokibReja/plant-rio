import React from 'react';

const PlantCare = () => {
    return (
        <section className='lg:w-11/12 mx-auto p-5 bg-green-100'>
            <h2 className='text-3xl font-bold m-10 text-center'>Plant Care Tips</h2>

            <div className='lg:flex gap-5 justify-evenly'>

                {/* card 1 */}
                <div className="card bg-base-100 w-96 h-96 mx-auto m-5 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
                    <figure>
                        <img
                            className='w-full'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUtnC8NR5NIBzngCjpp3FAS5KXRWmFcvwqA&s"
                            alt="Watering plants"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Watering</h2>
                        <p>Water your plants only when the topsoil feels dry. Overwatering can
                            cause root rot and damage the plant.</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="card bg-base-100 w-96 h-96 mx-auto m-5 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
                    <figure>
                        <img
                            className='w-full'
                            src="https://images.stockcake.com/public/f/f/f/fffe3fd9-092a-4920-9d7f-53c5a661e1d0_large/seedling-reaches-sunlight-stockcake.jpg"
                            alt="Sunlight"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sunlight</h2>
                        <p>Most indoor plants need indirect sunlight for 4–6 hours daily. Avoid harsh direct sunlight for long periods.</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="card bg-base-100 w-96 h-96 mx-auto m-5 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
                    <figure>
                        <img
                            className='w-full'
                            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800"
                            alt="Fertilizing plants"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Fertilizing</h2>
                        <p>Use organic fertilizer once or twice a month during the growing
                            season to boost healthy growth.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlantCare;