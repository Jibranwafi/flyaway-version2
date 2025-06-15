import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';
import { AnimatePresence } from 'framer-motion';
import { BsDot } from 'react-icons/bs';

export default function MobileSkills() {
    const [expandedCards, setExpandedCards] = React.useState<{ [key: string]: boolean }>({});
    const [background, setBackground] = useState('radial-gradient(circle at 0% 0%, #fed47e, #f79c35)');
    const [textColor, setTextColor] = useState('#ed6e00');
    const [separatorColor, setSeparatorColor] = useState('#fbbf24');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollX = useMotionValue(0);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            // Define time ranges for different periods
            if (hours >= 12 && hours < 17) {
                // Afternoon (12 PM - 5 PM)
                setBackground('linear-gradient(135deg, #fcfdfd, #6c807f)');
                setTextColor('#8da6a6');
                setSeparatorColor('#4b5563');
            } else if (hours >= 17 && hours < 20) {
                // Evening (5 PM - 8 PM)
                setBackground('radial-gradient(circle at 0% 0%, #ffb6f2, #b5366c)');
                setTextColor('#712e62');
                setSeparatorColor('#f9a8d4');
            } else if (hours >= 20 || hours < 5) {
                // Night (8 PM - 5 AM)
                setBackground('linear-gradient(135deg, #a8dcfd, #0b2348)');
                setTextColor('#265f96');
                setSeparatorColor('#93c5fd');
            } else {
                // Morning (5 AM - 12 PM)
                setBackground('radial-gradient(circle at 0% 0%, #fed47e, #f79c35)');
                setTextColor('#ed6e00');
                setSeparatorColor('#fbbf24');
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    // Add scroll event listener
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleScroll = () => {
            scrollX.set(scrollContainer.scrollLeft);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [scrollX]);

    // Create rotation transforms
    const rotation = useTransform(
        scrollX,
        [0, 1000],
        [23, 340],
        { clamp: false }
    );

    const smoothRotation = useSpring(rotation, {
        stiffness: 300,
        damping: 10,
        mass: 0.1,
        restDelta: 0.001
    });

    const counterRotation = useTransform(
        scrollX,
        [0, 1000],
        [-8, -480],
        { clamp: false }
    );

    const smoothCounterRotation = useSpring(counterRotation, {
        stiffness: 300,
        damping: 10,
        mass: 0.1,
        restDelta: 0.001
    });

    const counterRotation2 = useTransform(
        scrollX,
        [0, 1000],
        [0, -360],
        { clamp: false }
    );

    const smoothCounterRotation2 = useSpring(counterRotation2, {
        stiffness: 300,
        damping: 10,
        mass: 0.1,
        restDelta: 0.001
    });

    const counterRotation3 = useTransform(
        scrollX,
        [0, 1000],
        [-17, -495],
        { clamp: false }
    );

    const smoothCounterRotation3 = useSpring(counterRotation3, {
        stiffness: 300,
        damping: 10,
        mass: 0.1,
        restDelta: 0.001
    });

    // Add scroll progress tracking
    const { scrollXProgress } = useScroll({
        container: scrollContainerRef
    });

    // Create opacity transforms based on scroll position
    const headerOpacity = useTransform(
        scrollXProgress,
        [0, 0.1, 0.9, 1],
        [1, 0, 0, 0]
    );

    // Add a function to toggle individual cards
    const toggleCard = (cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    return (
        <div className="relative" style={{ background }}>
            <div className="flex w-full text-center justify-center gap-3 pt-10 pb-5">
                <div className='mt-auto text-xl font-extralight' style={{ color: textColor }}>Here are the</div>
                <h1 className='font-bold text-5xl my-auto text-white'>Skills</h1>
                <div className='mt-auto text-xl font-extralight' style={{ color: textColor }}>I can offer</div>
            </div>
            
            {/* Top left gears */}


            <div className="absolute -top-[44px] left-7 z-10">
                <motion.img 
                    src="skills-gear-large2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothRotation,
                    }}
                    className="w-[90px] h-[90px]"
                />
            </div>

            <div className="absolute top-4 -left-[3px] z-10">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation3,
                    }}
                    className="w-[50px] h-[50px]"
                />
            </div>

            {/* Top right gear */}





            <div className="absolute -top-[44px] right-7 z-10">
                <motion.img 
                    src="skills-gear-large2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothRotation,
                    }}
                    className="w-[90px] h-[90px]"
                />
            </div>

            <div className="absolute top-4 -right-[3px] z-10">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation,
                    }}
                    className="w-[50px] h-[50px]"
                />
            </div>

            <div ref={scrollContainerRef} className="flex overflow-x-auto px-8 pt-5 pb-10">







                

                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-gamedevelopment.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-red-500">
                            <img src="skils-symbol-gamedevelopment.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-red-500 font-bold ml-4">
                            Game<br/>Development
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['Godot 4', 'GameMaker Studio 2', 'PyGame',
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-red-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('game-dev')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['game-dev'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['game-dev'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-red-500 z-10"
                            >
                                <div className='relative text-white bg-red-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Game Development
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'Godot 4', years: '1 Year & 6 Months', image: 'skills-icon-godot.png' },
                                        { name: 'GameMaker Studio 2', years: '1 Year & 6 Months', image: 'skills-icon-gamemaker.png' },
                                        { name: 'PyGame', years: '2 Years', image: 'skills-icon-pygame.png' },
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('game-dev')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['game-dev'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>






                {/* Updated separator with direct color values */}
                <div className="flex flex-col items-center justify-center my-auto">
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                    <div className="h-20 w-0.5" style={{ backgroundColor: separatorColor }} />
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                </div>









                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-embeddedsystems.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-purple-500">
                            <img src="skils-symbol-embeddedsystems.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-purple-500 font-bold ml-4">
                            Embedded<br/>Systems
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['Raspberry Pi', 'ESP', 'Arduino', 'Virtual Prototyping',
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-purple-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('embedded')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['embedded'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['embedded'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-purple-500 z-10"
                            >
                                <div className='relative text-white bg-purple-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Embedded Systems
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'Raspberry Pi', years: '2 Years & 6 Months', image: 'skills-icon-raspberrypi.png' },
                                        { name: 'ESP', years: '3 Years', image: 'skills-icon-esp.png' },
                                        { name: 'Arduino', years: '3 Years', image: 'skills-icon-arduino.png' },
                                        { name: 'Virtual Prototyping', years: '1 Year', image: 'skills-icon-virtualprototyping.png' }
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('embedded')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['embedded'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Updated separator with direct color values */}
                <div className="flex flex-col items-center justify-center my-auto">
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                    <div className="h-20 w-0.5" style={{ backgroundColor: separatorColor }} />
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                </div>

                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-datascience.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-green-500">
                            <img src="skils-symbol-datascience.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-green-500 font-bold ml-4">
                            Data<br/>Science
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['Genetic Algorithms', 'Fuzzy Logic', 'Linear Regression',
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-green-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('data-science')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['data-science'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['data-science'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-green-500 z-10"
                            >
                                <div className='relative text-white bg-green-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Data Science
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'Genetic Algorithms', years: '1 Year', image: 'skills-icon-geneticalgorithm.png' },
                                        { name: 'Fuzzy Logic', years: '1 Year & 6 Months', image: 'skills-icon-fuzzylogic.png' },
                                        { name: 'Linear Regression', years: '2 Years', image: 'skills-icon-linearregression.png' },
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('data-science')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['data-science'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Updated separator with direct color values */}
                <div className="flex flex-col items-center justify-center my-auto">
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                    <div className="h-20 w-0.5" style={{ backgroundColor: separatorColor }} />
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                </div>

                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-frontendweb.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-blue-500">
                            <img src="skils-symbol-frontendweb.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-blue-500 font-bold ml-4">
                            Frontend Web<br/>Development
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['React.js', 'Blazor WebAssembly', 'Next.js', 'Svelte', 'Vue.js'
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-blue-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('frontend')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['frontend'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['frontend'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-blue-500 z-10"
                            >
                                <div className='relative text-white bg-blue-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Frontend Web Development
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'React.js', years: '3 Years', image: 'skills-icon-reactjs.png' },
                                        { name: 'Blazor WebAssembly', years: '1 Year', image: 'skills-icon-blazorwebassembly.png' },
                                        { name: 'Next.js', years: '1 Year', image: 'skills-icon-nextjs.png' },
                                        { name: 'Svelte', years: '1 Year', image: 'skills-icon-svelte.png' },
                                        { name: 'Vue.js', years: '2 Years', image: 'skills-icon-vuejs.png' }
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('frontend')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['frontend'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Updated separator with direct color values */}
                <div className="flex flex-col items-center justify-center my-auto">
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                    <div className="h-20 w-0.5" style={{ backgroundColor: separatorColor }} />
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                </div>

                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-backendweb.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-orange-500">
                            <img src="skils-symbol-backendweb.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-orange-500 font-bold ml-4">
                            Backend Web<br/>Development
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['ASP.NET Core', 'Blazor Server', 'Neural Laravel', 'Native PHP'
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-orange-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('backend')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['backend'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['backend'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-orange-500 z-10"
                            >
                                <div className='relative text-white bg-orange-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Backend Web Development
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'ASP.NET Core', years: '1 Year', image: 'skills-icon-aspnet.png' },
                                        { name: 'Blazor Server', years: '1 Year', image: 'skills-icon-blazorserver.png' },
                                        { name: 'Neural Laravel', years: '1 Year', image: 'skills-icon-laravel.png' },
                                        { name: 'Native PHP', years: '1 Year', image: 'skills-icon-php.png' }
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('backend')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['backend'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Updated separator with direct color values */}
                <div className="flex flex-col items-center justify-center my-auto">
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                    <div className="h-20 w-0.5" style={{ backgroundColor: separatorColor }} />
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                </div>

                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-digitalmarketing.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-teal-500">
                            <img src="skils-symbol-digitalmarketing.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-teal-500 font-bold ml-4">
                            Digital<br/>Marketing
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['Figma', 'Canva Video Editing', 'Graphic Design',
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-teal-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('digital-marketing')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['digital-marketing'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['digital-marketing'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-teal-500 z-10"
                            >
                                <div className='relative text-white bg-teal-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Digital Marketing
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'Figma', years: '3 Years', image: 'skills-icon-figma.png' },
                                        { name: 'Canva Video Editing', years: '1 Year', image: 'skills-icon-videoediting.png' },
                                        { name: 'Graphic Design', years: '2 Years', image: 'skills-icon-graphicdesign.png' },
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('digital-marketing')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['digital-marketing'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Updated separator with direct color values */}
                <div className="flex flex-col items-center justify-center my-auto">
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                    <div className="h-20 w-0.5" style={{ backgroundColor: separatorColor }} />
                    <BsDot style={{ color: separatorColor, fontSize: '2.5rem' }} />
                </div>

                {/* Skill card */}
                <div className="flex flex-col bg-white rounded-[20px] w-[290px] flex-shrink-0 shadow-xl hover:translate-y-[-10px] transition-all duration-300 ease-in-out relative">
                    {/* Image section */}
                    <div className="relative">
                        <img src="skills-literature.png" alt="Embedded Systems" className="rounded-t-[20px] object-cover"/>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>

                    {/* Title section */}
                    <div className="flex mt-2">
                        <div className="w-1/3 rounded-r-full p-3 pr-5 bg-gray-500">
                            <img src="skils-symbol-literature.png" alt="Embedded Systems"/>
                        </div>
                        <div className="my-auto text-xl text-gray-500 font-bold ml-4">
                            English<br/>Literacy
                        </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap p-4 gap-2 text-xs mt-3 mb-5">
                        {['Script-writing', 'Storytelling', 'Novel Writing', 'Public Speaking'
                        ].map((skill) => (
                            <div key={skill} className="rounded-full bg-gray-300 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>

                    {/* Toggle button */}
                    <div className="relative z-30 p-3 bg-gray-400 w-full rounded-b-[20px] border-t-2 border-gray-600" 
                         onClick={() => toggleCard('literature')}>
                        <motion.img 
                            src="mobileskill-uparrow1.png" 
                            alt="up" 
                            className="w-8 mx-auto"
                            animate={{ rotate: expandedCards['literature'] ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {expandedCards['literature'] && (
                            <motion.div
                                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                                exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0.1 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                                className="absolute inset-0 bg-white rounded-[20px] border-x-8 border-t-8 border-gray-500 z-10"
                            >
                                <div className='relative text-white bg-gray-500 rounded-br-2xl rounded-tl-[10px] w-fit px-4 py-5 font-bold'>
                                    Embedded Systems
                                </div>
                                
                                <div className='flex flex-col px-5 justify-center py-5'>
                                    {[
                                        { name: 'Script-writing', years: '1 Year', image: 'skills-icon-scriptwriting.png' },
                                        { name: 'Storytelling', years: '7 Years', image: 'skills-icon-storytelling.png' },
                                        { name: 'Novel Writing', years: '3 Years', image: 'skills-icon-novelwriting.png' },
                                        { name: 'Public Speaking', years: '4 Years', image: 'skills-icon-publicspeaking.png' }
                                    ].map((skill, index, array) => (
                                        <React.Fragment key={skill.name}>
                                            <div className='flex my-4 gap-5'>
                                                <div className='w-1/5 my-auto'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className='text-base font-bold'>{skill.name}</div>
                                                    <div className='text-sm'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < array.length - 1 && <div className='border-t border-black'/>}
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-400 rounded-b-[20px] border-t-2 border-gray-600 z-20" 
                                     onClick={() => toggleCard('literature')}>
                                    <motion.img 
                                        src="mobileskill-uparrow1.png" 
                                        alt="up" 
                                        className="w-8 mx-auto"
                                        animate={{ rotate: expandedCards['literature'] ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
