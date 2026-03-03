/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Video, 
  BookOpen, 
  Library, 
  ChevronRight, 
  CirclePlay, 
  CircleCheck, 
  Users, 
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Accessibility,
  MonitorPlay,
  FileText,
  GraduationCap,
  Target,
  Rocket,
  Globe,
  Briefcase,
  FileCheck,
  ShieldCheck
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-display text-brand-700 tracking-tight">
              Novaelp
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}>Home</Link>
            <Link to="/solutions" className={`text-sm font-medium transition-colors ${location.pathname === '/solutions' ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}>Solutions</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}>About</Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors ${location.pathname === '/blog' ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}>Blog</Link>
            <Link to="/get-a-demo" className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-md hover:shadow-lg active:scale-95">
              Get A Demo
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">Home</Link>
          <Link to="/solutions" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">Solutions</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">About</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">Blog</Link>
          <Link to="/get-a-demo" onClick={() => setIsOpen(false)} className="w-full bg-brand-600 text-white px-6 py-3 rounded-xl text-base font-semibold block text-center">
            Get A Demo
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <span className="text-2xl font-bold font-display text-brand-700 tracking-tight mb-6 block">
              Novaelp
            </span>
            <p className="text-slate-500 max-w-xs mb-8">
              Empowering the next generation of learners through high-quality digital instruction and professional video content.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-100 hover:text-brand-600 transition-colors cursor-pointer">
                <Users size={20} />
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-brand-100 hover:text-brand-600 transition-colors cursor-pointer">
                <CirclePlay size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/solutions" className="hover:text-brand-600 transition-colors">Video Production</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-600 transition-colors">Digital Curriculum</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-600 transition-colors">LMS Integration</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-600 transition-colors">Teacher Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/about" className="hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
              <li><Link to="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
              <li><Link to="/get-a-demo" className="hover:text-brand-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:row justify-between items-center text-slate-400 text-xs">
          <p>© 2026 Novaelp. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <CircleCheck size={14} className="text-emerald-500" />
            <span>SOC2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
      <Icon className="text-brand-600 group-hover:text-white transition-colors" size={28} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {description}
    </p>
    <Link to="/get-a-demo" className="inline-flex items-center text-brand-600 font-bold hover:underline">
      Learn more <ArrowRight size={16} className="ml-2" />
    </Link>
  </motion.div>
);

const Home = () => {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--color-brand-50),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_bottom_left,var(--color-brand-50),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-6">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
                <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Trusted by 500+ Schools</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Transform Your School with <span className="text-brand-600">Premium</span> Digital Content
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Novaelp empowers educators with professional video instruction and high-impact digital materials designed to boost student engagement and learning outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/get-a-demo" className="bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 flex items-center justify-center group">
                  Request a Demo
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                  <CirclePlay className="mr-2 text-brand-600" />
                  Watch Overview
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Students using digital materials" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center space-x-4">
                    <div className="bg-brand-100 p-2 rounded-lg">
                      <Video className="text-brand-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">New: Interactive Science Series</p>
                      <p className="text-xs text-slate-500">Available for grades 6-12</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Solutions for Modern Schools</h2>
            <p className="text-lg text-slate-600">
              We bridge the gap between traditional teaching and digital excellence with tools designed for the classroom of tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Video}
              title="Video Content"
              description="Professional-grade instructional videos produced by educational experts. High-definition content that simplifies complex concepts."
              delay={0.1}
            />
            <FeatureCard 
              icon={BookOpen}
              title="Digital Materials"
              description="Interactive worksheets, e-books, and multimedia presentations that align with national standards and curriculum goals."
              delay={0.2}
            />
            <FeatureCard 
              icon={Library}
              title="Resource Center Setup"
              description="Custom-built digital libraries for your school. Organize, manage, and distribute content seamlessly to students and staff."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-brand-200 text-sm uppercase tracking-widest font-semibold">Teacher Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1.2M</p>
              <p className="text-brand-200 text-sm uppercase tracking-widest font-semibold">Students Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-brand-200 text-sm uppercase tracking-widest font-semibold">Partner Schools</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15k+</p>
              <p className="text-brand-200 text-sm uppercase tracking-widest font-semibold">Video Lessons</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to elevate your school's digital experience?</h2>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                Join hundreds of forward-thinking schools that have already transformed their classrooms with Novaelp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-a-demo" className="bg-brand-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200">
                  Get Started Now
                </Link>
                <Link to="/get-a-demo" className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-slate-50 transition-all">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Solutions = () => {
  const offerings = [
    {
      icon: Video,
      title: "Video Content",
      description: "High-quality, curriculum-aligned video content designed to engage students and simplify complex educational topics. Our production team ensures every frame serves a pedagogical purpose.",
      features: ["4K Resolution", "Curriculum Aligned", "Expert Presenters", "Interactive Overlays"]
    },
    {
      icon: FileText,
      title: "Digital Materials",
      description: "Comprehensive digital resources including interactive worksheets, e-books, and assessments that provide immediate feedback to students and data to teachers.",
      features: ["Interactive PDF/Web", "Auto-grading", "Cross-platform", "LMS Compatible"]
    },
    {
      icon: GraduationCap,
      title: "Library Educational Materials",
      description: "A vast repository of reference materials, research guides, and supplementary resources that turn any school library into a modern digital research hub.",
      features: ["Searchable Database", "Citation Tools", "Multi-language Support", "Offline Access"]
    },
    {
      icon: Accessibility,
      title: "Digital Products for Special Needs",
      description: "Specially designed digital tools and content that cater to diverse learning requirements, ensuring every student has equal access to high-quality education.",
      features: ["Screen Reader Ready", "High Contrast Modes", "Simplified UI", "Alternative Inputs"]
    },
    {
      icon: MonitorPlay,
      title: "Pre-Recorded Video Lessons",
      description: "Ready-to-use video lessons covering core subjects. Perfect for flipped classrooms, substitute teaching, or student self-paced learning.",
      features: ["Subject Mastery", "Step-by-step Guides", "Downloadable Notes", "Quiz Integration"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-brand-600">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Empowering educators with world-class digital tools and content designed for the modern classroom.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {offerings.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="flex-1">
              <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="text-brand-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{item.title}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {item.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center space-x-2">
                    <CircleCheck className="text-brand-500" size={18} />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-slate-100 rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 relative group">
                <img 
                  src={`https://picsum.photos/seed/${item.title.replace(/\s/g, '')}/800/450`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Centered Get A Demo Button */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/get-a-demo" className="bg-brand-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-brand-700 transition-all shadow-2xl hover:shadow-brand-200 active:scale-95 inline-block">
            Get A Demo
          </Link>
          <p className="mt-6 text-slate-500 font-medium">Experience the Novaelp difference today.</p>
        </motion.div>
      </section>
    </div>
  );
};

