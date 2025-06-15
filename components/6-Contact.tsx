import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ text, isHovered }: { text: string; isHovered: boolean }) => {
    return (
        <div className="flex justify-center">
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 0 }}
                    animate={{
                        y: isHovered ? -5 : 0,
                    }}
                    transition={{
                        duration: 0.2,
                        delay: isHovered ? index * 0.03 : 0,
                        type: "spring",
                        stiffness: 200
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default function Contact() {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [gifKey, setGifKey] = useState(0);
    const [background, setBackground] = useState('radial-gradient(circle at 0% 0%, #fed47e, #f79c35)');
    const [textColor, setTextColor] = useState('text-orange-400');
    const [bottomIcon, setBottomIcon] = useState('icon-bottom-contactme.png');
    const [whatsappIcon, setWhatsappIcon] = useState('contact-whatsapp.png');
    const [linkedinIcon, setLinkedinIcon] = useState('contact-linkedin.png');
    const [emailIcon, setEmailIcon] = useState('contact-email.png');
    const [highlightGif, setHighlightGif] = useState('contact-highlight7-morning.gif');

    const handleMouseEnter = (section: string) => {
        setHoveredSection(section);
        setGifKey(prev => prev + 1);
    };

    const handleMouseLeave = () => {
        setHoveredSection(null);
        setGifKey(prev => prev + 1);
    };

    const handleClick = (type: string) => {
        switch(type) {
            case 'whatsapp':
                window.open('https://wa.me/628118406766', '_blank');
                break;
            case 'linkedin':
                window.open('https://linkedin.com/in/jibran-wafi-419765235', '_blank');
                break;
            case 'email':
                window.open('mailto:jibranwaf.workmail@gmail.com', '_blank');
                break;
        }
    };

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            if (hours >= 12 && hours < 17) {
                // Afternoon (12 PM - 5 PM)
                setBackground('linear-gradient(135deg, #fcfdfd, #6c807f)');
                setTextColor('text-[#7c7a70]');
                setBottomIcon('icon-bottom-afternoon.png');
                setWhatsappIcon('contact-whatsapp-afternoon.png');
                setLinkedinIcon('contact-linkedin-afternoon.png');
                setEmailIcon('contact-email-afternoon.png');
                setHighlightGif('contact-highlight8-afternoon.gif');
            } else if (hours >= 17 && hours < 20) {
                // Evening (5 PM - 8 PM)
                setBackground('radial-gradient(circle at 0% 0%, #ffb6f2, #b5366c)');
                setTextColor('text-[#ffcbf6]');
                setBottomIcon('icon-bottom-evening.png');
                setWhatsappIcon('contact-whatsapp-evening.png');
                setLinkedinIcon('contact-linkedin-evening.png');
                setEmailIcon('contact-email-evening.png');
                setHighlightGif('contact-highlight7-evening.gif');
            } else if (hours >= 20 || hours < 5) {
                // Night (8 PM - 5 AM)
                setBackground('linear-gradient(135deg, #a8dcfd, #0b2348)');
                setTextColor('text-[#25467a]');
                setBottomIcon('icon-bottom-night.png');
                setWhatsappIcon('contact-whatsapp-night.png');
                setLinkedinIcon('contact-linkedin-night.png');
                setEmailIcon('contact-email-night.png');
                setHighlightGif('contact-highlight8-night.gif');
            } else {
                // Morning (5 AM - 12 PM)
                setBackground('radial-gradient(circle at 0% 0%, #fed47e, #f79c35)');
                setTextColor('text-orange-400');
                setBottomIcon('icon-bottom-contactme.png');
                setWhatsappIcon('contact-whatsapp.png');
                setLinkedinIcon('contact-linkedin.png');
                setEmailIcon('contact-email.png');
                setHighlightGif('contact-highlight7-morning.gif');
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div style={{ background }}>
        <div className="flex flex-col md:py-10 py-10 md:pb-20 pb-10">
            <div
                className="relative flex flex-col items-center justify-center md:py-12 py-6 px-4 md:my-12 mb-10"
                style={{
                    backgroundImage: "url('/gif-contactme.gif')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    minHeight: '50px',
                }}
            >
                <div className={`md:text-[30px] text-2xl font-bold mb-2 drop-shadow-sm ${textColor}`} style={{ letterSpacing: '0.5px' }}>
                    Would you like to
                </div>
                <h1 className="md:text-[70px] text-5xl font-extrabold italic text-white drop-shadow-lg" style={{ lineHeight: 1.1 }}>
                    Contact me?
                </h1>
            </div>
            <div className="flex w-full md:w-2/3 md:mx-auto">
                <div 
                    className="basis-1/3 flex flex-col relative cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('whatsapp')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick('whatsapp')}
                >
                    <div className={`flex justify-center mx-auto w-1/3 my-5 relative transition-all duration-300 ease-in-out ${hoveredSection === 'whatsapp' ? 'md:p-4 p-2' : 'p-0'}`}>
                        {hoveredSection === 'whatsapp' && (
                            <img 
                                key={gifKey}
                                src={highlightGif}
                                className="absolute inset-0 w-full h-full object-contain z-0"
                                alt="WhatsApp highlight"
                            />
                        )}
                        <img src={whatsappIcon} alt="WhatsApp icon" className="relative z-0"/>
                    </div>
                    <div className="flex flex-col text-center">
                        <motion.div 
                            className="md:text-lg text-sm text-white"
                            animate={{
                                scale: hoveredSection === 'whatsapp' ? 1.1 : 1,
                                y: hoveredSection === 'whatsapp' ? -5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            I'm available on
                        </motion.div>
                        <div className="md:text-xl text-base font-bold text-white">
                            <AnimatedText 
                                text="WhatsApp" 
                                isHovered={hoveredSection === 'whatsapp'} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mx-auto w-1/2 my-5">
                        <img src={bottomIcon} alt="Bottom icon"/>
                    </div>
                </div>

                <div className="border-x" 
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        borderColor: textColor === 'text-orange-400' ? '#fb923c' : 
                            textColor === 'text-[#7c7a70]' ? '#ffffff' :
                            textColor === 'text-[#ffcbf6]' ? '#fbcfe8' :
                            '#7dd3fc'
                    }}>
                </div>

                <div 
                    className="basis-1/3 flex flex-col relative cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('linkedin')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick('linkedin')}
                >
                    <div className={`flex justify-center mx-auto w-1/3 my-5 relative transition-all duration-300 ease-in-out ${hoveredSection === 'linkedin' ? 'md:p-4 p-2' : 'p-0'}`}>
                        {hoveredSection === 'linkedin' && (
                            <img 
                                key={gifKey}
                                src={highlightGif}
                                className="absolute inset-0 w-full h-full object-contain z-0"
                                alt="LinkedIn highlight"
                            />
                        )}
                        <img src={linkedinIcon} alt="LinkedIn icon" className="relative z-0"/>
                    </div>
                    <div className="flex flex-col text-center">
                        <motion.div 
                            className="md:text-lg text-sm text-white"
                            animate={{
                                scale: hoveredSection === 'linkedin' ? 1.1 : 1,
                                y: hoveredSection === 'linkedin' ? -5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            You can find me on
                        </motion.div>
                        <div className="md:text-xl text-base font-bold text-white">
                            <AnimatedText 
                                text="LinkedIn" 
                                isHovered={hoveredSection === 'linkedin'} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mx-auto w-1/2 my-5">
                        <img src={bottomIcon} alt="Bottom icon"/>
                    </div>
                </div>

                <div className="border-x"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                        borderColor: textColor === 'text-orange-400' ? '#fb923c' : 
                            textColor === 'text-[#7c7a70]' ? '#ffffff' :
                            textColor === 'text-[#ffcbf6]' ? '#fbcfe8' :
                            '#7dd3fc'
                    }}>
                </div>

                <div 
                    className="basis-1/3 flex flex-col relative cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('email')}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick('email')}
                >
                    <div className={`flex justify-center mx-auto w-1/3 my-5 relative transition-all duration-300 ease-in-out ${hoveredSection === 'email' ? 'md:p-4 p-2' : 'p-0'}`}>
                        {hoveredSection === 'email' && (
                            <img 
                                key={gifKey}
                                src={highlightGif}
                                className="absolute inset-0 w-full h-full object-contain z-0"
                                alt="Email highlight"
                            />
                        )}
                        <img src={emailIcon} alt="Email icon" className="relative z-0"/>
                    </div>
                    <div className="flex flex-col text-center">
                        <motion.div 
                            className="md:text-lg text-sm text-white"
                            animate={{
                                scale: hoveredSection === 'email' ? 1.1 : 1,
                                y: hoveredSection === 'email' ? -5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Or contact me via
                        </motion.div>
                        <div className="md:text-xl text-base font-bold text-white">
                            <AnimatedText 
                                text="Email" 
                                isHovered={hoveredSection === 'email'} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mx-auto w-1/2 my-5">
                        <img src={bottomIcon} alt="Bottom icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}