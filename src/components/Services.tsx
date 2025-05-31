
import { Shield, Lock, Database, Zap, Bug, Key } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive network protection with advanced firewalls, intrusion detection, and real-time monitoring."
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption solutions to protect your sensitive data both at rest and in transit."
    },
    {
      icon: Database,
      title: "Database Security",
      description: "Secure your databases with access controls, encryption, and continuous vulnerability assessments."
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response team available 24/7 to contain and remediate security incidents effectively."
    },
    {
      icon: Bug,
      title: "Vulnerability Testing",
      description: "Regular penetration testing and vulnerability assessments to identify and fix security weaknesses."
    },
    {
      icon: Key,
      title: "Identity Management",
      description: "Multi-factor authentication and identity access management to control user permissions securely."
    }
  ];

  return (
    <section id="services" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Security Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your business from modern threats
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-900 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
