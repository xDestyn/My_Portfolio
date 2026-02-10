# Omar Flores - Personal Site

A premium, creative, interactive personal brand website. Not a resume. An experience.

## Overview

This is a modern multi-page site built with React, featuring a cinematic design, command palette navigation, Field Notes blog system, and smooth micro-interactions. It showcases work, thoughts, experiments, and travels in an authentic, technically impressive way.

## Features

### 🎯 Core Experience
- **Cinematic Hero**: Scroll-driven parallax effects with gradient animations
- **Command Palette**: Terminal-style overlay (⌘K / Ctrl+K) for keyboard navigation
- **Field Notes**: MDX-powered blog with categories (Eat, Go, Build, Learn)
- **Lab**: Experiments and side projects showcase
- **Magnetic Buttons**: Interactive hover effects that respond to cursor position
- **Dark-First Design**: Premium dark theme with green accents

### ⚡ Interactions
- Framer Motion animations throughout
- Magnetic button effects
- Scroll-reveal animations
- Smooth page transitions
- Respects `prefers-reduced-motion`

### 🎨 Design System
- Custom dark theme with CSS variables
- Consistent spacing and typography
- Terminal-inspired aesthetic
- Fully responsive mobile-first layout
- Accessibility-focused (ARIA labels, keyboard navigation, focus states)

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Content**: MDX (Markdown + JSX)
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

The site will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx           # Main layout with navigation
│   ├── CommandPalette.jsx   # Terminal command overlay (⌘K)
│   ├── MagneticButton.jsx   # Magnetic hover effect component
│   ├── Portfolio.jsx        # Original single-page portfolio (legacy)
│   └── ...                  # Other components
├── pages/
│   ├── Home.jsx             # Cinematic landing page
│   ├── FieldNotes.jsx       # Blog index with filters
│   ├── FieldNoteDetail.jsx  # Individual blog post view
│   ├── Lab.jsx              # Experiments showcase
│   └── About.jsx            # Bio and "Now" page
├── content/
│   └── field-notes/         # MDX blog posts
│       ├── building-this-site.mdx
│       ├── perfect-espresso.mdx
│       └── kubernetes-debugging.mdx
├── hooks/
│   └── useScrollReveal.js   # Scroll animation hook
├── styles/
│   └── globals.css          # Global styles and utilities
├── App.jsx                  # Route configuration
└── main.jsx                 # Application entry point
```

## Routes

- `/` - Home (cinematic hero + feature cards)
- `/field-notes` - Blog index with category/tag filters
- `/field-notes/:slug` - Individual blog post
- `/lab` - Experiments and side projects
- `/about` - Bio, "Now" section, tech focus

## Command Palette

Press **⌘K** (Mac) or **Ctrl+K** (Windows/Linux) to open the terminal command palette.

Available commands:
- `help` - Show available commands
- `home` - Navigate to home page
- `notes` - Go to Field Notes
- `lab` - Open Lab experiments
- `about` - View About page
- `linkedin` - Open LinkedIn profile
- `github` - Open GitHub profile
- `email` - Launch email client

### Features:
- Arrow keys to navigate suggestions
- Tab to autocomplete
- Command history (↑/↓)
- Escape to close
- Focus trap for accessibility

## Adding Field Notes

Field Notes are written in MDX (Markdown + JSX) and stored in `src/content/field-notes/`.

### Creating a New Post

1. Create a new `.mdx` file in `src/content/field-notes/`:

```bash
touch src/content/field-notes/my-new-post.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "Your Post Title"
date: "2026-02-09"
category: "Build"  # Options: Eat, Go, Build, Learn
tags: ["react", "javascript", "tutorial"]
excerpt: "A brief description for the card preview."
location: "Chicago, IL"  # Optional
---

# Your Post Title

Write your content here using Markdown.

## Headings

- Lists work
- As expected

**Bold text** and *italic text* are supported.

\`\`\`javascript
// Code blocks with syntax highlighting
const example = "Hello World";
\`\`\`

You can use MDX to embed React components too!
```

