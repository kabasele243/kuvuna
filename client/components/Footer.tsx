import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Contact */}
                    <div className="space-y-6 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-lg">K</div>
                            <span className="text-xl font-bold tracking-tight">KUVUNA</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                            Kuvuna Foundation mission is to Mentor, Equip, Empower, and Train (M.E.E.T.) Congolese youth in Leadership and Entrepreneurship.
                        </p>
                        <div className="space-y-3 text-sm text-gray-400 pt-2">
                            <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                info@kuvuna.org
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                +243 82 17 50 056
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                                    Our Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-involved" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                                    Get Involved
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-[15px]">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">Join Us</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Stay updated with our latest impact stories.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Kuvuna Foundation. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
