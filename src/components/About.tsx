
import { Code, Database, Settings, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Expert in developing custom Odoo modules tailored to specific business needs"
    },
    {
      icon: Database,
      title: "ERP Integration",
      description: "Seamless integration of Odoo with third-party systems and APIs"
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamlining business processes through efficient Odoo configurations"
    },
    {
      icon: Zap,
      title: "Performance Tuning",
      description: "Optimizing Odoo instances for maximum performance and scalability"
    }
  ];

  return (
    <section id="about" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a dedicated Odoo Developer with over 3 years of experience in creating robust 
              ERP solutions. My passion lies in transforming business processes through innovative 
              Odoo implementations and custom module development.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              I specialize in the complete Odoo development lifecycle - from requirement analysis 
              and system design to implementation, testing, and deployment. My expertise includes 
              both frontend and backend development, ensuring seamless user experiences and 
              efficient business operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700">
                <span className="text-blue-400 font-semibold">Python Expert</span>
              </div>
              <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700">
                <span className="text-blue-400 font-semibold">Odoo Certified</span>
              </div>
              <div className="bg-slate-900 px-4 py-2 rounded-lg border border-slate-700">
                <span className="text-blue-400 font-semibold">PostgreSQL Pro</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
