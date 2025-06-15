'use client';

import { useState } from 'react';

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
    <header className="bg-white shadow">
    <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600 font-outland">Dashboard</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
            <button 
            type="button" 
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
            </button>
        </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
        </div>
        )}
    </div>
    </header>
);
}