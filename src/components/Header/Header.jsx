import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/river-img.jpg";
import { FaLeaf } from "react-icons/fa";

const Header = () => (
    <div className="lg:w-11/12 mx-auto bg-green-50 overflow-hidden">
        <div className="hero-content flex-col lg:flex-row gap-8">

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={bannerImg}
                    className="lg:max-w-md rounded-lg shadow-2xl"
                    alt="plant" />
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-5 lg:text-5xl text-2xl font-bold text-green-500"
                >
                    Plants Make Better Life <FaLeaf />
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="py-6 lg:text-xl font-semibold"
                >
                    Plant trees today to protect our planet, ensure cleaner air, and
                    sustain future generations
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-green-600 text-white"
                >
                    Explore More
                </motion.button>
            </motion.div>

        </div>
    </div>
);

export default Header;