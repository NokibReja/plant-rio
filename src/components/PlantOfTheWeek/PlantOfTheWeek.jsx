import React from 'react';

const PlantOfTheWeek = () => {
    const plant = {
        name: "Monstera Deliciosa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLaPNAvpIrwXxQezBhgxq2Tkn5Q4_-WWfhg&s",
        category: "Tropical Indoor Plant",
        description:
            "Monstera is a popular indoor plant known for its large, split leaves. It improves air quality and brings a fresh tropical vibe to your home.",
        care: {
            light: "Bright indirect light",
            water: "Once a week",
            humidity: "Medium to high",
        }
    };

    return (
        <section className="w-11/12 mx-auto my-16">
            <div className="bg-gradient-to-r from-green-50 to-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8 p-6 md:p-10 items-center">

                <div className="w-full">
                    <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-80 object-cover rounded-2xl shadow-md"
                    />
                </div>

                <div>
                    <p className="text-green-600 font-semibold text-xl">Plant of the Week</p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-800">
                        {plant.name}
                    </h2>
                    <p className="text-gray-500 mt-1">{plant.category}</p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        {plant.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white p-3 rounded-lg shadow">
                            <p className="font-semibold">Light</p>
                            <p className="text-gray-500">{plant.care.light}</p>
                        </div>

                        <div className="bg-white p-3 rounded-lg shadow">
                            <p className="font-semibold">Water</p>
                            <p className="text-gray-500">{plant.care.water}</p>
                        </div>

                        <div className="bg-white p-3 rounded-lg shadow">
                            <p className="font-semibold">Humidity</p>
                            <p className="text-gray-500">{plant.care.humidity}</p>
                        </div>
                    </div>

                    <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
                        View Details
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PlantOfTheWeek;