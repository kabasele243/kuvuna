import Link from "next/link";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

export default function About() {
    return (
        <div className="flex flex-col w-full bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full py-24 md:py-32 flex items-center bg-white overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wider uppercase">
                            About Us
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                            Raising Leaders & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Futurpreneurs</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                            We are dedicated to mentoring, equipping, empowering, and training the next generation of Congolese youth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <Section className="bg-slate-50 py-20 md:py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Vision */}
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col justify-center">
                            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Create a new generation of leaders and futurpreneurs.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-primary p-10 rounded-3xl shadow-xl shadow-primary/20 h-full flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
                            <p className="text-xl text-white/90 leading-relaxed relative z-10">
                                Kuvuna Foundation mission is to <span className="font-bold text-white">Mentor, Equip, Empower, and Train (M.E.E.T.)</span> Congolese youth in Leadership and Entrepreneurship.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values Section */}
            <Section className="bg-white py-24 md:py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Core Values</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900">What Drives Us Forward</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Respect and Integrity",
                                desc: "Treat others the way you want to be treated. Know and do what is right.",
                                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                title: "Social Responsibility",
                                desc: "Act and Serve in the best interests of the community, country, and the world.",
                                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            },
                            {
                                title: "Innovative Thinking",
                                desc: "Imagining creative and courageous solutions which respond to local and global challenges.",
                                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            },
                            {
                                title: "Collaboration",
                                desc: "Willing to be part of a strong team with a strong impact through mentorship and peer relationships.",
                                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            }
                        ].map((value, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Programs Section */}
            <Section className="bg-slate-50 py-24 md:py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Programs</h2>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            We offer comprehensive programs designed to foster leadership and entrepreneurship at every stage of development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Youth Leadership Program</h3>
                                <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow">
                                A High School Program where students (14-19 years old) learn and develop their leadership and entrepreneurship skills to become exceptional changemakers in their communities.
                            </p>
                            <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Youth Leadership Center</h3>
                                <div className="h-1 w-12 bg-secondary rounded-full mb-4"></div>
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow">
                                The Youth Leadership Center commits to offer youths resources and opportunities in a healthy and clean environment with dignity and no discrimination.
                            </p>
                            <Button variant="outline" className="w-full">
                                Visit Center
                            </Button>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Center for Community Development</h3>
                                <div className="h-1 w-12 bg-primary rounded-full mb-4"></div>
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow">
                                Aims to create, establish, encourage and support development projects to strengthen youth capabilities for sustainable growth and progress.
                            </p>
                            <Button variant="outline" className="w-full">
                                Explore Projects
                            </Button>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kuvuna Leadership Academy</h3>
                                <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
                            </div>
                            <p className="text-gray-600 mb-8 flex-grow">
                                A 9 months program for 19 to 25 years old. Students are introduced to successful community leaders through different formats, in person or virtually.
                            </p>
                            <Button variant="outline" className="w-full">
                                Join Academy
                            </Button>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
                            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                                <div className="flex-1">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Kuvuna Network</h3>
                                        <div className="h-1 w-12 bg-gray-900 rounded-full mb-4"></div>
                                    </div>
                                    <p className="text-gray-600 mb-8">
                                        Kuvuna Network (KFN) connects young leaders worldwide to grow successful ventures. Join a global community of innovators and changemakers.
                                    </p>
                                    <Button variant="primary">
                                        Connect Now
                                    </Button>
                                </div>
                                <div className="flex-1 h-48 md:h-full w-full bg-gray-100 rounded-2xl overflow-hidden relative">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
