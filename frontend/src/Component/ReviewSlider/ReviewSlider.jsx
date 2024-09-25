import React from 'react';
import Slider from 'react-slick';
import min from '../../Assets/me-min.jpg'



const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const reviews = [
        {
            name: "Kaushya Shirsat",
            image: min,
            date: "2 weeks ago",
            review: "Jessica has been a great help in my BetterLYF experience for the past year. She helps resolve conflicts in a healthy way. Her knowledge on each matter is really good and she assists accordingly in a calm way. I recommend her to everyone looking to get emotionally healthy.",
            rating: 5
        },
        {
            name: "Krishna Iyer",
            image: min,
            date: "a month ago",
            review: "I finally took the plunge to undergo therapy with BetterLYF. My Counseling Psychologist helped me get over my traumas. Now, I am in a better place in life. You are all doing an exceptional job! I wholeheartedly endorse BetterLYF to anyone seeking support for their mental well-being.",
            rating: 5
        },
        {
            name: "Tanvi Sharda",
            image: min,
            date: "a month ago",
            review: "My friend recommended BetterLYF to me and I thank heavens for that. My counselor Sumiran Goel is Godsent! I have much fewer episodes of anxiety and as and when they appear, I am able to handle them. You guys are doing such a great job. I would recommend BetterLYF to all those who need help with their mental health.",
            rating: 5
        }
    ];

    return (
        <div className="bg-gradient-to-r from-cyan-100 to-pink-100 py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">LYF Online Counselling Reviews</h2>
            <Slider {...settings}>

                {reviews.map((review, index) => (
                    <div key={index} className="p-4">
                        <div className=" p-6 ">
                            <div className="flex items-center mb-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="text-lg font-bold">{review.name}</h4>
                                    <div className="flex items-center">
                                        <div className="text-yellow-400">
                                            {"★".repeat(review.rating)}
                                            {"☆".repeat(5 - review.rating)}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500">{review.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">{review.review}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewSlider;
