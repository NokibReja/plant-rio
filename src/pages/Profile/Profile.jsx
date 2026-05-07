import React, { use, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link, Outlet, useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {

    const { user, loading } = use(AuthContext)
    console.log(user)
    const { displayName, email, photoURL } = user

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className='w-11/12 mx-auto p-10 bg--50'>
                    <div className="w-1/2 mx-auto p-10 card card-side bg-base-100 shadow-sm">
                        <figure>
                            <img
                                className='w-50 h-50 rounded-full'
                                src={photoURL}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-bold mt-5">{displayName}</h2>
                            <p className='flex'><span className='font-bold'>Email : </span> {email}</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Profile;