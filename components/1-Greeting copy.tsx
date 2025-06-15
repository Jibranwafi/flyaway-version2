import { motion } from 'framer-motion';

const Greeting = () => {
    return (
    <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
            autoPlay
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
        <source src="/transition-night-to-morning.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative h-full w-full flex flex-col justify-between items-center text-black text-center ">
            <div className="border border-black">
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1}}
            >
            <motion.h1 
                className="text-4xl"
                animate={{
                    scale: [1, 1.1, 1, 1, 1],
                    color: ["#000000", "#4a5568", "#000000", "#000000", "#000000"],
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
                className="text-lgl"
                animate={{
                    scale: [1, 1.05, 1, 1, 1],
                    color: ["#000000", "#4a5568", "#000000", "#000000", "#000000"],
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
                I hope you're having a wonderful morning
            </motion.p>
            </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1}}
                className=""
            >
            <div className="border border-black">
                title image
            </div>
            </motion.div>
        </div>
    </div>
    );
};

export default Greeting;