import { useEffect, useRef, useState } from 'react'
import { personalInfo, references } from '../data/portfolio'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, UserCheck } from 'lucide-react'

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry / Project Collaboration')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 relative overflow-hidden opacity-0 translate-y-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Ready to bring your software ideas to life or discuss engineering opportunities? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MessageCircle className="text-blue-400" />
                Get in Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am currently open to freelance contracts, consulting, full-time engineering roles, and collaborative projects.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-5 p-5 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                  >
                    <div className={`p-3.5 bg-gradient-to-r ${method.color} rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider">{method.label}</div>
                      <div className="text-white font-medium text-base group-hover:text-blue-300 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                )
              })}

              {/* Phone Contacts */}
              <div className="p-5 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">Direct Phone Lines</div>
                </div>
                <div className="space-y-2 pl-2">
                  {personalInfo.phones.map((phone, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-white hover:text-green-400 font-mono transition-colors"
                      >
                        {phone}
                      </a>
                      <span className="text-xs text-gray-500">
                        {idx === 0 ? 'Rwanda (Primary)' : 'DRC'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base font-semibold text-white mb-4">Connect on Professional Profiles</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 text-gray-300 hover:text-white hover:border-slate-600 transition-all duration-200 hover:scale-105"
                    >
                      <Icon size={20} />
                      <span className="font-medium text-sm">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Direct Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  placeholder="Software development inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-vertical"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
              <p className="text-gray-400 text-xs">
                Email directly at{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Professional References Section */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <UserCheck className="text-purple-400" size={26} />
              Professional References
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Executives and community leaders who can verify my technical proficiency, leadership, and work ethic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-white mb-0.5">{ref.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{ref.role}</p>
                  <p className="text-xs text-gray-400 mb-3">{ref.organization}</p>
                </div>

                <div className="pt-3 border-t border-slate-700/40 space-y-1 text-xs">
                  {ref.email && (
                    <div>
                      <a
                        href={`mailto:${ref.email}`}
                        className="text-gray-300 hover:text-blue-400 truncate block transition-colors"
                        title={ref.email}
                      >
                        {ref.email}
                      </a>
                    </div>
                  )}
                  {ref.phone && (
                    <div>
                      <a
                        href={`tel:${ref.phone.replace(/\s+/g, '')}`}
                        className="text-gray-400 hover:text-white font-mono block transition-colors"
                      >
                        {ref.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Contact
