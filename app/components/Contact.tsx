"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { sendTelegram } from '@/libs/telegram';

export function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (mock for now)
        console.log('Form submitted:', formData);
        const messageString = `
        New Inquery!\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}
        `
        const ok = await sendTelegram(messageString);

        if (!ok) return alert("Error in sending your message");

        alert("Your message has been sent!");

        setFormData({ name: '', email: '', subject: '', message: '' });

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left Column - Info */}
                    <div>
                        <div className="text-sm tracking-widest text-white/60 mb-4">GET IN TOUCH</div>
                        <h2 className="text-4xl md:text-5xl mb-6 text-white">
                            Let's Create Something Amazing
                        </h2>
                        <p className="text-lg text-white/70 mb-12">
                            Have a project in mind? We'd love to hear about it. Whether it's a
                            brand film, event coverage, or creative collaboration, let's discuss
                            how we can bring your vision to life.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/60 mb-1">Email</div>
                                    <a href="mailto:hello@cinematic.com" className="text-white hover:text-white/80 transition-colors">
                                        reevixmedia@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div className=''>
                                    <div className="text-sm text-white/60 mb-1">Phone</div>
                                    <div className='flex gap-2'>
                                        <a href="tel:+918788621661" className="text-white hover:text-white/80 transition-colors">
                                            +91 8788621661
                                        </a>
                                        <span>|</span>
                                        <a href="tel:+919284046657" className="text-white hover:text-white/80 transition-colors">
                                            +91 9284046657
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-white/60 mb-1">Location</div>
                                    <div className="text-white">Pune <sup>🇮🇳</sup></div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 pt-12 border-t border-white/10">
                            <div className="text-sm text-white/60 mb-4">Follow my work</div>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    YouTube
                                </a>
                                <a
                                    href="#"
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-zinc-900/30 p-8 md:p-10 border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-white text-black hover:bg-white/90 transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
