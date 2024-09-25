import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import style from './Subblog.module.css'
import depressioncard from '../../Assets/depressioncard.webp'


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


    const url = window.location.href; // Current URL
    const title = "Harnessing Calm: Using Fidget Spinners for Stress Relief";

    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={style.main}>

                <div className='w-[80%]'>

                    <h1 className="text-4xl font-bold">
                        Harnessing Calm: Using Fidget Spinners for Stress Relief
                    </h1>
                    <h2 className="mb-5 text-base font-medium text-slate-400">
                        Updated July 22, 2024 By BetterLYF Team
                    </h2>

                    <div className='mt-4 mb-5 flex space-x-4'>
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


                    <img className='w-[90%]' src={depressioncard} alt="" />

                    <p className='text-xl font-justify font-medium text-slate-600 w-[90%] mt-3 pr-5'>
                        The pop-it toys and fidget spinners that have been widely accessible in the marketplaces lately have a highly addicting quality. These days, almost every child has one of these fidget toys. These toys have caught the attention of grown-ups as well. But how exactly do they work to relieve stress? Those who actively use such devices have reported the benefits of using them in their daily lives, such as managing anxiety and helping people focus on tasks.
                    </p>



                    <h2 className='text-xl font-semibold pt-4 pb-4 text-start text-cyan-500 '>
                        What is a Fidget Spinner?
                    </h2>



                    <p className='text-xl font-justify font-medium text-slate-600 w-[90%] mt-3 pr-5'>
                        The pop-it toys and fidget spinners that have been widely accessible in the marketplaces lately have a highly addicting quality. These days, almost every child has one of these fidget toys. These toys have caught the attention of grown-ups as well. But how exactly do they work to relieve stress? Those who actively use such devices have reported the benefits of using them in their daily lives, such as managing anxiety and helping people focus on tasks.
                    </p>


                    <h2 className='text-xl font-semibold pt-4 pb-4 text-start text-cyan-500 '>
                        What is a Fidget Spinner?
                    </h2>



                    <p className='text-xl font-justify font-medium text-slate-600 w-[90%] mt-3 pr-5'>
                        The pop-it toys and fidget spinners that have been widely accessible in the marketplaces lately have a highly addicting quality. These days, almost every child has one of these fidget toys. These toys have caught the attention of grown-ups as well. But how exactly do they work to relieve stress? Those who actively use such devices have reported the benefits of using them in their daily lives, such as managing anxiety and helping people focus on tasks.

                        The pop-it toys and fidget spinners that have been widely accessible in the marketplaces lately have a highly addicting quality. These days, almost every child has one of these fidget toys. These toys have caught the attention of grown-ups as well. But how exactly do they work to relieve stress? Those who actively use such devices have reported the benefits of using them in their daily lives, such as managing anxiety and helping people focus on tasks.
                    </p>

                    <h2 className='text-xl font-semibold pt-4 pb-4 text-start text-cyan-500 '>
                        Fidget Toys and Stress
                    </h2>

                    <p className='text-xl font-justify font-medium text-slate-600 w-[90%] mt-3 pr-5'>
                        When a person feels overstimulated by stress, fidget spinners can act as a way of providing brief relief from the overwhelming feelings. An individual can have a variety of stressors, some of which can be temporarily dealt with by playing with the fidget toys and taking a break from feeling stressed.

                        <br /><br />

                        Oftentimes, when people undergo a stressful situation, their responses include nail-biting, lip-picking or hair-twirling. Thus, replacing those behaviours with a fidget toy might be beneficial where they can replace these unconscious stress behaviours. In cases of stress, fidget toys can be seen as activities that can be done to practise mindfulness. Whenever the mind wanders, taking time out to focus using the fidget spinner can help individuals pause and reset. Spinning, like squeezing a stress ball or doing other rhythmic exercises, can provide a sense of control and predictability that can help calm an overactive mind.
                        <br /><br />
                        Something to note here is that fidget spinners cannot eradicate stress from the root cause but only provide temporary relief. Hence, consulting a counselor can help overcome stress in a much better way.m in their daily lives, such as managing anxiety and helping people focus on tasks.
                    </p>


                    <div className='mt-4 mb-5 flex space-x-4'>
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


                    <div className=' flex gap-5 justify-start'>
                        <button className={style.btn}>
                            Find My Therapist
                        </button>

                        <button className={style.btn1}>
                            Get Started
                        </button>
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



            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Subblog