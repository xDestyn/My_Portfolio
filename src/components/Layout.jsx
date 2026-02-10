import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, Github, Linkedin, Mail } from 'lucide-react'
import CommandPalette from './CommandPalette'

export default function Layout({ children }) {
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Terminal className="w-5 h-5 text-green-500 group-hover:text-green-400 transition-colors" />
              <span className="font-mono text-sm text-green-500 group-hover:text-green-400 transition-colors">
                xdestyn
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" active={location.pathname === '/'}>
                Home
              </NavLink>
              <NavLink to="/field-notes" active={location.pathname.startsWith('/field-notes')}>
                Field Notes
              </NavLink>
              <NavLink to="/lab" active={location.pathname === '/lab'}>
                Lab
              </NavLink>
              <NavLink to="/about" active={location.pathname === '/about'}>
                About
              </NavLink>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCommandOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md transition-colors group"
                aria-label="Open command palette"
              >
                <Terminal className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                <span className="text-xs font-mono text-gray-400 group-hover:text-green-500 transition-colors">
                  ⌘K
                </span>
              </button>

              <div className="flex items-center gap-2">
                <SocialLink href="https://github.com/xDestyn" icon={Github} label="GitHub" />
                <SocialLink
                  href="https://www.linkedin.com/in/flores-omar/"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink href="mailto:omar.flores.cs@outlook.com" icon={Mail} label="Email" />
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4 pb-3 overflow-x-auto">
            <MobileNavLink to="/" active={location.pathname === '/'}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/field-notes" active={location.pathname.startsWith('/field-notes')}>
              Field Notes
            </MobileNavLink>
            <MobileNavLink to="/lab" active={location.pathname === '/lab'}>
              Lab
            </MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === '/about'}>
              About
            </MobileNavLink>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Command Palette */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  )
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors relative ${
        active ? 'text-green-500' : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute -bottom-5 left-0 right-0 h-0.5 bg-green-500"
        />
      )}
    </Link>
  )
}

function MobileNavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
        active ? 'bg-green-500/20 text-green-500' : 'text-gray-400 hover:text-gray-200'
      }`}
    >
      {children}
    </Link>
  )
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-green-500 transition-colors"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}
