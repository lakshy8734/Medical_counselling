import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './HomeSlider.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomeSlider() {

    const slides = [
        { text: "Online Therapy Can<br>Help You", text2: "Heal & Thrive", buttonText: "Get Stronger Know", buttonLink: "/link1" },
        { text: "Discover Experienced & Trained<br>Psychologists & Counsellors", text2: "Confidential & Secure", buttonText: "View Therapists", buttonLink: "/link2" },
        { text: "Assess Your Mental<br>Health & Wellness", text2: "Quick & Insightful", buttonText: "Start Test", buttonLink: "/link3" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Slider
                className={style.slider}
                autoplay={true}
                autoplaySpeed={3000}
                arrows={false}
                fade={true}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={style.slide}>
                        <div className={style.slideContent}>
                            <h1 className={style.text} dangerouslySetInnerHTML={{ __html: slide.text }} />
                            <h3 className={style.text2} dangerouslySetInnerHTML={{ __html: slide.text2 }} />
                            <Link to={slide.buttonLink} className={style.button}>{slide.buttonText}</Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default HomeSlider;
