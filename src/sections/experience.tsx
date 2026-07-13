import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { useLocale } from "../i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { t } = useLocale();

  useGSAP(() => {
    (gsap.utils.toArray(".timeline-card") as gsap.DOMTarget[]).forEach(
      (card) => {
        gsap.from(card, {
          xPercent: -100,
          opacity: 0,
          transformOrigin: "left left",
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      },
    );

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    (gsap.utils.toArray(".expText") as gsap.DOMTarget[]).forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title={t.experience.title} sub={t.experience.sub} />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {t.expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div
                        className="timeline-logo"
                        style={
                          card.logoBgColor
                            ? { backgroundColor: card.logoBgColor }
                            : undefined
                        }
                      >
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          {t.experience.responsibilities}
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
