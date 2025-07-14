'use client'
import { Github, Linkedin, Code, Trophy, Mail, Globe, ExternalLink, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

interface LinkItem {
  title: string
  url: string
  icon: React.ReactNode
  description?: string
  gradient: string
  shadowColor: string
  isPopular?: boolean
}

interface FloatingOrb {
  id: number
  size: number
  x: number
  y: number
  delay: number
  color: string
}

export default function LinktreeProfile() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeLink, setActiveLink] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const links: LinkItem[] = [
    {
      title: "Portfolio",
      url: "https://yashsuthar.com",
      icon: <Globe size={20} />,
      description: "View my latest projects",
      gradient: "from-violet-500 to-purple-600",
      shadowColor: "shadow-violet-500/30"
    },
    {
      title: "Collab IDE",
      url: "https://collab-ide.yashsuthar.com",
      icon: <Code size={20} />,
      description: "🚀 Real-time collaborative IDE platform",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/40",
      isPopular: true
    },
    {
      title: "GitHub",
      url: "https://github.com/yashsuthar00",
      icon: <Github size={20} />,
      description: "Open source contributions",
      gradient: "from-slate-700 to-slate-900",
      shadowColor: "shadow-slate-500/30"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/yashsuthar00",
      icon: <Linkedin size={20} />,
      description: "Professional network",
      gradient: "from-blue-500 to-blue-700",
      shadowColor: "shadow-blue-500/30"
    },
    {
      title: "LeetCode",
      url: "https://leetcode.com/yashsuthar00",
      icon: <Code size={20} />,
      description: "Coding challenges solved",
      gradient: "from-orange-400 to-red-500",
      shadowColor: "shadow-orange-500/30"
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/profile/yashsuthar00",
      icon: <Trophy size={20} />,
      description: "Competitive programming on Codeforces",
      gradient: "from-blue-600 to-indigo-700",
      shadowColor: "shadow-blue-600/30"
    },
    {
      title: "HackerRank",
      url: "https://hackerrank.com/yashsuthar00",
      icon: <Trophy size={20} />,
      description: "Competitive programming",
      gradient: "from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/30"
    },
    // {
    //   title: "Instagram",
    //   url: "https://instagram.com/yashsuthar00",
    //   icon: <Instagram size={20} />,
    //   description: "Behind the scenes",
    //   gradient: "from-pink-500 via-red-500 to-yellow-500",
    //   shadowColor: "shadow-pink-500/30"
    // },
    // {
    //   title: "Twitter",
    //   url: "https://twitter.com/yashsuthar00",
    //   icon: <Twitter size={20} />,
    //   description: "Tech thoughts & updates",
    //   gradient: "from-sky-400 to-blue-500",
    //   shadowColor: "shadow-sky-500/30"
    // },
    {
      title: "Email Me",
      url: "mailto:hello@yashsuthar.com",
      icon: <Mail size={20} />,
      description: "Let's collaborate",
      gradient: "from-emerald-400 to-cyan-500",
      shadowColor: "shadow-emerald-500/30"
    }
  ]

  const floatingOrbs: FloatingOrb[] = [
    { id: 1, size: 120, x: 15, y: 10, delay: 0, color: 'bg-gradient-to-br from-purple-400/20 to-pink-400/20' },
    { id: 2, size: 80, x: 85, y: 20, delay: 2, color: 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20' },
    { id: 3, size: 60, x: 10, y: 70, delay: 4, color: 'bg-gradient-to-br from-green-400/20 to-emerald-400/20' },
    { id: 4, size: 100, x: 80, y: 80, delay: 6, color: 'bg-gradient-to-br from-orange-400/20 to-red-400/20' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950/90 to-black relative overflow-hidden">
      {/* Floating Orbs */}
      {floatingOrbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full ${orb.color} blur-3xl animate-pulse opacity-60`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            animation: `float 8s ease-in-out infinite ${orb.delay}s`,
          }}
        />
      ))}

      {/* Cursor Glow Effect */}
      <div
        className="fixed pointer-events-none z-0 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
          borderRadius: '50%',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 max-w-md mx-auto w-full px-6 py-8 md:py-12">
          
          {/* Profile Header */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-4 group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 rounded-full animate-pulse opacity-75 blur-sm group-hover:opacity-100 transition-all duration-500" />
              <div className="relative w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-2 border-white/20 group-hover:scale-105 transition-all duration-300">
                <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent font-extrabold">
                  YS
                </span>
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Yash Suthar
            </h1>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed max-w-xs mx-auto">
              Aspiring Full Stack Developer passionate about creating innovative web solutions
            </p>
            
            {/* Status & Location */}
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 mb-6">
              <div className="flex items-center space-x-1">
                <MapPin size={12} />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="space-y-3 mb-8">
            {links.map((link, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
                onMouseEnter={() => setActiveLink(index)}
                onMouseLeave={() => setActiveLink(null)}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative block w-full rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    activeLink === index ? 'scale-105 -translate-y-1' : ''
                  }`}
                >

                  
                  {/* Popular Badge */}
                  {link.isPopular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                        ✨ Featured
                      </div>
                    </div>
                  )}

                  {/* Link Card */}
                  <div className={`relative p-4 backdrop-blur-xl border rounded-2xl transition-all duration-300 overflow-hidden group-hover:shadow-2xl ${
                    link.isPopular 
                      ? 'bg-white/15 border-white/30 shadow-lg shadow-purple-500/20' 
                      : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
                  }`}>
                    
                    {/* Enhanced Gradient Overlay for Popular Items */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} transition-opacity duration-300 rounded-2xl ${
                      link.isPopular ? 'opacity-5 group-hover:opacity-15' : 'opacity-0 group-hover:opacity-10'
                    }`} />
                    
                    {/* Enhanced Shimmer Effect */}
                    <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent to-transparent skew-x-12 ${
                      link.isPopular ? 'via-white/20' : 'via-white/10'
                    }`} />
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        
                        {/* Icon */}
                        <div className={`flex-shrink-0 p-2.5 bg-gradient-to-r ${link.gradient} rounded-xl shadow-lg ${link.shadowColor} group-hover:shadow-xl transition-all duration-300 ${
                          link.isPopular 
                            ? 'group-hover:scale-115 shadow-xl animate-pulse' 
                            : 'group-hover:scale-110'
                        }`}>
                          <div className="text-white">
                            {link.icon}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm mb-0.5 truncate group-hover:text-white/90 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-gray-400 text-xs truncate group-hover:text-gray-300 transition-colors">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-3">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>


        </div>

        {/* Footer */}
        <footer className={`text-center py-6 px-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-md mx-auto">
            <p className="text-xs text-gray-500 mb-2">
              © {new Date().getFullYear()} Yash Suthar.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateY(-15px) rotate(2deg) scale(1.05); 
          }
          66% { 
            transform: translateY(-8px) rotate(-1deg) scale(0.95); 
          }
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </div>
  )
}