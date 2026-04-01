import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Jehan', href: '/jehan' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-aware glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes menuSlideIn {
          from { opacity: 0; transform: translateX(100%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          font-size: 0.95rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 500;
          transition: color 0.2s;
          padding-bottom: 3px;
          font-family: Montserrat, sans-serif;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #8ec5fc, #d16fbc);
          border-radius: 99px;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }

        .mobile-nav-link {
          font-family: Montserrat, sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .mobile-nav-link:hover {
          color: #fff;
          transform: translateX(6px);
        }

        /* Hamburger lines */
        .hb-line {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.9);
          border-radius: 99px;
          transition: transform 0.35s ease, opacity 0.25s ease, width 0.35s ease;
          transform-origin: center;
        }
        .hb-open .hb-top    { transform: translateY(6px) rotate(45deg); }
        .hb-open .hb-mid    { opacity: 0; transform: scaleX(0); }
        .hb-open .hb-bot    { transform: translateY(-6px) rotate(-45deg); }
        .hb-top, .hb-bot    { width: 16px; }
        .hb-open .hb-top,
        .hb-open .hb-bot    { width: 22px; }
      `}</style>

      {/* ── Desktop / mobile navbar bar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          padding: scrolled ? '10px 0' : '18px 0',
          background: scrolled ? 'rgba(120, 80, 140, 0.55)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.12)' : 'none',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / brand */}
          <a
            href="/jehan"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '1.15rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#fff',
              textDecoration: 'none',
              animation: 'fadeSlideDown 0.5s ease both',
            }}
          >
            JMAQ
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  animationDelay: `${i * 60}ms`,
                  animation: 'fadeSlideDown 0.5s ease both',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            className={`md:hidden flex flex-col items-end justify-center gap-[5px] w-10 h-10 ${menuOpen ? 'hb-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <span className="hb-line hb-top" />
            <span className="hb-line hb-mid" />
            <span className="hb-line hb-bot" />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'rgba(38,50,56,0.35)',
              backdropFilter: 'blur(4px)',
            }}
            onClick={close}
          />

          {/* Slide-in panel */}
          <div
            className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
            style={{
              width: 'min(80vw, 320px)',
              background:
                'linear-gradient(160deg, rgba(142,197,252,0.92) 0%, rgba(209,111,188,0.95) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(255,255,255,0.25)',
              animation: 'menuSlideIn 0.35s cubic-bezier(0.16,1,0.3,1) both',
              boxShadow: '-8px 0 40px rgba(38,50,56,0.25)',
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <button
                onClick={close}
                aria-label="Close menu"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  color: '#fff',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-8 px-8 pt-6">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  style={{
                    animation: `fadeSlideDown 0.4s ease ${i * 70 + 100}ms both`,
                  }}
                  onClick={close}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom decoration */}
            <div className="mt-auto px-8 pb-10">
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  borderRadius: '99px',
                  background: 'rgba(255,255,255,0.4)',
                  marginBottom: '12px',
                }}
              />
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.75rem',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.08em',
                }}
              >
                JMAQ © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
