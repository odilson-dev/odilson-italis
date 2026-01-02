import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  useGSAP(() => {
    gsap.from(".cert-card", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#certifications",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto px-5 md:px-20">
        <TitleHeader
          title="Certifications & Achievements"
          sub="📜 Professional Recognition"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card card-border rounded-2xl overflow-hidden group hover:border-white/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-900">
                {cert.imgPath ? (
                  <img
                    src={cert.imgPath}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award className="w-16 h-16 text-white/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/10 backdrop-blur-md text-white">
                    {cert.date}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-white-50 text-sm mb-4">{cert.issuer}</p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
