import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';
import style from './Articles.module.css'
import img from '../../Assets/articles-banner.svg'
import { IoMdSearch } from "react-icons/io";

import depressioncard from '../../Assets/depressioncard.webp'


function Articles() {
    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={`${style.banner} w-full flex flex-col md:flex-row items-center`}>

                {/* Left Section: Heading, Options, and Search */}
                <div className='p-3 w-full md:w-1/2'>

                    <h1 className='pt-6 md:pt-[10%] pl-[5%] text-3xl md:text-4xl font-bold text-center md:text-left'>
                        Self Help Articles
                    </h1>

                    {/* Options Section */}
                    <div className='pt-6 pl-[2%] grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Academics and Career
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Depression
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Employee Assistance Program
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Inferiority Complex
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Inspirational Quotes
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Mental Health
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Parenting
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Relationships
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-xl text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Self Esteem And Confidence
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Women Empowerment
                        </span>

                    </div>


                    <div className="p-1 w-full relative mt-6 flex items-center">
                        <input
                            placeholder="Search Articles (e.g. Depression, Stress, Meditation)"
                            className={style.search}
                            type="text"
                        />

                    </div>


                </div>

                {/* Right Section: Image */}
                <div className='p-3 w-full md:w-1/2 flex justify-center'>
                    <img src={img} alt="Self Help Articles" className='w-full max-w-xs sm:max-w-sm md:max-w-full' />
                </div>

            </section>



            <section className={style.main + " flex flex-col lg:flex-row justify-between"}>

                <div className="w-full lg:w-[65%] mb-10 lg:mb-0">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-5">Articles</h1>

                    <div className={style.card + " mb-6"}>
                        <div className="flex flex-col sm:flex-row items-center bg-white shadow-md">

                            <img className="w-full" src={depressioncard} alt="Depression Card" />

                            <div className="w-full sm:w-[65%] h-auto flex flex-col gap-6 sm:gap-8 p-4 sm:p-[15px]">

                                <h1 className="text-lg sm:text-xl font-bold">Harnessing Calm: Using Fidget Spinners for Stress Relief</h1>
                                <h2 className="text-base sm:text-lg text-gray-600">Harnessing Calm: Using Fidget Spinners for Stress Relief</h2>
                                <Link to="/subblog" className="mt-2 flex justify-end text-cyan-500 cursor-pointer">Read More &#8594;</Link>
                            </div>
                        </div>
                    </div>

                    <div className={style.card + " mb-6"}>
                        <div className="flex flex-col sm:flex-row items-center bg-white shadow-md">

                            <img className="w-full" src={depressioncard} alt="Depression Card" />

                            <div className="w-full sm:w-[65%] h-auto flex flex-col gap-6 sm:gap-8 p-4 sm:p-[15px]">

                                <h1 className="text-lg sm:text-xl font-bold">Harnessing Calm: Using Fidget Spinners for Stress Relief</h1>
                                <h2 className="text-base sm:text-lg text-gray-600">Harnessing Calm: Using Fidget Spinners for Stress Relief</h2>
                                <Link to="/subblog" className="mt-2 flex justify-end text-cyan-500 cursor-pointer">Read More &#8594;</Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Categories Section */}
                <div className="w-full lg:w-[30%] lg:ml-5">
                    <div className="w-full bg-cyan-50 mt-10 border rounded-lg">
                        <h1 className="text-xl font-semibold p-4 border-b border-cyan-500 text-start text-cyan-500">CATEGORIES</h1>
                        <ul>
                            {[
                                "Academics and Career", "Depression", "Employee Assistance Program", "Inferiority Complex",
                                "Inspirational Quotes", "Mental Health", "Parenting", "Relationships", "Self Esteem and Confidence",
                                "Sleep", "Social Media", "Stress and Anxiety", "Therapy", "Women Empowerment", "Words That Heal",
                                "Work Stress"
                            ].map((category) => (
                                <li key={category} className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">
                                    {category}
                                </li>
                            ))}
                            <li className="pt-3 pb-[15%] ml-5 text-lg font-semibold text-slate-400">Work Stress</li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className='m-5 flex justify-center'>
                <button className={style.btn}>
                    View More
                </button>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Articles