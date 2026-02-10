import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X } from 'lucide-react'

const COMMANDS = {
  help: {
    action: 'help',
    description: 'Show available commands',
    response: `Available commands:

• home – return to main view
• notes – read field notes
• lab – open experiments
• about – who am I
• linkedin – professional page
• github – code repositories
• email – send a message`,
  },
  home: {
    action: '/',
    description: 'Return to main view',
    response: 'Returning to base…',
  },
  notes: {
    action: '/field-notes',
    description: 'Read field notes',
    response: 'Opening field notes… recent thoughts, meals, builds, and travels.',
  },
  lab: {
    action: '/lab',
    description: 'Open experiments',
    response: 'Entering the lab… experiments ahead.',
  },
  about: {
    action: '/about',
    description: 'Who am I',
    response: 'I build systems, explore ideas, and document the journey.',
  },
  linkedin: {
    action: 'https://www.linkedin.com/in/flores-omar/',
    description: 'Professional profile',
    response: 'Redirecting to professional profile…',
  },
  github: {
    action: 'https://github.com/xDestyn',
    description: 'Code repositories',
    response: 'Opening repositories…',
  },
  email: {
    action: 'mailto:omar.flores.cs@outlook.com',
    description: 'Send a message',
    response: 'Launching communication protocol…',
  },
}

export default function CommandPalette({ isOpen, onClose }) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (input) {
      const matches = Object.keys(COMMANDS).filter((cmd) =>
        cmd.toLowerCase().startsWith(input.toLowerCase())
      )
      setSuggestions(matches)
      setSelectedSuggestion(0)
    } else {
      setSuggestions([])
    }
  }, [input])

  const executeCommand = (cmd) => {
    const command = COMMANDS[cmd.toLowerCase()]

    if (!command) {
      setOutput((prev) => [
        ...prev,
        {
          input: cmd,
          output: `Command not found: ${cmd}. Type "help" for available commands.`,
          error: true,
        },
      ])
      return
    }

    setOutput((prev) => [
      ...prev,
      {
        input: cmd,
        output: command.response,
        error: false,
      },
    ])

    setTimeout(() => {
      if (command.action === 'help') {
        // Just show help, don't navigate
      } else if (command.action.startsWith('http')) {
        window.open(command.action, '_blank', 'noopener,noreferrer')
        onClose()
      } else if (command.action.startsWith('mailto:')) {
        window.location.href = command.action
        onClose()
      } else {
        navigate(command.action)
        onClose()
      }
    }, 300)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const cmd = input.trim()

    if (!cmd) return

    setHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)
    executeCommand(cmd)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (suggestions.length > 0) {
        setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1))
      } else if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (suggestions.length > 0) {
        setSelectedSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0))
      } else if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault()
      setInput(suggestions[selectedSuggestion])
      setSuggestions([])
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-palette-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="w-full max-w-2xl bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/30 bg-gray-900/50">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-500" />
              <h2 id="command-palette-title" className="text-green-500 font-mono text-sm">
                command palette
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-green-500 transition-colors"
              aria-label="Close command palette"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Output */}
          <div className="max-h-64 overflow-y-auto px-4 py-3 space-y-2 font-mono text-sm">
            {output.length === 0 && (
              <div className="text-gray-500">
                Type a command or "help" to see available options...
              </div>
            )}
            {output.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="text-green-500">
                  <span className="text-gray-500">→</span> {item.input}
                </div>
                <div className={item.error ? 'text-red-400' : 'text-gray-300'}>{item.output}</div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-green-500/30 bg-gray-900/50">
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-3">
              <span className="text-green-500 font-mono mr-2">→</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-green-500 font-mono outline-none placeholder-gray-600"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck="false"
              />
            </form>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="border-t border-green-500/30 px-4 py-2 space-y-1">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setInput(suggestion)
                      setSuggestions([])
                      inputRef.current?.focus()
                    }}
                    className={`w-full text-left px-3 py-2 rounded font-mono text-sm transition-colors ${
                      index === selectedSuggestion
                        ? 'bg-green-500/20 text-green-400'
                        : 'text-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-green-500">{suggestion}</span>
                    <span className="text-gray-600 ml-2">- {COMMANDS[suggestion].description}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-2 bg-gray-900/30 border-t border-green-500/30">
            <div className="flex items-center justify-between text-xs font-mono text-gray-600">
              <span>↑↓ navigate • tab complete • esc close</span>
              <span>⌘K or Ctrl+K to toggle</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
