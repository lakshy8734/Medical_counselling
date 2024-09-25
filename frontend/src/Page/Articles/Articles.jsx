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

            <section className={`${style.banner} w-[100%] flex`}>

                <div className='p-3 w-[50%]'>

                    <h1 className='pt-[10%] pl-[5%] text-4xl font-bold'>
                        Self Help Articles
                    </h1>

                    <div className='pt-[6%] pl-[2%]'>
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
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-centerw-5 h-5'>&#10003;</span>
                            Self Esteem And Confidence
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Sleep
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Social Media
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Stress And Anxiety
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Therapy
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Women Empowerment
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Words That Heal
                        </span>
                        <span className={style.options}>
                            <span className='bg-blue-400 p-1 m-1 text-white rounded-full inline-flex items-center justify-center w-5 h-5'>&#10003;</span>
                            Work Stress
                        </span>
                    </div>

                    <div className='p-1 w-[100%] relative'>
                        <input placeholder='search Articles (e.g Depression, stress, Meditation)' className={style.search} type="text" />

                        <IoMdSearch className={style.icon} />
                    </div>

                </div>

                <div className='p-3 w-[50%]'>
                    <img src={img} alt="" />
                </div>
            </section>


            <section className={style.main}>

                <div className='w-[80%]'>
                    <h1 className='text-4xl font-bold mb-5'>
                        Articles
                    </h1>


                    <div className={style.card}>

                        <div className="flex items-center bg-white rounded-lg shadow-md">

                            <img className="w-[35%] rounded" src={depressioncard} alt="Depression Card" />

                            <div className=" w-[65%] h-auto flex flex-col gap-8 p-[15px] ">
                                <h1 className="text-xl font-bold">
                                    Harnessing Calm: Using Fidget Spinners for Stress Relief
                                </h1>
                                <h2 className="text-lg text-gray-600">
                                    Harnessing Calm: Using Fidget Spinners for Stress Relief

                                </h2>

                                <Link to="/subblog" className="mt-2 flex justify-end text-cyan-500 cursor-pointer">
                                    Read More &#8594;
                                </Link>
                            </div>
                        </div>
                    </div>



                    <div className={style.card}>

                        <div className="flex items-center bg-white rounded-lg shadow-md">

                            <img className="w-[35%] rounded" src={depressioncard} alt="Depression Card" />

                            <div className=" w-[65%] h-auto flex flex-col gap-8 p-[15px] ">
                                <h1 className="text-xl font-bold">
                                    Harnessing Calm: Using Fidget Spinners for Stress Relief
                                </h1>
                                <h2 className="text-lg text-gray-600">
                                    Harnessing Calm: Using Fidget Spinners for Stress Relief
                                </h2>

                                <div className="mt-2 flex justify-end text-cyan-500 cursor-pointer">
                                    Read More &#8594;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='w-[30%] '>

                    <div className='w-[100%] bg-cyan-50 mt-10 border  rounded-lg'>
                        <h1 className='text-xl font-semibold p-4 border-b border-cyan-500 text-start text-cyan-500 '>
                            CATEGORIES
                        </h1>
                        <ul className=''>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Academics and Career</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Depression</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Employee Assistance Program</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Inferiority Complex</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Inspirational Quotes</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Mental Health</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Parenting</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Relationships</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Self Esteem and Confidence</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Sleep</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Social Media</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Stress and Anxiety</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Therapy</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Women Empowerment</li>
                            <li className='pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted'>Words That Heal</li>
                            <li className='pt-3 pb-[15%] ml-5 text-lg font-semibold text-slate-400 '>Work Stress</li>
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