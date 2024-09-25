import React, { useState } from 'react';
import style from './SignIn.module.css';
import img from '../../Assets/login-lottie.svg';

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/Login-in');
    };

  


    const initialState = {
        name: '',
        email: '',
        password: '',
    };

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!form.name) formErrors.name = "Name is required";
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

                <div className='lg:w-[80%] w-[95%] px-4 py-9 rounded-xl flex lg:flex-row flex-col bg-white items-center'>

                    <div className='text-center w-full lg:w-[50%]'>

                        <h1 className='text-3xl font-medium mb-8'>Sign Up</h1>

                        <h2 className='text-sm font-medium text-slate-400 mb-8'>
                            Already have an account? <span onClick={handleSignInClick} className='text-cyan-500 cursor-pointer'>Login</span>
                        </h2>

                        <div className='flex flex-col mt-5 gap-6 items-center'>

                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            <input
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder='Name*'
                                className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-slate-500 rounded-lg py-5 px-4 mb-1 w-full lg:w-[80%] focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-cyan-400'}`}
                            />

                            {errors.email && <p className="text-red-500 items-end text-sm mt-1">{errors.email}</p>}
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

                        <img src={img} alt="Login illustration" />

                    </div>

                </div>

            </section>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default SignIn;
