import { experiences } from '../../data/experience';
import ExperienceTimeline from '../../components/ExperienceTimeline';
import Section from '../../components/Section';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-6 pt-32 lg:pt-24">
      <Section id="experience-header">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-lightest mb-8">
          Experience
        </h1>
        
        <ExperienceTimeline experiences={experiences} />
      </Section>
    </div>
  );
}
