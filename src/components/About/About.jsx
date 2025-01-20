import React from 'react';
import Skills from '../Home/Skills/Skills';

const About = () => {
    return (
        <div>
            {/* <h2 style={{ color: "#1a1a1a" }} className='playfair-medium text-3xl text-center' >About Me</h2> */}
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-16'>
                    <div className=''>
                        <img className='' src="https://i.ibb.co.com/6Z1yz00/Whats-App-Image-2025-01-20-at-3-22-51-PM.jpg" alt="" />
                    </div>
                    <div>
                        <p style={{ color: "#1a1a1a" }} className='text-lg lg:text-2xl roboto-regular leading-relaxed'>I’m a passionate UI/UX designer driven to create intuitive, user-friendly digital experiences. With a keen eye for detail and a focus on user-centered design principles, I aim to bridge the gap between aesthetics and functionality.
                        </p>
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1LPs7tOveCBb2VvRIlwt39AE96VkN7UeR/view?usp=sharing"
                        >
                            <button
                                className="btn btn-outline my-8 rounded-none text-xl border-[#2563eb] text-[#2563eb] hover:text-white hover:bg-[#2563eb]"
                            >
                                Résumé
                            </button>
                        </a>



                    </div>
                </div>
                <Skills></Skills>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-16'>
                    {/* The image will appear first on small devices and second on larger devices */}
                    <div className='order-1 md:order-2'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/64060b9d25472a05aaf756c1/7a4e84e6-5ba5-4033-80d4-0742f1a2ae91/about_me_past_works.png?format=1000w" alt="" />
                    </div>

                    {/* The text content will appear second on small devices and first on larger devices */}
                    <div className='order-2 md:order-1'>
                        <h1 style={{ color: "#1a1a1a" }} className='text-3xl roboto-medium mb-4'>Additional Skills</h1>
                        <p style={{ color: "#1a1a1a" }} className='text-xl mb-6 roboto-regular'>
                            Over the years, I’ve developed a diverse skill set that complements my design expertise. From mastering ReactJS to enhancing visuals through video editing and photography, each skill adds depth to my UX/UI work. These capabilities allow me to approach design challenges with creativity and precision.
                        </p>
                        <ul style={{ color: "#1a1a1a" }} className='list-disc roboto-regular'>
                            <li className='mx-6 text-xl'>ReactJS</li>
                            <li className='mx-6 text-xl'>Video Editing</li>
                            <li className='mx-6 text-xl'>Photography</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;