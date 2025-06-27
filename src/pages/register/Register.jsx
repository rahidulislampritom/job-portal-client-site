import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin";
import ResAnimation from '../../assets/Lottie/signinAnimation.json';
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";



const Register = () => {

    const [passIcon, setPassIcon] = useState(true)
    const [rePassIcon, setREPassIcon] = useState(true)

    const { authRegister, setUser, authUpdateProfile } = useContext(AuthContext);

    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value
        // const allValue = {
        //     name,
        //     photo,
        //     email,
        //     password,
        //     rePassword
        // }
        // console.log(allValue);

        // password validation
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!pattern.test(password)) {
            // console.log("Password must be 6+ characters, include uppercase, lowercase, and a number.")
            return;
        }
        if (password !== rePassword) {
            Swal.fire({
                title: 'error!',
                text: 'Please give same data in password',
                icon: 'error',
            })
            return
        }

        // Sign up new users
        authRegister(email, password)
            .then((result) => {
                // console.log('Register Successful', result.user)
                setUser(result.user)
                Swal.fire({
                    title: 'Registration successful!',
                    icon: 'success',
                })

                // Update a user's profile 
                const profileData = {
                    displayName: name,
                    photoURL: photo

                }
                authUpdateProfile(profileData)
                    .then(() => {
                        //  profile updated
                    })
                    .catch(() => {
                        // console.log('update profile error');
                    })

            })
            .catch(() => {
                // console.log('Registration error');
            })

        form.reset();
    }
    return (
        <div>
            <div className="hero min-h-screen md:pt-28">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100  max-w-md shrink-0 shadow-2xl p-4 md:p-8 border border-gray-400">
                        <div className='text-center space-y-2.5'>
                            <p className='text-[#3C7BF8]'>Register</p>
                            <h1 className="text-[#05264E] text-2xl md:text-3xl font-bold">Start for free Today</h1>
                            <p className='text-[#71757D]'>Access to all features.No credit card required</p>
                            <SocialLogin></SocialLogin>
                        </div>
                        <div className="">
                            <form onSubmit={handleRegisterSubmit}>
                                <fieldset className="fieldset relative">
                                    <label className="label text-lg">Name*</label>
                                    <input name="name" type="text" className="input w-full" placeholder="Name" />
                                    <label className="label text-lg">Photo*</label>
                                    <input name="photo" type="text" className="input w-full" placeholder="Photo" />
                                    <label className="label text-lg">Email*</label>
                                    <input name="email" type="email" className="input w-full" placeholder="Email" />
                                    <label className="label text-lg">Password*</label>
                                    <input name="password" type={passIcon ? 'text' : 'password'} className="input w-full" placeholder="**********" />
                                    <div onClick={() => setPassIcon(!passIcon)} className="text-2xl absolute bottom-38.5 right-4 z-1">
                                        {
                                            passIcon
                                                ? <AiOutlineEye />
                                                : <AiOutlineEyeInvisible />
                                        }

                                    </div>
                                    <label className="label text-lg">Re-Password*</label>
                                    <input name="rePassword" type={rePassIcon ? 'text' : 'password'} className="input w-full" placeholder='**********' />
                                    <div onClick={() => setREPassIcon(!rePassIcon)} className="text-2xl absolute bottom-18.5 right-4 z-1">
                                        {
                                            rePassIcon
                                                ? <AiOutlineEye />
                                                : <AiOutlineEyeInvisible />
                                        }

                                    </div>
                                    <button className="btn btn-neutral mt-4">Sign up</button>
                                </fieldset>
                            </form>
                            <h2 className='text-center pt-2.5'>Don't have an account? <Link className='btn-link font-medium' to={'/signin'}>Sign in</Link></h2>
                        </div>

                    </div>
                    <div className="text-center lg:text-left md:w-sm">
                        <Lottie animationData={ResAnimation}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;