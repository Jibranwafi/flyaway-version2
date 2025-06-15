'use client';

import { useState } from 'react';

export default function ContactSection() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log('Form data:', formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Hide success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
};

return (
    <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-outland special-heading">Get in Touch</h2>
            <p className="text-gray-600">
            Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
            </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent. We'll contact you soon.</span>
            </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                />
            </div>
            
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
                />
            </div>
            
            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
                </label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
                />
            </div>
            
            <div className="text-center">
                <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                Send Message
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </section>
);
}