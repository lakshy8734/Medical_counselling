import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Navbar.module.css';


import relationship from '../../Assets/relationship.png'
import stress1 from '../../Assets/stress-header-1.jpg'
import conf from '../../Assets/conf-header-final.jpg'
import trauma from '../../Assets/trauma-header-1.jpg'
import lgbtgq from '../../Assets/lgbtgq-header-1.jpg'
import lifestyles from '../../Assets/life-styles-header-1.jpg'
import ChildCentric from '../../Assets/Child-Centric-Challenges.png'
import Skill from '../../Assets/Skill-Development.png'
import parenting1 from '../../Assets/parenting1.jpg'
import ahd from '../../Assets/ahd.png'
import logo from '../../Assets/logo.png'

function Navbar() {

    const navigate = useNavigate();

    const [Change, setChange] = useState(false);



    const toggleForm = (formType) => {
        if (formType === 'signup') {
            console.log("Navigating to /sign-in");
            navigate('/sign-in');
        } else if (formType === 'login') {
            console.log("Navigating to /Login-in");
            navigate('/Login-in');
        }
    };


    return (
        <div className={styles.navbar}>
            <div>
                <img
                    src={logo}
                    className={styles.logo}
                    onClick={() => navigate('/')}
                />
            </div>

            <ul className={styles.navLinks}>

                <li className={styles.navLink} >

                    We Help With

                    <ul className={styles.subMenu}>

                        <li>
                            <Link to="/relationship-counselling">
                                Relationship Counselling
                            </Link>


                            <ul className={styles.subSubMenu}>

                                <Link to="/break-up">
                                    <li>
                                        Break Up
                                    </li>
                                </Link>

                                <li>
                                    Cheating & Infidelity
                                </li>
                                <li>
                                    Couple
                                </li>
                                <li>
                                    Divorce
                                </li>
                                <li>
                                    Dating
                                </li>
                                <li>
                                    Friendship
                                </li>
                                <li>
                                    Family
                                </li>
                                <li>
                                    Intimacy
                                </li>
                                <li>
                                    Marriage
                                </li>
                                <li>
                                    Pre Marital
                                </li>
                                <li>
                                    Toxic Relation
                                </li>
                            </ul>

                            <ul className={styles.subSubIMG}>
                                <img src={relationship} alt="" />
                            </ul>

                        </li>

                        <li onClick={() => navigate('/')}>
                            Stress Anxiety Depression

                            <ul style={{ top: '-100%' }} className={`${styles.subSubMenu}`}>
                                <li>Generalized Anxiety Disorder</li>
                                <li>Obsessive Compulsive Disorder</li>
                                <li>Panic Disorder</li>
                                <li>Phobia Disorder</li>
                                <li>Exam Anxiety</li>
                                <li>Loneliness</li>
                                <li>Health Anxiety</li>
                                <li>Social Anxiety</li>
                                <li>Depression</li>
                                <li>Stress</li>
                                <li>Anxiety</li>
                            </ul>

                            <ul style={{ top: '-100%' }} className={styles.subSubIMG}>
                                <img src={stress1} alt="" />
                            </ul>

                        </li>
                        <li onClick={() => navigate('/')}>
                            Confidence

                            <ul style={{ top: '-200%' }} className={`${styles.subSubMenu}`}>

                                <li>Mindfulness Skills</li>
                                <li>Emotion Regulation Skills</li>
                                <li>Anger Management</li>
                                <li>Interpersonal Skills</li>
                                <li>Time Management</li>
                                <li>Body Image</li>
                                <li>Resilience Building</li>
                                <li>Assertiveness Training</li>
                                <li>Developing Self Esteem</li>

                            </ul>

                            <ul style={{ top: '-200%' }} className={styles.subSubIMG}>
                                <img src={conf} alt="" />
                            </ul>

                        </li>
                        <li onClick={() => navigate('/')}>
                            Trauma

                            <ul style={{ top: '-300%', paddingBottom: '50%' }} className={`${styles.subSubMenu}`}>
                                <li>Post-Traumatic Stress Disorder</li>
                                <li>Complex PTSD</li>
                            </ul>

                            <ul style={{ top: '-300%' }} className={styles.subSubIMG}>
                                <img src={trauma} alt="" />
                            </ul>

                        </li>

                        <li onClick={() => navigate('/')}>
                            LGBTQ+

                            <ul style={{ top: '-400%', paddingBottom: '50%' }} className={`${styles.subSubMenu}`}>
                                <li>Gender Dysphoria</li>
                                <li>Dealing with Social Isolation</li>
                            </ul>

                            <ul style={{ top: '-400%' }} className={styles.subSubIMG}>
                                <img src={lgbtgq} alt="" />
                            </ul>

                        </li>

                        <li onClick={() => navigate('')}>Lifestyle Issues

                            <ul style={{ top: '-500%' }} className={`${styles.subSubMenu}`}>
                                <li>Addiction</li>
                                <li>Eating Disorders</li>
                                <li>Overcoming Social Comparison</li>
                                <li>Fear of Missing Out</li>
                                <li>Improving Sleep Quality</li>
                            </ul>

                            <ul style={{ top: '-500%' }} className={styles.subSubIMG}>
                                <img src={lifestyles} alt="" />
                            </ul>

                        </li>

                        <li onClick={() => navigate('')}>Women Centric Challenges

                            <ul style={{ top: '-600%', paddingBottom: '50%' }} className={`${styles.subSubMenu}`}>
                                <li>Motherhood Challenges</li>
                                <li>Adjusting to In-Laws</li>
                                <li>Polycystic Ovary Syndrome Disease</li>
                                <li>Postpartum Depression</li>
                            </ul>

                            <ul style={{ top: '-600%' }} className={styles.subSubIMG}>
                                <img src={ChildCentric} alt="" />
                            </ul>

                        </li>

                        <li onClick={() => navigate('')}>Managing Workplace

                            <ul style={{ top: '-700%' }} className={`${styles.subSubMenu}`}>
                                <li>Tough Boss</li>
                                <li>Restoring Boundaries</li>
                                <li>Peer Pressure</li>
                                <li>Overcoming Toxic Work Culture</li>
                                <li>Managing Work Stress</li>
                                <li>Dealing with Lack of Job Satisfaction</li>
                                <li>Burnout Management</li>
                                <li>Dealing with Procrastination</li>
                                <li>Developing a Positive Workplace</li>
                            </ul>

                            <ul style={{ top: '-700%' }} className={styles.subSubIMG}>
                                <img src={Skill} alt="" />
                            </ul>

                        </li>

                        <li onClick={() => navigate('')}>Parenting

                            <ul style={{ top: '-800%', paddingBottom: '50%' }} className={`${styles.subSubMenu}`}>
                                <li>Parenting Conflicts</li>
                                <li>Generation Gap</li>
                                <li>Single Parents</li>
                                <li>Separation Anxiety</li>
                                <li>Parental Pressure</li>
                            </ul>

                            <ul style={{ top: '-800%' }} className={styles.subSubIMG}>
                                <img src={parenting1} alt="" />
                            </ul>

                        </li>
                        <li onClick={() => navigate('')}>ADHD

                            <ul style={{ top: '-900%', paddingBottom: '80%' }} className={`${styles.subSubMenu}`}>
                                <li>Inattentive ADHD</li>
                                <li>Hyperactive ADHD</li>
                                <li>Mixed ADHD</li>
                            </ul>

                            <ul style={{ top: '-900%' }} className={styles.subSubIMG}>
                                <img src={ahd} alt="" />
                            </ul>

                        </li>
                    </ul>

                </li>

                <li className={styles.navLink} >
                    Self Help

                    <ul className={styles.subMenu2}>
                        <li onClick={() => navigate('/pricing')}>Free Assessment</li>
                        <li>14 Days Program</li>
                        <li >Self Help Program</li>
                        <li >Wellness Stories</li>
                        <li >Articles</li>
                    </ul>

                </li>

                <li className={styles.navLink} >
                    Doctors
                    <ul className={styles.subMenu2}>
                        <li onClick={() => navigate('/Stories-telling')} >Stories telling</li>
                        <li>Training Program for Counsellors</li>
                    </ul>
                </li>

                <li className={styles.navLink} onClick={() => navigate('/pricing')}>Get Started</li>

                <li className={styles.navLink} onClick={() => toggleForm('signup')}>
                    Sign Up
                </li>

                <li className={styles.navLink} onClick={() => toggleForm('login')}>
                    Log In
                </li>

            </ul>
        </div>
    );
}

export default Navbar;
