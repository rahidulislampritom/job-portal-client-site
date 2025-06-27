import Lottie from 'lottie-react';
import loginAnimation from '../../assets/Lottie/signIn3.json'
import SocialLogin from '../shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import AuthContext from '../../context/authContext/AuthContext';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Swal from 'sweetalert2';
// import axios from 'axios';


const Signin = () => {
    const [passIcon, setPassIcon] = useState(true)

    const { authSignIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const from = location.state || '/';

    const handleSigninSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // Sign in a user with an email address and password
        authSignIn(email, password)
            .then(() => {
                // console.log(result.user);
                Swal.fire({
                    title: 'Signin Successful!',
                    icon: 'success',
                })
               


                // const user = {
                //     email: email
                // }


                // axios.post('http://localhost:6900/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data)
                //     })

                navigate(from);
            })
            .catch(() => {
                // console.log('signIn error', err);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen md:pt-28 ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl p-8 border border-gray-400">
                        <div className='text-center space-y-2.5'>
                            <p className='text-[#3C7BF8]'>Welcome back</p>
                            <h1 className="text-[#05264E] text-3xl md:text-4xl font-bold">Member Login</h1>
                            <p className='text-[#71757D]'>Access to all features.No credit card required</p>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className="">
                            <form onSubmit={handleSigninSubmit}>
                                <fieldset className="fieldset relative">
                                    <label className="label text-lg">Email</label>
                                    <input name='email' type="email" className="input w-full" placeholder="Email" />
                                    <label className="label text-lg">Password</label>
                                    <input name="password" type={passIcon ? 'text' : 'password'} className="input w-full" placeholder="**********" />
                                    <div onClick={() => setPassIcon(!passIcon)} className="text-2xl absolute bottom-24 md:bottom-27 right-6 z-1">
                                        {
                                            passIcon
                                                ? <AiOutlineEye />
                                                : <AiOutlineEyeInvisible />
                                        }

                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='flex items-center justify-center gap-2'>
                                            <input type="checkbox" name="" id="" className='md:size-5' />
                                            <a className="link link-hover text-[#6C75A3] font-medium md:text-lg">Remember me</a>
                                        </p>
                                        <p><a className="link link-hover text-[#6C75A3] font-medium  md:text-lg">Forgot password?</a></p>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <h2 className='text-center pt-2.5'>Don't have an account? <Link className='btn-link font-medium' to={'/register'}>Sign up</Link></h2>
                        </div>

                    </div>
                    <div className="text-center lg:text-left md:w-sm">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;