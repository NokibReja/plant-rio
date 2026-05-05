import React from 'react';

const GreenExperts = () => {
    return (
        <section className='lg:w-11/12 mx-auto p-5 bg-green-50'>
            <h2 className='text-center text-3xl font-bold m-5'>Meet Our Green Experts</h2>

            <div className='lg:grid grid-cols-2 gap-5 w-3/4 mx-auto'>
                {/* expart-1 */}
                <div className="card w-96 mx-auto m-5 card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Expert 1"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Emily Carter</h2>
                        <p>Indoor Plant Specialist</p>
                    </div>
                </div>
                {/* expart-2 */}
                <div className="card w-96 mx-auto m-5 card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Expert 2"
                    />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">James Wilson</h2>
                        <p>Soil & Fertilizer Expert</p>
                    </div>
                </div>
                {/* expart-3 */}
                <div className="card w-96 mx-auto m-5 card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Expert 3"
                    />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sophia Brown</h2>
                        <p>Plant Disease Consultant</p>
                    </div>
                </div>
                {/* expart-4 */}
                <div className="card w-96 mx-auto m-5 card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Expert 4"
                    />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Michael Johnson</h2>
                        <p>Landscape & Garden Designer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreenExperts;