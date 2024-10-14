import React, { useState } from "react";
import style from "./Sidebar.module.css";
import { ImCross } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
    const navigate = useNavigate();
    const [submenus, setSubmenus] = useState({
        Recommendations: false,
        News: false,
        Gaming: false,
        Browse: false,
        More: false,
    });

    const toggleSubmenu = (menu) => {
        setSubmenus((prev) => {
            const updatedSubmenus = Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === menu ? !prev[key] : false;
                return acc;
            }, {});
            return updatedSubmenus;
        });
    };

    const handleClick = (category, subcategory, subcategoryId) => {
        navigate(`/${category}/${subcategory}`, { state: { subcategoryId } });
    };

    return (
        <>
            <div className={`${style.sidebar} ${isSidebarOpen ? style.open : ""}`}>
                {isSidebarOpen && (
                    <div className={style.close} onClick={closeSidebar}>
                        <ImCross />
                    </div>
                )}
                <h2 className={style.mainMenu}>Main Menu</h2>

                <ul className={style.sidebarMenu}>
                    <li onClick={() => toggleSubmenu("Recommendations")}>
                        We Help With
                        <span
                            className={`${style.arrow} `}
                        >
                            <FaRegArrowAltCircleDown />

                        </span>

                        <ul
                            className={`${style.submenu} ${submenus.Recommendations ? style.open : ""}`}
                        >
                            <Link to="/relationship-counselling">
                                <li onClick={() => handleClick("counseling", "relationship")}>
                                    Relationship Counseling
                                </li>
                            </Link>

                            <li onClick={() => handleClick("counseling", "stress-anxiety-depression")}>
                                Stress Anxiety Depression
                            </li>

                            <li onClick={() => handleClick("counseling", "confidence")}>
                                Confidence
                            </li>

                            <li onClick={() => handleClick("counseling", "trauma")}>
                                Trauma
                            </li>

                            <li onClick={() => handleClick("counseling", "lgbtq")}>
                                LGBTQ+
                            </li>

                            <li onClick={() => handleClick("counseling", "lifestyle-issues")}>
                                Lifestyle Issues
                            </li>

                            <li onClick={() => handleClick("counseling", "women-centric")}>
                                Women Centric Challenges
                            </li>

                            <li onClick={() => handleClick("counseling", "managing-workplace")}>
                                Managing Workplace
                            </li>

                            <li onClick={() => handleClick("counseling", "parenting")}>
                                Parenting
                            </li>

                            <li onClick={() => handleClick("counseling", "adhd")}>
                                ADHD
                            </li>

                            <li onClick={() => handleClick("counseling", "psychiatric-support")}>
                                Psychiatric Support
                            </li>
                        </ul>
                    </li>

                    
                    <li className={style.more} onClick={()=>{navigate('/Stories-telling')}}>Wellness Stories</li>


                    <li className={style.more} onClick={()=>{navigate('/articles')}} >Articles</li>

                    <li className={style.more} onClick={()=>{navigate('/know-your-counselor')}}>Counsellors</li>

                    <li className={style.more} onClick={()=>{navigate('/pricing')}} >Free Assessment</li>

                </ul>

                <li onClick={()=>{navigate('/Login-in')}} className={`bg-blue-500 text-center ml-8 mt-3 w-40 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-blue-600 cursor-pointer`}>
                    Login
                </li>

            </div>
            {isSidebarOpen && (
                <div className={style.overlay} onClick={closeSidebar}></div>
            )}
        </>
    );
};

export default Sidebar;
