/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

const imageModules = import.meta.glob(
  '../assets/images/portfolio/*.{webp,jpg,jpeg,png}',
  { eager: true },
);

const imageByNumber = {};
for (const [path, mod] of Object.entries(imageModules)) {
  const stem = path.match(/(\d+)\.\w+$/)?.[1];
  if (stem) {
    if (!imageByNumber[stem] || path.endsWith('.webp')) {
      imageByNumber[stem] = mod.default;
    }
  }
}

const ORDERED_FILENAMES = [
  '126',
  '102',
  '118',
  '119',
  '120',
  '121',
  '122',
  '123',
  '124',
  '125',
  '113',
  '114',
  '115',
  '116',
  '110',
  '111',
  '112',
  '109',
  '108',
  '16',
  '18',
  '80',
  '81',
  '82',
  '101',
  '117',
  '10',
  '14',
  '103',
  '104',
  '73',
  '72',
  '1',
  '3',
  '4',
  '22',
  '21',
  '23',
  '2',
  '24',
  '58',
  '56',
  '60',
  '62',
  '61',
  '63',
  '8',
  '66',
  '52',
  '67',
  '28',
  '32',
  '12',
  '17',
  '51',
  '19',
  '13',
  '15',
  '16',
  '50',
  '53',
  '34',
  '14',
  '40',
  '39',
  '46',
  '47',
  '49',
];

const images = ORDERED_FILENAMES.map((num) => imageByNumber[num]).filter(
  Boolean,
);

// ─── Lightbox ────────────────────────────────────────────────────────────────
const Lightbox = ({ src, index, total, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'rgba(38,50,56,0.93)',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.25em] uppercase"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {index + 1} &nbsp;/&nbsp; {total}
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-white/50 hover:text-white transition-colors text-4xl font-light leading-none"
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 md:left-8 text-white/40 hover:text-white transition-colors text-5xl font-light leading-none select-none px-2 py-4"
        aria-label="Previous image"
      >
        ‹
      </button>

      <img
        src={src}
        alt={`portfolio ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[85vw] rounded-2xl object-contain"
        style={{
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
          border: '1px solid rgba(222,195,252,0.2)',
        }}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 md:right-8 text-white/40 hover:text-white transition-colors text-5xl font-light leading-none select-none px-2 py-4"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
};

// ─── Card ────────────────────────────────────────────────────────────────────
const PortfolioCard = ({ src, index, onClick }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delay = (index % 5) * 60;

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        aspectRatio: '3/4',
      }}
      onClick={() => onClick(index)}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(index)}
      role="button"
      aria-label={`View portfolio image ${index + 1}`}
    >
      <img
        src={src}
        alt={`portfolio img ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'linear-gradient(135deg, rgba(142,197,252,0.12) 0%, rgba(209,111,188,0.18) 100%)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end px-3 pb-3"
        style={{
          background:
            'linear-gradient(to top, rgba(38,50,56,0.55), transparent)',
        }}
      >
        <span
          className="text-white/75 text-[10px] tracking-[0.2em] uppercase"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          View
        </span>
      </div>
    </div>
  );
};

// ─── Main ────────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <section
      className="min-h-screen py-24 px-4 md:px-8"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* ── Header ── */}
      <div className="max-w-xl mx-auto text-center mb-16">
        <span
          className="inline-block text-[11px] tracking-[0.3em] uppercase mb-5 px-5 py-2 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.45)',
          }}
        >
          ✦ &nbsp; My Work &nbsp; ✦
        </span>

        <h1
          className="font-bold leading-[1.15] mb-5"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            color: '#ffffff',
            letterSpacing: '-0.025em',
            textShadow: '0 2px 20px rgba(38,50,56,0.15)',
          }}
        >
          Touching hundreds
          <br />
          <span
            style={{ color: 'rgba(255,255,255,0.88)', fontStyle: 'italic' }}
          >
            of lives
          </span>
        </h1>

        <p
          className="text-base leading-relaxed mx-auto"
          style={{ color: 'rgba(255,255,255,0.82)', maxWidth: '420px' }}
        >
          To make you smile is my ultimate goal — hundreds of happy customers.
          Check out my socials for my latest work. Your beautiful smile might be
          next&nbsp;
          <i className="fa-solid fa-heart" style={{ color: '#d16fbc' }} />
        </p>

        <div
          className="mt-10 mx-auto rounded-full"
          style={{
            width: '56px',
            height: '3px',
            background: 'linear-gradient(90deg, #8ec5fc, #d16fbc)',
          }}
        />
      </div>

      {/* ── Row-by-row grid ── */}
      <div
        className="max-w-[1400px] mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        }}
      >
        <style>{`
          @media (min-width: 640px)  { .portfolio-row-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          @media (min-width: 1024px) { .portfolio-row-grid { grid-template-columns: repeat(4, 1fr) !important; } }
          @media (min-width: 1280px) { .portfolio-row-grid { grid-template-columns: repeat(5, 1fr) !important; } }
        `}</style>

        <div
          className="portfolio-row-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            width: '100%',
            gridColumn: '1 / -1',
          }}
        >
          {images.map((src, index) => (
            <PortfolioCard
              key={index}
              src={src}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          src={images[lightboxIndex]}
          index={lightboxIndex}
          total={images.length}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
};

export default Portfolio;
