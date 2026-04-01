const Footer = () => {
  return (
    <footer
      style={{
        fontFamily: 'Montserrat, sans-serif',
        padding: '28px 24px',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand */}
        <span
          style={{
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          JMAQ
        </span>

        {/* Copyright */}
        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.78rem',
            letterSpacing: '0.04em',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} JMAQ. All rights reserved.
        </p>

        {/* Made with love */}
        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.78rem',
            letterSpacing: '0.04em',
          }}
        >
          Made with{' '}
          <i
            className="fa-solid fa-heart"
            style={{ color: '#f9a8d4', margin: '0 3px' }}
          />{' '}
          by{' '}
          <a
            href="https://malekghazal.com/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              paddingBottom: '1px',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#fff';
              e.target.style.borderBottomColor = 'rgba(255,255,255,0.8)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'rgba(255,255,255,0.85)';
              e.target.style.borderBottomColor = 'rgba(255,255,255,0.3)';
            }}
          >
            Malek
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
