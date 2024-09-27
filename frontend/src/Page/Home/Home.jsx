import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import Article from '../../Component/Article/Article';
// import HomeSlider from '../../Component/HomeSlider/HomeSlider';
import DoctorSlider from '../../Component/DocSlider/DocSlider';
import Cards from '../../Component/Cards/Cards';
import style from './Home.module.css'
import { Link } from 'react-router-dom';

import one from '../../Assets/one.webp'
import sessions from '../../Assets/sessions.webp'
import exp from '../../Assets/exp.webp'
import globe from '../../Assets/globe.webp'
import refund from '../../Assets/refund.webp'
import lifetime from '../../Assets/lifetime.webp'
import laptop from '../../Assets/laptop.png'
import yoga from '../../Assets/yoga.avif'
import banner from '../../Assets/bannerimg.png'
import Image from '../../Assets/Banner Image Shape.png'






function Home() {
  return (
    <>
      <nav className={style.nav}>
        <Navbar />
      </nav>

      <section className={`${style.bgcolor} flex flex-col lg:flex-row w-[100%] p-2 pt-[5%]`}>
        <div className='w-[100%] lg:w-[50%]'>
          <h1 className='text-4xl lg:text-7xl font-bold p-4 pt-6 text-white'>
            Consult a Doctor
            <br />
            anytime anywhere
            <br />
            by video call
          </h1>

          <p className='text-lg lg:text-xl font-medium p-4 pt-6 text-white'>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Sociis ipsum posuere pharetra odio aliquam porta congue. In tincidunt sed sagittis cum ac. Porttitor vitae dictum eget neque blandit venenatis justo.
          </p>

          <div className='p-4 pt-6 pb-[10%] lg:pb-[15%]'>
            {/* <button className={style.btn3}>
              Ask a Doctor Online
            </button> */}
          </div>
        </div>

        <div className='w-[100%] lg:w-[50%] flex justify-end relative hidden lg:flex'>
          <img className={style.movingImage} src={banner} alt="" />
          <img className='w-[35%] h-[45%] absolute left-[5%] top-[25%]' src={Image} alt="" />
        </div>

      </section>


      <section className={style.home}>
        <h1 className="text-4xl text-center mb-4 md:text-left">Why LYF</h1>
        <p className="text-center hidden md:block md:text-left">
          LYF has been providing the best online therapy & counselling services to Indians across 70 countries. Our Online counsellors & mental health experts are multilingual & provide confidential counseling online via video, call & chat.
        </p>

        <div className={`${style.sec} flex flex-col md:flex-row`}>

          <div className={`${style.left} w-full md:w-1/2 flex flex-wrap justify-between`}>
            {descriptions.map((item, index) => (
              <div key={index} className={style.imageContainer}>
                <img src={item.src} alt={`Image ${index + 1}`} className={style.image} />
                <p className={style.description}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* This section will be hidden on small screens */}
          <div className={`${style.right} w-full md:w-1/2 hidden md:flex justify-center items-end`}>
            <img src={laptop} alt="" className="w-full" />
          </div>

        </div>

        <div className="flex justify-center">

          <button className={style.homebtn}>
            Start Therapy
          </button>

        </div>

      </section>


      <section className='p-3'>
        <h1 className='mt-4 text-center text-4xl font-semibold'>
          What Improves With Therapy
        </h1>
        <Cards />
      </section>

      <section className="p-3">
        <h1 className="mt-4 text-center text-3xl md:text-4xl font-semibold">How Online Therapy Helps</h1>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img src={yoga} alt="Yoga" className="w-[80%] md:w-[100%]" />
          </div>

          {/* Text Section */}
          <div className={` ${style.text} w-full md:w-1/2 p-3 text-lg md:text-2xl font-semibold text-justify mb-3`}>
            The first and foremost purpose of online therapy is to give you a
            <strong style={{ color: '#00b8d3' }}> safe space for disclosure.</strong> In your online therapy journey, you will know what an uninterrupted conversation feels like. It's easier to open up because you feel not judged but understood. Further, online counselling helps
            <strong style={{ color: '#00b8d3' }}> identify triggers </strong> for your emotions and allows you to
            <strong style={{ color: '#00b8d3' }}> discover your deep-rooted concerns.</strong> With trusted counselor guidance and practical tools,
            <strong style={{ color: '#00b8d3' }}> you will feel better, happier, and stronger at every step.</strong>

            You can improve relationships, build confidence, overcome peer pressure, cope with stress, beat anxiety, and outgrow depression. It will empower you with skill sets to
            <strong style={{ color: '#00b8d3' }}> become the best version of yourself.</strong>
            <div>
              <button className={`${style.homebtn} `}>
                Start Therapy
              </button>
            </div>
          </div>
        </div>
      </section>



      <section className='p-2'>

        {/* <DoctorSlider /> */}

        <div className='flex justify-center'>
          <Link to='/know-your-counselor'>
            <button className='text-cyan-500 text-xl font-semibold border rounded-full py-4 px-10 hover:bg-cyan-700 hover:text-white transition-all duration-300 ease-linear border-cyan-500'>
              View All Counsellors
            </button>
          </Link>
        </div>
      </section>


      <section className="p-4 flex justify-center">

        <div className={`${style.refer} p-6 md:p-12 rounded-lg w-full  md:w-[95%]`}>
          <h1 className="text-center text-2xl md:text-4xl pb-2 md:pb-3 font-bold">
            Refer & Grow With BetterLYF
          </h1>

          <h2 className="text-center text-xl md:text-2xl pb-2 md:pb-3 font-semibold">
            1 Free Session
          </h2>
          <h3 className="text-center text-2xl md:text-3xl font-bold">
            With Every Successful Referral*
          </h3>

          <h4 className="text-center text-sm md:text-base font-normal" style={{ color: '#67839a' }}>
            *Terms & Conditions Apply
          </h4>

          <div className="flex justify-center mt-4">
            <button className={style.homebtn2}>
              Get Started
            </button>
          </div>
        </div>
      </section>



      <article>
        <Article />
      </article >


      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default Home



const descriptions = [
  { src: one, text: "Description for image 1" },
  { src: lifetime, text: "Description for image 2" },
  { src: refund, text: "Description for image 3" },
  { src: globe, text: "Description for image 4" },
  { src: exp, text: "Description for image 5" },
  { src: sessions, text: "Description for image 6" }
];