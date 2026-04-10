import AnimateIn from "@/components/AnimateIn";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.Tech in Computer Science & Engineering", school: "GMR Institute of Technology, Rajam", period: "2024 – Present", score: "" },
  { degree: "Diploma in Computer Engineering", school: "GPT, Srikakulam", period: "2021 – 2024", score: "95.6%" },
  { degree: "SSC", school: "Govt. High School, Palakonda", period: "2021", score: "100%" },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Education</p>
          <h2 className="section-title">Academic Journey</h2>
        </AnimateIn>
        <div className="mt-10 relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />
          {education.map((e, i) => (
            <AnimateIn key={i} delay={i * 0.12} direction="left">
              <div className="relative pl-12 md:pl-16 pb-10 last:pb-0">
                <div className="absolute left-1.5 md:left-3.5 top-1 w-5 h-5 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <GraduationCap size={10} className="text-primary" />
                </div>
                <div className="glass-card p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-foreground">{e.degree}</h3>
                    {e.score && <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/15 text-accent">{e.score}</span>}
                  </div>
                  <p className="text-muted-foreground text-sm">{e.school}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1">{e.period}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
