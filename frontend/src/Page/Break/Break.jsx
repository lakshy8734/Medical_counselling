import React from 'react'
import style from './Break.module.css'

import img from '../../Assets/Link.jpeg'

import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';


import discover2 from '../../Assets/reflect-old.png'
import dec3 from '../../Assets/rekindle-old.png'
import discover from '../../Assets/discover.png'



function Break() {
    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={`${style.banner}  px-[5%] py-[10%]`}>

                <h1 className='text-4xl text-white font-bold'>
                    Break Up Counselling
                </h1>

                <p className='text-lg text-white font-medium mt-5'>
                    We have helped more than 1000 people in dealing with breakup. Let's help you get through this hurdle now.
                </p>

                <div className='mt-[5%] flex gap-5'>

                    <button className="bg-cyan-500 text-white py-2 px-6 rounded-full">
                        Find My Therapist
                    </button>

                    <button className="bg-cyan-800 text-white py-2 px-6 rounded-full">
                        Get Started
                    </button>

                </div>

            </section>

            <section className='w-[100%] flex justify-center'>

                <div className='w-[90%] bg-white shadow-xl relative top-[-4em] rounded-lg p-6'>

                    <h2 className="text-3xl font-bold mb-4">How Does A Breakup Feel?</h2>

                    <p className="text-slate-500 font-semibold leading-relaxed">
                        Empty, hurt, lonely, and angry are just the tip of the emotional iceberg that a person experiences in a breakup. A relationship breakup is not only the loss of a partner but an imagined future, certainty, and a part of ourselves as well. Moving on is tough, and one can experience a whole range of difficult feelings, complicated thoughts, and obsessive behaviour patterns, which can affect one’s productivity at work, and the quality of relationships with friends and family. This is where therapy helps to overcome breakup turmoil in our life.
                    </p>
                </div>

            </section>


            <section className='w-[100%] flex justify-center items-center flex-col'>

                <div className='w-[90%] bg-white shadow-2xl  rounded-lg p-6'>

                    <h2 className="text-3xl font-bold mb-4">When To Seek Therapy For Break Up?</h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        Different people have different ways of coping with challenges in life. Some resort to perpetual self-doubt and hopelessness of finding a similar partner again, and a few resort to negative coping behaviour to revenge, stalk and rebound relationships. Some common signs of struggle are:
                    </p>

                    <ul className="list-disc list-inside text-gray-600 mb-4">
                        <li>Withdrawing from your near and dear ones</li>
                        <li>Overthinking about your ex</li>
                        <li>Stalking or overthinking about their current partner</li>
                        <li>Frequent emotional outbursts, not being “oneself”</li>
                        <li>Resorting to numbing emotions through drinking, smoking, drugs, rebound relationships, casual sex, binge eating, etc.</li>
                    </ul>

                    <p className="text-gray-600 leading-relaxed">
                        In such cases, a Breakup can lead to significant mental health concerns ranging from anxiety, post-traumatic stress, or even depression. It is very natural to expect that a relationship you invested in will not be forgotten in a short time.
                    </p>
                </div>

            </section>

            <section className='w-[100%] mt-5 flex flex-row justify-center items-center'>

                <div className='w-[90%] flex items-center bg-white shadow-2xl  rounded-lg p-6'>

                    <div className="w-full md:w-1/2">
                        <img
                            src={img}
                            alt="Therapy Support"
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
                        <h2 className="text-3xl font-bold mb-4">How Break Up Therapy Helps:</h2>
                        <ul className="list-disc list-inside text-gray-600 mb-6">
                            <li>It Helps Express The Pain</li>
                            <li>Find Stability In Emotional Chaos</li>
                            <li>Grieve & Process The Loss</li>
                            <li>Learn Skills & Get perspective For Closure</li>
                            <li>Find Hope For a Better Future</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600">
                            Get Started
                        </button>
                    </div>

                </div>
            </section>

            <section className='w-[100%] mt-5 flex flex-row justify-center items-center'>

                <div className="bg-white w-[90%] p-8 rounded-lg shadow-lg">
                    <h2 className="font-bold text-2xl mb-6">Relationship Counselling Therapy Approach</h2>
                    <div className="space-y-4 text-slate-600">
                        <p><span className="text-cyan-500 font-bold">Vent:</span> Your Relationship counsellor will spend the initial part of the therapy in building a rapport with you and giving you a safe, non-judgemental atmosphere to share your challenges.</p>
                        <p><span className="text-cyan-500 font-bold">Identify:</span> The relationship counselor will understand the current concerns, explore the relationship in-depth, identify the areas of work, set goals for therapy.</p>
                        <p><span className="text-cyan-500 font-bold">Plan:</span> After receiving clarity on the length and breadth of the relationship concern, the relationship counsellor will help to identify whether individual sessions will suffice or there is a need for relationship counselling or family therapy as well to find a resolution.</p>
                        <p><span className="text-cyan-500 font-bold">Individual sessions:</span> When individual personality factors like insecurity, anger outbursts, rigid beliefs, unrealistic expectations, inability to regulate emotions, possessiveness, controlling nature impact the interaction or when a previous trauma continues to trigger us in the present and leads to dysfunctional attachment patterns.</p>
                        <p><span className="text-cyan-500 font-bold">Relationship counselling or family therapy:</span> When two or more people’s communication patterns, belief systems, attachment styles, distress tolerance, needs, expectations, rigid and flexible, imbalance between intimacy and autonomy, boundaries lead to destructive patterns of codependency, enmeshment, toxic relationships that hurt one or all involved.</p>
                        <p><span className="text-cyan-500 font-bold">Action:</span> The Relationship Counselor will help to chart a course of action and step by step take up each problem area of the relationship like controlling behaviour, personality clashes, lack of space, or autonomy, fair fighting, boundary setting and equip you with skills to resolve conflicts, change perspectives, find a middle ground or part amicably.</p>
                        <p><span className="text-cyan-500 font-bold">Progress:</span> You may find noticeable changes after a few sessions where you would be able to identify triggers, deal with conflict effectively and are able to break the cycle of negative interactions.</p>
                    </div>
                    <div className="flex justify-center space-x-4 mt-6">

                        <button className="bg-cyan-500 text-white py-2 px-6 rounded-full">
                            Find My Therapist
                        </button>

                    </div>
                </div>
            </section>

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

            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default Break