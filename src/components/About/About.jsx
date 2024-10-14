import React from 'react';

const About = () => {
    return (
        <div>
            <h2 style={{color: "#1a1a1a"}} className='playfair-medium text-3xl text-center' >About Me</h2>
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-16'>
                    <div className=''>
                        <img className='' src="https://i.ibb.co.com/KW28QLy/dp.jpg" alt="" />
                    </div>
                    <div>
                        <p style={{color: "#1a1a1a"}} className='text-2xl roboto-regular leading-relaxed'>I am a designer addicted to the craft. I ❤️ designing interactions that make technology feel effortless. Building engaging experiences is what drives me. I started my journey in computer engineering, but found solace in art. </p>
                        <button className="btn btn-outline btn-primary my-12 rounded-none text-xl">Résumé</button>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-16'>
                    {/* The image will appear first on small devices and second on larger devices */}
                    <div className='order-1 md:order-2'>
                        <img className='' src="https://images.squarespace-cdn.com/content/v1/64060b9d25472a05aaf756c1/7a4e84e6-5ba5-4033-80d4-0742f1a2ae91/about_me_past_works.png?format=1000w" alt="" />
                    </div>

                    {/* The text content will appear second on small devices and first on larger devices */}
                    <div className='order-2 md:order-1'>
                        <h1 style={{color: "#1a1a1a"}} className='text-3xl roboto-medium mb-4'>Additional Skills</h1>
                        <p style={{color: "#1a1a1a"}} className='text-xl mb-6 roboto-regular'>
                            Over the years, I’ve developed a diverse skill set that complements my design expertise. From mastering ReactJS to enhancing visuals through video editing and photography, each skill adds depth to my UX/UI work. These capabilities allow me to approach design challenges with creativity and precision.
                        </p>
                        <ul style={{color: "#1a1a1a"}} className='list-disc roboto-regular'>
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