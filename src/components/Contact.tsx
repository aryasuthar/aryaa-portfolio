
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next Odoo project? I'm available for freelance work and consultations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-300">arya.suthar@email.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-300">+91 98765 43210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-gray-300">Mumbai, India</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-600 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-slate-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-900 rounded-lg border border-slate-700">
              <h4 className="text-white font-semibold mb-3">Availability</h4>
              <p className="text-gray-300 mb-3">
                I'm currently available for new projects and collaborations.
              </p>
              <div className="text-green-400 font-semibold">Available for hire</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-slate-900 border-slate-700 text-white placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-900 border-slate-700 text-white placeholder-gray-400"
                />
              </div>
              
              <Input
                placeholder="Subject"
                className="bg-slate-900 border-slate-700 text-white placeholder-gray-400"
              />
              
              <Textarea
                placeholder="Tell me about your project requirements..."
                rows={6}
                className="bg-slate-900 border-slate-700 text-white placeholder-gray-400"
              />
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
