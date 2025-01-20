import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='container px-4 mx-auto'>
            <div class="grid grid-cols-1 md:grid-cols-2 items-center my-8">
                <div className=''>
                    <h3 style={{color: "#1a1a1a"}} className='roboto-medium leading-relaxed md:leading-relaxed text-2xl md:text-4xl my-10 '>
                        I’m Nobel, a <span className='text-blue-600/100'>Product Designer</span> . I enjoy creating user-centric, delightful, and human experiences.
                    </h3>
                </div>
                <div className='mx-auto'>
                    <img className='sm:w-60 md:w-96' src="https://i.ibb.co.com/PWDqC66/dp.png" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;