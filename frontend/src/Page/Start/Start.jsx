import React, { useState } from 'react'
import ReviewSlider from '../../Component/ReviewSlider/ReviewSlider';

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import style from './Start.module.css'

import price1 from '../../Assets/pricing1.png'
import discover from '../../Assets/discover.png'
import price2 from '../../Assets/pricing2.png'

import discover2 from '../../Assets/reflect-old.png'
import dec3 from '../../Assets/rekindle-old.png'

import one from '../../Assets/session-45.png'
import two from '../../Assets/2.png'
import three from '../../Assets/3.png'
import couple from '../../Assets/couple-therapy1.png'
import four from '../../Assets/4.png'
import six from '../../Assets/6.png'




function Start() {

    const [copySuccess, setCopySuccess] = useState(false);
    const [showCode, setShowCode] = useState(true);

    const offerCode = "WELLBEING10";

    const handleCopy = () => {
        navigator.clipboard.writeText(offerCode)
            .then(() => {
                setCopySuccess(true);
                setShowCode(false);
                setTimeout(() => {
                    setCopySuccess(false);
                    setShowCode(true);
                }, 4000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={`${style.banner} p-3`}>

                <div className='w-[100%] flex justify-center'>

                    <div className='w-[90%] bg-white flex justify-around items-center'>
                        <img src={price1} alt="" />

                        <div className='text-center'>
                            <h1 className='text-2xl font-bold'>
                                UNLOCK YOUR WELLBEING NOW
                            </h1>
                            <h2 className='text-xl font-bold text-cyan-500'>
                                Get 10% Off All Therapy Plans!
                            </h2>
                            <h3 className='text-xl font-medium mt-4 cursor-pointer' onClick={handleCopy}>
                                Click To Copy
                            </h3>
                            {copySuccess && <p className='text-green-500 mt-2'>Offer code copied to clipboard!</p>}
                            {showCode && <p onClick={handleCopy} className=' cursor-pointer text-xl text-cyan-500 border border-2 divide-slate-700  border-dotted font-bold mt-4'>{offerCode}</p>}

                        </div>

                        <img src={price2} alt="" />
                    </div>
                </div>

                <div className='p-3'>
                    <h1 className='text-center mt-5 underline text-2xl font-bold'>
                        Planes
                    </h1>

                    <div className='flex flex-wrap'>

                        <div className="w-full md:w-1/3 p-4 ">
                            <div className="flex flex-col text-center bg-white rounded-lg shadow-lg overflow-hidden">

                                <img
                                    src={discover}
                                    alt="Therapy"
                                    className="object-cover w-full"
                                />

                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-cyan-600 mb-2">DISCOVER</h2>
                                    <h3 className="text-lg font-bold">4 SESSIONS</h3>
                                    <p className="text-gray-500 mb-4">Couple / Individual Appointments</p>
                                    <h4 className="border-b mb-2 pb-4 text-cyan-500 text-2xl font-bold mb-4">₹938 <span className="text-gray-500 text-sm">per session</span></h4>
                                    <p className="text-slate-400 text-sm">Experience A Safe Space</p>
                                    <p className="text-slate-400 text-sm">Explore The Differences</p>
                                    <p className="text-slate-400 text-sm mb-2 border-b mb-5 pb-2">Build Therapy Plan</p>
                                    <h4 className="text-2xl font-bold text-cyan-500 mt-4">₹3749</h4>
                                </div>

                                <button className="bg-yellow-500 text-white font-semibold py-4 px-4 rounded-b-lg">
                                    Get Therapy
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 p-4">
                            <div className="flex relative flex-col text-center bg-white rounded-lg shadow-lg overflow-hidden">

                                <img
                                    src={discover2}
                                    alt="Therapy"
                                    className="object-cover w-full"
                                />

                                <div className="absolute top-4 left-[-3%] top-[5%] bg-blue-400 text-white text-xs font-bold py-1 px-3 transform -rotate-45 translate-x-[-10%] translate-y-[-40%]">
                                    Most Popular
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-cyan-600 mb-2">DISCOVER</h2>
                                    <h3 className="text-lg font-bold">4 SESSIONS</h3>
                                    <p className="text-gray-500 mb-4">Couple / Individual Appointments</p>
                                    <h4 className="border-b mb-2 pb-4 text-cyan-500 text-2xl font-bold mb-4">₹938 <span className="text-gray-500 text-sm">per session</span></h4>
                                    <p className="text-slate-400 text-sm">Experience A Safe Space</p>
                                    <p className="text-slate-400 text-sm">Explore The Differences</p>
                                    <p className="text-slate-400 text-sm mb-2 border-b mb-5 pb-2">Build Therapy Plan</p>
                                    <h4 className="text-2xl font-bold text-cyan-500 mt-4">₹3749</h4>
                                </div>

                                <button className="bg-blue-400 text-white font-semibold py-4 px-4 rounded-b-lg">
                                    Get Therapy
                                </button>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 p-4">
                            <div className="flex absolute flex-col text-center bg-white rounded-lg shadow-lg overflow-hidden">

                                <img
                                    src={dec3}
                                    alt="Therapy"
                                    className="object-cover w-full"
                                />

                                <div className="absolute top-4 left-[-3%] top-[5%] bg-pink-400 text-white text-xs font-bold py-1 px-3 transform -rotate-45 translate-x-[-10%] translate-y-[-40%]">
                                    Best Price
                                </div>

                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-cyan-600 mb-2">DISCOVER</h2>
                                    <h3 className="text-lg font-bold">4 SESSIONS</h3>
                                    <p className="text-gray-500 mb-4">Couple / Individual Appointments</p>
                                    <h4 className="border-b mb-2 pb-4 text-cyan-500 text-2xl font-bold mb-4">₹938 <span className="text-gray-500 text-sm">per session</span></h4>
                                    <p className="text-slate-400 text-sm">Experience A Safe Space</p>
                                    <p className="text-slate-400 text-sm">Explore The Differences</p>
                                    <p className="text-slate-400 text-sm mb-2 border-b mb-5 pb-2">Build Therapy Plan</p>
                                    <h4 className="text-2xl font-bold text-cyan-500 mt-4">₹3749</h4>
                                </div>

                                <button className="bg-pink-400 text-white font-semibold py-4 px-4 rounded-b-lg">
                                    Get Therapy
                                </button>

                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex justify-around items-center rounded my-8 bg-gradient-to-r  from-cyan-100 to-pink-100 py-8">
                    <div className="flex flex-col items-center">
                        <img src={one} alt="45 mins" className="w-20 rounded-full mb-2" />
                        <p className="text-gray-600 text-center font-semibold">Every Session Is<br />For 45 Mins</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={two} alt="Refund Policy" className="w-20 rounded-full mb-2" />
                        <p className="text-gray-600 text-center font-semibold">Lifetime Validity<br />30 Day Refund Policy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={three} alt="Uniform Pricing" className="w-20 rounded-full mb-2" />
                        <p className="text-gray-600 text-center font-semibold">Uniform Pricing<br />Video | Call | Chat</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={couple} alt="Couple Sessions" className="w-20 rounded-full mb-2" />
                        <p className="text-gray-600 text-center font-semibold">Couple Appointment<br />= 2 Sessions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={four} alt="Customer Support" className="w-20 rounded-full mb-2" />
                        <p className="text-gray-600 text-center font-semibold">7-Day Customer<br />Care Support</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={six} alt="Confidential" className="w-20 rounded-full mb-2" />
                        <p className="text-gray-600 text-center font-semibold">100% Confidential<br />& Secure</p>
                    </div>
                </div>


            </section>

            <section className='overflow-hidden cursor-grabbing'>
                <ReviewSlider />
            </section>


            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Start