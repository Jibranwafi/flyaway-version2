import { motion } from "framer-motion";

export default function Experience() {
    return (
    <div className="bg-[#fdebbc] rounded-tr-[100px] md:rounded-tr-[150px] rounded-bl-[100px] md:rounded-bl-[150px] md:p-20 p-7 py-16 pb-20 md:pb-24">
        <div className="flex flex-col">
            <div className="flex-col pb-10 flex">
                <h1 className="text-center font-bold text-4xl ">My work experience</h1>
                <div className="flex flex-row w-full md:w-1/2 mx-auto my-5 mb-10">
                    <img src="/line.png" alt="work-experience" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                {/* Card 1 */}
                <motion.div 
                    className="rounded-lg shadow-lg md:p-5 relative bg-[#fdebbc]"
                    style={{
                        border: '10px solid transparent',
                        background: 'linear-gradient(#fdebbc, #fdebbc) padding-box, linear-gradient(90deg, #fbbf24 0%, #fdebbc 50%, #fbbf24 100%) border-box',
                    }}
                    animate={{
                        background: [
                            'linear-gradient(#fdebbc, #fdebbc) padding-box, linear-gradient(0deg, #fbbf24 0%, #fdebbc 50%, #fbbf24 100%) border-box',
                            'linear-gradient(#fdebbc, #fdebbc) padding-box, linear-gradient(360deg, #fbbf24 0%, #fdebbc 50%, #fbbf24 100%) border-box',
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute -top-5 left-4 bg-amber-400 text-white px-4 py-1 rounded-full text-lg italic font-medium shadow">
                        Software Developer Intern
                    </div>
                    <div className="flex flex-col">
                        <div className="md:mt-4 px-5 py-10 md:p-0 md:mb-6 mb-5 w-full">
                            <div className="md:text-3xl text-2xl font-bold">PT Technova Optima Prima</div>
                            <div className="md:text-xl text-lg">December 2019 – November 2020</div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0 md:p-0 px-5 pb-5">
                            <div className="flex flex-col md:p-4 md:basis-1/2 space-y-2 md:space-y-4" style={{
                                background: 'linear-gradient(to bottom, #fed278, transparent)'
                            }}>
                                <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Booking <br></br> App UI</div>
                                <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Booking App UI</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed the UI for a boarding house booking application on mobile using Figma.</div>
                            </div>
                            <div className="md:hidden border-y border-gray-300"></div>
                            <div className="flex flex-col md:p-4 md:basis-1/2 space-y-2 md:space-y-4" style={{
                                background: 'linear-gradient(to bottom, #fed278, transparent)'
                            }}>
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Admin<br></br> Login Page</div>
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Admin Login Page</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Developed a custom admin's login page using the react.js frontend web framework.</div>
                            </div>                                
                        </div>
                    </div>
                </motion.div>



                <motion.div 
                    className="rounded-lg shadow-lg md:p-5 relative bg-white"
                    style={{
                        border: '10px solid transparent',
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #fbbf24 0%, white 50%, #fbbf24 100%) border-box',
                    }}
                    animate={{
                        background: [
                            'linear-gradient(white, white) padding-box, linear-gradient(0deg, #fbbf24 0%, white 50%, #fbbf24 100%) border-box',
                            'linear-gradient(white, white) padding-box, linear-gradient(360deg, #fbbf24 0%, white 50%, #fbbf24 100%) border-box',
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                {/* Card 2 */}
                    <div className="absolute -top-5 left-4 bg-amber-400 text-white px-4 py-1 rounded-full text-lg italic font-medium shadow">
                        Software Engineer Intern
                    </div>
                    <div className="flex flex-col">
                        <div className="md:mt-4 px-5 py-10 md:p-0 md:mb-6 mb-5 bg-red-100 md:bg-white w-full">
                            <div className="md:text-3xl text-2xl font-bold">PT Telekomunikasi Seluler</div>
                            <div className="md:text-xl text-lg">December 2019 – November 2020</div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0 md:p-0 px-5 pb-5">
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-full space-y-2 md:space-y-4">
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Telegram <br></br> Bot</div>
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Telegram Bot</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Created an alternative telegram bot powered by a Raspberry Pi which can be compared and analyzed against the version currently utilized at the office in PT Telkomsel.</div>
                            </div>                               
                        </div>
                    </div>
                </motion.div>



                {/* Card 3 (spans both columns) */}
                <motion.div 
                    className="rounded-lg shadow-lg md:p-5 relative bg-white col-span-1 md:col-span-2"
                    style={{
                        border: '10px solid transparent',
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #fbbf24 0%, white 50%, #fbbf24 100%) border-box',
                    }}
                    animate={{
                        background: [
                            'linear-gradient(white, white) padding-box, linear-gradient(0deg, #fbbf24 0%, white 50%, #fbbf24 100%) border-box',
                            'linear-gradient(white, white) padding-box, linear-gradient(360deg, #fbbf24 0%, white 50%, #fbbf24 100%) border-box',
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute -top-5 left-4 bg-amber-400 text-white px-4 py-1 rounded-full text-lg italic font-medium shadow">
                        Senior IT Programmer
                    </div>
                    <div className="flex flex-col">
                        <div className="md:mt-4 px-5 py-10 md:p-0 md:mb-6 mb-5 bg-red-100 md:bg-white w-full">
                            <div className="md:text-3xl text-2xl font-bold">PT Lumbung Artha Kita</div>
                            <div className="md:text-xl text-lg">December 2019 – November 2020</div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0 md:p-0 px-5 pb-5">
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/3 space-y-2 md:space-y-4">
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Lunogi.com<br></br> Website</div>
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Lunogi.com Website</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed and developed the webpage for lunogi.com, an affiliate website which promotes some of the most popular products from Amazon.</div>
                            </div>
                            <div className="md:hidden border-y border-gray-300"></div>
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/3 space-y-2 md:space-y-4">
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Healthkita.com<br></br> Website</div>
                            <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Healthkita.com Website</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed and developed the webpage for healthkita.com, a healthcare agency service which focuses on bringing Indonesian citizens to Malaysia for medical checkup and stem cell treatment.</div>
                            </div>
                            <div className="md:hidden border-y border-gray-300"></div>
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/3 space-y-2 md:space-y-4">
                                <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Lubkita.id<br></br>Website</div>
                                <div className="font-bold md:text-2xl text-lg md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Lubkita.id Website</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed and developed the webpage for lubkita.id, a website showcasing the highlights for the company's main service.</div>
                            </div>                                  
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    );
}