import React from 'react'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';
import style from './Doctor.module.css'
import img from '../../Assets/con-banner.svg'

import DocCard from '../../Component/DocCard/DocCard'
import DoctorSlider from '../../Component/DocSlider/DocSlider';


function Doctor() {
  return (
    <>
      <nav className={style.nav}>
        <Navbar />
      </nav>

      <section className={`${style.banner} w-[100%] flex flex-wrap items-center`}>
        <div className='p-3 w-full md:w-[50%]'>
          <h1 className='pt-[10%] pl-[5%] text-3xl md:text-4xl font-bold'>
            Talk to Top Rated
            <br />
            Counselors Online
          </h1>
          <p className='pt-[5%] pl-[5%] mb-[5%] text-base md:text-lg text-slate-500 font-bold'>
            All of our online Counsellors hold a Masters Degree in Psychology and undergo over 400+ hours of rigorous training and supervision. With expertise in various psychotherapeutic techniques, they have assisted 500K+ clients to deal with the toughest life challenges and thrive in personal and professional space.
          </p>

          <Link to='/'>
            <button className='text-white ml-[5%] mt-[7%] text-lg md:text-xl font-medium border rounded-full py-2 px-8 md:px-10 bg-cyan-500 hover:text-white transition-all duration-300 ease-linear border-cyan-500'>
              Book Session
            </button>
          </Link>
        </div>

        <div className='p-3 pt-[5%] w-full md:w-[50%] flex justify-center'>
          <img src={img} alt="" className='w-[80%] md:w-[100%]' />
        </div>
      </section>

      <section className="flex gap-2 flex-wrap">

        <DocCard
          name="Esha Chauhan"
          qualifications="Masters in Clinical Psychology"
          expertise={['Workplace', 'Lifestyle', 'Anxiety', 'Stress', 'Relationships', 'Confidence', 'Self Development', 'Grief']}
          languages={['Bengali', 'English', 'Hindi']}
          counselingType="Individual"
          availableSlot="Thu, 22 Aug 10:00 AM"
        />
        <DocCard
          name="John Doe"
          qualifications="PhD in Counseling Psychology"
          expertise={['Depression', 'Self-Esteem', 'Addiction', 'Family']}
          languages={['English', 'Spanish']}
          counselingType="Group"
          availableSlot="Fri, 23 Aug 2:00 PM"
        />
        <DocCard
          name="Jane Smith"
          qualifications="Masters in Behavioral Therapy"
          expertise={['Stress', 'Relationships', 'Confidence']}
          languages={['English', 'French']}
          counselingType="Individual"
          availableSlot="Mon, 26 Aug 11:00 AM"
        />
        <DocCard
          name="Jane Smith"
          qualifications="Masters in Behavioral Therapy"
          expertise={['Stress', 'Relationships', 'Confidence']}
          languages={['English', 'French']}
          counselingType="Individual"
          availableSlot="Mon, 26 Aug 11:00 AM"
        />
        <DocCard
          name="Jane Smith"
          qualifications="Masters in Behavioral Therapy"
          expertise={['Stress', 'Relationships', 'Confidence']}
          languages={['English', 'French']}
          counselingType="Individual"
          availableSlot="Mon, 26 Aug 11:00 AM"
        />



      </section>

      <section>

        <DoctorSlider />

      </section>


      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Doctor