3. Update the `FIELD_NOTES` array in `src/pages/FieldNotes.jsx` to include your new post:

```javascript
{
  slug: 'my-new-post',
  title: 'Your Post Title',
  date: '2026-02-09',
  category: 'Build',
  tags: ['react', 'javascript', 'tutorial'],
  excerpt: 'A brief description for the card preview.',
  coverImage: null,  // Optional: Add image URL
  location: 'Chicago, IL',  // Optional
}
```

4. Add the content to `src/pages/FieldNoteDetail.jsx` in the `SAMPLE_NOTES` object:

```javascript
'my-new-post': {
  title: 'Your Post Title',
  date: '2026-02-09',
  category: 'Build',
  tags: ['react', 'javascript', 'tutorial'],
  location: 'Chicago, IL',
  content: `Your full content here...`,
}
```

### Field Note Categories

- **Eat**: Food, coffee, cooking experiments, restaurant reviews
- **Go**: Travel, adventures, city explorations, photography
- **Build**: Projects, technical builds, coding experiments
- **Learn**: Tutorials, lessons learned, debugging stories, insights

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✓ | Post title |
| `date` | string | ✓ | ISO date format (YYYY-MM-DD) |
| `category` | string | ✓ | One of: Eat, Go, Build, Learn |
| `tags` | array | ✓ | Array of tag strings |
| `excerpt` | string | ✓ | Short preview (1-2 sentences) |
| `location` | string | ✗ | Geographic location (optional) |
| `coverImage` | string | ✗ | Image URL (optional) |
| `gallery` | array | ✗ | Array of image URLs (optional) |

## Updating Lab Experiments

Edit the `EXPERIMENTS` array in `src/pages/Lab.jsx`:

```javascript
{
  title: 'Your Project Name',
  description: 'What does this project do? Why is it interesting?',
  tech: ['Python', 'React', 'Docker'],
  status: 'In Progress',  // Options: Complete, In Progress, Planning
  github: 'https://github.com/yourrepo',
  demo: 'https://demo-url.com',  // Optional
}
```

## Customization

### Update Personal Info

- **About page**: Edit `src/pages/About.jsx`
- **Navigation links**: Edit `src/components/Layout.jsx`
- **Home page tagline**: Edit hero text in `src/pages/Home.jsx`
- **Command Palette links**: Edit `COMMANDS` in `src/components/CommandPalette.jsx`

### Theme Colors

Colors are defined in `src/styles/globals.css` and use Tailwind's default palette:

- **Background**: `gray-950`, `gray-900`
- **Text**: `gray-100` (primary), `gray-400` (secondary)
- **Accent**: `green-500`

To change the accent color, find/replace `green-500` with your preferred Tailwind color.

### Animations

Animation settings are in Framer Motion components. Key parameters:

- **Spring**: `{ damping: 15, stiffness: 150 }`
- **Duration**: `0.6s` for most reveals
- **Delay**: Staggered by `0.1s` per item

Edit these in individual page components.

## Performance

- Code splitting via React Router
- Lazy loading with dynamic imports
- Optimized animations (respects `prefers-reduced-motion`)
- Minimal bundle size (no heavy 3D libraries unless needed)
- Fast initial load with Vite

## Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus visible states (green outline)
- Semantic HTML structure
- Screen reader friendly
- Touch-friendly (44px minimum touch targets)

## Browser Support

Modern browsers with ES6+ support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

Potential additions:
- **Automated MDX loading**: Dynamically import MDX files instead of hardcoding
- **Image gallery lightbox**: For Field Notes with multiple images
- **Search functionality**: Full-text search across Field Notes
- **RSS feed**: Auto-generate from Field Notes
- **Analytics**: Add privacy-friendly analytics
- **Dark mode toggle**: Manual light/dark theme switching
- **3D accent**: Optional Three.js element in hero

## License

Personal portfolio - All rights reserved.

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.
