import Image from "next/image";
import { useEffect, useState } from "react";
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

export default function Novel() {
    const { bgColor, textColor, lineImage } = useTimeBasedTheme();
    const [isNight, setIsNight] = useState(false);
    const [buttonBg, setButtonBg] = useState("#f97316"); // orange-400 default
    const [buttonTextColor, setButtonTextColor] = useState("text-white");

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            if (hours >= 12 && hours < 17) {
                // Afternoon (12 PM - 5 PM)
                setButtonBg("#387eb8");
                setButtonTextColor("text-white");
            } else if (hours >= 17 && hours < 20) {
                // Evening (5 PM - 8 PM)
                setButtonBg("#a40088");
                setButtonTextColor("text-white");
            } else if (hours >= 20 || hours < 5) {
                // Night (8 PM - 5 AM)
                setButtonBg("#9ec6eb");
                setButtonTextColor("text-black");
            } else {
                // Morning (5 AM - 12 PM)
                setButtonBg("#f97316"); // orange-400
                setButtonTextColor("text-white");
            }
            
            setIsNight(hours >= 20 || hours < 5);
        };
        checkTime();
        const interval = setInterval(checkTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`rounded-tr-[100px] rounded-bl-[100px] md:rounded-tr-[150px] md:rounded-bl-[150px] md:py-20 md:px-10 px-5 pt-20 ${textColor}`} style={{ backgroundColor: bgColor }}>
            <div className="flex-col md:flex hidden">
                <h1 className="text-center font-bold text-4xl ">There's one more thing...</h1>
                <div className="flex flex-row w-full md:w-1/2 mx-auto my-5">
                    <img src={lineImage} alt="work-experience" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col md:hidden">
                    <h1 className="text-center font-bold text-4xl ">There's one more thing...</h1>
                    <div className="flex flex-row w-full md:w-1/2 mx-auto my-5">
                        <img src={lineImage} alt="work-experience" />
                    </div>
                </div>
                <div className="md:w-2/5 lg:w-1/3 mx-5 lg:m-10 md:m-3 flex justify-end">
                    <img src={isNight ? "/stardewvalley-night.gif" : "/stardewvalley.gif"} alt="novel" className="xl:w-[350px] lg:w-[400px] md:w-[300px] w-[250px] object-cover" />
                </div>
                <div className="flex flex-col md:w-3/5 lg:w-2/3 min-h-full w-full text-center md:text-left">
                    <div className="flex flex-row w-fit relative justify-center mx-auto md:mx-0">
                        <h1 className="font-boldoa lg:text-[120px] md:text-[100px] text-[80px] ">Behold!</h1>
                        <img 
                            src="/novel-shinies5.gif" 
                            alt="novel" 
                            className=" xl:w-[350px] lg:w-[250px] absolute -top-32 md:left-[250px] lg:left-[300px] 2xl:left-[350px] object-cover hidden md:block pb-5 pl-10" 
                        />
                    </div>
                    <div className="font-outland md:text-2xl xl:text-4xl lg:text-3xl text-xl lg:space-y-6 space-y-4 mb-10 ">
                        <p>A novel lies before your eyes</p>
                        <p>It is a precious tale which I comprise</p>
                        <p>May I take you on a wonderful journey?</p>
                        <p>For it is available on <span className="text-orange-400 font-bold font-leckerli-one">Wattpad</span>, completely free</p>
                    </div>
                    <div className="flex justify-center md:justify-start md:mt-0 mt-10">
                        <button 
                            onClick={() => window.open('https://www.wattpad.com/story/343036586-the-weird-and-wacky-world-of-stardew-valley', '_blank')}
                            className={`${buttonTextColor} md:px-10 px-16 py-3 rounded-t-[30px] md:rounded-full italic font-bold text-center w-fit text-2xl transition-all duration-300 hover:scale-110 cursor-pointer`} 
                            style={{ backgroundColor: buttonBg }}
                        >
                            Check it out!
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}