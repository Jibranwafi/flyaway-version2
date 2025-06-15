import { motion } from 'framer-motion';

const Dream = () => {
    return (
        <div style={{
            background: 'url(/dream-wallpaper3.gif) no-repeat center center',
            backgroundSize: 'cover'
        }}>
            {/* -------------------------------
            <div className="relative">
                <img 
                    src="/dream-controller.gif" 
                    className="absolute top-0 left-0 w-32 aspect-square z-10"
                    alt="Controller left"
                />
                <img 
                    src="/dream-controller.gif" 
                    className="absolute top-0 right-0 w-32 h-32 z-10"
                    alt="Controller right"
                />
            </div>
            -------------------------------- */}
            <div className="sm:bg-transparent bg-[#dfdbc8]">
                <div className=' flex flex-col mx-auto justify-center sm:px-5'>
                    <div className='flex md:flex-row flex-col sm:py-10 pt-10'>
                        <div className=' flex flex-col mx-auto text-center 2xl:w-[30%] xl:w-[40%] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] aspect-[27/8] justify-center -space-y-2' style={{ background: 'url(/speciamessage-title.png) no-repeat center center', backgroundSize: 'cover' }}>
                            <div className='font-bold text-[clamp(1.5rem,3vw,2.5rem)]'>A special message</div>
                            <div className='font-black text-red-700 text-[clamp(1.5rem,3vw,2.5rem)]'>from me to you</div>
                        </div>
                    </div>
                    <div className='sm:bg-[#dfdbc8] sm:p-12 p-5 pt-10 md:rounded-xl flex flex-col max-w-[1200px] sm:border-x-8 sm:border-b-8 border-b-[#9b9683] mx-auto'>
                        <div className='sm:bg-black sm:text-green-500 text-green-700 bg-green-500 p-5 md:rounded-lg border-8 border-gray-400 lg:text-lg md:text-base sm:text-sm text-xs'>
                            <div className='font-mono'>
                                <span className='font-bold italic'>While the majority of my professional experience lies in web development, my main passion has always been game development. Thus, my lifelong dream is to become a game developer.</span>
                                <br></br>
                                <br></br>
                                Gaming holds a special place in my heart. They are truly a profound art form, capable of providing an experience unlike any other medium. There’s simply no feeling quite like immersing yourself inside a virtual fantasy world with intricate environments, compelling narratives, and unforgettable characters.
                                <br></br>
                                <br></br>
                                However, I do feel as if my genuine love for video games tends to be understated. Given how many people dismiss the amount of dedication, talent, and countless man-hours that are poured into creating just a single title. It is a grueling, yet rewarding process which constantly fascinated me, further establishing my respect for the developers behind every game.
                                <br></br>
                                <br></br>
                                Honestly speaking, my passion for game development is mainly why I chose to pursue a degree in computer science. I hope I can someday be a part of this incredible industry, where I play a role in bringing many virtual worlds to life, whether it’s programming character sprites into the game world, meticulously crafting complex animations using state machines, or tweaking the game’s code to optimize performance for specific hardware and platforms.
                                <br></br>
                                <br></br>
                                Though the future is still unknown, I will keep on maintaining a high commitment, for as long as it takes, until I can achieve my dream of becoming a game developer. It’s a career goal, built from a personal aspiration towards an art form that has given me so much. Thus, would you be willing to help turn my dream into reality?
                                <br></br>
                                <br></br>
                                <div className='font-bold italic text-3xl font-outland'>-Jibran</div>
                            </div>
                        </div>
                        <div className='flex md:bg-gray-600 px-12 justify-center sm:hidden py-5 gap-16'>
                            <div className='basis-1/2 flex flex-col justify-center my-auto'>
                            <img src={"/dream-dpad2.png"}/>
                            </div>
                            <div className='basis-1/2 flex flex-col justify-end mt-auto'>
                            <img src={"/dream-buttons.png"}/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gradient-to-b from-[#9b9683] to-[#dfdbc8] w-[10%] mx-auto py-10 sm:flex hidden'></div>
                    <div className='bg-[#9b9683] w-[20%] mx-auto py-2 sm:flex hidden'></div>
                    <div className='relative mx-auto max-w-[1000px] hidden sm:flex mt-5 mb-4'>
                        <img src={"/dream-keyboard.png"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dream;