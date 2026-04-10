import AnimateIn from "@/components/AnimateIn";
import { useState } from "react";
import { Code, Globe, Database, Brain, BarChart3, Wrench, Users, Atom } from "lucide-react";

interface SkillGroup {
  name: string;
  icon: React.ElementType;
  skills: { name: string; level?: number }[];
}

const technicalGroups: SkillGroup[] = [
  {
    name: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 75 }, { name: "C", level: 75 }, { name: "Java", level: 50 },
      { name: "C++", level: 45 }, { name: "C#", level: 10 },
    ],
  },
  {
    name: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML5/CSS3", level: 70 }, { name: "JavaScript", level: 60 }, { name: "Flask", level: 65 },
      { name: "Bootstrap", level: 55 }, { name: "PHP", level: 45 }, { name: "Django", level: 40 },
      { name: "React", level: 40 }, { name: "FastAPI", level: 35 },
    ],
  },
  {
    name: "Database Technologies",
    icon: Database,
    skills: [
      { name: "MySQL", level: 60 }, { name: "SQLite", level: 55 }, { name: "MongoDB", level: 55 },
      { name: "SQLAlchemy", level: 50 },
    ],
  },
  {
    name: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "Pandas/Numpy", level: 65 }, { name: "Scikit-learn", level: 60 },
      { name: "Supervised Learning", level: 65 }, { name: "Matplotlib/Seaborn", level: 60 },
      { name: "EDA", level: 60 }, { name: "Unsupervised Learning", level: 60 },
      { name: "Clustering", level: 60 }, { name: "RAG Implementation", level: 55 },
      { name: "Plotly", level: 50 },
    ],
  },
  {
    name: "Quantum Computing",
    icon: Atom,
    skills: [
      { name: "Qiskit", level: 50 }, { name: "Quantum Circuits", level: 45 },
      { name: "Quantum Teleportation", level: 45 }, { name: "Quantum Entanglement", level: 40 },
      { name: "Quantum ML", level: 40 },
    ],
  },
  {
    name: "Data Visualization & Maps",
    icon: BarChart3,
    skills: [
      { name: "Folium", level: 55 }, { name: "Chart.js", level: 50 },
      { name: "Leaflet.js", level: 50 }, { name: "Power BI", level: 48 },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", level: 70 }, { name: "VS Code", level: 70 },
      { name: "Jupyter Notebook", level: 65 }, { name: "PyCharm", level: 60 },
      { name: "Streamlit", level: 55 }, { name: "XAMPP", level: 50 }, { name: "Antigravity", level: 45 },
    ],
  },
];

const softSkills = [
  "Leadership", "Teamwork", "Communication", "Time Management",
  "Problem Solving", "Adaptability", "Critical Thinking", "Project Management",
];

function ProgressBar({ level }: { level: number }) {
  return (
    <div className="h-2 bg-secondary rounded-full overflow-hidden flex-1">
      <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700" style={{ width: `${level}%` }} />
    </div>
  );
}

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = technicalGroups[activeGroup];
  const Icon = group.icon;

  return (
    <>
      {/* Technical Skills */}
      <section id="skills" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Skills</p>
            <h2 className="section-title">Technical Arsenal</h2>
          </AnimateIn>

          {/* Tabs with icons */}
          <div className="mt-8 flex flex-wrap gap-2">
            {technicalGroups.map((g, i) => {
              const TabIcon = g.icon;
              return (
                <button
                  key={g.name}
                  onClick={() => setActiveGroup(i)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-1.5 ${
                    activeGroup === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <TabIcon size={14} />
                  <span className="hidden sm:inline">{g.name}</span>
                  <span className="sm:hidden">{g.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active group */}
          <AnimateIn key={activeGroup} direction="none">
            <div className="mt-6 glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{group.name}</h3>
              </div>
              <div className="grid gap-4">
                {group.skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-4">
                    <span className="text-sm text-foreground w-36 md:w-44 shrink-0 font-medium">{s.name}</span>
                    <ProgressBar level={s.level!} />
                    <span className="text-xs text-muted-foreground w-10 text-right font-medium">{s.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Soft Skills — separate section */}
      <section className="pb-20 md:pb-28 px-4 md:px-8 -mt-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-accent/15 text-accent">
                  <Users size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-lg text-sm bg-secondary text-foreground border border-border font-medium hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
