import { projects, getNextProject, getPrevProject } from '../../../data/projects';
import ProjectDetail from '../../../components/ProjectDetail';

export default function ByterankPage() {
  const slug = "byterank";
  const project = projects.find(p => p.slug === slug)!;
  const nextProject = getNextProject(slug);
  const prevProject = getPrevProject(slug);

  return (
    <ProjectDetail 
      key={slug}
      project={project} 
      nextProject={nextProject} 
      prevProject={prevProject} 
    />
  );
}
