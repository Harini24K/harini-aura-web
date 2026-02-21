import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "React", "Django", "Flask", "FastAPI", "Diffusion Models",
    "NLP", "Product Thinking", "System Design"
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              I'm a full-stack developer and generative AI engineer who doesn't just write code — I build products.
              With deep experience across <span className="text-foreground font-medium">React, Flask, Django, and FastAPI</span>,
              I architect systems that are both scalable and user-centric.
            </p>
            <p>
              My work in <span className="text-foreground font-medium">generative AI</span> spans diffusion models for creative applications and NLP pipelines for
              legal-tech and healthcare domains. I approach every project with a product mindset —
              validating ideas, designing for impact, and shipping fast.
            </p>
            <p>
              Beyond engineering, I lead communities as a <span className="text-foreground font-medium">DevOps & Infra Lead at AWS Cloud Club</span> and
              core member of <span className="text-foreground font-medium">Google Developer Groups</span>, constantly pushing the boundaries of what's possible with technology.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
