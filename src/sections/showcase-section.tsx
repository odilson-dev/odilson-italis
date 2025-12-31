import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const renderProjectButtons = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (!project || selectedProject !== projectId) return null;

    return (
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl flex items-center justify-center gap-4 z-10 animate-fadeIn">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          <Github className="w-5 h-5" />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-5 h-5" />
          Live View
        </a>
      </div>
    );
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div
              className="image-wrapper cursor-pointer"
              onClick={() => handleProjectClick("ryde")}
            >
              <img src={projects[0].imgPath} alt={projects[0].title} />
              {renderProjectButtons("ryde")}
            </div>
            <div className="text-content">
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project cursor-pointer"
              ref={libraryRef}
              onClick={() => handleProjectClick("library")}
            >
              <div
                className="image-wrapper relative"
                style={{ backgroundColor: projects[1].bgColor }}
              >
                <img src={projects[1].imgPath} alt={projects[1].title} />
                {renderProjectButtons("library")}
              </div>
              <h2>{projects[1].title}</h2>
            </div>

            <div
              className="project cursor-pointer"
              ref={ycDirectoryRef}
              onClick={() => handleProjectClick("yc-directory")}
            >
              <div
                className="image-wrapper relative"
                style={{ backgroundColor: projects[2].bgColor }}
              >
                <img src={projects[2].imgPath} alt={projects[2].title} />
                {renderProjectButtons("yc-directory")}
              </div>
              <h2>{projects[2].title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
