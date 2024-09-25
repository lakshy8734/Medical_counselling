import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DocCard from '../../Component/DocCard/DocCard';
import style from './DocSlider.module.css';

import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";

const doctors = [
    {
        name: "Esha Chauhan",
        qualifications: "Masters in Clinical Psychology",
        expertise: ['Workplace', 'Lifestyle', 'Anxiety', 'Stress', 'Relationships', 'Confidence', 'Self Development', 'Grief'],
        languages: ['Bengali', 'English', 'Hindi'],
        counselingType: "Individual",
        availableSlot: "Thu, 22 Aug 10:00 AM"
    },
    {
        name: "John Doe",
        qualifications: "PhD in Counseling Psychology",
        expertise: ['Depression', 'Self-Esteem', 'Addiction', 'Family'],
        languages: ['English', 'Spanish'],
        counselingType: "Group",
        availableSlot: "Fri, 23 Aug 2:00 PM"
    },
    {
        name: "Jane Smith",
        qualifications: "Masters in Behavioral Therapy",
        expertise: ['Stress', 'Relationships', 'Confidence'],
        languages: ['English', 'French'],
        counselingType: "Individual",
        availableSlot: "Mon, 26 Aug 11:00 AM"
    },
    {
        name: "Jane Smith",
        qualifications: "Masters in Behavioral Therapy",
        expertise: ['Stress', 'Relationships', 'Confidence'],
        languages: ['English', 'French'],
        counselingType: "Individual",
        availableSlot: "Mon, 26 Aug 11:00 AM"
    },
    {
        name: "Jane Smith",
        qualifications: "Masters in Behavioral Therapy",
        expertise: ['Stress', 'Relationships', 'Confidence'],
        languages: ['English', 'French'],
        counselingType: "Individual",
        availableSlot: "Mon, 26 Aug 11:00 AM"
    }
];

function DoctorSlider() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="pt-8 pb-8  h-full">
            <h1 className="mt-4 mb-5 text-center text-2xl md:text-4xl font-semibold">
                Our Expert Counselors
            </h1>

            <div className="relative">
                <Slider ref={sliderRef} {...settings} className={style.slider}>
                    {doctors.map((doctor, index) => (
                        <div key={index} className={style.slide}>
                            <div className={style.slideContent}>
                                <DocCard
                                    name={doctor.name}
                                    qualifications={doctor.qualifications}
                                    expertise={doctor.expertise}
                                    languages={doctor.languages}
                                    counselingType={doctor.counselingType}
                                    availableSlot={doctor.availableSlot}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                <button className={style.prevButton} onClick={() => sliderRef.current.slickPrev()}>
                    <IoArrowBackOutline />
                </button>
                <button className={style.nextButton} onClick={() => sliderRef.current.slickNext()}>
                    <IoMdArrowRoundForward />
                </button>
            </div>

            {/* <div className="flex justify-center">
                <Link to="/doctors">
                    <button className={style.btn}>More Doctors</button>
                </Link>
            </div> */}

           
        </div>
    );
}

export default DoctorSlider;




