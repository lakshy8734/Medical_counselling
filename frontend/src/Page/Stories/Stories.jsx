import React from 'react'
import style from './Stories.module.css'
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';

import LatestStories from '../../Component/LatestStories/LatestStories';
import Component from '../../Component/Component/Component';




function Stories() {
    return (
        <>
            <nav className={style.nav}>
                <Navbar />
            </nav>

            <section className={style.banner}>

                <div className="flex flex-col lg:flex-row p-8">

                    <div className="lg:w-3/4">
                        <LatestStories />
                    </div>

                    <div className="lg:w-1/4 mt-8 lg:mt-0 lg:ml-8">
                        <Component />
                        <br />
                        <Component />
                    </div>

                </div>

            </section>


            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default Stories