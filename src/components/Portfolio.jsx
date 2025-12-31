import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import TerminalHero from './TerminalHero';
import FocusAreas from './FocusAreas';
import WorkExperience from './WorkExperience';
import TechStack from './TechStack';
import Education from './Education';
import Contact from './Contact';
import useScrollReveal from '../hooks/useScrollReveal';

const Portfolio = () => {
    useScrollReveal();

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm z-50 border-b border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Terminal className="w-6 h-6 text-green-400" />
                            <span className="text-xl font-bold">Omar Flores</span>
                        </div>
                        <div className="flex space-x-4 sm:space-x-6">
                            <a
                                href="https://github.com/xDestyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors touch-target flex items-center justify-center"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/flores-omar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-400 transition-colors touch-target flex items-center justify-center"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a
                                href="mailto:omar.flores.cs@outlook.com"
                                className="text-gray-400 hover:text-green-400 transition-colors touch-target flex items-center justify-center"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 px-4 sm:px-6">
                <TerminalHero />
                <FocusAreas />
                <WorkExperience />
                <TechStack />
                <Education />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-800 py-8 mt-16">
                <div className="container mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Omar Flores. Built with React, Vite & Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;