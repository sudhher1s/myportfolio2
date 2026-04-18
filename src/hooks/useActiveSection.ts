import { useEffect, useState } from "react";

const sections = ["hero", "about", "education", "skills", "internships", "projects", "recognition", "certifications", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const ordered = [...ratios.entries()].sort((a, b) => b[1] - a[1]);
        const best = ordered.find(([, ratio]) => ratio > 0.08);
        if (best?.[0]) {
          setActive(best[0]);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.75],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
