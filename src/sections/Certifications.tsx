import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink, ZoomIn } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import TitleHeader from "../components/TitleHeader";
import { certifications } from "../constants";
import { useLocale } from "../i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxPhotos = useMemo(
    () =>
      certifications
        .filter((cert) => Boolean(cert.imgPath))
        .map((cert) => ({
          src: cert.imgPath!,
          alt: cert.title,
          caption: `${cert.title} — ${cert.issuer}`,
        })),
    [],
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".cert-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 36, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          // Keep cards visible until ScrollTrigger actually starts the tween
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true,
          },
        },
      );

      // Content above this section (images / 3D) shifts layout — refresh triggers
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const timeoutId = window.setTimeout(refresh, 400);

      return () => {
        window.removeEventListener("load", refresh);
        window.clearTimeout(timeoutId);
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container mx-auto px-5 md:px-20">
        <TitleHeader title={t.certifications.title} sub={t.certifications.sub} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {certifications.map((cert) => {
            const photoIndex = lightboxPhotos.findIndex(
              (photo) => photo.src === cert.imgPath,
            );

            return (
              <div
                key={`${cert.title}-${cert.date}`}
                className="cert-card card-border rounded-2xl overflow-hidden group hover:border-white/30 transition-all duration-500"
              >
                <button
                  type="button"
                  className="relative w-full h-52 overflow-hidden bg-zinc-800 text-left cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-default"
                  onClick={() => {
                    if (photoIndex >= 0) setLightboxIndex(photoIndex);
                  }}
                  aria-label={`${t.certifications.viewLarger}: ${cert.title}`}
                  disabled={!cert.imgPath}
                >
                  {cert.imgPath ? (
                    <img
                      src={cert.imgPath}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Award className="w-16 h-16 text-white/20" />
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-md bg-black/70 border border-white/10 text-white">
                      {cert.date}
                    </span>
                  </div>

                  {cert.imgPath && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/70 border border-white/10 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" />
                      {t.certifications.viewLarger}
                    </span>
                  )}
                </button>

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
                      {t.certifications.viewCertificate}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ImageLightbox
        photos={lightboxPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default Certifications;
