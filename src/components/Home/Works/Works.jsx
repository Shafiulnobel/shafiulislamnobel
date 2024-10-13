import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Works = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-12'>
            <a target='_blank' href="https://www.behance.net/gallery/194045637/HOLAGO-Redesign-Website">
                <div className='px-4 mx-auto'>
                    <div className="card bg-pink-100 ">
                        <div className="card-body">
                            <h2 className="playfair-display text-3xl">HOLAGO Website Re-design</h2>
                            <p className='poppins-medium'>Read case study <span><FontAwesomeIcon icon={faArrowRight} className="" /></span></p>
                        </div>
                        <div className='ps-6 pt-16'>
                            <img
                                src="https://i.ibb.co.com/HXxdGzs/thumabc.png"
                                alt="thumbnail" />
                        </div>
                    </div>
                </div>
            </a>

            <a target='_blank' href="https://www.behance.net/gallery/194164385/Hicks-Law-UX-Laws">
                <div className='px-4 mx-auto'>
                    <div className="card bg-stone-100">
                        <div className="card-body">
                            <h2 className="playfair-display text-3xl">UX-Laws (Hick's Law)</h2>
                            <p className='poppins-medium'>Read Article <span><FontAwesomeIcon icon={faArrowRight} className="" /></span></p>
                        </div>
                        <div className='ps-6 pt-16'>
                            <img
                                src="https://i.ibb.co.com/TBK0MGK/hick-s-thumb-1.png"
                                alt="thumbnail" />
                        </div>
                    </div>
                </div>
            </a>

        </div>

    );
};

export default Works;