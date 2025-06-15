import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';
import Navbar from './navbar';

interface ExperienceProps {
  onPdfModalChange: (isOpen: boolean) => void;
}

export default function Experience({ onPdfModalChange }: ExperienceProps) {
    const { bgColor, textColor, lineImage } = useTimeBasedTheme();
    const [badgeBgColor, setBadgeBgColor] = useState("bg-amber-400");
    const [badgeTextColor, setBadgeTextColor] = useState("text-white");
    const [gradientColors, setGradientColors] = useState({
        start: "#fbbf24",
        middle: "#fdebbc",
        end: "#fbbf24"
    });
    const [cardBgColor, setCardBgColor] = useState("#fdebbc");
    const [buttonColor, setButtonColor] = useState("#fcd34d");
    const [buttonBorderColor, setButtonBorderColor] = useState("#fcd34d");
    const [sectionGradient, setSectionGradient] = useState("linear-gradient(to bottom, rgba(50, 82, 81, 0.85), transparent)");
    const [timeBasedBg, setTimeBasedBg] = useState("#fcd34d"); // amber-200
    const [isMobile, setIsMobile] = useState(false);
    const [borderColor, setBorderColor] = useState("border-gray-300");
    const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (!mounted.current) return;

        const checkScreenSize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 768);
            }
        };

        // Initial check
        checkScreenSize();

        // Add event listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (!mounted.current) return;

        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            // Define time ranges for different periods
            if (hours >= 12 && hours < 17) {
                // Afternoon (12 PM - 5 PM)
                setBadgeBgColor("bg-[#847478]");
                setBadgeTextColor("text-white");
                setGradientColors({
                    start: "#847478",
                    middle: "#ceedec",
                    end: "#847478"
                });
                setCardBgColor("#ceedec");
                setSectionGradient("linear-gradient(to bottom, white, transparent)");
                setTimeBasedBg("#d1d5db"); // gray-300
                setBorderColor("border-gray-400");
                setButtonColor("#d1d5db");
                setButtonBorderColor("#847478");

            } else if (hours >= 17 && hours < 20) {
                // Evening (5 PM - 8 PM)
                setBadgeBgColor("bg-[#712e62]");
                setBadgeTextColor("text-white");
                setGradientColors({
                    start: "#712e62",
                    middle: "#ffcbf6",
                    end: "#712e62"
                });
                setCardBgColor("#ffcbf6");
                setSectionGradient("linear-gradient(to bottom, rgba(225, 114, 168, 0.7), transparent)");
                setTimeBasedBg("#ffa0ce"); // pink-400
                setBorderColor("border-pink-700");
                setButtonColor("#ffa0ce");
                setButtonBorderColor("#712e62");

            } else if (hours >= 20 || hours < 5) {
                // Night (8 PM - 5 AM)
                setBadgeBgColor("bg-[#ceedec]");
                setBadgeTextColor("text-black");
                setGradientColors({
                    start: "#a8dcfd",
                    middle: "#0b2348",
                    end: "#a8dcfd"
                });
                setCardBgColor("#0b2247");
                setSectionGradient("linear-gradient(to bottom, rgba(29, 80, 128, 1), transparent)");
                setTimeBasedBg("#003c6d"); // sky-800
                setBorderColor("border-sky-200");
                setButtonColor("#003c6d");
                setButtonBorderColor("#ceedec");
            } else {
                // Morning (5 AM - 12 PM)
                setBadgeBgColor("bg-amber-400");
                setBadgeTextColor("text-white");
                setGradientColors({
                    start: "#fbbf24",
                    middle: "#fdebbc",
                    end: "#fbbf24"
                });
                setCardBgColor("#fdebbc");
                setSectionGradient("linear-gradient(to bottom, #fed278, transparent)");
                setTimeBasedBg("#fcd34d"); // amber-200
                setBorderColor("border-amber-500");
                setButtonColor("#fcd34d");
                setButtonBorderColor("#fbbf24");
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        onPdfModalChange(isPdfModalOpen);
    }, [isPdfModalOpen, onPdfModalChange]);

    return (
    <div className={`rounded-tr-[100px] md:rounded-tr-[150px] rounded-bl-[100px] md:rounded-bl-[150px] md:p-20 p-7 md:py-16 pt-16 pb-0 md:pb-24 ${textColor}`} style={{ backgroundColor: bgColor }}>
        <Navbar isPdfModalOpen={isPdfModalOpen} />
        <div className="flex flex-col">
            <div className="flex-col pb-10 flex">
                <h1 className={`text-center font-bold md:text-4xl text-2xl ${textColor}`}>My work experience</h1>
                <div className="flex flex-row w-full md:w-1/2 mx-auto my-5 mb-10">
                    <img src={lineImage} alt="work-experience" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                {/* Card 1 */}
                <motion.div 
                    className="rounded-lg shadow-lg md:p-5 relative"
                    style={{
                        backgroundColor: cardBgColor,
                        border: '10px solid transparent',
                        background: `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(90deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                    }}
                    animate={{
                        background: [
                            `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(0deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                            `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(360deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className={`absolute -top-5 left-4 ${badgeBgColor} ${badgeTextColor} px-4 py-1 rounded-full text-lg italic font-medium shadow`}>
                        Software Developer Intern
                    </div>
                    <div className="flex flex-col">
                        <div className="md:mt-4 px-5 pb-8 pt-10 md:p-0 md:mb-6 mb-5 w-full " style={{ backgroundColor: isMobile ? timeBasedBg : 'transparent' }}>
                            <div className="md:text-3xl text-lg font-bold">PT Technova Optima Prima</div>
                            <div className="md:text-xl text-sm">March 2021 – June 2021</div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0 md:p-0 px-5 pb-5">
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/2 space-y-2 md:space-y-4 rounded-t-xl overflow-hidden" style={{
                                background: isMobile ? 'none' : sectionGradient,
                                borderRadius: '0.75rem 0.75rem 0 0'
                            }}>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Booking <br></br> App UI</div>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Booking App UI</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed the UI for a boarding house booking application on mobile using Figma.</div>
                            </div>
                            <div className={`md:hidden border-y ${borderColor}`}></div>
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/2 space-y-2 md:space-y-4 rounded-t-xl overflow-hidden" style={{
                                background: isMobile ? 'none' : sectionGradient,
                                borderRadius: '0.75rem 0.75rem 0 0'
                            }}>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Admin<br></br> Login Page</div>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Admin Login Page</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Developed a custom admin's login page using the react.js frontend web framework.</div>
                            </div>                                
                        </div>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    className="rounded-lg shadow-lg md:p-5 relative"
                    style={{
                        backgroundColor: cardBgColor,
                        border: '10px solid transparent',
                        background: `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(90deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                    }}
                    animate={{
                        background: [
                            `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(0deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                            `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(360deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className={`absolute -top-5 left-4 ${badgeBgColor} ${badgeTextColor} px-4 py-1 rounded-full text-lg italic font-medium shadow`}>
                        Software Engineer Intern
                    </div>
                    <div className="flex flex-col">
                        <div className="md:mt-4 px-5 pb-8 pt-10 md:p-0 md:mb-6 mb-5 w-full " style={{ backgroundColor: isMobile ? timeBasedBg : 'transparent' }}>
                            <div className="md:text-3xl text-lg font-bold">PT Telekomunikasi Seluler</div>
                            <div className="md:text-xl text-sm">October 2022 – December 2022</div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0 md:p-0 px-5 pb-5">
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-full space-y-2 md:space-y-4 rounded-t-xl overflow-hidden" style={{
                                background: isMobile ? 'none' : sectionGradient,
                                borderRadius: '0.75rem 0.75rem 0 0'
                            }}>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Raspberry Pi<br></br> Telegram Bot</div>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Raspberry Pi Telegram Bot</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Created an alternative telegram bot powered by a Raspberry Pi which can be compared and analyzed against the version currently utilized at the office in PT Telkomsel.</div>
                            </div>                               
                        </div>
                    </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    className="rounded-lg shadow-lg md:p-5 relative col-span-1 md:col-span-2"
                    style={{
                        backgroundColor: cardBgColor,
                        border: '10px solid transparent',
                        background: `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(90deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                    }}
                    animate={{
                        background: [
                            `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(0deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                            `linear-gradient(${cardBgColor}, ${cardBgColor}) padding-box, linear-gradient(360deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%) border-box`,
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className={`absolute -top-5 left-4 ${badgeBgColor} ${badgeTextColor} px-4 py-1 rounded-full text-lg italic font-medium shadow`}>
                        Senior IT Programmer
                    </div>
                    <div className="flex flex-col">
                        <div className="md:mt-4 px-5 pb-8 pt-10 md:p-0 md:mb-6 mb-5 w-full " style={{ backgroundColor: isMobile ? timeBasedBg : 'transparent' }}>
                            <div className="md:text-3xl text-lg font-bold">PT Lumbung Artha Kita</div>
                            <div className="md:text-xl text-sm">July 2024 – Present</div>
                        </div>
                        <div className="flex md:flex-row flex-col md:space-x-3 space-y-4 md:space-y-0 md:p-0 px-5 pb-5">
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/3 space-y-2 md:space-y-4 rounded-t-xl overflow-hidden" style={{
                                background: isMobile ? 'none' : sectionGradient,
                                borderRadius: '0.75rem 0.75rem 0 0'
                            }}>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Lunogi.com<br></br> Website</div>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Lunogi.com Website</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed and developed the webpage for lunogi.com, an affiliate website which promotes some of the most popular products from Amazon.</div>
                            </div>
                            <div className={`md:hidden border-y ${borderColor}`}></div>
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/3 space-y-2 md:space-y-4 rounded-t-xl overflow-hidden" style={{
                                background: isMobile ? 'none' : sectionGradient,
                                borderRadius: '0.75rem 0.75rem 0 0'
                            }}>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Healthkita.com<br></br> Website</div>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Healthkita.com Website</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed and developed the webpage for healthkita.com, a healthcare agency service which focuses on bringing Indonesian citizens to Malaysia for medical checkup and stem cell treatment.</div>
                            </div>
                            <div className={`md:hidden border-y ${borderColor}`}></div>
                            <div className="flex flex-col md:bg-gray-200 md:p-4 md:basis-1/3 space-y-2 md:space-y-4 rounded-t-xl overflow-hidden" style={{
                                background: isMobile ? 'none' : sectionGradient,
                                borderRadius: '0.75rem 0.75rem 0 0'
                            }}>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 hidden md:block">Lubkita.id<br></br>Website</div>
                                <div className="font-bold md:text-2xl text-base md:basis-full basis-2/5 my-auto text-left md:pr-0 pr-5 md:hidden">Lubkita.id Website</div>
                                <div className="md:text-base text-sm md:basis-full basis-1/2 ">Designed and developed the webpage for lubkita.id, a website showcasing the highlights for the company's main service.</div>
                            </div>                                  
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                className='flex mx-auto md:mt-20 mt-10 md:mb-0 mb-10 items-center relative overflow-visible'
                whileHover="hover"
                initial="initial"
            >
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: 0 },
                        hover: { 
                            opacity: 1, 
                            x: -246,
                            transition: {
                                x: {
                                    duration: 0.6,
                                    ease: [0.34, 1.56, 0.8, 1],
                                    times: [0, 0.4, 0.7, 1]
                                },
                                opacity: { duration: 0.5 }
                            }
                        }
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="font-bold absolute pointer-events-none"
                    style={{ 
                        color: textColor,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 3000,
                        fontSize: '4rem'
                    }}
                >
                    {'('}
                </motion.div>
                <motion.div 
                    className="text-center md:text-2xl text-lg font-light w-fit rounded-full px-10 py-5 hover:scale-110 transition-all duration-300 relative cursor-pointer" 
                    style={{ backgroundColor: buttonColor}}
                    onClick={() => setIsPdfModalOpen(true)}
                >
                    See my full project portofolio!
                </motion.div>
                <motion.div
                    variants={{
                        initial: { opacity: 0, x: 0 },
                        hover: { 
                            opacity: 1, 
                            x: 220,
                            transition: {
                                x: {
                                    duration: 0.6,
                                    ease: [0.34, 1.56, 0.8, 1],
                                    times: [0, 0.4, 0.7, 1]
                                },
                                opacity: { duration: 0.5 }
                            }
                        }
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-9xl font-bold absolute pointer-events-none"
                    style={{ 
                        color: textColor,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 3000,
                        fontSize: '4rem'
                    }}
                >
                    {')'}
                </motion.div>
            </motion.div>
        </div>

        {/* PDF Modal */}
        <AnimatePresence>
            {isPdfModalOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPdfModalOpen(false)}
                    style={{ 
                        position: 'fixed', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        backgroundColor: 'rgba(0,0,0,0.5)', 
                        backdropFilter: 'blur(5px)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        zIndex: 1000 
                    }}
                >
                    <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{ 
                            backgroundColor: 'white', 
                            padding: '20px', 
                            borderRadius: '8px', 
                            width: '90%', 
                            maxWidth: '1200px', 
                            height: '90vh',
                            position: 'relative'
                        }}
                    >
                        <button 
                            onClick={() => setIsPdfModalOpen(false)}
                            style={{ 
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                width: '32px',
                                height: '32px',
                                backgroundColor: '#f3f4f6',
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1001,
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                        >
                            <svg 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#4b5563" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <iframe
                            src="/portofolio-document.pdf"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            title="Portfolio PDF"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
    );
}