import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import style from './Subblog.module.css'
import depressioncard from '../../Assets/depressioncard.webp'

import { Link } from 'react-router-dom';

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon
} from 'react-share';





function Subblog() {


    const url = window.location.href;
    const title = "Harnessing Calm: Using Fidget Spinners for Stress Relief";

    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>



            <section className={style.main}>
                <div className="w-full lg:w-[80%] px-4 lg:px-0">
                    <h1 className="text-3xl lg:text-4xl font-bold">
                        Harnessing Calm: Using Fidget Spinners for Stress Relief
                    </h1>
                    <h2 className="mb-5 text-sm lg:text-base font-medium text-slate-400">
                        Updated July 22, 2024 By BetterLYF Team
                    </h2>

                    <div className="mt-4 mb-5 flex flex-wrap space-x-2 lg:space-x-4">
                        <FacebookShareButton url={url} quote={title}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={url} title={title}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={url} title={title} summary={title}>
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={url} title={title}>
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </div>

                    <img className="w-full lg:w-[90%]" src={depressioncard} alt="" />

                    <p className="text-base lg:text-xl font-justify font-medium text-slate-600 w-full lg:w-[90%] mt-3 pr-5">
                        The pop-it toys and fidget spinners that have been widely accessible in the marketplaces lately have a highly addicting quality. These days, almost every child has one of these fidget toys. These toys have caught the attention of grown-ups as well. But how exactly do they work to relieve stress? Those who actively use such devices have reported the benefits of using them in their daily lives, such as managing anxiety and helping people focus on tasks.
                    </p>

                    <h2 className="text-lg lg:text-xl font-semibold pt-4 pb-4 text-start text-cyan-500">
                        What is a Fidget Spinner?
                    </h2>

                    <p className="text-base lg:text-xl font-justify font-medium text-slate-600 w-full lg:w-[90%] mt-3 pr-5">
                        The pop-it toys and fidget spinners that have been widely accessible in the marketplaces lately have a highly addicting quality. These days, almost every child has one of these fidget toys. These toys have caught the attention of grown-ups as well. But how exactly do they work to relieve stress? Those who actively use such devices have reported the benefits of using them in their daily lives, such as managing anxiety and helping people focus on tasks.
                    </p>

                    <h2 className="text-lg lg:text-xl font-semibold pt-4 pb-4 text-start text-cyan-500">
                        Fidget Toys and Stress
                    </h2>

                    <p className="text-base lg:text-xl font-justify font-medium text-slate-600 w-full lg:w-[90%] mt-3 pr-5">
                        When a person feels overstimulated by stress, fidget spinners can act as a way of providing brief relief from the overwhelming feelings. An individual can have a variety of stressors, some of which can be temporarily dealt with by playing with the fidget toys and taking a break from feeling stressed.
                        <br /><br />
                        Oftentimes, when people undergo a stressful situation, their responses include nail-biting, lip-picking, or hair-twirling. Thus, replacing those behaviours with a fidget toy might be beneficial where they can replace these unconscious stress behaviours.
                        <br /><br />
                        Something to note here is that fidget spinners cannot eradicate stress from the root cause but only provide temporary relief. Hence, consulting a counselor can help overcome stress in a much better way.
                    </p>

                    <div className="mt-4 mb-5 flex flex-wrap space-x-2 lg:space-x-4">
                        <FacebookShareButton url={url} quote={title}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={url} title={title}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={url} title={title} summary={title}>
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton url={url} title={title}>
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </div>

                    <div className="flex flex-wrap gap-5 justify-start">
                        <Link to='/know-your-counselor'>
                            <button className={style.btn}>Find My Therapist</button>
                        </Link>
                        <Link to='/pricing'>
                            <button className={style.btn1}>Get Started</button>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-[30%] mt-10">
                    <div className="w-full bg-cyan-50 border rounded-lg">
                        <h1 className="text-xl font-semibold p-4 border-b border-cyan-500 text-start text-cyan-500">
                            CATEGORIES
                        </h1>
                        <ul>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Academics and Career</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Depression</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Employee Assistance Program</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Inferiority Complex</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Inspirational Quotes</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Mental Health</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Parenting</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Relationships</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Self Esteem and Confidence</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Sleep</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Social Media</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Stress and Anxiety</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Therapy</li>
                            <li className="pt-3 pb-3 ml-5 text-lg font-semibold text-slate-400 border-b border-cyan-500 border-dotted">Women Empowerment</li>
                            <li className="pt-3 pb-[15%] ml-5 text-lg font-semibold text-slate-400">Work Stress</li>
                        </ul>
                    </div>
                </div>
            </section>


            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Subblog