import { useEffect, useState } from 'react';

export default function PersonalInfo() {
    const [bgColor, setBgColor] = useState("#fdebbc");
    const [gradient, setGradient] = useState("linear-gradient(to top, #fed278, transparent)");
    const [textColor, setTextColor] = useState("text-black");
    const [lineImage, setLineImage] = useState("/line-morning.png");

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            
            // Define time ranges for different periods
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
                setGradient("linear-gradient(to top, rgba(29, 80, 128, 1), rgba(187, 242, 246, 0))");
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

    return (
        <div className={`rounded-bl-[100px] md:rounded-bl-[150px] md:p-20 p-7 pt-12 pb-16 md:pb-20 md:pt-12 ${textColor}`} style={{ backgroundColor: bgColor }}> 
        <div className="flex flex-col">
            <div className="flex-col flex">
                    <h1 className={`text-center font-bold text-4xl ${textColor}`}>More about me</h1>
                <div className="flex flex-row w-full md:w-1/2 mx-auto my-5 md:mb-20 mb-10">
                        <img src={lineImage} alt="work-experience" />
                </div>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    <div className={`flex flex-col rounded-lg p-5 space-y-3 ${textColor}`} style={{
                        background: gradient
                }}>
                    <div className="font-bold md:text-2xl text-xl">i was born in</div>
                    <div className="font-outland md:text-2xl text-lg">3rd of August, 2001</div>
                </div>
                    <div className={`flex flex-col rounded-lg p-5 space-y-3 ${textColor}`} style={{
                        background: gradient
                }}>
                    <div className="font-bold md:text-2xl text-xl">i'm currently living in</div>
                    <div className="font-outland md:text-2xl text-lg">Ciputat, South Tangerang, Banten, Indonesia</div>
                </div>
                    <div className={`flex flex-col justify-center row-span-2 md:col-span-2 col-span-2 rounded-lg ${textColor}`} style={{
                        background: gradient
                }}>
                    <div className="flex flex-col p-5 space-y-3">
                        <div className="font-bold md:text-2xl text-xl">I graduated from</div>
                        <div className="font-outland md:text-2xl text-lg">International University Liaison Indonesia</div>
                    </div>
                        <div className={`border-y ${textColor === 'text-white' ? 'border-white' : 'border-black'} mx-2`}></div>
                    <div className="flex flex-row">
                        <div className="flex flex-col p-5 space-y-3 basis-1/2">
                            <div className="font-bold md:text-2xl text-xl">I possess a</div>
                                <div className="font-outland md:text-2xl text-lg">Bachelor's degree in<br></br>computer science</div>
                        </div>
                            <div className={`border-x ${textColor === 'text-white' ? 'border-white' : 'border-black'} mb-2`}></div>
                        <div className="flex flex-col p-5 space-y-3 basis-1/2">
                            <div className="font-bold md:text-2xl text-xl">And a GPA of</div>
                            <div className="font-outland text-5xl">3.22</div>
                        </div>
                    </div>
                </div>
                    <div className={`flex flex-col col-span-2 rounded-lg p-5 space-y-3 ${textColor}`} style={{
                        background: gradient
                }}>
                    <div className="font-bold md:text-2xl text-xl">Below are my hobbies:</div>
                    <div className="font-outland md:text-2xl text-lg">Music, Cycling, English Literature, Video Games, Cooking, & Tabletop roleplaying games</div>
                </div>
            </div>
        </div>
    </div>
    );
}