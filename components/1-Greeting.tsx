import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Greeting = () => {
    const [videoSource, setVideoSource] = useState<string | null>(null);
    const [isNight, setIsNight] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            // Define time ranges for different periods
            if (hours >= 5 && hours < 12) {
                setVideoSource("/transition-night-to-morning.mp4"); // Morning (5 AM - 12 PM)
                setIsNight(false);
            } else if (hours >= 12 && hours < 17) {
                setVideoSource("/transition-morning-to-afternoon.mp4"); // Afternoon (12 PM - 5 PM)
                setIsNight(false);
            } else if (hours >= 17 && hours < 20) {
                setVideoSource("/transition-afternon-to-evening.mp4"); // Evening (5 PM - 8 PM)
                setIsNight(false);
            } else {
                setVideoSource("/transition-evening-to-night.mp4"); // Night (8 PM - 5 AM)
                setIsNight(true);
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    // Effect to handle video source changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [videoSource]);

    return (
    <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        {videoSource && (
            <video
                key={videoSource}
                autoPlay
                muted
                playsInline
                onLoadedData={handleVideoLoad}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <source src={videoSource} type="video/mp4" />
            </video>
        )}

        {/* Content Overlay */}
        <div className="relative h-full w-full flex flex-col justify-between items-center text-black text-center pt-28">
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <motion.h1 
                    className={`text-4xl ${isNight ? 'text-white' : 'text-black'}`}
                    animate={{
                        scale: [1, 1.1, 1, 1, 1],
                        color: isNight ? 
                            ["#ffffff", "#e0e0e0", "#ffffff", "#ffffff", "#ffffff"] :
                            ["#000000", "#4a5568", "#000000", "#000000", "#000000"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 1]
                    }}
                >
                    Hi there!
                </motion.h1>
                <motion.p 
                    className={`text-lgl ${isNight ? 'text-white' : 'text-black'}`}
                    animate={{
                        scale: [1, 1.05, 1, 1, 1],
                        color: isNight ? 
                            ["#ffffff", "#e0e0e0", "#ffffff", "#ffffff", "#ffffff"] :
                            ["#000000", "#4a5568", "#000000", "#000000", "#000000"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 1],
                        delay: 1.5
                    }}
                >
                    I hope you're having a wonderful {isNight ? 'night' : 'morning'}
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <motion.div 
                    className="md:px-0 px-2 relative "
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 1],
                        delay: 2
                    }}
                >
                    <div className="relative">
                        <img src="/textbubble-intro.png" alt="intro-bubble" className="absolute top-2 -left-24 w-[340px] object-contain hidden md:block" />
                        <div className="absolute top-4 -left-10  font-outland text-black font-medium text-[28px] -space-y-2 hidden md:flex flex-col">
                            <div className=''>Allow me to</div>
                            <div className=''>introduce myself...</div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/textbubble-name.png" alt="name-bubble" className="absolute -top-3 -right-48 w-[465px] object-contain hidden md:block" />
                        <div className="absolute -right-40 flex-col text-black font-medium text-center -space-y-1 hidden md:flex">
                            <div className='font-outland text-[28px]'>My name is</div>
                            <div className='font-boldoa text-[50px]'>Jibran Wafi Prawiko</div>
                        </div>
                    </div>
                    <img src="/profile.png" alt="title-image" className="md:w-3/4 w-full object-cover mx-auto md:block hidden" />
                    <img src="/mobile-profile.png" alt="title-image" className="md:hidden block w-full object-cover mx-auto" />
                    
                </motion.div>
            </motion.div>
        </div>
    </div>
    );
};

export default Greeting;