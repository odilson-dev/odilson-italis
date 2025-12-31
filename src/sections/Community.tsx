import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  useGSAP(() => {
    gsap.from(".community-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#community",
        start: "top 80%",
      },
    });

    gsap.from(".github-graph", {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      scrollTrigger: {
        trigger: ".github-graph",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="community" className="section-padding">
      <div className="container mx-auto px-5 md:px-20">
        <TitleHeader
          title="GitHub Contributions"
          sub="🌐 Tech Involvement & Activity"
        />

        <div className="mt-16 space-y-12">
          {/* GitHub Contribution Graph */}
          <div className="github-graph card-border rounded-2xl p-6 md:p-10 bg-black-100/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <img src="/images/code.svg" className="w-6 h-6" alt="" />
              GitHub Activity
            </h3>
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/odilson-dev"
                alt="Odilson's GitHub Contributions"
                className="w-full min-w-[700px] invert opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-white-50 text-sm mt-4 text-center">
              My open-source contributions over the last year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
