import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from "react";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import type { Testimonial } from "../constants/types";
import { useLocale } from "../i18n/LocaleContext";

const HOLD_DELAY_MS = 450;
const SET_REPEATS = 6;

const splitIntoColumns = (items: Testimonial[], count: number) =>
  Array.from({ length: count }, (_, column) =>
    items.filter((_, index) => index % count === column),
  );

const buildLoopedItems = (items: Testimonial[]) => {
  if (items.length === 0) return [];
  const singleSet = Array.from({ length: SET_REPEATS }, () => items).flat();
  return [...singleSet, ...singleSet];
};

const TestimonialCard = ({
  testimonial,
  index,
  onHoverStart,
  onHoldStart,
  onHoldEnd,
}: {
  testimonial: Testimonial;
  index: number;
  onHoverStart: () => void;
  onHoldStart: (event: PointerEvent<HTMLDivElement>) => void;
  onHoldEnd: (event: PointerEvent<HTMLDivElement>) => void;
}) => (
  <div
    data-testimonial-card
    className="shrink-0 touch-manipulation select-none cursor-pointer"
    onMouseEnter={onHoverStart}
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
        <div className="size-12 shrink-0 overflow-hidden rounded-full border border-white-50/20">
          <img
            src={testimonial.imgPath}
            alt=""
            draggable={false}
            className="size-full object-cover object-center"
          />
        </div>
        <div>
          <p className="font-bold">{testimonial.name}</p>
          <p className="text-white-50">{testimonial.role}</p>
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
  const loopedItems = buildLoopedItems(items);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [holdPaused, setHoldPaused] = useState(false);
  const paused = hoverPaused || holdPaused;
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoldTimer = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  const resumeHold = () => {
    clearHoldTimer();
    setHoldPaused(false);
  };

  const handleHoverStart = () => setHoverPaused(true);

  const handleColumnMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const related = event.relatedTarget;
    if (related instanceof Node && event.currentTarget.contains(related)) return;
    setHoverPaused(false);
  };

  const handleHoldStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    if (event.button !== 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    clearHoldTimer();

    holdTimerRef.current = setTimeout(() => {
      setHoldPaused(true);
    }, HOLD_DELAY_MS);
  };

  const handleHoldEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resumeHold();
  };

  useEffect(() => () => clearHoldTimer(), []);

  const trackClass =
    direction === "up"
      ? "testimonial-marquee-track-up flex flex-col"
      : "testimonial-marquee-track-down flex flex-col";

  return (
    <div
      className="relative h-full min-h-0 overflow-hidden"
      onMouseLeave={handleColumnMouseLeave}
    >
      <div
        className={`${trackClass}${paused ? " testimonial-marquee-track-paused" : ""}`}
      >
        {loopedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${columnIndex}-${index}`}
            testimonial={testimonial}
            index={columnIndex * 100 + index}
            onHoverStart={handleHoverStart}
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
      <div className="w-full md:px-10 px-5">
        <TitleHeader title={t.testimonials.title} sub={t.testimonials.sub} />

        <div className="mt-10 sm:mt-16">
          <div className="testimonials-marquee-viewport h-[clamp(560px,75vh,960px)] overflow-hidden">
            <div className="h-full min-h-0 md:hidden">
              <MarqueeColumn
                items={testimonials}
                direction="up"
                columnIndex={0}
              />
            </div>

            <div className="hidden h-full min-h-0 md:grid md:grid-cols-2 lg:hidden md:gap-5 *:min-h-0">
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

            <div className="hidden h-full min-h-0 lg:grid lg:grid-cols-3 lg:gap-6 *:min-h-0">
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
