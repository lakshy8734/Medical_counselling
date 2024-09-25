import React, { useState } from 'react';
import style from './LoginIn.module.css';
import img from '../../Assets/login-lottie.svg';

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

import { useNavigate } from 'react-router-dom';

function LoginIn() {

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/sign-in');
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgot-password');
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialState = {
        email: '',
        password: '',
        rememberMe: false,
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!form.email) formErrors.email = "Email is required";
        if (!form.password) formErrors.password = "Password is required";
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validate();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setIsSubmitting(true);

            await new Promise((resolve) => setTimeout(resolve, 2000));

            console.log('Form Submitted:', form);
            setForm(initialState);
            setErrors({});
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={`${style.Login} py-[3%] w-full flex justify-center`}>
                <div className='lg:w-[80%] w-[97%] px-4 py-9 rounded-xl flex lg:flex-row flex-col bg-white items-center'>
                    <div className='text-center w-full lg:w-[50%]'>

                        <h1 className='text-3xl font-medium mb-8'>Login Account</h1>

                        <h2 className='text-sm font-medium text-slate-400 mb-8'>
                            Don’t have an account? <span onClick={handleSignUpClick} className='text-cyan-500 cursor-pointer'>Sign Up</span>
                        </h2>

                        <div className='flex flex-col mt-5 gap-6 items-center'>

                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            <input
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder='Email*'
                                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-slate-500 rounded-lg py-5 px-4 mb-1 w-full lg:w-[80%] focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-cyan-400'}`}
                            />

                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            <input
                                type="password"
                                name='password'
                                value={form.password}
                                onChange={handleChange}
                                placeholder='Password*'
                                className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-slate-500 rounded-lg py-5 px-4 mb-1 w-full lg:w-[80%] focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-red-500' : 'focus:ring-cyan-400'}`}
                            />

                            <div className='flex items-center w-full lg:w-[80%] justify-between mt-2'>
                                <label className='flex items-center text-slate-500'>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={form.rememberMe}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Remember Me?
                                </label>
                                <span onClick={handleForgotPasswordClick} className='text-cyan-500 cursor-pointer'>
                                    Forgot Password?
                                </span>
                            </div>


                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`bg-cyan-400 mt-7 text-white font-medium py-2 px-6 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full lg:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Sign Up'}
                            </button>


                            <p className='text-sm font-medium text-slate-400 mt-4'>
                                By signing up, you agree to our <span className='text-cyan-500 underline decoration-1 '> Terms & Conditions </span> and <span className='text-cyan-500 underline decoration-1 '> Privacy Policy </span>
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-center lg:w-[50%]'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default LoginIn;
