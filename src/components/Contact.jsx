import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="max-w-4xl mx-auto mb-16 scroll-reveal">
            <div className="bg-gray-800 rounded-lg p-8 sm:p-12 border border-gray-700 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let&apos;s Connect</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Interested in collaborating on automation, cloud-native systems, or scalable infrastructure?
                    Let&apos;s talk.
                </p>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <a
                        href="mailto:omar.flores.cs@outlook.com"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-green-900/30 border border-gray-600 hover:border-green-400 px-6 py-3 rounded-lg transition-all w-full sm:w-auto justify-center touch-target"
                    >
                        <Mail className="w-5 h-5 text-green-400" />
                        <span>Email</span>
                    </a>
                    <a
                        href="https://github.com/xDestyn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-green-900/30 border border-gray-600 hover:border-green-400 px-6 py-3 rounded-lg transition-all w-full sm:w-auto justify-center touch-target"
                    >
                        <Github className="w-5 h-5 text-green-400" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/flores-omar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-green-900/30 border border-gray-600 hover:border-green-400 px-6 py-3 rounded-lg transition-all w-full sm:w-auto justify-center touch-target"
                    >
                        <Linkedin className="w-5 h-5 text-green-400" />
                        <span>LinkedIn</span>
                    </a>
                </div>

                {/* Optional: Contact Form Structure (n8n-ready, commented out for future implementation) */}
                {/* 
                <div className="max-w-md mx-auto">
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 text-white"
                            required
                        />
                        <textarea
                            placeholder="Your message"
                            rows="4"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 text-white resize-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg transition-colors font-medium"
                        >
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
                */}
            </div>
        </section>
    );
};

export default Contact;
