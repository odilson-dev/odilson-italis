import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { useLocale } from "../i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t } = useLocale();

  useGSAP(() => {
    gsap.from(".about-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    gsap.from(".about-image", {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="about" className="section-padding md:mt-20 mt-10">
      <div className="container mx-auto px-5 md:px-20">
        <TitleHeader title={t.about.title} sub={t.about.sub} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-16">
          <div className="w-full md:w-1/2 flex justify-center about-image">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-2xl z-10" />
              <img
                src="/images/shooting-1.jpg"
                alt="Odilson Profile"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover border border-white/10"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6 text-white-50 text-lg leading-relaxed">
            <p className="about-text">{t.about.paragraphs[0]}</p>
            <p className="about-text">{t.about.paragraphs[1]}</p>
            <p className="about-text">
              {t.about.paragraphs[2]}{" "}
              <a
                href="#community"
                className="text-white font-bold underline-offset-2 hover:text-white-50 transition-colors"
              >
                {t.about.communityLink}
              </a>
              {t.about.communitySuffix}
            </p>
            <div className="about-text mt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                {t.about.viewWork}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
