import React from 'react'
import style from './Footer.module.css'
import { useNavigate, Link } from 'react-router-dom';

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {

    const navigate = useNavigate();

    return (
        <>
            {/* Footer Main Content */}
            <div className={`p-5 flex flex-col lg:flex-row lg:justify-around w-full ${style.color}`}>
                <div className='w-full lg:w-1/5 mb-5 lg:mb-0'>
                    <h1 className='text-white text-center text-lg font-medium pb-5'>
                        We Help With
                    </h1>
                    <ul className='font-normal lg:text-base text-sm text-slate-100 text-center'>

                        <Link to="/relationship-counselling">
                            <li className='py-1'>Relationship Counselling</li>
                        </Link>

                        <li className='py-1'>Stress Anxiety Depression</li>
                        <li className='py-1'>Confidence</li>
                        <li className='py-1'>Trauma</li>
                        <li className='py-1'>LGBTQ+</li>
                        <li className='py-1'>Lifestyle Issues</li>
                        <li className='py-1'>Managing Workplace</li>
                        <li className='py-1'>Women Centric Challenges</li>
                        <li className='py-1'>Indians Living Abroad</li>
                    </ul>
                </div>

                <div className='w-full lg:w-1/5 mb-5 lg:mb-0'>
                    <h1 className='text-white text-center text-lg font-medium pb-5'>
                        Self Help
                    </h1>
                    <ul className='font-normal lg:text-base text-sm text-slate-100 text-center'>

                        <Link to="/articles">
                            <li className='py-1'>Articles</li>
                        </Link>

                        <li className='py-1'>14 Days Program</li>
                    </ul>
                </div>


                <div className='w-full lg:w-1/5 mb-5 lg:mb-0'>
                    <h1 className='text-white text-center text-lg font-medium pb-5'>
                        For Business
                    </h1>
                    <ul className='font-normal lg:text-base text-sm text-slate-100 text-center'>
                        <li className='py-1'>Corporates</li>
                        <li className='py-1'>Institutions</li>
                        <li className='py-1'>Strategic Partners</li>
                    </ul>
                </div>

                <div className='w-full lg:w-1/5 mb-5 lg:mb-0'>
                    <h1 className='text-white text-center text-lg font-medium pb-5'>
                        Assessments
                    </h1>
                    <ul className='font-normal lg:text-base text-sm text-slate-100 text-center'>
                        <li className='py-1'>Am I stressed?</li>
                        <li className='py-1'>Am I Sad Or Depressed?</li>
                        <li className='py-1'>How am I sleeping?</li>
                        <li className='py-1'>Am I Anxious?</li>
                    </ul>
                </div>

                <div className='w-full lg:w-1/4 pl-0 lg:pl-10 lg:border-l border-dotted mb-5 lg:mb-0'>
                    <h1 className='text-white text-lg font-medium pb-5 text-center'>
                        Contact
                    </h1>
                    <ul className='flex justify-center gap-3 mb-5'>
                        <li className={`bg-white p-3 rounded-xl text-4xl ${style.gradient}`}>
                            <MdOutlinePhoneInTalk />
                        </li>
                        <li className={`bg-white p-3 rounded-xl text-4xl ${style.gradient}`}>
                            <LiaCommentsSolid />
                        </li>
                        <li className={`bg-white p-3 rounded-xl text-4xl ${style.gradient}`}>
                            <FaWhatsapp />
                        </li>
                    </ul>

                    <div className='flex justify-center mb-4'>
                        <button className={style.btn}>
                            Book Session
                        </button>
                    </div>

                    <h2 className='text-white mb-3 text-sm lg:text-base font-medium text-center'>
                        Customer Support Timing
                    </h2>

                    <h3 className='text-white text-sm font-normal text-center'>
                        Mon - Sat: 9:00AM - 1:00AM IST
                    </h3>
                    <h3 className='text-white text-sm font-normal text-center'>
                        Sun: 10:00AM - 7:00PM IST
                    </h3>
                </div>
            </div>


            {/* Social Media Icons */}
            <div className={`md:p-2 pb-5 flex justify-center lg:justify-end space-x-4 w-full ${style.color}`}>
                <ul className="flex space-x-4">
                    <li className="bg-white p-2 rounded-full">
                        <FaFacebookF className="text-blue-600" />
                    </li>
                    <li className="bg-white p-2 rounded-full">
                        <FaLinkedinIn className="text-blue-700" />
                    </li>
                    <li className="bg-white p-2 rounded-full">
                        <AiOutlineYoutube className="text-red-600" />
                    </li>
                    <li className="bg-white p-2 rounded-full">
                        <FaInstagram className="text-pink-500" />
                    </li>
                </ul>
            </div>

            {/* Footer Bottom Section */}
            <div className={`py-8  px-4 text-center border-dotted border-y-2 flex flex-col lg:flex-row justify-between w-full ${style.color}`}>
                <div className='text-white pb-5 md:pd-0 text-sm md:text-base'>
                    Copyright © 2023 Virzen Wellness Private Limited
                </div>

                <ul className='flex flex-col text-xs md:text-base lg:flex-row text-white gap-3 lg:gap-12'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Refund & Cancellation Policy</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Disclaimer Section */}
            <div className={`p-5 flex justify-center lg:justify-around w-full ${style.color}`}>
                <div className={`${style.color2} w-full lg:w-[65%] p-8 rounded-xl`}>
                    <p className='font-medium md:text-base text-sm text-center leading-loose text-slate-100'>
                        Disclaimer: Please note that we are not a crisis intervention helpline. Should you have severe symptoms or have thoughts about <br />
                        harming yourself, please seek immediate medical help or call suicide prevention helplines such as <br />
                        Vandrevala Foundation 24x7 Helpline: +91-9999666555
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
