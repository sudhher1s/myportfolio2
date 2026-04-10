const links = ["About", "Education", "Skills", "Internships", "Projects", "Achievements", "Certifications", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sugandham Sudheer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
