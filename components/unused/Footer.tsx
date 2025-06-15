export default function Footer() {
    return (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <h3 className="text-lg font-semibold mb-4">Dashboard</h3>
            <p className="text-gray-300">
                A simple and elegant dashboard solution for your business needs.
            </p>
            </div>
            
            <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
            </div>
            
            <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">API</a></li>
            </ul>
            </div>
            
            <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
                <p>123 Dashboard Street</p>
                <p>Web City, IN 12345</p>
                <p className="mt-2">Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </address>
            </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Dashboard. All rights reserved.</p>
        </div>
        </div>
    </footer>
    );
}