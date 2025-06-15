import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, FileText, ExternalLink, MapPin, Calendar } from 'lucide-react';
import profilePic from '../src/images/profile_pic.jpg';
import img100xPay from '../src/images/100xpay_img.webp';
import imgDrawcelia from '../src/images/Drawcelia_img.png'
import imgbrainly from '../src/images/brainly_img.png'

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Personal Expense Tracker",
      description: "A full-stack expense tracker built with Typescript, React and Node.js. Features include user authentication, expense management, inventory management, and admin dashboard.",
      tech: ["Typescript","React", "Node.js", "Postgresql", "Prisma", "Tailwind CSS"],
      liveLink: "https://personal-expense-tracker-xi.vercel.app/",
      githubLink: "https://github.com/Rohan5050/Personal-Expense-Tracker",
      image: img100xPay
    },
    {
      title: "Drawcelia",
      description: "A collaborative sketch application with real-time updates. Users can create drawings and sketches with intuitive drawing tool.",
      tech: ["Nextjs", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      liveLink: "https://drawcelia-frontend-three.vercel.app/",
      githubLink: "https://github.com/Rohan5050/Drawcelia-Frontend",
      image: imgDrawcelia
    },
    {
      title: "Second Brain",
      description: "This application allows users to store and manage important tweets, URLs, and YouTube videos. It's designed to help users organize their favorite content for personal use or share it with others effortlessly.",
      tech: ["React", "REST APIs", "Nodejs", "Tailwind CSS", "Mongodb"],
      liveLink: "https://brainly-frontend-three.vercel.app/signup",
      githubLink: "https://github.com/Rohan5050/Second-Brain",
      image: imgbrainly
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Manifest IQ",
      //period: "",
      location: "Remote",
      description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with designers and product managers to deliver user-centric solutions.",
      current: true
    },
    {
      title: "Java Full Stack Developer",
      company: "Q Spiders",
      //period: "2020 - 2021",
      location: "Delhi, India",
      description: "Developed responsive websites and web applications. Focused on performance optimization and cross-browser compatibility.",
      current: false
    }
  ];

  const blogs = [
    {
      title: "Modern React Patterns: Building Maintainable Applications",
      description: "Exploring advanced React patterns including compound components, render props, and custom hooks. Learn how to write cleaner, more maintainable code.",
      date: "January 15, 2024",
      readTime: "10 min read",
      //link: "#"
    },
    {
      title: "TypeScript Best Practices for Frontend Development",
      description: "A comprehensive guide to using TypeScript effectively in frontend projects. Covers type safety, performance optimization, and common pitfalls to avoid.",
      date: "December 20, 2023",
      readTime: "8 min read",
      //link: "#"
    },
    {
      title: "The Evolution of CSS: From Flexbox to Grid and Beyond",
      description: "Understanding modern CSS layout techniques and how they've revolutionized web design. Practical examples and browser support considerations included.",
      date: "November 10, 2023",
      readTime: "12 min read",
      //link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Grid Background with Animation */}
      <div 
        className="absolute inset-0 opacity-10 animate-grid"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Profile Section with Fade In */}
        <div className="mb-12 sm:mb-16 animate-fadeIn">
          {/* Profile Image Frame with Hover Effect */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500">
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 animate-slideDown">Rohan Vohra</h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-2 animate-slideDown animation-delay-100">Full Stack Developer</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-gray-400 mb-6 animate-slideDown animation-delay-200">
              <div className="flex items-center gap-1 hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 animate-pulse" />
                <span>Delhi, India</span>
              </div>
              <div className="flex items-center gap-1 hover:text-white transition-colors duration-300">
                <Calendar className="w-4 h-4 animate-pulse" />
                <span>Available for work</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed text-sm sm:text-base animate-fadeIn animation-delay-300">
              Passionate full stack developer building scalable web applications. 
              I specialize in React, Node.js, and cloud technologies. I love creating efficient, user-friendly 
              solutions that make a real impact.
            </p>
            
            {/* Social Links with Hover Effects */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 animate-fadeIn animation-delay-400">
              {[
                { name: 'GitHub', icon: Github, url: 'https://github.com/Rohan5050' },
                { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/rohanvohra055/' },
                { name: 'Twitter', icon: Twitter, url: 'https://x.com/Ron05050' },
                { name: 'Email', icon: Mail, url: 'mailto: rohanvohra055@gmail.com' },
                { name: 'Resume', icon: FileText, /*url: '#'*/ }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="p-2 sm:p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 border border-gray-700 hover:border-blue-500 hover:scale-110 hover:rotate-3 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Container with Enhanced Animations */}
        <div className="relative">
          {/* Progress Line with Enhanced Effects - Hidden on Mobile */}
          <div className="hidden sm:block absolute left-8 top-0 w-0.5 z-0" style={{ height: 'calc(100% - 8rem)' }}>
            <div 
              className="absolute inset-0 bg-gray-700 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, #374151 0%, #374151 100%)'
              }}
            />
            <div 
              className="absolute w-6 h-6 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, #3b82f6 0%, rgba(59, 130, 246, 0.8) 40%, transparent 80%)',
                boxShadow: '0 0 20px #3b82f6, 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)',
                left: '-12px',
                transform: `translateY(${scrollProgress * (document.documentElement.scrollHeight - window.innerHeight * 1.5)}px)`,
                opacity: scrollProgress > 0.02 ? 1 : 0,
                transition: 'transform 0.3s ease-out'
              }}
            />
            <div 
              className="absolute w-1 rounded-full transition-all duration-300"
              style={{
                background: 'linear-gradient(to bottom, #3b82f6, rgba(59, 130, 246, 0.5), transparent)',
                left: '-2px',
                top: '0',
                height: `${scrollProgress * (document.documentElement.scrollHeight - window.innerHeight * 1.5)}px`,
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                opacity: scrollProgress > 0.02 ? 1 : 0
              }}
            />
          </div>

          {/* Experience Section with Staggered Animations */}
          <section className="mb-12 sm:mb-16 relative sm:pl-16">
            <div className="hidden sm:block absolute left-6 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10 border-2 border-gray-900 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 animate-slideRight">Experience</h2>
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold group">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          {exp.title}
                        </span>
                      </h3>
                      <p className="text-blue-400 transition-colors duration-300 hover:text-blue-300">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-gray-400">{exp.period}</p>
                      {exp.current && (
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mt-1 animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section with Enhanced Animations */}
          <section className="mb-12 sm:mb-16 relative sm:pl-16">
            <div className="hidden sm:block absolute left-6 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10 border-2 border-gray-900 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 animate-slideRight">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {project.title}
                      </span>
                    </h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a 
                        href={project.liveLink} 
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transform text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="flex-1 border border-gray-600 text-gray-300 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:bg-gray-800/50 hover:scale-105 transform text-sm sm:text-base"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Section with Enhanced Animations */}
          <section className="mb-12 sm:mb-16 relative sm:pl-16">
            <div className="hidden sm:block absolute left-6 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10 border-2 border-gray-900 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 animate-slideRight">Latest Blog Posts</h2>
            <div className="space-y-4 sm:space-y-6">
              {blogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {blog.title}
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{blog.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                    <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm">
                      <span className="hover:text-white transition-colors duration-300">{blog.date}</span>
                      <span className="hover:text-white transition-colors duration-300">{blog.readTime}</span>
                    </div>
                    <a 
                      href={blog.link} 
                      className="text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base"
                    >
                      Read more 
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer with Animation */}
          <footer className="text-center text-gray-400 pt-6 sm:pt-8 border-t border-gray-800 mt-12 sm:mt-16 animate-fadeIn">
            <p className="text-sm sm:text-base">© 2025 Build By Rohan Vohra</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
