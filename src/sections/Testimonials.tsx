import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
} from "react";
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

const buildLoopedItems = (items: Testimonial[], copies: number) => {
  if (items.length === 0) return [];
  const singleSet = Array.from({ length: copies }, () => items).flat();
  return [...singleSet, ...singleSet];
};

const useMarqueeCopies = (
  items: Testimonial[],
  viewportRef: RefObject<HTMLDivElement | null>,
) => {
  const measureRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(3);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const measure = measureRef.current;
    if (!viewport || !measure || items.length === 0) return;

    const syncCopies = () => {
      const viewportHeight = viewport.clientHeight;
      const oneCopyHeight = measure.scrollHeight;
      if (viewportHeight <= 0 || oneCopyHeight <= 0) return;

      const needed = Math.max(2, Math.ceil(viewportHeight / oneCopyHeight) + 1);
      setCopies((prev) => (prev !== needed ? needed : prev));
    };

    syncCopies();

    const observer = new ResizeObserver(syncCopies);
    observer.observe(viewport);
    observer.observe(measure);

    return () => observer.disconnect();
  }, [items, viewportRef]);

  return { measureRef, copies };
};

const MarqueeColumn = ({
  items,
  direction,
  columnIndex,
}: {
  items: Testimonial[];
  direction: "up" | "down";
  columnIndex: number;
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const { measureRef, copies } = useMarqueeCopies(items, viewportRef);
  const loopedItems = useMemo(
    () => buildLoopedItems(items, copies),
    [items, copies],
  );
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
      ? "testimonial-marquee-track flex flex-col"
      : "testimonial-marquee-track-down flex flex-col";

  return (
    <div
      ref={viewportRef}
      className="relative h-full overflow-hidden"
      onMouseLeave={handleColumnMouseLeave}
    >
      <div
        ref={measureRef}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex flex-col opacity-0"
        aria-hidden="true"
      >
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`measure-${columnIndex}-${index}`}
            testimonial={testimonial}
            index={columnIndex * 1000 + index}
            onHoverStart={() => undefined}
            onHoldStart={() => undefined}
            onHoldEnd={() => undefined}
          />
        ))}
      </div>

      <div
        className={`${trackClass}${paused ? " testimonial-marquee-track-paused" : ""}`}
      >
        {loopedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${columnIndex}-${testimonial.name}-${index}`}
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
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title={t.testimonials.title} sub={t.testimonials.sub} />

        <div className="mt-10 sm:mt-16">
          <div className="testimonials-marquee-viewport h-[clamp(560px,75vh,960px)] overflow-hidden">
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
