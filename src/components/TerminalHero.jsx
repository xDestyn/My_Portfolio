import { useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';

const TERMINAL_LINES = [
    "> Hello, I'm Omar Flores",
    "> Senior Software Engineer",
    "> Building scalable systems & automation",
    "> Kubernetes • CI/CD • Go • Java • n8n",
    "> Based in the Chicago area"
];

const TerminalHero = () => {
    const [terminalText, setTerminalText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [key, setKey] = useState(0);

    const fullText = TERMINAL_LINES.join('\n');

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;
        setIsComplete(false);

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentText += fullText[currentIndex];
                setTerminalText(currentText);
                currentIndex++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [key, fullText]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    const handleReplay = () => {
        setTerminalText('');
        setKey(prev => prev + 1);
    };

    return (
        <section className="max-w-4xl mx-auto mb-16 sm:mb-24">
            <div className="terminal-glow bg-gray-800 p-6 sm:p-8 rounded-lg shadow-2xl border border-gray-700 relative">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {isComplete && (
                        <button
                            onClick={handleReplay}
                            className="text-gray-500 hover:text-green-400 transition-colors p-2 rounded hover:bg-gray-700"
                            aria-label="Replay animation"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </button>
                    )}
                </div>
                <pre className="font-mono text-green-400 whitespace-pre-line text-sm sm:text-base leading-relaxed">
{terminalText}<span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
                </pre>
            </div>
        </section>
    );
};

export default TerminalHero;
