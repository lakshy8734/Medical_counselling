import React, { useState } from 'react';
import { FaTimes, FaEye } from 'react-icons/fa'; // Importing Font Awesome icons
import img from '../../Assets/webstory.jpg';

const stories = [
  {
    title: "World mental health day Quotes from Famous People",
    imgSrc: img,
    description: "Challenge negative thoughts. People with social anxiety often have negative thoughts about themselves and how others perceive them...",
  },
  {
    title: "The Secret to Effective Communication with Your Partner",
    imgSrc: img,
    description: "Communication is key in any relationship. Learn the secrets to communicating effectively with your partner...",
  },
  {
    title: "The Secret to Effective Communication with Your Partner",
    imgSrc: img,
    description: "Communication is key in any relationship. Learn the secrets to communicating effectively with your partner...",
  },
  {
    title: "The Secret to Effective Communication with Your Partner",
    imgSrc: img,
    description: "Communication is key in any relationship. Learn the secrets to communicating effectively with your partner...",
  },
  {
    title: "The Secret to Effective Communication with Your Partner",
    imgSrc: img,
    description: "Communication is key in any relationship. Learn the secrets to communicating effectively with your partner...",
  },
  {
    title: "The Secret to Effective Communication with Your Partner",
    imgSrc: img,
    description: "Communication is key in any relationship. Learn the secrets to communicating effectively with your partner...",
  },
  {
    title: "The Secret to Effective Communication with Your Partner",
    imgSrc: img,
    description: "Communication is key in any relationship. Learn the secrets to communicating effectively with your partner...",
  },
];

const LatestStories = () => {
  const [fullscreenStory, setFullscreenStory] = useState(null);

  const handleFullScreen = (index) => {
    setFullscreenStory(index);
  };

  const exitFullScreen = () => {
    setFullscreenStory(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Latest Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story, index) => (
          <div key={index} id={`story-${index}`} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={story.imgSrc}
              alt={story.title}
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 p-4">
              <p className="text-slate-500 bg-white text-md p-2 text-lg font-medium text-center">{story.title}</p>
            </div>
            <div
              className="absolute top-2 right-2 text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
              onClick={() => handleFullScreen(index)}
            >
              <FaEye size={24} />
            </div>
          </div>
        ))}
      </div>

      {fullscreenStory !== null && (
        <div
          id={`fullscreen-story-${fullscreenStory}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
        >
          <div className="relative">
            <img
              src={stories[fullscreenStory].imgSrc}
              alt={stories[fullscreenStory].title}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

            <div className="absolute bg-black bg-opacity-50 rounded-t-3xl bottom-0 p-4">
              <p className="text-white text-center text-2xl font-bold">{stories[fullscreenStory].title}</p>
              <p className="text-white text-center text-md mt-2">{stories[fullscreenStory].description}</p>
            </div>

            <div
              className="absolute top-4 right-4 text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
              onClick={exitFullScreen}
            >
              <FaTimes size={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestStories;
