import React, { useRef, useState, useEffect } from 'react';
import { GoArrowRight } from "react-icons/go";
import { motion, useMotionValue, useTransform, useSpring, transform, useScroll, AnimatePresence } from 'framer-motion';

export default function Skills() {
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollX = useMotionValue(0);
    const lastScrollLeft = useRef(0);
    const lastTime = useRef(Date.now());
    const [cardHeights, setCardHeights] = useState<{ [key: string]: number }>({});
    const [background, setBackground] = useState('radial-gradient(circle at 0% 0%, #fed47e, #f79c35)');
    const [textColor, setTextColor] = useState('#ed6e00');

    const toggleContent = (cardId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

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

    useEffect(() => {
        const cards = document.querySelectorAll('.skill-card');
        const newHeights: { [key: string]: number } = {};
        
        cards.forEach((card, index) => {
            if (card) {
                const height = card.getBoundingClientRect().height;
                newHeights[`card-${index}`] = height;
                document.documentElement.style.setProperty(`--card-height-${index}`, `${height}px`);
            }
        });
        
        setCardHeights(newHeights);
    }, [expandedCards]);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            // Define time ranges for different periods
            if (hours >= 12 && hours < 17) {
                // Afternoon (12 PM - 5 PM)
                setBackground('linear-gradient(135deg, #fcfdfd, #6c807f)');
                setTextColor('#8da6a6');
            } else if (hours >= 17 && hours < 20) {
                // Evening (5 PM - 8 PM)
                setBackground('radial-gradient(circle at 0% 0%, #ffb6f2, #b5366c)');
                setTextColor('#712e62');
            } else if (hours >= 20 || hours < 5) {
                // Night (8 PM - 5 AM)
                setBackground('linear-gradient(135deg, #a8dcfd, #0b2348)');
                setTextColor('#265f96');
            } else {
                // Morning (5 AM - 12 PM)
                setBackground('radial-gradient(circle at 0% 0%, #fed47e, #f79c35)');
                setTextColor('#ed6e00');
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    // Create a spring animation for smooth rotation
    const rotation = useTransform(
        scrollX,
        [0, 1000], // Input range (scroll distance)
        [15, 345], // Output range (degrees)
        { clamp: false }
    );

    // Apply spring physics to make the rotation smoother
    const smoothRotation = useSpring(rotation, {
        stiffness: 300,  // Increased from 50 for more immediate response
        damping: 10,     // Reduced from 20 for less resistance
        mass: 0.1,       // Reduced from 0.5 for faster movement
        restDelta: 0.001 // Added to make it stop more precisely
    });

    // Create a counter-clockwise rotation
    const counterRotation = useTransform(
        scrollX,
        [0, 1000],
        [0, -500],
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
        [-30, -525],
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
        [30, -465],
        { clamp: false }
    );

    const smoothCounterRotation3 = useSpring(counterRotation3, {
        stiffness: 300,
        damping: 10,
        mass: 0.1,
        restDelta: 0.001
    });

    // Add these new motion values for scroll-based animations
    const { scrollXProgress } = useScroll({
        container: scrollContainerRef
    });

    // Create opacity transforms based on scroll position
    const headerOpacity = useTransform(
        scrollXProgress,
        [0, 0.1, 0.9, 1], // Input range
        [1, 0, 0, 0]     // Output range (opacity values)
    );

    return (
        <div className="relative" style={{ background }}>
            {/* Fixed gear image */}
            {/*
            <div className=" absolute -top-10 -left-10 z-10">
                <motion.img 
                    src="skills-gear-large2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothRotation,
                    }}
                    className="w-[135px] h-[135px]"
                />
            </div>
            */}
            {/* Counter-rotating gear */}
            {/*
            <div className="absolute top-[90px] -left-[10px] z-10">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation,
                    }}
                    className="w-[75px] h-[75px]"
                />
            </div>
            */}


            <div className="absolute top-[75px] -left-[50px] z-10">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation3,
                    }}
                    className="w-[100px] h-[100px]"
                />
            </div>

            <div className=" absolute -top-[79px] -left-6 z-10">
                <motion.img 
                    src="skills-gear-large2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothRotation,
                    }}
                    className="w-[180px] h-[180px]"
                />
            </div>

            {/* Counter-rotating gear */}
            <div className="absolute -top-[40px] left-[150px] z-10">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation,
                    }}
                    className="w-[100px] h-[100px]"
                />
            </div>





            <div className="absolute bottom-[75px] -left-[50px] z-20">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation2,
                    }}
                    className="w-[100px] h-[100px]"
                />
            </div>

            <div className=" absolute -bottom-[79px] -left-6 z-20">
                <motion.img 
                    src="skills-gear-large2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothRotation,
                    }}
                    className="w-[180px] h-[180px]"
                />
            </div>

            {/* Counter-rotating gear */}
            <div className="absolute -bottom-[40px] left-[150px] z-20">
                <motion.img 
                    src="skills-gear2.png" 
                    alt="Gear" 
                    style={{
                        rotate: smoothCounterRotation,
                    }}
                    className="w-[100px] h-[100px]"
                />
            </div>

            
            <div ref={scrollContainerRef} className="flex overflow-x-auto px-12 py-5">
                {/* Header section with motion.div */}
                <motion.div 
                    style={{ opacity: headerOpacity }}
                    className="flex flex-col text-right gap-3 justify-center pr-12 pt-16 sticky left-0"
                >
                    <div className="whitespace-nowrap md:text-[30px] text-4xl font-extralight relative z-10" style={{ color: textColor }}>Here are the</div>
                    <h1 className="whitespace-nowrap md:text-[70px] italic text-6xl font-bold text-white">Skills</h1>
                    <div className="whitespace-nowrap md:text-[30px] text-4xl font-extralight" style={{ color: textColor }}>I can offer</div>
                    <div className="mt-10 border-2 border-white text-white w-fit ml-auto rounded-full px-4 py-1">
                        <GoArrowRight size={36} />
                    </div>
                </motion.div>








                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10 transition-all duration-300 ease-in-out">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-gamedevelopment.png" alt="Game Development" className="w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('game-development')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-red-500">
                                <img src="skils-symbol-gamedevelopment.png" alt="Game Development"/>
                            </div>
                            <div className="my-auto text-2xl text-red-500 font-bold ml-4">
                                Game<br/>Development
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['Godot 4', 'GameMaker Studio 2', 'PyGame'].map((skill) => (
                                <div key={skill} className="rounded-full bg-red-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['game-development'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10 border-8 border-red-500" 
                                style={{ height: `var(--card-height-0)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-red-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>Game Development</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('game-development')}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'Godot 4', years: '1 Year & 6 Months', image: 'skills-icon-godot.png' },
                                        { name: 'GameMaker Studio 2', years: '1 Year & 6 Months', image: 'skills-icon-gamemaker.png' },
                                        { name: 'PyGame', years: '2 Years', image: 'skills-icon-pygame.png' }
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 2 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>









                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mb-20 mt-10">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-embeddedsystems.png" alt="Embedded Systems" className="w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('embedded-systems')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-purple-500">
                                <img src="skils-symbol-embeddedsystems.png" alt="Embedded Systems"/>
                            </div>
                            <div className="my-auto text-2xl text-purple-500 font-bold ml-4">
                                Embedded<br/>Systems
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['Raspberry Pi', 'ESP', 'Arduino', 'Virtual Prototyping'].map((skill) => (
                                <div key={skill} className="rounded-full bg-purple-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['embedded-systems'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mb-20 mt-10 border-8 border-purple-500" 
                                style={{ height: `var(--card-height-2)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-purple-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>Embedded Systems</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('embedded-systems')}/>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'Raspberry Pi', years: '2 Years & 6 Months', image: 'skills-icon-raspberrypi.png' },
                                        { name: 'ESP', years: '3 Years', image: 'skills-icon-esp.png' },
                                        { name: 'Arduino', years: '3 Years', image: 'skills-icon-arduino.png' },
                                        { name: 'Virtual Prototyping', years: '1 Year', image: 'skills-icon-virtualprototyping.png' }
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 3 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>











                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-datascience.png" alt="Data Science" className="h-[400px] w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('data-science')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-green-500">
                                <img src="skils-symbol-datascience.png" alt="Data Science"/>
                            </div>
                            <div className="my-auto text-2xl text-green-500 font-bold ml-4">
                                Data Science
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['Genetic Algorithms', 'Fuzzy Logic', 'Linear Regression',].map((skill) => (
                                <div key={skill} className="rounded-full bg-green-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['data-science'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10 border-8 border-green-500" 
                                style={{ height: `var(--card-height-3)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-green-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>Data Science</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('data-science')}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'Genetic Algorithms', years: '1 Year', image: 'skills-icon-geneticalgorithm.png' },
                                        { name: 'Fuzzy Logic', years: '1 Year & 6 Months', image: 'skills-icon-fuzzylogic.png' },
                                        { name: 'Linear Regression', years: '2 Years', image: 'skills-icon-linearregression.png' },
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 2 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>








                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mb-20 mt-10">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-frontendweb.png" alt="Frontend Web Development" className="h-[400px] w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('frontend-web')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-blue-500">
                                <img src="skils-symbol-frontendweb.png" alt="Frontend Web Development"/>
                            </div>
                            <div className="my-auto text-2xl text-blue-500 font-bold ml-4">
                                Frontend Web<br/>Development
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['React.js', 'Blazor WebAssembly', 'Next.js', 'Svelte', 'Vue.js'].map((skill) => (
                                <div key={skill} className="rounded-full bg-blue-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['frontend-web'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mb-20 mt-10 border-8 border-blue-500" 
                                style={{ height: `var(--card-height-4)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-blue-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>Frontend Web Development</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('frontend-web')}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'React.js', years: '3 Years', image: 'skills-icon-reactjs.png' },
                                        { name: 'Blazor WebAssembly', years: '1 Year', image: 'skills-icon-blazorwebassembly.png' },
                                        { name: 'Next.js', years: '1 Year', image: 'skills-icon-nextjs.png' },
                                        { name: 'Svelte', years: '1 Year', image: 'skills-icon-svelte.png' },
                                        { name: 'Vue.js', years: '2 Years', image: 'skills-icon-vuejs.png' }
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 4 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>









                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-backendweb.png" alt="Backend Web Development" className="h-[400px] w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('backend-web')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-orange-500">
                                <img src="skils-symbol-backendweb.png" alt="Backend Web Development"/>
                            </div>
                            <div className="my-auto text-2xl text-orange-500 font-bold ml-4">
                                Backend Web<br/>Development
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['ASP.NET Core', 'Blazor Server', 'Laravel', 'Native PHP'].map((skill) => (
                                <div key={skill} className="rounded-full bg-orange-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['backend-web'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10 border-8 border-orange-500" 
                                style={{ height: `var(--card-height-5)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-orange-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>Backend Web Development</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('backend-web')}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'ASP.NET Core', years: '1 Year', image: 'skills-icon-aspnet.png' },
                                        { name: 'Blazor Server', years: '1 Year', image: 'skills-icon-blazorserver.png' },
                                        { name: 'Laravel', years: '1 Year', image: 'skills-icon-laravel.png' },
                                        { name: 'Native PHP', years: '1 Year', image: 'skills-icon-php.png' }
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 3 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>










                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mb-20 mt-10">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-digitalmarketing.png" alt="Digital Marketing" className="h-[400px] w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('digital-marketing')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-teal-500">
                                <img src="skils-symbol-digitalmarketing.png" alt="Digital Marketing"/>
                            </div>
                            <div className="my-auto text-2xl text-teal-500 font-bold ml-4">
                                Digital<br/>Marketing
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['Figma', 'Canva Video Editing', 'Graphic Design',].map((skill) => (
                                <div key={skill} className="rounded-full bg-teal-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['digital-marketing'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mb-20 mt-10 border-8 border-teal-500" 
                                style={{ height: `var(--card-height-6)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-teal-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>Digital Marketing</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('digital-marketing')}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'Figma', years: '3 Years', image: 'skills-icon-figma.png' },
                                        { name: 'Canva Video Editing', years: '1 Year', image: 'skills-icon-videoediting.png' },
                                        { name: 'Graphic Design', years: '2 Years', image: 'skills-icon-graphicdesign.png' },
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 2 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>








                {/* Skill card */}
                <div className="relative hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
                    <div className="skill-card z-30 flex flex-col bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10">
                        {/* Image section with overlay */}
                        <div className="relative">
                            <img src="skills-literature.png" alt="English Literacy" className="w-full object-cover rounded-t-[30px]"/>
                            <div className="absolute top-4 right-4 flex">
                                <img src="skills-learnmore.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('english-literacy')}/>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
                        </div>

                        {/* Title section */}
                        <div className="flex my-5">
                            <div className="w-1/3 rounded-r-full p-4 pr-6 bg-gray-500">
                                <img src="skils-symbol-literature.png" alt="English Literacy"/>
                            </div>
                            <div className="my-auto text-2xl text-gray-500 font-bold ml-4">
                                English Literacy
                            </div>
                        </div>

                        {/* Skills tags */}
                        <div className="flex flex-wrap p-4 gap-3">
                            {['Script-writing', 'Storytelling', 'Novel Writing', 'Public Speaking'].map((skill) => (
                                <div key={skill} className="rounded-full bg-gray-300 px-3 py-1">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence>
                        {expandedCards['english-literacy'] && (
                            <motion.div 
                                initial={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                animate={{ 
                                    clipPath: "circle(150% at 100% 0%)",
                                    opacity: 1 
                                }}
                                exit={{ 
                                    clipPath: "circle(0% at 100% 0%)",
                                    opacity: 0 
                                }}
                                transition={{ 
                                    duration: 0.8,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="skill-card absolute top-0 left-0 z-40 bg-white rounded-[30px] w-[400px] mx-3 flex-shrink-0 shadow-xl h-fit mt-20 mb-10 border-8 border-gray-500" 
                                style={{ height: `var(--card-height-7)` }}
                            >
                                <div className='relative'>
                                    <div className='font-bold text-xl text-white bg-gray-500 rounded-br-2xl rounded-tl-2xl w-fit px-4 py-5'>English Literacy</div>
                                    <div className="absolute top-2 right-2 flex justify-between items-center">
                                        <img src="skills-learnmore-back2.png" alt="Arrow" className="w-10 h-10 hover:scale-110 transition-all duration-300 ease-in-out" onClick={() => toggleContent('english-literacy')}/>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 p-10 pt-24'>
                                    {[
                                        { name: 'Script-writing', years: '1 Year', image: 'skills-icon-scriptwriting.png' },
                                        { name: 'Storytelling', years: '7 Years', image: 'skills-icon-storytelling.png' },
                                        { name: 'Novel Writing', years: '3 Years', image: 'skills-icon-novelwriting.png' },
                                        { name: 'Public Speaking', years: '4 Years', image: 'skills-icon-publicspeaking.png' }
                                    ].map((skill, index) => (
                                        <React.Fragment key={skill.name}>
                                            <div className="flex gap-4">
                                                <div className='basis-1/6 flex flex-col justify-center'>
                                                    <img src={skill.image} alt={skill.name}/>
                                                </div>
                                                <div className='basis-5/6 flex flex-col justify-center gap-1'>
                                                    <div className='text-lg font-bold'>{skill.name}</div>
                                                    <div className='font-light'>{skill.years}</div>
                                                </div>
                                            </div>
                                            {index < 3 && <div className="border-t border-black"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>







            </div>
        </div>
    );
}
