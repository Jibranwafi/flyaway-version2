import { useState, useEffect } from 'react';

export const useTimeBasedTheme = () => {
    const [bgColor, setBgColor] = useState("#fdebbc");
    const [gradient, setGradient] = useState("linear-gradient(to top, #fed278, transparent)");
    const [textColor, setTextColor] = useState("text-black");
    const [lineImage, setLineImage] = useState("/line-morning.png");

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            if (hours >= 12 && hours < 17) {
                // Afternoon (12 PM - 5 PM)
                setBgColor("#ceedec");
                setGradient("linear-gradient(to top, rgba(255, 255, 255, 1), rgba(159, 159, 159, 0.05))");
                setTextColor("text-black");
                setLineImage("/line-afternoon.png");
            } else if (hours >= 17 && hours < 20) {
                // Evening (5 PM - 8 PM)
                setBgColor("#ffcbf6");
                setGradient("linear-gradient(to top, rgba(201, 57, 110, 0.7), rgba(255, 196, 241, 0.05))");
                setTextColor("text-black");
                setLineImage("/line-evening.png");
            } else if (hours >= 20 || hours < 5) {
                // Night (8 PM - 5 AM)
                setBgColor("#0b2247");
                setGradient("linear-gradient(to top, rgba(11, 34, 71, 1), rgba(187, 242, 246, 0.05))");
                setTextColor("text-white");
                setLineImage("/line-night.png");
            } else {
                // Morning (5 AM - 12 PM)
                setBgColor("#fdebbc");
                setGradient("linear-gradient(to top, #fed278, transparent)");
                setTextColor("text-black");
                setLineImage("/line-morning.png");
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    return { bgColor, gradient, textColor, lineImage };
}; 