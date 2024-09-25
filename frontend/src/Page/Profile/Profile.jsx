import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import style from './Profile.module.css'

import quote from '../../Assets/quote.svg'




function Profile() {
    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>


            <div className={`${style.banner}`}>



                <div className={` flex flex-col md:flex-row  p-4 md:p-8`}>

                    {/* Left Section */}
                    <div className="md:w-1/2 bg-blue-900 p-6 rounded-l-lg flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-cyan-500 mb-4">3K+ Session Taken</h2>
                            <p className="text-white text-lg">Consultation mode: Online (VIDEO, CHAT, CALL)</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div>
                                <img
                                    src={quote}
                                    alt="Counsellor Video Profiles"
                                    className="w-[20%] transform rotate-180  h-24 object-fit rounded-lg"
                                />
                            </div>
                            <div className="ml-4">
                                <button className="bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg">
                                    Schedule Now
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 text-white">
                            <img
                                src="https://via.placeholder.com/100x50"
                                alt="BetterLyf Logo"
                                className="w-24"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div style={{ background: '#e3e3e3' }} className="md:w-1/2 p-6  rounded-r-lg flex flex-col justify-between">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Esha Chauhan"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div className="ml-4">
                                <h3 className="text-2xl font-bold">Esha Chauhan</h3>
                                <p className="text-gray-600">Masters in Clinical Psychology</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Workplace',
                                    'Lifestyle',
                                    'Anxiety',
                                    'Stress',
                                    'Relationships',
                                    'Confidence',
                                    'Self Development',
                                    'Grief',
                                    'Burn Out',
                                    'Communication',
                                    'Dating',
                                    'Loneliness',
                                    'Motivation',
                                ].map((expertise, index) => (
                                    <span
                                        key={index}
                                        className="text-slate-500 text-sm font-semibold px-3 py-1 border border-cyan-500 rounded-full"
                                    >
                                        {expertise}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Languages</h4>
                            <div className="flex gap-2">
                                {['Bengali', 'English', 'Hindi'].map((language, index) => (
                                    <span
                                        key={index}
                                        className="text-slate-500 text-sm font-semibold px-3 py-1 border border-cyan-500 rounded-full"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold mb-2">Counselling</h4>
                            <span className="text-slate-500 text-sm font-semibold px-3 py-1 border border-green-500 rounded-full">
                                Individual
                            </span>
                        </div>
                    </div>
                </div>

                <section className="flex justify-center">
                    <div className="p-6 w-[90%] md:w-[80%] lg:w-[70%] bg-white rounded-lg shadow-lg">
                        <h1 className="text-center text-4xl font-bold  mb-6">
                            My Thoughts on Counseling
                        </h1>
                        <p className="text-slate-600 mt-4 text-center font-medium text-lg leading-relaxed">
                            Counseling is a journey into self-awareness and growth, in a safe space, with the help of empathy and positive regard. It is a space where one can be their authentic self, heal from the past, and feel empowered through the presence of a counselor.
                        </p>

                        <div className="mt-10">
                            <h2 className="text-center text-4xl font-semibold  mb-4">
                                Why I Chose Counseling?
                            </h2>
                            <p className="text-slate-600 text-center font-medium text-lg leading-relaxed">
                                A relative of mine faced major mental health issues, and I saw them face a lack of sensitivity at every turn. I have always wanted to help the people around me, but after witnessing a real example of the stigma around mental health, I wanted to commit myself to advocating mental health and empowering people by facilitating their growth.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-center text-4xl font-semibold mb-4">
                                Concerns Close To My Heart
                            </h2>
                            <p className="text-slate-600 text-center font-medium text-lg leading-relaxed">
                                The concerns close to my heart are trauma and anxiety, working on emotional regulation, self-esteem, and living an authentic life. I want to help people navigate the complexities of life while fostering their self-compassion and self-growth.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-center text-4xl font-semibold  mb-4">
                                How I Handle Stress
                            </h2>
                            <p className="text-slate-600 text-center font-medium text-lg leading-relaxed">
                                I ground myself either by doing breathing techniques or by exercising. I feel regulated when I write, journal, or draw; and I often dance to bring myself back to the present moment. Additionally, I enjoy spending quality time with my loved ones.
                            </p>
                        </div>

                        <div className='flex justify-center mt-5'>
                            <button className='text-white ml-[5%] mt[7%] text-xl font-medium border rounded-full py-2 px-10 bg-cyan-500 hover:text-white transition-all duration-300 ease-linear border-cyan-500'>
                                Book Session
                            </button>
                        </div>
                    </div>
                </section>


            </div>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Profile;
