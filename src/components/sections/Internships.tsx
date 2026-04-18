import AnimateIn from "@/components/AnimateIn";
import { Briefcase } from "lucide-react";

const internships = [
  {
    role: "MERN Stack Intern",
    company: "IIT Ropar",
    duration: "Ongoing",
    desc: "Building production-grade full-stack applications using the MERN stack. Developing RESTful APIs with Node.js/Express, building responsive React frontends with state management, and designing MongoDB schemas for real-world use cases. Currently deploying 2 full-stack apps to production.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    current: true,
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "HCL Technologies",
    duration: "6 months",
    desc: "Developed responsive web applications using HTML/CSS, JavaScript, PHP, and MySQL. Collaborated in an Agile team of 5 developers, delivered 3 client projects on schedule, and implemented responsive designs that improved mobile user engagement by 40%.",
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    current: false,
  },
  {
    role: "Machine Learning Intern",
    company: "Syber Spring Informatics",
    duration: "1 month",
    desc: "Built and deployed ML models using Python, Scikit-learn, Pandas, and NumPy. Performed data preprocessing, feature engineering, and model evaluation on real-world datasets. Trained classification models achieving 85%+ accuracy on test data.",
    tech: ["Python", "Scikit-learn", "Pandas", "Numpy"],
    current: false,
  },
];

export default function Internships() {
  return (
    <section id="internships" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Experience</p>
          <h2 className="section-title">Internships</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-6">
          {internships.map((intern, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                {intern.current && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Ongoing
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg">{intern.role}</h3>
                    <p className="text-primary text-sm font-medium">{intern.company}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{intern.duration}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{intern.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {intern.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
