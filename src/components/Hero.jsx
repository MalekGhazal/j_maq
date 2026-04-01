import { motion } from 'framer-motion';

const SOCIALS = [
  {
    icon: 'fa-brands fa-instagram',
    href: 'https://www.instagram.com/jehanassi/',
    label: 'Instagram',
  },
  {
    icon: 'fa-brands fa-facebook',
    href: 'https://www.facebook.com/profile.php?id=100091396613557',
    label: 'Facebook',
  },
  {
    icon: 'fa-brands fa-tiktok',
    href: 'https://www.tiktok.com/@j_maq',
    label: 'TikTok',
  },
];

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      {/* Soft radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 45%, rgba(255,255,255,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Floating decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { size: 320, top: '-8%', left: '-6%', delay: '0s' },
          { size: 200, top: '65%', left: '80%', delay: '1.2s' },
          { size: 120, top: '20%', left: '88%', delay: '0.6s' },
          { size: 90, top: '78%', left: '5%', delay: '1.8s' },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: c.size,
              height: c.size,
              top: c.top,
              left: c.left,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.18)',
              animation: `floatOrb 7s ease-in-out ${c.delay} infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes floatOrb {
          from { transform: translateY(0px) scale(1); opacity: 0.5; }
          to   { transform: translateY(-18px) scale(1.04); opacity: 0.9; }
        }
        @keyframes shimmerText {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-block',
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '99px',
            padding: '6px 20px',
            marginBottom: '28px',
            backdropFilter: 'blur(8px)',
          }}
        >
          Makeup Artist · Rouen, France
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3.2rem, 12vw, 9rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: '16px',
            textShadow: '0 4px 40px rgba(38,50,56,0.2)',
          }}
        >
          Jehan Assi
        </motion.h1>

        {/* Subtitle with animated gradient underline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          style={{ marginBottom: '48px' }}
        >
          <span
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.6rem)',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.82)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Makeup Artist
          </span>
          <div
            style={{
              height: '2px',
              marginTop: '10px',
              borderRadius: '99px',
              background: 'linear-gradient(90deg, #8ec5fc, #d16fbc, #8ec5fc)',
              backgroundSize: '200% 100%',
              animation: 'shimmerText 3s linear infinite',
            }}
          />
        </motion.div>

        {/* Scroll cue */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          Scroll to explore
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex items-center gap-6"
        >
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.28)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.25rem',
                textDecoration: 'none',
                transition:
                  'transform 0.25s ease, background 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-4px) scale(1.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.28)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
              }}
            >
              <i className={icon} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(142,100,180,0.12))',
        }}
      />
    </section>
  );
};

export default Hero;
