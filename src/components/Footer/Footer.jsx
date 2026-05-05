import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='flex flex-col lg:w-11/12 mx-auto bg-green-200 h-fit  text-center'>
            <div className='flex gap-5 justify-center mt-20 text-xl'>
                <Link>About</Link>
                <Link>Contact</Link>
                <Link>Privacy Policy</Link>
            </div>

            <div className='flex justify-center gap-10 my-10 text-4xl'>
                <Link><FaInstagram></FaInstagram></Link>
                <Link><FaFacebookF></FaFacebookF></Link>
                <Link><FaPinterestP></FaPinterestP></Link>
            </div>

            <div className='text-xl font-semibold mb-5'>
                © 2025 GreenNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;