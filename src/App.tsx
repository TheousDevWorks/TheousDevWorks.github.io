import React, { useState } from "react";
import {
  Code2,
  Palette,
  Infinity,
  Rocket,
  Zap,
  Star,
  Users,
  Globe,
  Mail,
  ArrowRight,
  Sparkles,
  Heart,
  Coffee,
  Monitor,
  Linkedin,
  Instagram,
  Github,
  WhatsApp,
  Phone,
} from "lucide-react";

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      type: "Full-Stack",
      color: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
    {
      title: "SaaS Dashboard",
      type: "React + Node",
      color: "bg-gradient-to-br from-blue-400 to-cyan-400",
    },
    {
      title: "Brand Identity",
      type: "Design + Web",
      color: "bg-gradient-to-br from-orange-400 to-red-400",
    },
    {
      title: "Mobile App",
      type: "React Native",
      color: "bg-gradient-to-br from-green-400 to-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-orange-200 rounded-full opacity-50 animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              TheousDevWorks.
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </a>
            {/* <a
              href="#projects"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Projects
            </a> */}
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r text-4xl sm:text-5xl sm:tracking-tight md:tracking-tight tracking-normal from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    From Sketch to Scale
                  </span>
                  <br />
                  <span className="text-gray-800 text-4xl sm:text-5xl sm:tracking-tighter md:tracking-tighter tracking-normal">
                    Full-Stack Magic at Your Service!
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  End-to-end web development and brand design, crafted by a
                  dedicated team committed to building, scaling, and supporting
                  your digital presence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Let's Build Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* <button className="border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300">
                  View My Work
                </button> */}
              </div>

              {/* Stats */}
              <div className="flex space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600">Support & Communication</div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center animate-pulse">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="text-6xl">👨‍💻</div>
                  <div className="text-lg font-semibold text-gray-700">
                    TheousDevWorks.
                  </div>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm">
                      Frontend
                    </span>
                    <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm">
                      Backend
                    </span>
                    <span className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm">
                      Design
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Do <span className="text-purple-600">Best</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we handle every aspect of your digital
              presence, <br /> so you can focus on what matters.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 mb-6">
                Full-stack web applications with modern frameworks, responsive
                design, and scalable architecture. Comfortable with any tech
                stack or programming language.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm">
                  MERN
                </span>
                <span className="bg-pink-200 text-pink-700 px-3 py-1 rounded-full text-sm">
                  MEAN
                </span>
                <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Java
                </span>
              </div>
            </div>

            {/* Logo & Branding */}
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Logo & Branding
              </h3>
              <p className="text-gray-600 mb-6">
                Crafting brand identities that resonate. From logos to
                full-scale branding systems, we bring your vision to life with
                clarity and style.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Logo Design
                </span>
                <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-sm">
                  Brand Identity
                </span>
                <span className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  UI/UX
                </span>
              </div>
            </div>

            {/* End-to-End Solutions */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Infinity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                End-to-End Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                From strategy and planning to launch and ongoing support, we
                cover it all.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm">
                  Strategy
                </span>
                <span className="bg-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-sm">
                  Deployment
                </span>
                <span className="bg-teal-200 text-teal-700 px-3 py-1 rounded-full text-sm">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section
        id="about"
        className="relative z-10 px-6 py-20 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-purple-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Here's what makes working with us special
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Zero to Launch Specialist",
                desc: "From first line of code to live deployment—fast, future-ready, and scalable.",
                color: "from-indigo-400 to-purple-400",
              },
              {
                icon: Globe,
                title: "Full-Stack Mastery",
                desc: "Frontend, backend, database & APIs—complete ownership of your web presence.",
                color: "from-green-400 to-emerald-400",
              },
              {
                icon: Star,
                title: "Pixel-Perfect Quality",
                desc: "Clean, maintainable code and flawless responsive design on every screen.",
                color: "from-purple-400 to-pink-400",
              },
              {
                icon: Zap,
                title: "Lightning-Fast Delivery",
                desc: "Quick turnaround times without cutting corners on quality or performance.",
                color: "from-yellow-400 to-orange-400",
              },
              {
                icon: Users,
                title: "Client-First Approach",
                desc: "Your goals are our roadmap —clear communication, transparency, and trust.",
                color: "from-blue-400 to-cyan-400",
              },
              {
                icon: Coffee,
                title: "Always Within Reach",
                desc: "Full support throughout the project lifecycle. we're here when you need us.",
                color: "from-red-400 to-pink-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="relative z-10 px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Recent <span className="text-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Check out some of my latest work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${project.color} rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                onClick={() => setActiveProject(index)}
              >
                <div className="h-32 bg-white bg-opacity-20 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white text-opacity-90">{project.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 px-6 py-20 bg-gradient-to-br from-purple-600 to-pink-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="text-6xl">👋</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
              Let's turn your ideas into reality. We're here to help you create
              something extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:theousdevworks@gmail.com"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Tell Us Your Idea 🚀</span>
              </a>
              <a
                href="tel:+918309985635"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>

            <div className="pt-8">
              <div className="text-white text-opacity-75">
                Available for freelance projects • Remote friendly • Quick
                response guaranteed • Flexible engagement options
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white relative z-10 px-6 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TheousDevWorks.</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-lg">
              From sketch to scale - building digital dreams, one pixel at a
              time.
            </p>
            <div className="flex justify-center space-x-6 text-2xl">
              {/* LinkedIn */}
              {/* <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin
                  size={24}
                  className="text-blue-500 hover:text-blue-300"
                />
              </a> */}

              {/* Twitter/X */}
              {/* <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <Twitter
                  size={24}
                  className="text-blue-600 hover:text-blue-300"
                />
              </a> */}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/theousdevworks"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <Instagram
                  size={24}
                  className="text-pink-500 hover:text-pink-400"
                />
              </a>

              {/* GitHub */}
              {/* <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github size={24} className="hover:text-gray-700" />
              </a> */}

              {/* Email */}
              <a href="mailto:theousdevworks@gmail.com" title="Email Us">
                <Mail size={24} className="text-red-500 hover:text-red-600" />
              </a>

              {/* WhatsApp (Custom SVG) */}
              <a
                href="https://wa.me/918309985635"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <Phone
                  size={24}
                  className="text-green-500 hover:text-green-600"
                />
              </a>
            </div>
            <p className="text-sm text-gray-500 pt-4">
              © 2025 TheousDevWorks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
