import React, { use, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { user, loading } = use(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-green-500"></span>
            </div>
        );
    }

    if (!user) return null;

    const { displayName, email, photoURL } = user;

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4 py-12">

                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>

                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <img
                            src={photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
                            alt="Profile"
                            className="w-28 h-28 rounded-full border-4 border-green-200 shadow-md object-cover"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mt-4 text-gray-800">
                        {displayName || 'No Name Found'}
                    </h2>

                    <p className="text-gray-500 mt-1">{email}</p>

                    <div className="my-6 border-t"></div>

                    <div className="text-left space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Status</span>
                            <span className="font-semibold text-green-600">Active</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Role</span>
                            <span className="font-semibold">User</span>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
                        Update Profile
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;