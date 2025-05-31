
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 90 },
        { name: "Odoo Framework", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "XML/QWeb", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 80 },
        { name: "Odoo Web Framework", level: 85 },
        { name: "Bootstrap", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
        { name: "API Integration", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My expertise spans across various technologies and frameworks, with a focus on Odoo development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
