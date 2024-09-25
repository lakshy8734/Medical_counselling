import React from 'react'
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";

function DocCard({ name, qualifications, expertise, languages, counselingType, availableSlot }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex">
            <div className="flex flex-col w-full text-white bg-cyan-700 rounded-lg shadow-lg overflow-hidden">

                <div className="flex items-center px-6 pt-4">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Counselor"
                        className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="text-sm">{qualifications}</p>
                    </div>
                </div>

                <div className="flex justify-center gap-3 my-4">
                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white p-2 rounded-full">
                        <IoVideocamOutline />
                    </button>
                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white p-2 rounded-full">
                        <LiaCommentsSolid />
                    </button>
                    <button className="bg-cyan-500 hover:bg-cyan-700 text-white p-2 rounded-full">
                        <MdOutlinePhoneInTalk />
                    </button>
                </div>

                <div className="px-6 py-4 flex-grow bg-gray-200"> {/* Adjusted background color to a lighter gray */}
                    <h4 className="font-semibold text-center mb-2 text-gray-800">Expertise</h4> {/* Text color adjusted */}
                    <div className="flex justify-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {expertise.map((item, index) => (
                                <span
                                    key={index}
                                    className="cursor-pointer text-slate-500 text-xs font-semibold px-2 py-1 border border-cyan-500 rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <h4 className="font-semibold mb-2 text-gray-800">Languages</h4> {/* Text color adjusted */}
                        <div className="flex justify-center gap-2 text-sm">
                            {languages.map((language, index) => (
                                <span key={index} className="text-slate-500 font-medium flex items-center">
                                    <FaCheck className="text-cyan-500 mr-1" /> {/* Tick icon added */}
                                    {language}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <h4 className="font-semibold mb-2 text-gray-800">Counseling</h4> {/* Text color adjusted */}
                        <span className="text-slate-500 font-medium flex justify-center items-center">
                            <FaCheck className="text-green-500 mr-1" />
                            {counselingType}
                        </span>
                    </div>

                    <div className="p-4 flex justify-center"> {/* Centered the button */}
                        <button className="bg-cyan-700 text-white font-semibold py-2 px-4 rounded-full">
                            View Profile
                        </button>
                    </div>

                </div>


                <div className="text-center px-6 py-4 bg-cyan-700">
                    <p className="text-center text-sm">
                        Next Available Slot: {availableSlot}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DocCard;
