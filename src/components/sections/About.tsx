import AnimateIn from "@/components/AnimateIn";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimateIn>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="section-title">Who I Am</h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <div className="glass-card p-8 md:p-10 mt-8">
            <p className="text-foreground/95 leading-relaxed text-lg mb-4">
              I'm a B.Tech Computer Science student at GMR Institute of Technology with a track record of building 33+ real-world projects across full-stack development, AI/ML, and quantum computing.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              My work spans accident detection systems using YOLO, GenAI-powered medical coding assistants, quantum ML stock predictors, and civic tech platforms for urban issue reporting. I combine technical depth with a problem-first mindset — every project I build solves something real.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
