import { motion } from 'framer-motion';
export default function HeroSection() {
    return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1}}
                >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                    Modern Dashboard for Your Business
                </h1>
                <p className="text-lg md:text-xl mb-8 text-blue-100">
                    Streamline your workflow, analyze data, and make informed decisions with our intuitive dashboard solution.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="btn bg-white text-blue-600 hover:bg-blue-50">
                    Get Started
                    </button>
                    <button className="btn border border-white text-white hover:bg-blue-600">
                    Learn More
                    </button>
                </div>
                </motion.div>
            </div>
            <div className="hidden md:block">
            <div className="bg-white p-4 rounded-lg shadow-xl transform rotate-1">
                <div className="bg-gray-100 rounded">
                <div className="h-4 flex space-x-2 p-1">
                    <div className="bg-red-500 rounded-full h-2 w-2"></div>
                    <div className="bg-yellow-500 rounded-full h-2 w-2"></div>
                    <div className="bg-green-500 rounded-full h-2 w-2"></div>
                </div>
                <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-24 bg-blue-100 rounded"></div>
                    <div className="h-24 bg-blue-100 rounded"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}