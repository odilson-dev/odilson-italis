import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export interface LightboxPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface ImageLightboxProps {
  photos: LightboxPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox = ({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) => {
  const isOpen = activeIndex !== null;
  const photo = activeIndex !== null ? photos[activeIndex] : null;
  const hasPrev = activeIndex !== null && activeIndex > 0;
  const hasNext =
    activeIndex !== null && activeIndex < photos.length - 1;

  const goPrev = useCallback(() => {
    if (activeIndex !== null && hasPrev) {
      onNavigate(activeIndex - 1);
    }
  }, [activeIndex, hasPrev, onNavigate]);

  const goNext = useCallback(() => {
    if (activeIndex !== null && hasNext) {
      onNavigate(activeIndex + 1);
    }
  }, [activeIndex, hasNext, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen || !photo) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close preview"
      />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black-200/80 border border-white/10 text-white hover:bg-black-200 transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 md:left-6 z-10 p-2 rounded-full bg-black-200/80 border border-white/10 text-white hover:bg-black-200 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 md:right-6 z-10 p-2 rounded-full bg-black-200/80 border border-white/10 text-white hover:bg-black-200 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <figure className="relative z-10 flex flex-col items-center max-w-5xl max-h-[90vh] w-full">
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />
        <figcaption className="text-white-50 text-sm md:text-base mt-4 text-center px-4">
          {photo.caption}
        </figcaption>
        {photos.length > 1 && (
          <p className="text-white-50/60 text-xs mt-2">
            {(activeIndex ?? 0) + 1} / {photos.length}
          </p>
        )}
      </figure>
    </div>
  );
};

export default ImageLightbox;
