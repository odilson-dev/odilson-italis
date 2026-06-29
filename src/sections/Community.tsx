import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, MapPin, ZoomIn } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import TitleHeader from "../components/TitleHeader";
import { codingClubCayes } from "../constants";
import type { CommunityPhoto } from "../constants/types";

gsap.registerPlugin(ScrollTrigger);

const CommunityPhotoButton = ({
  photo,
  index,
  onOpen,
  className = "",
  imageClassName = "",
}: {
  photo: CommunityPhoto;
  index: number;
  onOpen: (index: number) => void;
  className?: string;
  imageClassName?: string;
}) => (
  <button
    type="button"
    onClick={() => onOpen(index)}
    className={`group relative block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-xl ${className}`}
    aria-label={`View larger: ${photo.caption}`}
  >
    <img src={photo.src} alt={photo.alt} className={imageClassName} />
    <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
    </span>
  </button>
);

const Community = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const allPhotos = codingClubCayes.photos;
  const featuredPhoto = allPhotos.find((photo) => photo.featured);
  const galleryPhotos = allPhotos.filter((photo) => !photo.featured);

  const getPhotoIndex = (src: string) =>
    allPhotos.findIndex((photo) => photo.src === src);

  useGSAP(() => {
    gsap.from(".community-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".community-card",
        start: "top 85%",
        once: true,
      },
    });

    gsap.from(".community-photo", {
      opacity: 0,
      scale: 0.96,
      duration: 0.7,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".community-gallery",
        start: "top 85%",
        once: true,
      },
    });

    gsap.from(".github-graph", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".github-graph",
        start: "top bottom",
        once: true,
      },
    });
  }, []);

  return (
    <section id="community" className="section-padding">
      <ImageLightbox
        photos={allPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <div className="container mx-auto px-5 md:px-20">
        <TitleHeader
          title="Community & Open Source"
          sub="🌐 Tech Involvement & Activity"
        />

        <div className="mt-16 space-y-12">
          {/* Coding Club Cayes */}
          <div className="community-card card-border rounded-2xl p-6 md:p-10 bg-black-100/50 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-100/40 text-white-50 border border-white/10">
                Member since {codingClubCayes.memberSince}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white-50">
                <MapPin className="w-4 h-4" />
                {codingClubCayes.location}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-sm font-medium text-blue-50 uppercase tracking-wide mb-2">
                  {codingClubCayes.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {codingClubCayes.title}
                </h3>
                <p className="text-white-50 text-sm mb-6">
                  A branch of{" "}
                  <a
                    href={codingClubCayes.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline inline-flex items-center gap-1"
                  >
                    {codingClubCayes.organization}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </p>

                <div className="space-y-4 text-white-50 leading-relaxed">
                  {codingClubCayes.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                <a
                  href={codingClubCayes.organizationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Visit Coding Club Haïti
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {featuredPhoto && (
                <figure className="community-photo">
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <CommunityPhotoButton
                      photo={featuredPhoto}
                      index={getPhotoIndex(featuredPhoto.src)}
                      onOpen={setLightboxIndex}
                      imageClassName="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="text-white-50 text-sm mt-3 text-center">
                    {featuredPhoto.caption}
                  </figcaption>
                </figure>
              )}
            </div>

            <div className="community-gallery mt-12">
              <h4 className="text-lg font-semibold mb-6">
                Integration Ceremony
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryPhotos.map((photo) => (
                  <figure key={photo.src} className="community-photo">
                    <div className="overflow-hidden rounded-xl border border-white/10 aspect-4/3">
                      <CommunityPhotoButton
                        photo={photo}
                        index={getPhotoIndex(photo.src)}
                        onOpen={setLightboxIndex}
                        imageClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="text-white-50 text-xs mt-2">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Contribution Graph */}
          <a
            href="http://github.com/odilson-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
