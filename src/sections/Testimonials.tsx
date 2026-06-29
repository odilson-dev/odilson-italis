import { useEffect, useRef, useState, type PointerEvent } from "react";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import type { Testimonial } from "../constants/types";
import { useLocale } from "../i18n/LocaleContext";

const HOLD_DELAY_MS = 450;

const splitIntoColumns = (items: Testimonial[], count: number) =>
  Array.from({ length: count }, (_, column) =>
    items.filter((_, index) => index % count === column),
  );

const TestimonialCard = ({
  testimonial,
  index,
  onHoldStart,
  onHoldEnd,
}: {
  testimonial: Testimonial;
  index: number;
  onHoldStart: (event: PointerEvent<HTMLDivElement>) => void;
  onHoldEnd: (event: PointerEvent<HTMLDivElement>) => void;
}) => (
  <div
    className="shrink-0 touch-manipulation select-none cursor-pointer"
    onPointerDown={onHoldStart}
    onPointerUp={onHoldEnd}
    onPointerCancel={onHoldEnd}
  >
    <GlowCard
      card={testimonial}
      index={index}
      className="pointer-events-none p-6! md:p-8! lg:p-10!"
    >
      <div className="flex items-center gap-3">
        <div>
          <img src={testimonial.imgPath} alt="" draggable={false} />
        </div>
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-white-50">{testimonial.mentions}</p>
        </div>
      </div>
    </GlowCard>
  </div>
);

const MarqueeColumn = ({
  items,
  direction,
  columnIndex,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  columnIndex: number;
}) => {
  const loopedItems = [...items, ...items];
  const [paused, setPaused] = useState(false);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoldTimer = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  const resume = () => {
    clearHoldTimer();
    setPaused(false);
  };

  const handleHoldStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    clearHoldTimer();

    holdTimerRef.current = setTimeout(() => {
      setPaused(true);
    }, HOLD_DELAY_MS);
  };

  const handleHoldEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resume();
  };

  useEffect(() => () => clearHoldTimer(), []);

  const trackClass =
    direction === "up"
      ? "testimonial-marquee-track flex flex-col"
      : "testimonial-marquee-track-down flex flex-col";

  return (
    <div className="h-full overflow-hidden">
      <div
        className={`${trackClass}${paused ? " testimonial-marquee-track-paused" : ""}`}
      >
        {loopedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${columnIndex}-${testimonial.mentions}-${index}`}
            testimonial={testimonial}
            index={columnIndex * 100 + index}
            onHoldStart={handleHoldStart}
            onHoldEnd={handleHoldEnd}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLocale();
  const testimonials = t.testimonials.items;
  const columns2 = splitIntoColumns(testimonials, 2);
  const columns3 = splitIntoColumns(testimonials, 3);

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title={t.testimonials.title} sub={t.testimonials.sub} />

        <div className="mt-10 sm:mt-16">
          <div className="testimonials-marquee-viewport h-[clamp(420px,62vh,760px)] overflow-hidden">
            <div className="h-full md:hidden">
              <MarqueeColumn
                items={testimonials}
                direction="up"
                columnIndex={0}
              />
            </div>

            <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-5 h-full">
              <MarqueeColumn
                items={columns2[0]}
                direction="up"
                columnIndex={0}
              />
              <MarqueeColumn
                items={columns2[1]}
                direction="down"
                columnIndex={1}
              />
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-6 h-full">
              <MarqueeColumn
                items={columns3[0]}
                direction="up"
                columnIndex={0}
              />
              <MarqueeColumn
                items={columns3[1]}
                direction="down"
                columnIndex={1}
              />
              <MarqueeColumn
                items={columns3[2]}
                direction="up"
                columnIndex={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
