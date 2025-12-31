# Omar Flores - Portfolio

A modern, single-page portfolio website for a Senior Software Engineer specializing in automation, cloud-native systems, and scalable infrastructure.

## Features

### 🎨 Design
- **Dark theme** with terminal-inspired aesthetic
- **Green accent color** (terminal-style)
- Modern, clean layout with plenty of whitespace
- Fully responsive mobile-first design
- Accessibility-focused with proper ARIA labels and focus states

### ⚡ Animations
- Terminal typing animation with blinking cursor and replay functionality
- Scroll-triggered reveal animations with fade and upward motion
- Smooth card hover effects (desktop only)
- Respects `prefers-reduced-motion` for accessibility

### 📱 Mobile Optimizations
- Touch targets ≥ 44px for optimal mobile UX
- No hover-only interactions
- Animations reduced/disabled on mobile
- Cards stack cleanly on smaller screens
- Optimized text width for readability

### 🧩 Sections
1. **Terminal Hero** - Animated typing introduction
2. **What I Focus On** - 4 key areas: Automation, Cloud-Native, AI Tooling, Observability
3. **Work Experience** - Collapsible detailed achievements with impact highlights
4. **Tech Stack** - Intentionally grouped technologies (Primary Stack, Platforms, Databases, Testing)
5. **Education & Certification** - Clean, minimal layout
6. **Contact** - Social links with n8n-ready form structure (commented out)

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linter
yarn lint
```

## Project Structure

```
src/
├── components/
│   ├── Portfolio.jsx      # Main component with layout and navigation
│   ├── TerminalHero.jsx   # Animated terminal hero section
│   ├── FocusAreas.jsx     # Focus areas grid
│   ├── WorkExperience.jsx # Collapsible work experience
│   ├── TechStack.jsx      # Technology stack display
│   ├── Education.jsx      # Education and certification
│   └── Contact.jsx        # Contact section with social links
├── hooks/
│   └── useScrollReveal.js # Custom hook for scroll animations
├── styles/
│   └── globals.css        # Global styles and animations
├── App.jsx                # Root app component
└── main.jsx               # Application entry point
```

## Customization

### Updating Content
- **Hero text**: Edit `TERMINAL_LINES` in `src/components/TerminalHero.jsx`
- **Focus areas**: Modify the `focusAreas` array in `src/components/FocusAreas.jsx`
- **Work experience**: Update `impactHighlights` and `fullAchievements` in `src/components/WorkExperience.jsx`
- **Tech stack**: Edit the `techStack` object in `src/components/TechStack.jsx`
- **Contact info**: Update links in `src/components/Contact.jsx` and `src/components/Portfolio.jsx`

### Adding Contact Form
The contact form structure is commented out in `src/components/Contact.jsx` and ready for n8n integration. Simply uncomment and wire up to your automation workflow.

## Future Extensions

The architecture is designed to easily accommodate:
- Case study pages
- System architecture diagrams
- Blog or writing section
- Project showcase gallery

## Performance

- Optimized for high Lighthouse scores
- Semantic HTML for SEO
- Accessible contrast ratios and typography
- Lazy loading and code splitting via Vite

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Personal portfolio - All rights reserved.
