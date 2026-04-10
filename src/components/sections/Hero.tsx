import AnimateIn from "@/components/AnimateIn";
import { Github, Linkedin, Code2, TerminalSquare, Trophy, BookOpen, ArrowDown, FileText } from "lucide-react";

const socials = [
  { href: "https://www.linkedin.com/in/sugandhamsudheer/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/sudhher1s", icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/CS_24345A0501", icon: Code2, label: "LeetCode" },
  { href: "https://www.hackerrank.com/profile/sudheersugandham", icon: TerminalSquare, label: "HackerRank" },
  { href: "https://www.codechef.com/users/cs_24345a0501", icon: Trophy, label: "CodeChef" },
  { href: "https://www.geeksforgeeks.org/profile/sudheersugandham", icon: BookOpen, label: "GeeksForGeeks" },
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Avatar */}
          <AnimateIn delay={0.1} direction="left">
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-primary/30 bg-secondary flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-primary/10 ring-offset-2 ring-offset-background transition-transform hover:scale-105">
                <img
                  src="/1.png"
                  alt="Sugandham Sudheer"
                  className="w-full h-full object-cover object-[50%_20%]"
                  loading="eager"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <div className="text-center md:text-left">
            <AnimateIn delay={0.15}>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Welcome to my portfolio</p>
            </AnimateIn>
            <AnimateIn delay={0.25}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
                Sugandham<br />
                <span className="gradient-text">Sudheer</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.35}>
              <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
                Full Stack Developer · ML Enthusiast · B.Tech CSE
              </p>
            </AnimateIn>
            <AnimateIn delay={0.45}>
              <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                Building impactful solutions at the intersection of full-stack development and AI/ML.
                From hackathon-winning projects to research-driven applications, I turn ideas into production-ready software
                with a focus on real-world impact.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.55}>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                <button onClick={() => scrollTo("projects")} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  View Projects
                </button>
                <button onClick={() => scrollTo("contact")} className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                  Contact Me
                </button>
                <a href="/resume.pdf" download className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors inline-flex items-center gap-2">
                  <FileText size={16} /> Resume
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.65}>
              <div className="flex items-center justify-center md:justify-start gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label={s.label}
                    title={s.label}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn delay={0.8}>
          <div className="text-center mt-16">
            <button onClick={() => scrollTo("about")} className="text-muted-foreground animate-bounce inline-block" aria-label="Scroll down">
              <ArrowDown size={20} />
            </button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
