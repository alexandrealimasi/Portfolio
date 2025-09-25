import { personalInfo } from '../data/ portfolio'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Mobile Developer passionate about creating impactful digital solutions. 
              Specialized in mobile and web development with a focus on user experience and performance.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links & Navigation */}
          <div className="space-y-6">
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="p-3 bg-slate-800/50 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200 hover:scale-110 transform"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Back to Top */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2 group"
              >
                <span>Back to Top</span>
                <div className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center group-hover:border-blue-300 transition-colors">
                  <div className="w-2 h-2 border-t-2 border-r-2 border-blue-400 transform rotate-[-45deg] group-hover:border-blue-300 transition-colors"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer