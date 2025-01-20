import React from 'react';
import './Skills.css';
import FigmaIcon from '../../../assets/figma.svg';
import Illustrator from '../../../assets/illustrator.svg';
import ps from '../../../assets/photoshop.svg';
import pr from '../../../assets/pr.svg';
import ae from '../../../assets/ae.svg';
import lk from '../../../assets/icons8-linkedin.svg';
import bn from '../../../assets/icons8-behance.svg';
import db from '../../../assets/icons8-dribbble.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faDribbble, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <div className='px-4 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='bg-custom p-6 inner-shadow rounded-lg'>
                    <h3 className='text-xl text-black font-semibold title py-4'>Education</h3>
                    <ol className="relative border-s border-gray-400">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018-2022</time>
                            <h3 className="text-lg font-semibold title">International Islamic University Chittagong</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Computer Science and Engineering</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2017-18</time>
                            <h3 className="text-lg font-semibold title">Hazera Tazu University College</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Science</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2015-16</time>
                            <h3 className="text-lg font-semibold title">Chittagong Ideal High School</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Science</p>
                        </li>
                    </ol>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6'>
                    <div className='bg-custom p-6 inner-shadow rounded-lg'>
                        <h3 className='text-xl  font-semibold py-4 title'>Experience</h3>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2024 - present</time>
                        <h3 className="text-lg font-semibold title">Titas Concept</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">UX Designer</p>
                    </div>
                    <div className=' p-6 inner-shadow rounded-lg'>
                        <h3 className='text-xl title font-semibold title py-4'>Skills & Expertise</h3>
                        <div className='grid grid-cols-1 gap-2'>
                            <div>
                                <button className="btn btn-sm  me-2">UX Research</button>
                                <button className="btn btn-sm  me-2">Interface Design</button>
                                
                            </div>
                            <div>
                            <button className="btn btn-sm me-2 ">Wireframing</button>
                            <button className="btn btn-sm  me-2">Prototyping</button>
                            </div>
                            <div>
                                
                                <button className="btn btn-sm  me-2">Frontend Development (React)</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6'>
                    <div className='bg-custom p-6 inner-shadow rounded-lg'>
                        <h3 className='text-xl title font-semibold py-2'>Essential Stacks</h3>
                        <p className="text-base font-normal title pb-4">A Comprehensive Collection of Useful tools to support and optimize my workflow.</p>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex flex-wrap gap-4 items-center '>
                                <img src={FigmaIcon} alt='Figma Icon' className='w-8 h-8' />
                                <img src={ps} alt='ps Icon' className='w-8 h-8' />
                                <img src={Illustrator} alt='Illustrator Icon' className='w-8 h-8' />
                                <img src={pr} alt='pr Icon' className='w-8 h-8' />
                                <img src={ae} alt='ae Icon' className='w-8 h-8' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-custom p-6 inner-shadow rounded-lg'>
                        <h3 className='text-xl title font-semibold title py-4'>Connect</h3>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex flex-wrap gap-4 items-center'>
                                <a target='_blank' href="https://www.linkedin.com/in/shafiul-islam-nobel-0612141a4/"><img src={lk} alt='lk Icon' className='w-8 h-8' /></a>
                                <a target='_blank' href="https://www.behance.net/shafiulnobel"><img src={bn} alt='bn Icon' className='w-8 h-8' /></a>
                                <a target='_blank' href="https://dribbble.com/shafiul_nobel"><img src={db} alt='db Icon' className='w-8 h-8' /></a>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
