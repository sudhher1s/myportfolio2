import AnimateIn from "@/components/AnimateIn";
import { Mail, Phone, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const ACCESS_KEY = "2d8ce697-4171-497a-a2f6-5921b40a26d4"; 

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || "New message from your Portfolio",
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mt-2">
            I'm open to internships, collaborations, hackathons, research, and innovative software or AI/ML projects.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-10 glass-card overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left */}
              <div className="md:col-span-2 p-6 md:p-8 bg-primary/5 border-b md:border-b-0 md:border-r border-border">
                <h3 className="font-display font-semibold text-foreground text-lg mb-4">Get in Touch</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Whether you have a project idea, research collaboration, or just want to say hello — I'd love to hear from you.
                </p>
                <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
                  ✨ Currently open to opportunities
                </span>

                <div className="space-y-4">
                  <a href="mailto:sudheersugandham@gmail.com" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                    <Mail size={16} className="text-primary" /> sudheersugandham@gmail.com
                  </a>
                  <a href="tel:+918143836577" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                    <Phone size={16} className="text-primary" /> +91 8143836577
                  </a>
                  <a href="https://www.linkedin.com/in/sugandhamsudheer/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                    <Linkedin size={16} className="text-primary" /> LinkedIn
                  </a>
                  <a href="https://github.com/sudhher1s" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors">
                    <Github size={16} className="text-primary" /> GitHub
                  </a>
                </div>
              </div>

              {/* Right - Form */}
              <form onSubmit={handleSubmit} className="md:col-span-3 p-6 md:p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                    <input
                      type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email Address</label>
                    <input
                      type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    disabled={isSubmitting}
                  />
                </div>
                
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle size={14} /> Failed to send message. Please make sure you added the Access Key.
                  </div>
                )}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-500 text-sm mt-2">
                    <CheckCircle size={14} /> Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 size={14} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={14} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
