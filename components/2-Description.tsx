import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Description() {
    const [role, setRole] = useState("Writer");
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const roles = ["Creative Writer", "Software Engineer", "Game Developer", "Graphic Designer", "Data Scientist"];
        let currentIndex = 0;
        
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            setRole(roles[currentIndex]);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div
            className="relative flex flex-col items-center justify-center md:py-20 py-10 px-4 -mt-20 -mb-10 xl:min-h-[450px] lg:min-h-[400px] md:min-h-[350px] min-h-[200px]"
            style={{
                backgroundImage: `url('${isMobile ? '/description4.png' : '/description2.png'}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full md:px-10 px-2 pb-10 pt-5 mx-auto text-left ">
                <h2 className="text-2xl md:text-4xl font-bold mb-4  w-full mx-auto">
                    I'm a{' '}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={role}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            {role}
                        </motion.span>
                    </AnimatePresence>
                </h2>
                <p className="text-gray-700 text-xs md:text-base lg:text-lg font-mono text-left">
                I'm a strong-driven individual who always strives to offer my best, often by presenting unique out-of-the-box ideas which transcend beyond the traditional norms, in hopes of bringing more imaginative and innovative solutions towards any given task. With a flexible work preference, I am equally effective when working either on my own or collaboratively alongside a team. My services are mainly tailored around software development, given my background as a Computer Science graduate who holds relevant work experiences within the tech industry, while also forming a secondary skill set in English Literature and Digital Marketing throughout the span of my college and work life.
                </p>
            </div>
        </div>
    );
}