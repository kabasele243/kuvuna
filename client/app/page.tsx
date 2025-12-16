import Link from "next/link";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center pt-32 pb-32 overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-primary font-semibold text-sm shadow-sm border-primary/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                Kuvuna Foundation Vision
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.1] drop-shadow-sm">
                Create a new generation of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Leaders</span> & <br />
                Futurpreneurs.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light">
                Our mission is to <span className="font-semibold text-primary">Mentor, Equip, Empower, and Train</span> (M.E.E.T.) Congolese youth in Leadership and Entrepreneurship.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <Button variant="primary" className="h-14 px-10 text-lg shadow-xl shadow-primary/20">
                  Join Our Mission
                </Button>
                <Link href="#values">
                  <Button variant="outline" className="h-14 px-10 text-lg bg-white/50 backdrop-blur-sm">
                    Our Values
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Content - Floating Images/Cards */}
            <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[90%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform duration-700 ease-out z-10">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-110"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2626&q=80")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Float Card */}
              <div className="absolute bottom-10 left-0 w-[60%] p-6 glass rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Next Leadership Camp</p>
                    <p className="text-xs text-gray-500">Register Now</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[85%] rounded-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">85% Spots Filled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Section id="values" className="bg-white py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent tracking-[0.2em] uppercase mb-4">Our Core Values</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">What Drives Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Respect & Integrity", desc: "Treat others the way you want to be treated. Know and do what is right.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Social Responsibility", desc: "Act and Serve in the best interests of the community, country, and the world.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { title: "Innovative Thinking", desc: "Imagining creative and courageous solutions which respond to local and global challenges.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { title: "Collaboration", desc: "Willing to be part of a strong team with a strong impact through mentorship and peer relationships.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} /></svg>
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

      {/* Programs - Bento Grid */}
      <Section className="bg-slate-50 py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Programs</h2>
              <p className="text-xl text-gray-600">Comprehensive programs designed to foster leadership and entrepreneurship at every stage.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Youth Leadership Program */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all h-[400px]">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Youth Leadership Program</h3>
                <p className="text-white/90 mb-4">High School Program (14-19 yrs) to develop leadership/entrepreneurship skills.</p>
              </div>
            </div>

            {/* 2. Youth Leadership Center */}
            <div className="group relative overflow-hidden rounded-3xl bg-secondary h-[400px]">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="p-8 h-full flex flex-col justify-between relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-foreground mb-3">Youth Leadership Center</h3>
                  <p className="text-secondary-foreground/90 text-sm">Resources and opportunities in a healthy, clean, and dignified environment.</p>
                </div>
              </div>
            </div>

            {/* 3. Center for Community Development */}
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all h-[350px]">
              <div className="p-8 h-full flex flex-col">
                <div className="mb-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Center for Community Development</h3>
                  <p className="text-gray-600 text-sm">Support development projects to strengthen youth capabilities for sustainable growth.</p>
                </div>
                <div className="w-full h-32 rounded-xl bg-gray-100 overflow-hidden mt-6 relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}></div>
                </div>
              </div>
            </div>

            {/* 4. Kuvuna Leadership Academy */}
            <div className="group relative overflow-hidden rounded-3xl bg-primary h-[350px]">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="p-8 h-full flex flex-col justify-center relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Kuvuna Leadership Academy</h3>
                <p className="text-white/90 text-sm mb-6">9-month program for 19-25 year olds. Connect with successful community leaders.</p>
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary w-fit mx-auto">Learn More</Button>
              </div>
            </div>

            {/* 5. Kuvuna Network */}
            <div className="lg:col-span-1 group relative overflow-hidden rounded-3xl bg-gray-900 h-[350px]">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")' }}></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Kuvuna Network</h3>
                <p className="text-gray-300 text-sm">Connecting young leaders worldwide to grow successful ventures.</p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section className="bg-white py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">The visionaries behind our mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Charles Ngimbi Kuvuna", role: "Founder & Chairman" },
              { name: "Alpha Dumbi Kuvuna", role: "Co-founder & Senior Advisor" },
              { name: "Bénédicte Mundele Kuvuna", role: "President & CEO" },
              { name: "Kirk Bolen", role: "Global Advisor" },
              { name: "Cynthia Muaka", role: "Program Manager" },
              { name: "Junior Tambu", role: "Program Manager" }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-40 h-40 rounded-full bg-gray-200 mb-6 overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
                  {/* Placeholder for team images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-3xl text-gray-400 font-bold">{person.name.charAt(0)}</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900">{person.name}</h4>
                <p className="text-primary font-medium">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Message from President */}
      <Section className="bg-primary/5 py-32">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-block p-2 rounded-full bg-primary/10 text-primary mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01703V12H14.017V0H2.01703V12H7.01703V18H2.01703V21H14.017ZM24.017 21V18C24.017 16.8954 23.1216 16 22.017 16H19.017V12H24.017V0H12.017V12H17.017V18H12.017V21H24.017Z" /></svg>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 mb-8 leading-relaxed">
            "The Leadership Team at Kuvuna Foundation is committed to raise a new class of young Congolese leaders and entrepreneurs. Our mission to Mentor, Equip, Empower, Train is thrilling and challenging. We hope you will join us in supporting this great vision."
          </h2>
          <div>
            <h4 className="text-lg font-bold text-gray-900">Bénédicte Mundele Kuvuna</h4>
            <p className="text-gray-600">President & CEO</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white py-40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-gray-50 opacity-50" />
          <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border-8 border-gray-50 opacity-50" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">Ready to change a life?</h2>
          <p className="text-xl text-gray-500 mb-10">Every contribution brings us closer to a world where communities thrive on their own terms.</p>
          <div className="flex justify-center gap-6">
            <Button variant="primary" className="h-16 px-12 text-xl shadow-2xl shadow-primary/30 hover:-translate-y-1">Donate Now</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
