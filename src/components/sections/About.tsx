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
            <p className="text-foreground leading-relaxed text-lg mb-4">
              I am a passionate Full Stack Developer with a strong foundation in Computer Science and a keen interest in Artificial Intelligence. My journey in technology is driven by a desire to create innovative solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently pursuing B.Tech in Computer Science at GMR Institute of Technology and hold a Diploma in Computer Engineering with 95.6%. I'm a hardworking and dedicated individual with strong willingness to learn and apply new ideas effectively.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
