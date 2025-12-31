import { Code2 } from "lucide-react";

const TechStack = () => {
  const techStack = {
    "Primary Stack": [
      "Go (Echo, Gin)",
      "Java (Spring Boot, Vert.x)",
      "Node.js (Nest.js, Express)",
      "TypeScript / JavaScript",
    ],
    "Platforms & Infrastructure": [
      "AWS",
      "Bitbucket Pipelines",
      "Docker",
      "Kubernetes",
      "n8n",
      "Spinnaker",
      "Terraform",
    ],
    Databases: ["DynamoDB", "ElasticSearch", "MongoDB", "MySQL", "PostgreSQL"],
    "Testing & Quality": [
      "Anchore",
      "Cypress",
      "Ginkgo / Gomega",
      "Jest",
      "JUnit",
      "Mockito",
      "SonarQube",
    ],
  };

  return (
    <section className="max-w-6xl mx-auto mb-16 sm:mb-24 scroll-reveal">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center">
        <Code2 className="w-6 h-6 mr-2 text-green-400" />
        Tech Stack
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(techStack).map(([category, technologies], index) => (
          <div
            key={index}
            className="card-hover bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-700 rounded-md text-sm text-gray-200 border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
