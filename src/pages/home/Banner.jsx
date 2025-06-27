import banner_1 from '../../assets/banner_1.jpg'
import banner_2 from '../../assets/banner_2 .jpg'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="flex-1 md:flex items-center justify-center flex-col hidden ">

                        <div>
                            <motion.img
                                animate={{ y: [0, 50, 0] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                src={banner_2}
                                className="max-w-sm rounded-4xl rounded-bl-none border-l-8 border-b-8 border-blue-500  shadow-2xl"
                            />
                        </div>
                        <div>
                            <motion.img
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                src={banner_1}
                                className="max-w-sm rounded-4xl rounded-bl-none border-l-8 border-b-8 border-purple-500  bg-purple-500 shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <motion.h1
                            animate={{ x: [0, 16, 0] }}
                            transition={{ duration: 5, delay: 2, repeat: Infinity }}
                            className="text-4xl font-bold">Find Your <motion.span
                                animate={{ color: ["#9cff33", "#ffbe33", "#d733ff"] }}
                                transition={{ repeat: Infinity }}>
                                Dream Job</motion.span>. Connect with Top Employers.
                        </motion.h1>
                        <p className="py-6">
                            Welcome to Job Portal, the smarter way to search for jobs. Whether you're starting your career or aiming for the next big opportunity, we connect talented individuals with leading companies across industries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;