import React, {useEffect, useState} from 'react';
import {
    Award,
    Building2,
    ChevronRight,
    Code2,
    Coffee,
    Github,
    GraduationCap,
    Linkedin,
    Mail,
    Terminal
} from 'lucide-react';

const Portfolio = () => {
    const [terminalText, setTerminalText] = useState('');
    const fullText = '> Hello World!\n> My name is Omar Flores\n> Senior Software Engineer\n> ' +
        'I am based out of the Chicago-land area\n> Let\'s connect!';

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentText += fullText[currentIndex];
                setTerminalText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const workExperience = [
        {
            title: 'Senior Software Engineer',
            company: 'LevelBlue',
            location: 'Chicago, IL',
            period: 'September 2022 – Present',
            achievements: [
                'Architected and deployed over 10 microservices, optimizing for maximum efficiency and reliability',
                'Automated the deployment of containerized applications to Kubernetes clusters integrating Nexus, Docker, and Spinnaker, reducing deployment time by up to 80%',
                'Coordinated with development and operations teams across multiple regions, including Spain and Ireland, ensuring seamless communication and project alignment',
                'Delivered regular project updates and feature demos to stakeholders and team members, enhancing transparency, gathering feedback, and ensuring alignment with organizational goals',
                'Designed and executed automated test suites using Cypress, increasing test coverage by 60% and reducing regression testing time by up to 90%',
                'Developed and optimized build pipelines in Bitbucket, leveraging parallelization techniques to reduce build times by 75%',
                'Implemented comprehensive monitoring and logging solutions using Datadog, Grafana, and ElasticSearch, leading up to a 90% improvement in issue detection and resolution times',
                'Leveraged Jira for tracking project progress and managing sprints; documented project workflows and knowledge in Confluence, enhancing team collaboration and reducing onboarding time for new team members by up to 30%',
                'Performed elaborate code reviews and managed pull requests, ensuring code quality and adherence to best practices',
                'Revamped database performance through query optimization and strategic indexing; slashed query execution time by up to 99% and introduced caching for frequently accessed data, dramatically reducing overall database load',
                'Served as a first responder for critical system issues, taking shifts every quarter and ensuring a rapid response time, which contributed to a 40% reduction in average incident resolution time'
            ]
        }
    ];

    const technicalSkills = {
        databases: ['DynamoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'ElasticSearch'],
        frameworks: ['Node (Nest.js, Express)', 'Java (Spring Boot, Vert.x)', 'Go (Echo, Gin)'],
        languages: ['Bash Shell', 'C/C++/C#', 'F#', 'Go', 'Java', 'JS/TS', 'PowerShell', 'Python', 'SQL'],
        testing: ['E2E (Cypress, Cucumber)', 'Go (Ginkgo, Gomega, Gomock)', 'Java (JUnit, Mockito)', 'Node (Jest)']
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur z-50 border-b border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Terminal className="w-6 h-6 text-green-400"/>
                            <span className="text-xl font-bold">Omar Flores</span>
                        </div>
                        <div className="flex space-x-4 sm:space-x-6">
                            <a href="https://github.com/xDestyn" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5 sm:w-6 sm:h-6"/>
                            </a>
                            <a href="https://www.linkedin.com/in/flores-omar/" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6"/>
                            </a>
                            <a href="mailto:omar.flores.cs@outlook.com"
                               className="text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6"/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 px-4 sm:px-6">
                {/* Terminal Section */}
                <section className="max-w-3xl mx-auto mb-12 sm:mb-16 fade-in">
                    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl border border-gray-700">
            <pre className="font-mono text-green-400 whitespace-pre-line text-sm sm:text-base">
              {terminalText}
            </pre>
                    </div>
                </section>

                {/* Work Experience */}
                <section className="max-w-4xl mx-auto mb-12 sm:mb-16 fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                        <Building2 className="w-6 h-6 mr-2 text-green-400"/>
                        Work Experience
                    </h2>
                    {workExperience.map((job, index) => (
                        <div key={index}
                             className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-green-400 transition-colors mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{job.title}</h3>
                                    <p className="text-gray-400">{job.company}, {job.location}</p>
                                </div>
                                <p className="text-green-400 mt-2 sm:mt-0">{job.period}</p>
                            </div>
                            <ul className="space-y-3">
                                {job.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <ChevronRight className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1"/>
                                        <span className="text-gray-300">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Technical Skills */}
                <section className="max-w-4xl mx-auto mb-12 sm:mb-16 fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                        <Code2 className="w-6 h-6 mr-2 text-green-400"/>
                        Technical Skills
                    </h2>
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        {Object.entries(technicalSkills).map(([category, skills], index) => (
                            <div key={index}
                                 className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
                                <ul className="space-y-2">
                                    {skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <Coffee className="w-4 h-4 mr-2 text-gray-400"/>
                                            <span className="text-gray-300">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education & Certification */}
                <section className="max-w-4xl mx-auto mb-12 sm:mb-16 fade-in">
                    <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                                <GraduationCap className="w-6 h-6 mr-2 text-green-400"/>
                                Education
                            </h2>
                            <div
                                className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold mb-2">University of Illinois at Chicago</h3>
                                <p className="text-gray-400">Bachelor of Science — Computer Science</p>
                                <p className="text-gray-400">Minor in Mathematics</p>
                                <p className="text-green-400 mt-2">Graduated May 2021</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                                <Award className="w-6 h-6 mr-2 text-green-400"/>
                                Certification
                            </h2>
                            <div
                                className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-green-400 transition-colors">
                                <h3 className="text-xl font-bold mb-2">ISC2 Certification</h3>
                                <p className="text-gray-400">Certified in Cybersecurity</p>
                                <p className="text-green-400 mt-2">June 2023</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Portfolio;