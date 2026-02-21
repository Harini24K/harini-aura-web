import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "harinik1024@gmail.com", href: "mailto:harinik1024@gmail.com" },
  { icon: Phone, label: "+91 8825866583", href: "tel:+918825866583" },
  { icon: Github, label: "GitHub", href: "https://github.com/Harini24K" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harini-k-33bb38299/" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
        <p className="text-muted-foreground text-sm mb-10">
          Open to opportunities in full-stack development, generative AI, and product engineering.
          Let's build something meaningful together.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover rounded-xl p-5 flex items-center gap-3 text-left"
            >
              <link.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>

        <p className="text-muted-foreground/40 text-xs mt-20 font-heading">
          © 2026 Harini K. Crafted with passion.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
