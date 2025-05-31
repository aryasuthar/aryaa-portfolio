
import { ExternalLink, Github, Database, Settings, ShoppingCart, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce ERP Integration",
      description: "Complete Odoo implementation for a multi-store e-commerce business with custom inventory management and automated order processing.",
      icon: ShoppingCart,
      technologies: ["Odoo 16", "Python", "PostgreSQL", "REST API"],
      features: [
        "Multi-store inventory synchronization",
        "Automated order processing workflow",
        "Custom reporting dashboard",
        "Payment gateway integration"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Manufacturing Resource Planning",
      description: "Custom MRP module for a manufacturing company with advanced production planning and quality control features.",
      icon: Settings,
      technologies: ["Odoo 15", "Python", "XML", "JavaScript"],
      features: [
        "Production planning optimization",
        "Quality control checkpoints",
        "Material requirement planning",
        "Real-time production tracking"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "HR Management System",
      description: "Comprehensive HR solution with employee self-service portal, attendance tracking, and performance management.",
      icon: Users,
      technologies: ["Odoo 16", "Python", "QWeb", "Bootstrap"],
      features: [
        "Employee self-service portal",
        "Biometric attendance integration",
        "Performance evaluation system",
        "Leave management workflow"
      ],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Advanced financial reporting and analytics module with real-time KPI tracking and customizable dashboards.",
      icon: Database,
      technologies: ["Odoo 15", "Python", "Chart.js", "PostgreSQL"],
      features: [
        "Real-time financial KPIs",
        "Customizable dashboard widgets",
        "Automated report generation",
        "Budget vs actual analysis"
      ],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my recent Odoo development projects and custom solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-blue-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
