import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FeedbacksCardType } from "../types";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbacksCardType) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl 
               w-full xs:w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] 
               flex-shrink-0 min-h-[200px] sm:min-h-[220px] md:min-h-[240px]"
  >
    <p className="text-white font-black text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] 
                    leading-relaxed line-clamp-4 sm:line-clamp-none">
        {testimonial}
      </p>

      <div className="mt-4 sm:mt-6 md:mt-7 flex justify-between items-center gap-2 sm:gap-1">
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-white font-medium text-[14px] sm:text-[15px] md:text-[16px] truncate">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[10px] sm:text-[11px] md:text-[12px] 
                        leading-tight truncate">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setIsMobile(window.innerWidth < 768);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Responsive card width calculation
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 480) return 280; // xs
      if (width < 640) return 320; // sm
      if (width < 768) return 350; // md
      return 380; // lg and up
    }
    return 320; // fallback
  };

  const cardWidth = getCardWidth();
  const gap = isMobile ? 16 : 28; // gap-4 vs gap-7
  const testimonialWidth = cardWidth + gap;
  const totalWidth = testimonials.length * testimonialWidth;
  const animationDuration = containerWidth > 0 ? 
    Math.max(totalWidth / (containerWidth * 0.03), 20) : 30; // Slower, more readable speed
  const shouldAnimate = totalWidth > containerWidth && !isMobile;

  return (
    <div className="mt-8 sm:mt-12 bg-black-100 rounded-[16px] sm:rounded-[20px] overflow-hidden">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant(0)}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      
      {/* Mobile: Static grid layout */}
      {isMobile ? (
        <div className={`-mt-16 sm:-mt-20 pb-10 sm:pb-14 ${styles.paddingX}`}>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <FeedbackCard key={index} index={index} {...testimonial} />
            ))}
          </div>
          {testimonials.length > 6 && (
            <div className="mt-6 text-center">
              <button className="text-secondary hover:text-white transition-colors text-sm">
                View More Testimonials
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Desktop: Marquee animation */
        <div 
          ref={containerRef}
          className="relative -mt-20 pb-14 overflow-hidden"
        >
          <div
            className={`${styles.paddingX} flex gap-7 ${shouldAnimate ? 'animate-marquee' : 'flex-wrap justify-center'}`}
            style={{
              width: shouldAnimate ? `${totalWidth * 2}px` : "auto",
              animationDuration: shouldAnimate ? `${animationDuration}s` : undefined,
              animationIterationCount: shouldAnimate ? "infinite" : 1,
            }}
          >
            {shouldAnimate ? (
              // Duplicate testimonials for seamless loop
              [...testimonials, ...testimonials].map((testimonial, index) => (
                <FeedbackCard key={index} index={index} {...testimonial} />
              ))
            ) : (
              testimonials.map((testimonial, index) => (
                <FeedbackCard key={index} index={index} {...testimonial} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
