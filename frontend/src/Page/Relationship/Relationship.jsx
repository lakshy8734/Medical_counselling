import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

import style from './Relationship.module.css'

function Relationship() {
    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={`${style.relationSec} p-10`}>

                <h1 className='text-white text-5xl font-semibold pt-[6%]'>
                    Relationship Counselling
                </h1>

                <p className='text-white py-4 font-semibold text-xl'>
                    Get Relationship help from experienced counsellors who are capable of assessing individual & partner problems
                </p>

                <h2 className='text-white py-4 font-semibold text-2xl'>
                    Couples | Partners | Friends | Family | Special Bonds
                </h2>


                <div className='flex gap-8 mt-10'>
                    <button className='text-white px-8 py-4 bg-cyan-400 rounded-full'>Find My Therapist</button>
                    <button className='text-white px-12 py-4 bg-cyan-600 rounded-full'>Get Started</button>
                </div>

            </section>

            <section className="w-full p-2 flex flex-col lg:flex-row">

                {/* Main Content */}
                <div className="w-full lg:w-[65%] p-5">
                    <h1 className="font-semibold pb-4 text-2xl">
                        Is love ENOUGH?
                    </h1>

                    <p className="font-medium text-xl text-justify text-slate-500">
                        Relationships may go sour, communication gets broken, distrust creeps in, and relationships that were once a source of happiness, reach a bitter end due to unresolved hurts, unmet needs, disappointments, and unrealistic expectations.
                    </p>
                    <br />
                    <p className="font-medium text-xl text-justify text-slate-500">
                        Love is a necessary factor for a strong and fulfilling relationship but NOT enough. So WHAT is it? Relationships require a concerted effort from both ends. They require listening, empathy, understanding, healthy boundaries, communication & consistency, to name a few and this is what Relationship counselling helps you work on.
                    </p>
                    <br />
                    <p className="font-medium text-xl text-justify text-slate-500">
                        Seeking relationship advice allows you and your partner to get an unbiased view of your individual personalities and combined dynamics. BetterLYF relationship therapists work on individual & couple relationships, the relationship counseling sessions assist you with your relationship challenges in the most effective way.
                    </p>

                    <button className="bg-cyan-400 mt-7 px-10 py-3 rounded-full text-white cursor-pointer">
                        Get Started
                    </button>
                </div>

                {/* Sidebar with Buttons */}
                <div className="w-full lg:w-[35%] mt-7  flex justify-center">
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            'Break Up', 'Cheating & Infidelity', 'Couple', 'Divorce',
                            'Dating', 'Friendship', 'Family', 'Intimacy',
                            'Marriage', 'Pre Marital', 'Toxic Relationship'
                        ].map((category) => (
                            <div
                                key={category}
                                className="p-3 bg-white flex items-center justify-center border border-gray-300 text-cyan-500 rounded-lg shadow-md text-center"
                            >
                                {category} ➡
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section>
                <section className="w-full p-6 bg-slate-100">

                    <h1 className="text-center font-semibold text-3xl mb-6">
                        Talk To A Counselor About
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {cards.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="font-bold text-xl mb-3">{item.title}</h2>
                                <p className="text-slate-600 mb-4">{item.description}</p>
                                <span className="text-cyan-500 font-medium">
                                    View Details &gt;
                                </span>
                            </div>
                        ))}
                    </div>

                </section>


                <section>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
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
                        <div className="flex space-x-4 mt-6">
                            <button className="bg-cyan-500 text-white py-3 px-6 rounded-lg">Find My Therapist</button>
                            <button className="bg-teal-800 text-white py-3 px-6 rounded-lg">Get Started</button>
                        </div>
                    </div>

                </section>

            </section>




            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Relationship

const cards = [
    {
        title: 'Break Up',
        description: "A relationship ending could be detrimental to our mental health. Even when a relationship is no longer healthy, a breakup may be excruciatingly painful since it represents the loss of not only your partner but also the dreams and promises you both shared. The beginnings of romantic partnerships are loaded with hope for the future. However, when it comes to an end, we are filled with disappointment and grief. By going to counselling you'll be able to talk about any feelings or troubles you're having and develop healthy coping skills to deal with them.",
    },
    {
        title: 'Cheating & Infidelity',
        description: "Cheating in a relationship is an emotionally painful experience and can lead to issues in self-confidence, anxiety, stress or even depression or trauma. While the pain might be the same for an unmarried couple - the problem is far more complex for married individuals due to a more considerable impact on kids & families. Therapy may involve assessing individual and couple dynamics, processing the events/feelings that led to the situation and building the resources to cope with the outcome.",
    },
    {
        title: 'Couple',
        description: "Couple Counselling is not only for married people. Couples need to work on their relationship to keep it strong, healthy, and happy. A counselor can help identify the areas in your relationship that need attention and assist in developing strategies to improve communication and understanding between partners.",
    },
    {
        title: 'Divorce',
        description: "Divorce is a complex matter which impacts multiple lives. Divorce therapy can help individuals process the emotions and challenges that arise from the end of a marriage. It can also provide support in developing new ways of coping and moving forward post-divorce.",
    },
];