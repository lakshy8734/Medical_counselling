import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Art from '../../Assets/Art.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './Article.module.css';

import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";

const slides = [
    { imgSrc: Art, title: "Online Therapy Can Help You", buttonText: "Read Article", buttonLink: "/link1" },
    { imgSrc: Art, title: "Discover Experienced ", buttonText: "Read Article", buttonLink: "/link2" },
    { imgSrc: Art, title: "Assess Your Mental Health & Wellness", buttonText: "Read Article", buttonLink: "/link3" },
];

function Article() {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
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
        <div className="pt-8 pb-8 p-1 h-full">
            <h1 className="mt-4 mb-5 text-center text-2xl md:text-4xl font-semibold">
                Articles From Our Expert Therapists
            </h1>

            <div className="relative">
                <Slider ref={sliderRef} {...settings} className={style.slider}>
                    {slides.map((slide, index) => (
                        <div key={index} className={style.slide}>
                            <div className={style.slideContent}>
                                <img src={slide.imgSrc} alt={slide.title} className={style.cardImage} />
                                <h1 className={style.text}>{slide.title}</h1>
                                <Link to={slide.buttonLink} className={style.button}>
                                    {slide.buttonText}
                                    <IoMdArrowRoundForward />
                                </Link>
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

            <div className="flex justify-center">
                <Link to="/articles">
                    <button className={style.btn}>More</button>
                </Link>
            </div>
        </div>
    );

}

export default Article;
