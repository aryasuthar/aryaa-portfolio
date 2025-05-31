
import { Code, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="bg-slate-900 pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Code className="h-16 w-16 text-blue-400 animate-pulse" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm
              <span className="text-blue-400 block">Arya Suthar</span>
            </h1>
            <p className="text-xl text-gray-300 mb-2">Odoo Developer</p>
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about creating efficient business solutions with Odoo ERP. 
              Specialized in custom module development, integrations, and business process optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg">
                Download CV
              </Button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-8 backdrop-blur-sm border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-600">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-600">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-600">
                  <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-600">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Custom Modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
