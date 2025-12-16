"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-gray-100/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                            K
                        </div>
                        <span className="text-xl font-bold text-primary tracking-tight">KUVUNA</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-[15px] font-medium text-gray-600 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="primary" className="shadow-lg shadow-primary/20 hover:shadow-primary/30">Donate Now</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="md:hidden glass border-t border-gray-100/20 absolute w-full">
                    <div className="px-4 py-6 space-y-4">
                        {['Home', 'About Us', 'Programs', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                className="block text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button variant="primary" className="w-full justify-center">Donate Now</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