const About = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Professional cinematic content for educational and corporate needs."
    },
    {
      icon: BookOpen,
      title: "Digital Products",
      description: "Interactive learning materials and curriculum-aligned digital resources."
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, high-performance web solutions tailored for schools and businesses."
    },
    {
      icon: Briefcase,
      title: "Human Resources",
      description: "Strategic HR management and talent acquisition for the educational sector."
    },
    {
      icon: FileCheck,
      title: "Business Registration",
      description: "Streamlined legal and administrative support for new educational ventures."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-8">
              Innovating Education, <span className="text-brand-600">Empowering</span> Futures.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Novaelp is a multifaceted educational technology and business solutions firm. We started with a simple goal: to make high-quality education accessible through digital innovation. Today, we've grown into a comprehensive partner for schools and businesses alike.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="Team member"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-700">Join our community of 500+ partners</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Novaelp Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-3xl font-bold text-brand-600 mb-1">10+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-brand-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the global leader in educational transformation, where every student has access to immersive, high-quality digital learning experiences that prepare them for the challenges of the 21st century.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-600 p-12 rounded-[2.5rem] shadow-xl text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Rocket className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-brand-50 leading-relaxed">
                To empower schools and businesses by providing innovative digital content, professional development, and strategic business solutions that drive growth, efficiency, and excellence in education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Beyond Digital Content</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Novaelp provides a holistic ecosystem of services to support your institution's growth and operational success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-600 transition-colors">
                <service.icon className="text-brand-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Novaelp?</h2>
              <div className="space-y-6">
                {[
                  { title: "Pedagogical Excellence", desc: "Every product is vetted by educational experts." },
                  { title: "End-to-End Support", desc: "From registration to daily digital operations." },
                  { title: "Cutting-edge Tech", desc: "We use the latest tools to keep you ahead." }
                ].map((value, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-brand-500/20 p-2 rounded-lg mt-1">
                      <ShieldCheck className="text-brand-300" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{value.title}</h4>
                      <p className="text-brand-200 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-full absolute inset-0 animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" 
                alt="Collaboration"
                className="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      title: "Digital Education Taking Over: Why Schools Must Adapt Now",
      excerpt: "The landscape of education is shifting rapidly. Discover why digital-first strategies are no longer optional for modern institutions.",
      date: "May 15, 2026",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      content: `
        Digital education is no longer a futuristic concept; it is the current reality. As technology continues to evolve, the traditional classroom model is being augmented—and in some cases, replaced—by digital-first strategies. 

        ### Why the Shift?
        The primary driver behind this takeover is accessibility. Digital platforms allow students to learn at their own pace, revisit complex topics through video instruction, and access a world of resources that were previously gated by geography or cost.

        ### Benefits for Schools
        For institutions, adopting digital education tools like those provided by Novaelp means:
        - **Scalability**: Reach more students without increasing physical infrastructure.
        - **Data-Driven Insights**: Track student progress in real-time through interactive materials.
        - **Engagement**: Multimedia content resonates more deeply with Gen Z and Gen Alpha learners.

        The transition might seem daunting, but with the right partners, schools can navigate this change seamlessly, ensuring they remain relevant and effective in a digital-first world.
      `
    },
    {
      title: "You Too Can Start an Online School: A Step-by-Step Guide",
      excerpt: "From business registration to content creation, learn how Novaelp can help you launch your own digital academy.",
      date: "May 22, 2026",
      category: "Entrepreneurship",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      content: `
        The barriers to entry for starting an educational institution have never been lower. With the rise of e-learning, anyone with expertise and a passion for teaching can launch an online school.

        ### 1. Define Your Niche
        Success starts with specialization. Whether it's K-12 tutoring, professional certification, or creative arts, identifying a specific need is crucial.

        ### 2. Legal and Administrative Setup
        This is where many stumble. Novaelp offers **Business Registration** and **Human Resources** support to ensure your academy is built on a solid legal foundation from day one.

        ### 3. Content is King
        To stand out, you need premium content. Our **Video Production** and **Digital Materials** teams can help you create a curriculum that rivals established universities.

        ### 4. Choose Your Platform
        A custom website or a specialized LMS? Novaelp's **Website Development** team can build a high-performance platform tailored to your brand.

        Starting an online school is a journey of innovation. With Novaelp as your partner, you have access to the tools and expertise needed to turn your vision into a thriving digital reality.
      `
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-slate-900 mb-6"
        >
          Novaelp <span className="text-brand-600">Blog</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Insights, trends, and guides for the future of digital education.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center text-slate-400 text-sm mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={post.title.includes("Digital Education") ? "/blog/digital-education-taking-over" : post.title.includes("Online School") ? "/blog/start-an-online-school" : "#"} 
                    className="text-brand-600 font-bold flex items-center hover:underline group"
                  >
                    Read Full Article
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Ahead of the Curve</h2>
            <p className="text-brand-200 mb-10 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights on digital education and school management.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPost = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-brand-600 font-bold mb-12 hover:underline group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <article className="prose prose-slate lg:prose-xl max-w-none">
          <header className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Trends
              </span>
              <span className="text-slate-400 text-sm">May 15, 2026 • 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
              Digital Education Taking Over: Why Schools Must Adapt Now
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed italic">
              The landscape of education is shifting rapidly. Discover why digital-first strategies are no longer optional for modern institutions.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200" 
            alt="Digital Classroom" 
            className="w-full h-auto rounded-[3rem] shadow-2xl mb-16"
            referrerPolicy="no-referrer"
          />

          <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-slate-900">The Unstoppable Rise of the Digital Classroom</h2>
            <p>
              For decades, the traditional classroom remained largely unchanged. A teacher at the front, rows of desks, and physical textbooks were the hallmarks of education. However, the last few years have accelerated a transformation that was already underway. Digital education is no longer a supplementary tool; it is becoming the backbone of modern learning.
            </p>
            <p>
              The integration of technology into education—often referred to as EdTech—has moved beyond simple computer labs. Today, it encompasses everything from AI-driven personalized learning platforms to immersive virtual reality experiences that bring history and science to life.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">1. Breaking the Barriers of Accessibility</h3>
            <p>
              One of the most significant advantages of digital education is its ability to democratize learning. In the past, high-quality educational resources were often restricted to elite institutions or specific geographic locations. Digital platforms have shattered these walls.
            </p>
            <p>
              With a stable internet connection, a student in a rural village can access the same world-class lectures and materials as a student in a major metropolitan hub. This shift is not just about convenience; it's about equity. By providing digital materials and pre-recorded video lessons, schools can ensure that every student has the resources they need to succeed, regardless of their circumstances.
            </p>

            <h4 className="text-xl font-bold text-slate-900">The Power of Asynchronous Learning</h4>
            <p>
              Asynchronous learning—where students engage with content at their own pace—is a game-changer. Digital education allows for the "flipped classroom" model, where students watch instructional videos at home and use classroom time for active discussion and problem-solving. This approach respects individual learning speeds and reduces the pressure on students who may need more time to grasp complex concepts.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
              alt="Student using tablet" 
              className="w-full h-auto rounded-[3rem] shadow-xl my-16"
              referrerPolicy="no-referrer"
            />

            <h2 className="text-3xl font-bold text-slate-900">2. Enhancing Engagement Through Multimedia</h2>
            <p>
              Today's students are digital natives. They have grown up in a world of instant information and high-quality multimedia content. Expecting them to remain engaged with static textbooks for hours on end is increasingly unrealistic.
            </p>
            <p>
              Digital education leverages the power of video, animation, and interactivity to capture and hold student attention. Professional video content, like that produced by Novaelp, simplifies complex educational topics through visual storytelling. When a student can see a biological process in 3D animation or watch a historical event reconstructed through cinematic video, their retention and understanding improve significantly.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">3. Data-Driven Insights for Educators</h3>
            <p>
              In a traditional setting, a teacher might only realize a student is struggling after a failed exam. Digital platforms provide real-time data that allows for immediate intervention.
            </p>
            <p>
              Interactive worksheets and digital assessments can track exactly where a student is spending their time, which questions they are getting wrong, and where their strengths lie. This data empowers teachers to become facilitators of learning, providing targeted support where it's needed most.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">4. Preparing Students for a Digital Workforce</h2>
            <p>
              The ultimate goal of education is to prepare students for life beyond the classroom. The modern workforce is almost entirely digital. By integrating digital tools into the curriculum now, schools are teaching students essential skills like digital literacy, online collaboration, and technical problem-solving.
            </p>
            <p>
              Adaptability is the most valuable skill in the 21st century. Schools that fail to adapt to digital education are, in effect, failing to prepare their students for the reality of the modern world.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Conclusion: The Path Forward</h2>
            <p>
              The takeover of digital education is not a threat to teachers; it is an evolution of their role. Technology is a powerful ally that can handle the repetitive tasks of information delivery, freeing up educators to focus on mentorship, critical thinking, and emotional support.
            </p>
            <p>
              At Novaelp, we believe that the future of education is a blend of human expertise and digital innovation. Schools that embrace this change today will be the leaders of tomorrow. The question is no longer *if* schools should adapt, but how quickly they can do so to ensure no student is left behind in the digital age.
            </p>

            <div className="bg-brand-50 p-12 rounded-[3rem] mt-16 border border-brand-100">
              <h3 className="text-2xl font-bold text-brand-900 mb-4">Ready to Start Your Digital Transformation?</h3>
              <p className="text-brand-700 mb-8">
                Novaelp provides the professional video content, digital materials, and technical expertise you need to modernize your institution.
              </p>
              <Link to="/get-a-demo" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all inline-block">
                Request a Demo Today
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const BlogPostEntrepreneurship = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-brand-600 font-bold mb-12 hover:underline group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <article className="prose prose-slate lg:prose-xl max-w-none">
          <header className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                Entrepreneurship
              </span>
              <span className="text-slate-400 text-sm">May 22, 2026 • 15 min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
              You Too Can Start an Online School: A Step-by-Step Guide
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed italic">
              From business registration to content creation, learn how Novaelp can help you launch your own digital academy.
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1200" 
            alt="Person working on laptop" 
            className="w-full h-auto rounded-[3rem] shadow-2xl mb-16"
            referrerPolicy="no-referrer"
          />

          <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-slate-900">The Era of the Digital Academy</h2>
            <p>
              The landscape of education has undergone a seismic shift. No longer is the privilege of starting a school reserved for multi-million dollar corporations or government entities. Today, the "Digital Academy" is a viable, profitable, and highly impactful business model for anyone with expertise to share.
            </p>
            <p>
              Whether you're an expert in mathematics, a professional coder, a creative artist, or a corporate trainer, the tools to reach a global audience are at your fingertips. But where do you start? This guide breaks down the journey from concept to a thriving online institution.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Step 1: Identify Your Niche and Audience</h2>
            <p>
              The most successful online schools don't try to teach everything to everyone. They specialize. Before you register a business name, you must identify your "Unique Value Proposition" (UVP).
            </p>
            <h3 className="text-2xl font-bold text-slate-900">Finding Your "Sweet Spot"</h3>
            <p>
              Ask yourself: What do I know that others are willing to pay to learn? Is it K-12 supplementary tutoring? Is it high-end corporate leadership training? Or perhaps it's a vocational skill like digital marketing or sustainable farming.
            </p>
            <p>
              Once you have your niche, define your target persona. Are they parents looking for better math scores for their children? Or are they mid-career professionals looking to pivot into tech? Understanding your audience dictates your tone, your pricing, and your marketing strategy.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Step 2: Legal Foundation and Business Registration</h2>
            <p>
              An online school is a business, and it needs a solid legal foundation. This is often the part that intimidates aspiring educational entrepreneurs the most.
            </p>
            <p>
              You need to decide on a business structure (LLC, Corporation, etc.), register your brand name, and ensure you comply with educational regulations in your jurisdiction. <strong>Novaelp's Business Registration services</strong> are specifically designed to handle this administrative heavy lifting, allowing you to focus on what you do best: teaching.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Step 3: Curriculum Design and Content Creation</h2>
            <p>
              In the digital world, <strong>Content is King</strong>. Your curriculum is your product. It must be structured, engaging, and, most importantly, effective.
            </p>
            <h3 className="text-2xl font-bold text-slate-900">The Power of Professional Video</h3>
            <p>
              While you can start with a webcam and a microphone, premium schools require premium content. High-quality instructional videos significantly increase student retention and perceived value.
            </p>
            <p>
              At Novaelp, we specialize in <strong>Professional Video Production</strong> for educators. We help you script, film, and edit cinematic lessons that make complex topics easy to digest. Pair these with interactive digital materials—worksheets, quizzes, and e-books—to create a holistic learning experience.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
              alt="Classroom setting" 
              className="w-full h-auto rounded-[3rem] shadow-xl my-16"
              referrerPolicy="no-referrer"
            />

            <h2 className="text-3xl font-bold text-slate-900">Step 4: Choosing and Building Your Platform</h2>
            <p>
              Where will your students learn? You have two main options:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li><strong>Third-Party Marketplaces:</strong> Platforms like Udemy or Coursera offer an existing audience but take a large cut of your revenue and limit your branding.</li>
              <li><strong>Custom Learning Management Systems (LMS):</strong> Building your own platform gives you 100% control over the user experience, pricing, and data.</li>
            </ul>
            <p>
              Novaelp's <strong>Website Development team</strong> can build a custom, high-performance LMS tailored to your brand, ensuring a seamless experience from landing page to lesson completion.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Step 5: Marketing and Scaling Your Academy</h2>
            <p>
              Once your school is live, you need students. Digital marketing is a multi-faceted discipline involving SEO, social media, and email marketing.
            </p>
            <h4 className="text-xl font-bold text-slate-900">Building a Community</h4>
            <p>
              The most successful online schools are communities, not just content repositories. Use webinars, live Q&A sessions, and student forums to foster engagement. As your student base grows, you may need to scale your operations. This is where <strong>Novaelp's Human Resources support</strong> comes in, helping you find and manage the right teaching and administrative talent.
            </p>

            <h2 className="text-3xl font-bold text-slate-900">Conclusion: Your Vision, Our Expertise</h2>
            <p>
              Starting an online school is an ambitious journey, but you don't have to walk it alone. From the first legal document to the final video edit, Novaelp is your end-to-end partner in educational innovation.
            </p>
            <p>
              The world is waiting for what you have to teach. Are you ready to build your legacy?
            </p>

            <div className="bg-brand-900 text-white p-12 rounded-[3rem] mt-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-20" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Launch Your Academy with Novaelp</h3>
                <p className="text-brand-200 mb-8 text-lg">
                  Get the legal, technical, and creative support you need to turn your expertise into a world-class online school.
                </p>
                <Link to="/get-a-demo" className="bg-white text-brand-900 px-10 py-4 rounded-full font-bold hover:bg-brand-50 transition-all inline-block">
                  Talk to a Launch Expert
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const GetADemo = () => {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Failed to submit demo request:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Get A <span className="text-brand-600">Demo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Discover how Novaelp can transform your school's digital learning environment. Fill out the form below and our team will be in touch.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8">
                  <CircleCheck size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
                <p className="text-xl text-slate-600 max-w-md">
                  Thank you for your interest. Your request has been sent to our team and we will reach out via your email or phone very soon.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-10 text-brand-600 font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form 
                className="space-y-8" 
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">First Name *</label>
                  <input type="text" name="firstName" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Last Name *</label>
                  <input type="text" name="lastName" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Work Email *</label>
                  <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="jane@school.edu" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Job Title *</label>
                  <input type="text" name="jobTitle" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Principal / IT Director" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">School / Organization *</label>
                  <input type="text" name="organization" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Springfield Elementary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                  <input type="tel" name="phone" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="+234 800 000 0000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">School Level *</label>
                  <select name="schoolLevel" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all appearance-none">
                    <option value="">Select Level</option>
                    <option value="Elementary">Elementary School</option>
                    <option value="Middle">Middle School</option>
                    <option value="High">High School</option>
                    <option value="HigherEd">Higher Education</option>
                    <option value="Corporate">Corporate Training</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Number of Students *</label>
                  <select name="studentCount" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all appearance-none">
                    <option value="">Select Range</option>
                    <option value="1-100">1 - 100</option>
                    <option value="101-500">101 - 500</option>
                    <option value="501-1000">501 - 1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Country *</label>
                <select name="country" required className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all appearance-none">
                  <option value="">Select a country</option>
                  <optgroup label="Africa">
                    <option value="Algeria">Algeria</option>
                    <option value="Angola">Angola</option>
                    <option value="Benin">Benin</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo (Congo-Brazzaville)</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Mali">Mali</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Togo">Togo</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </optgroup>
                  <optgroup label="Other Regions">
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </optgroup>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">How can we help? *</label>
                <textarea name="message" required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Tell us about your school's needs..."></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" name="consent" id="consent" className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <label htmlFor="consent" className="text-sm text-slate-500 leading-relaxed">
                  I agree to receive communications from Novaelp regarding products and services. I can unsubscribe at any time. View our <a href="#" className="text-brand-600 underline">Privacy Policy</a>.
                </label>
              </div>

              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-brand-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-700 transition-all shadow-xl hover:shadow-brand-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Submit Request"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-center font-medium">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
            )}
          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-50 p-3 rounded-xl">
                    <Globe className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Global Headquarters</p>
                    <p className="text-slate-500 text-sm">123 Education Way, Suite 500<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-50 p-3 rounded-xl">
                    <Users className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Support Team</p>
                    <p className="text-slate-500 text-sm">support@novaelp.com<br />+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white">
              <h3 className="text-xl font-bold mb-6">Global Presence</h3>
              <p className="text-brand-200 text-sm leading-relaxed mb-8">
                Novaelp serves educational institutions across 25+ countries. Our team is available around the clock to ensure your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-brand-500 pl-4">
                  <p className="font-bold">North America</p>
                  <p className="text-xs text-brand-300">New York, SF, Toronto</p>
                </div>
                <div className="border-l-2 border-brand-500 pl-4">
                  <p className="font-bold">Europe</p>
                  <p className="text-xs text-brand-300">London, Berlin, Paris</p>
                </div>
                <div className="border-l-2 border-brand-500 pl-4 mt-4">
                  <p className="font-bold">Asia Pacific</p>
                  <p className="text-xs text-brand-300">Singapore, Sydney</p>
                </div>
                <div className="border-l-2 border-brand-500 pl-4 mt-4">
                  <p className="font-bold">Africa</p>
                  <p className="text-xs text-brand-300">Lagos, Johannesburg</p>
                </div>
              </div>
            </div>

            <div className="p-8 border border-slate-100 rounded-[2.5rem] bg-white text-center">
              <p className="text-slate-500 text-sm mb-4 italic">"Novaelp has been a game-changer for our district's digital strategy."</p>
              <p className="font-bold text-slate-900">— Dr. Sarah Jenkins</p>
              <p className="text-xs text-slate-400">Superintendent, Oakwood Schools</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/digital-education-taking-over" element={<BlogPost />} />
            <Route path="/blog/start-an-online-school" element={<BlogPostEntrepreneurship />} />
            <Route path="/get-a-demo" element={<GetADemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
