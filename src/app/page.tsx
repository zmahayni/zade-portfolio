import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-zinc-100">
      <Hero />
      <Section id="about" title="About">
        <About />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="personal" title="Personal">
        <Personal />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </main>
  );
}
