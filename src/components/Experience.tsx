
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Odoo Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description: [
        "Lead development of complex Odoo customizations for enterprise clients",
        "Implemented multi-company configurations and advanced reporting modules",
        "Mentored junior developers and conducted code reviews",
        "Optimized system performance resulting in 40% faster load times"
      ]
    },
    {
      title: "Odoo Developer",
      company: "Business Systems Ltd.",
      period: "2021 - 2022",
      location: "Mumbai, India",
      description: [
        "Developed custom modules for inventory management and accounting",
        "Integrated Odoo with external APIs and third-party services",
        "Provided technical support and training to end users",
        "Participated in full-cycle implementation projects"
      ]
    },
    {
      title: "Junior Python Developer",
      company: "StartUp Ventures",
      period: "2020 - 2021",
      location: "Pune, India",
      description: [
        "Started career focusing on Python development and web frameworks",
        "Learned Odoo framework and contributed to small customization projects",
        "Assisted in database design and data migration tasks",
        "Gained experience in agile development methodologies"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in Odoo development and ERP solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-slate-600"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline dot */}
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-6 flex-shrink-0"></div>
                
                <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 flex-1 hover:border-blue-500 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="text-gray-300 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
