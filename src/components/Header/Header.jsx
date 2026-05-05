import React from 'react';
import bannerImg from '../../assets/river-img.jpg'

const Header = () => {
    return (
        <div className='lg:w-11/12 mx-auto bg-green-50'>
            <div className="">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img
                            src={bannerImg}
                            className="lg:max-w-m rounded-lg shadow-2xl"
                        />
                    </div>
                    <div>
                        <h1 className="lg:text-5xl text-2xl font-bold">Plants Make better life</h1>
                        <p className="py-6 lg:text-xl font-semibold">
                            Plant trees today to protect our planet, ensure cleaner air, and sustain future generations
                        </p>
                        <button className="btn bg-green-600 text-white">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;