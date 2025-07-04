"use client"

import { User, BarChart3, FolderOpen, GraduationCap, X } from "lucide-react"
import { SiGit, SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiPostgresql } from "react-icons/si"
import { useState, useEffect } from "react"

const command = "cat aboutME.txt"
const output = [
  "portugal",
  "20",
  "---",
  "currently looking for an internship where I can gain hands-on professional experience, contribute to real-world projects, and continue developing my skills.",
  "I'm eager to learn, motivated by challenges, and passionate about building practical solutions! 🚀",
]

export default function Component() {
  const skills = [
    { icon: SiGit, color: "#f1502f", label: "Git" },
    { icon: SiHtml5, color: "#e34c26", label: "HTML" },
    { icon: SiCss3, color: "#1572b6", label: "CSS" },
    { icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      label: "Java",
    },
    { icon: SiPython, color: "#3776ab", label: "Python" },
    { icon: SiC, color: "#00599c", label: "C" },
    { icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
  ]

  const [typedCommand, setTypedCommand] = useState("")
  const [commandFinished, setCommandFinished] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showEducationModal, setShowEducationModal] = useState(false)

  useEffect(() => {
    setTypedCommand("")
    setCommandFinished(false)
    setShowOutput(false)
    setVisibleLines(0)

    const typeCommand = () => {
      let i = 0
      const interval = setInterval(() => {
        setTypedCommand(command.substring(0, i + 1))
        i++
        if (i >= command.length) {
          clearInterval(interval)
          setCommandFinished(true)
        }
      }, 100)
    }

    const timer = setTimeout(typeCommand, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showOutput) {
      const interval = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev < output.length) {
            return prev + 1
          }
          clearInterval(interval)
          return prev
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [showOutput])

  const handleTerminalInteraction = () => {
    if (commandFinished && !showOutput) {
      setShowOutput(true)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleTerminalInteraction()
      }
      if (e.key === "Escape") {
        setShowEducationModal(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [commandFinished, showOutput])

  useEffect(() => {
    const handleScroll = () => {
      if (showEducationModal) {
        setShowEducationModal(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showEducationModal])

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#211532] via-[#181818]/45% to-[#050408] text-white relative overflow-hidden">
        
        {/* Under Construction Banner */}
        <div className="relative bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20 border-b border-orange-500/30 backdrop-blur-sm">
          <div className="container mx-auto py-2">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-200 font-medium">
                🚧 This portfolio is currently under construction - More projects and features coming soon!
              </span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Blur overlay when modal is open */}
        {showEducationModal && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowEducationModal(false)}
          />
        )}

        {/* Social Buttons */}
        <div className="fixed top-4 right-4 z-30 flex space-x-3">
          {/* LinkedIn Button */}
          <button 
            onClick={() => window.open('https://linkedin.com/in/renatomreis', '_blank')}
            className="group w-10 hover:w-36 h-10 hover:bg-white/10 relative bg-white/5 backdrop-blur-sm border border-white/20 rounded text-white duration-300 font-medium flex justify-start gap-2 items-center p-2 pr-4 overflow-hidden"
          >
            <svg y={0} xmlns="http://www.w3.org/2000/svg" x={0} width={100} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height={100} className="w-6 h-6 shrink-0 fill-white">
              <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z" />
            </svg>
            <span className="origin-left inline-flex duration-100 group-hover:duration-200 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 border-white/30 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-sm whitespace-nowrap">renatomreis</span>
          </button>

          {/* Email Button */}
          <button 
            onClick={() => window.open('mailto:renatoreispt@gmail.com', '_blank')}
            className="group w-10 hover:w-48 h-10 hover:bg-white/10 relative bg-white/5 backdrop-blur-sm border border-white/20 rounded text-white duration-300 font-medium flex justify-start gap-2 items-center p-2 pr-4 overflow-hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 shrink-0 fill-white">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="origin-left inline-flex duration-100 group-hover:duration-200 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 border-white/30 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-sm whitespace-nowrap">renatoreispt@gmail.com</span>
          </button>
        </div>

        {/* Education Modal */}
        {showEducationModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEducationModal(false)}
          >
            <div 
              className="bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-lg rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}

              {/* Modal Content */}
              <div className="p-6 space-y-8">

                {/* Main Topics */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Main Topics Covered
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Object-Oriented Programming",
                      "Communication Networks", 
                      "Algorithms and Data Structures",
                      "Databases (PostgreSQL)",
                      "Operating Systems",
                      "Distributed Systems",
                      "Computer Architecture (Assembly)",
                      "Artificial Intelligence Fundamentals"
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                        <span className="text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                    Notable Projects
                  </h4>
                  <div className="space-y-6">
                    {/* C Projects */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20">
                      <h5 className="font-semibold text-blue-300 mb-3 flex items-center text-lg">
                        <SiC className="w-5 h-5 mr-3" style={{ color: "#00599c" }} />
                        C Projects
                      </h5>
                      <div className="space-y-3">
                        <div className="bg-black/20 rounded-lg p-4">
                          <h6 className="font-medium text-white mb-2">Repair Workshop System</h6>
                          <p className="text-gray-300 text-sm">Developed a comprehensive system managing bookings using linked lists and queues for efficient data management.</p>
                        </div>
                        <div className="bg-black/20 rounded-lg p-4">
                          <h6 className="font-medium text-white mb-2">School System Simulation</h6>
                          <p className="text-gray-300 text-sm">Built UDP/TCP servers and clients for a school system simulation (classes, students, teachers) using sockets in linux
                          environment.</p>
                        </div>
                        <div className="bg-black/20 rounded-lg p-4">
                          <h6 className="font-medium text-white mb-2">Blockchain Simulation</h6>
                          <p className="text-gray-300 text-sm">A concurrency-focused blockchain simulation emphasizing inter-process communication (IPC), synchronization, and
concurrency. Implemented multiple processes and threads with shared memory, named pipes, and message
queues. Managed transaction generation, block validation, and Proof-of-Work (PoW) with dynamic validator scaling
based on transaction pool occupancy. Ensured robust error handling, resource cleanup, and logging.</p>
                        </div>
                      </div>
                    </div>

                    {/* Java Projects */}
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
                      <h5 className="font-semibold text-orange-300 mb-3 flex items-center text-lg">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-5 h-5 mr-3" alt="Java" />
                        Java Projects
                      </h5>
                      <div className="space-y-3">
                        <div className="bg-black/20 rounded-lg p-4">
                          <h6 className="font-medium text-white mb-2">Trivia Game</h6>
                          <p className="text-gray-300 text-sm">Created an interactive trivia game applying Object-Oriented Programming principles.</p>
                        </div>
                        <div className="bg-black/20 rounded-lg p-4">
                          <h6 className="font-medium text-white mb-2">Distributed Search Engine</h6>
                          <p className="text-gray-300 text-sm">Developed a distributed search engine with a client-server architecture using RPC/RMI and a web interface.
Implemented automatic web crawling, recursive URL indexing, and an inverted index for efficient search. Results
ranked by page relevance (link-based) with paginated output. Integrated WebSockets resultado for real-time updates
(top searches, barrel status), REST APIs (Hacker News, AI contextual analysis), and Spring Boot/FastAPI for the MVC
web frontend. Ensured fault tolerance via reliable multicast, load balancing, and barrel replication.</p>
                        </div>
                      </div>
                    </div>

                    {/* Web Projects */}
                    <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-xl p-6 border border-yellow-500/20">
                      <h5 className="font-semibold text-yellow-300 mb-3 flex items-center text-lg">
                        <SiPython className="w-5 h-5 mr-3" style={{ color: "#3776ab" }} />
                        Python Projects
                      </h5>
                      <div className="bg-black/20 rounded-lg p-4">
                        <h6 className="font-medium text-white mb-2">Data Analysis Project</h6>
                        <p className="text-gray-300 text-sm">Comprehensive data analysis project with histograms, bubble charts, and interactive tables. Used js and html to make the web interface. Project mainly to learn to work together and using git. Served as Project Manager of my group.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Navigation */}
      <div className="flex justify-center pt-4 md:pt-8 mb-8 md:mb-16 px-4">
        <nav className="bg-black/20 backdrop-blur-sm rounded-full px-4 md:px-8 py-2 md:py-3 border border-white/10 w-full max-w-md md:max-w-none md:w-auto">
          <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-8">
            <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm font-medium">
              <User className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">ABOUT ME</span>
            </div>
            {/* <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm font-medium">
              <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">DASHBOARD</span>
            </div> */}
            <div className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm font-medium">
              <FolderOpen className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">PROJECTS</span>
            </div>
          </div>
        </nav>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Mobile/Tablet: Stacked Layout, Desktop: Side by Side */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-2 md:space-y-4 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">hi! 👋</h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">i'm Renato</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-300">
                computer engineering graduate
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-400">
                full stack developer?
              </h4>
            </div>
          </div>

          {/* Right Terminal Window */}
          <div className="flex-1 lg:max-w-lg lg:ml-8">
              <div
                className={`bg-[#1a1a1a] rounded-lg border border-gray-700 shadow-2xl mx-auto max-w-md lg:max-w-none ${
                  commandFinished && !showOutput ? "cursor-pointer" : ""
                }`}
                onClick={handleTerminalInteraction}
              >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-b border-gray-700">
                <div className="flex space-x-1.5 md:space-x-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ee411a]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd44]"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#00ca4e]"></div>
                </div>
                <div className="text-xs md:text-sm text-gray-400">renato@admin:~</div>
                <div className="w-5 h-5 md:w-6 md:h-6 border border-gray-600 rounded flex items-center justify-center text-xs text-gray-400">
                  +
                </div>
              </div>

              {/* Terminal Content */}
                <div className="p-3 md:p-4 font-mono text-xs md:text-sm space-y-1 md:space-y-2 h-72">
                  <div className="text-[#1eff8e]">
                    <span>renato@admin:~$</span>{" "}
                    <span>{typedCommand}</span>
                    {!showOutput && <span className="animate-pulse inline-block">█</span>}
                  </div>
                  {showOutput && (
                    <>
                      {output.slice(0, visibleLines).map((line, index) => (
                        <div key={index} className="text-white leading-relaxed">
                          {line}
                        </div>
                      ))}
                      {visibleLines === output.length && (
                        <div className="text-[#1eff8e] mt-2 md:mt-4">
                          <span>renato@admin:~$</span>
                          <span className="animate-pulse inline-block">█</span>
                </div>
                      )}
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">what I work with</h2>
          </div>

          {/* Scrolling Skills Container */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden group">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  className="flex flex-shrink-0 animate-marquee group-hover:paused"
                  aria-hidden={dup === 1 ? "true" : undefined}
                >
                  {skills.map((skill, idx) => {
                    const Icon = skill.icon as any
                    return (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 whitespace-nowrap mx-4 md:mx-8"
                      >
                        {Icon ? (
                          <Icon
                            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                            style={{ color: skill.color }}
                          />
                        ) : (
                          <img
                            src={skill.imgSrc}
                            alt={skill.label}
                            className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                          />
                        )}
                        <span className="text-white font-medium text-sm md:text-base">
                          {skill.label}
                        </span>
                </div>
                    )
                  })}
                </div>
              ))}
                </div>
              </div>

          {/* Experience Section */}
          <div className="mt-16 md:mt-24 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">experience</h2>
              </div>

            <div className="max-w-xs mx-auto">
              <div 
                className="group cursor-pointer"
                onClick={() => setShowEducationModal(true)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-white/20">
                  {/* Glossy overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* University Logo */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <img 
                        src="/FCT.uc-Logo-institucional.png" 
                        alt="FCTUC Logo" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    
                    {/* University Info */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        University of Coimbra
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-400 text-xs uppercase tracking-wide">
                          bachelor's degree in computer engineering
                        </p>
                        <p className="text-gray-500 text-xs">
                          / 2022 - 2025
                        </p>
              </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
