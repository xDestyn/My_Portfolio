import { Settings, Cloud, Sparkles, BarChart3 } from 'lucide-react';

const FocusAreas = () => {
    const focusAreas = [
        {
            icon: Settings,
            title: 'Automation & Workflow Orchestration',
            description: 'Building self-healing systems and streamlining deployment pipelines with n8n, Kubernetes, and CI/CD automation'
        },
        {
            icon: Cloud,
            title: 'Cloud-Native Systems & Microservices',
            description: 'Architecting resilient, scalable services with containerization, service mesh, and cloud infrastructure'
        },
        {
            icon: Sparkles,
            title: 'AI-Assisted Tooling & Productivity',
            description: 'Leveraging intelligent automation to accelerate development workflows and enhance team efficiency'
        },
        {
            icon: BarChart3,
            title: 'Observability, Reliability & Performance',
            description: 'Implementing comprehensive monitoring, logging, and alerting to ensure system health and rapid issue resolution'
        }
    ];

    return (
        <section className="max-w-6xl mx-auto mb-16 sm:mb-24 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">What I Focus On</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {focusAreas.map((area, index) => {
                    const Icon = area.icon;
                    return (
                        <div
                            key={index}
                            className="card-hover bg-gray-800 rounded-lg p-6 border border-gray-700 group"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center group-hover:bg-green-900/30 transition-colors">
                                        <Icon className="w-6 h-6 text-green-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-100">{area.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FocusAreas;
