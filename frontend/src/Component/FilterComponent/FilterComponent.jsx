import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa'; // Importing an icon for the filter button

function FilterComponent({ onFilterChange }) {
    const [isVisible, setIsVisible] = useState(false);

    // Function to toggle filter visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Handler to update selected filter values
    const handleSelectChange = (e, filterType) => {
        onFilterChange(filterType, e.target.value);
    };

    return (
        <div className='w-full flex flex-col items-center mt-8'>

            <button
                className='text-white bg-cyan-600 hover:bg-cyan-500 text-sm py-3 px-8 rounded-full font-medium transition duration-300 ease-in-out flex items-center gap-2 shadow-md'
                onClick={toggleVisibility}
            >
                <FaFilter className='text-base' />
                {isVisible ? 'Hide Filters' : 'Show Filters'}
            </button>


            {isVisible && (
                <div className='flex flex-wrap justify-center items-center w-full mt-8 p-6 bg-white  rounded-lg transition-all duration-500 ease-in-out space-y-4 lg:space-y-0 lg:space-x-6'>



                    <select
                        className='border border-gray-300 py-3 px-6 rounded-lg text-sm w-full lg:w-auto focus:ring-2 focus:ring-cyan-400 transition ease-in-out hover:shadow-lg'
                        onChange={(e) => handleSelectChange(e, 'expertise')}
                    >
                        <option value="">Select Expertise</option>
                        <option value="Anxiety">Anxiety</option>
                        <option value="Depression">Depression</option>
                        <option value="Relationships">Relationships</option>
                    </select>

                    <select
                        className='border border-gray-300 py-3 px-6 rounded-lg text-sm w-full lg:w-auto focus:ring-2 focus:ring-cyan-400 transition ease-in-out hover:shadow-lg'
                        onChange={(e) => handleSelectChange(e, 'language')}
                    >
                        <option value="">Select Language</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                    </select>

                    <select
                        className='border border-gray-300 py-3 px-6 rounded-lg text-sm w-full lg:w-auto focus:ring-2 focus:ring-cyan-400 transition ease-in-out hover:shadow-lg'
                        onChange={(e) => handleSelectChange(e, 'counselingType')}
                    >
                        <option value="">Individual / Couple</option>
                        <option value="Individual">Individual</option>
                        <option value="Couple">Couple</option>
                    </select>


                </div>
            )}
        </div>
    );
}

export default FilterComponent;
