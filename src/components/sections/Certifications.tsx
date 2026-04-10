import AnimateIn from "@/components/AnimateIn";
import { Award, BookOpen, Trophy, Medal } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "State-Level JNSMEE Science Fair", desc: "Winner (2018)" },
  { icon: Trophy, title: "NSRIT Hackathon 2025", desc: "5th Place Winner (2025)" },
  { icon: Trophy, title: "Swarnandhra HackSprint", desc: "First Prize (2025)" },
  { icon: Trophy, title: "GMRITX NAIT Gen AI Launch Pad", desc: "Second Prize — GenAI/Hackathon Achievement" },
  { icon: Award, title: "Aignite at AITAM Srikakulam", desc: "Consolation Prize — Hackathon/Innovation Event" },
  { icon: Award, title: "State-Level Final PolyTech Fest", desc: "Participant (2022)" },
  { icon: Medal, title: "Academic Excellence", desc: "Diploma 95.6% · SSC 100%" },
];

const certifications = [
  { title: "Full Stack Development", desc: "L&T EduTech" },
  { title: "Joy of Computing using Python", desc: "NPTEL Certification — IIT Madras" },
  { title: "C for Everyone: Programming Fundamentals", desc: "UC Santa Cruz — Coursera" },
  { title: "Coding Interview Preparation", desc: "Meta — Coursera" },
  { title: "Introduction to Generative AI", desc: "Google Cloud — Coursera" },
  { title: "Prompt Engineering for ChatGPT", desc: "Vanderbilt University — Coursera" },
];

export default function Certifications() {
  return (
    <>
      {/* Achievements */}
      <section id="achievements" className="section-padding bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Recognition</p>
            <h2 className="section-title">Achievements</h2>
          </AnimateIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="glass-card p-5 flex items-start gap-3 h-full">
                  <div className="p-2 rounded-lg shrink-0 bg-accent/15 text-accent">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-foreground text-sm leading-snug">{item.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Learning</p>
            <h2 className="section-title">Certifications</h2>
          </AnimateIn>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="glass-card p-5 flex items-start gap-3 h-full">
                  <div className="p-2 rounded-lg shrink-0 bg-primary/10 text-primary">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-foreground text-sm leading-snug">{item.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
