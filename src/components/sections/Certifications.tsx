import AnimateIn from "@/components/AnimateIn";
import { Award, BookOpen, Trophy, Medal } from "lucide-react";

type RecognitionType = "hackathon" | "academic" | "school";

const recognitionCards: { title: string; desc: string; type: RecognitionType }[] = [
  { title: "Swarnandhra HackSprint", desc: "1st Prize Winner (2025)", type: "hackathon" },
  { title: "NSRIT Hackathon 2025", desc: "5th Place Winner", type: "hackathon" },
  { title: "GMRITX NAIT Gen AI Launch Pad", desc: "2nd Prize (2025)", type: "hackathon" },
  { title: "Aignite 2.0 at AITAM Srikakulam", desc: "Consolation Prize — Hackathon/Innovation Event", type: "hackathon" },
  { title: "HackHub - GMRIT", desc: "Final Round (2025)", type: "hackathon" },
  { title: "Gen AI Hackathon - JNTU VGM", desc: "Final Round", type: "hackathon" },
  { title: "Quantum Kurukshetra - GMRIT", desc: "Final Round", type: "hackathon" },
  { title: "AI Marathon - GMRIT", desc: "Final Round", type: "hackathon" },
  { title: "UIDAI Hackathon", desc: "Participated", type: "hackathon" },
  { title: "Smart India Hackathon 2024", desc: "Participated", type: "hackathon" },
  { title: "Smart India Hackathon 2025", desc: "Participated", type: "hackathon" },
  { title: "AQVH at GMRIT", desc: "Participated", type: "hackathon" },
  { title: "Academic Excellence", desc: "Diploma 95.6% · SSC 100%", type: "academic" },
  { title: "State-Level JNSMEE Science Fair", desc: "Winner (2018)", type: "school" },
  { title: "Amaraverula Dinotsavam Essay Writing", desc: "State-Level Second Prize (2019)", type: "school" },
  { title: "State-Level Final PolyTech Fest", desc: "Winner (2022)", type: "academic" },
];

const certifications: { title: string; desc: string; date: string }[] = [
  {
    title: "Full Stack Development",
    desc: "L&T EduTech",
    date: "Jan 2026",
  },
  {
    title: "Joy of Computing using Python",
    desc: "NPTEL Certification — IIT Madras",
    date: "Oct 2025",
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    desc: "UC Santa Cruz — Coursera",
    date: "Aug 2025",
  },
  {
    title: "Coding Interview Preparation",
    desc: "Meta — Coursera",
    date: "Sep 2025",
  },
  {
    title: "Introduction to Generative AI",
    desc: "Google Cloud — Coursera",
    date: "Jul 2025",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    desc: "Vanderbilt University — Coursera",
    date: "Sep 2025",
  },
];

function recognitionStyles(type: RecognitionType) {
  if (type === "hackathon") {
    return {
      icon: Trophy,
      iconWrap: "bg-primary/10 text-primary",
      badge: "Hackathon",
      badgeClass: "bg-primary/10 text-primary border border-primary/25",
    };
  }

  if (type === "academic") {
    return {
      icon: Medal,
      iconWrap: "bg-accent/15 text-accent",
      badge: "Academic",
      badgeClass: "bg-accent/15 text-accent border border-accent/30",
    };
  }

  return {
    icon: Award,
    iconWrap: "bg-secondary text-foreground",
    badge: "School",
    badgeClass: "bg-secondary text-foreground border border-border",
  };
}

export default function Certifications() {
  return (
    <>
      <section id="recognition" className="section-padding bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Recognition</p>
            <h2 className="section-title">Recognition & Hackathons</h2>
          </AnimateIn>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recognitionCards.map((item, i) => {
              const style = recognitionStyles(item.type);
              const Icon = style.icon;
              return (
                <AnimateIn key={i} delay={i * 0.04}>
                  <div className="glass-card p-5 flex items-start gap-3 h-full">
                    <div className={`p-2 rounded-lg shrink-0 ${style.iconWrap}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${style.badgeClass}`}>
                          {style.badge}
                        </span>
                      </div>
                      <h3 className="font-display font-medium text-foreground text-sm leading-snug">{item.title}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

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
                    <p className="text-xs text-primary mt-2 font-medium">Completed: {item.date}</p>
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
