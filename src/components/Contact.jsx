/* eslint-disable react/prop-types */
import { useState } from 'react';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.28)',
  borderRadius: '14px',
  padding: '14px 18px',
  color: '#fff',
  fontSize: '0.95rem',
  fontFamily: 'Montserrat, sans-serif',
  outline: 'none',
  backdropFilter: 'blur(8px)',
  transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
};

const focusStyle = {
  borderColor: 'rgba(255,255,255,0.6)',
  background: 'rgba(255,255,255,0.22)',
  boxShadow: '0 0 0 3px rgba(255,255,255,0.1)',
};

const InputField = ({ type = 'text', name, id, placeholder, required }) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      style={{ ...inputStyle, ...(focused ? focusStyle : {}) }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const TextareaField = ({ name, id, placeholder, required }) => {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
      rows={6}
      style={{
        ...inputStyle,
        resize: 'none',
        ...(focused ? focusStyle : {}),
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-24 px-6"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <style>{`
        ::placeholder { color: rgba(255,255,255,0.45); }

        .send-btn {
          position: relative;
          width: 100%;
          padding: 15px 32px;
          font-family: Montserrat, sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255,255,255,0.18);
          border: 1.5px solid rgba(255,255,255,0.38);
          border-radius: 14px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .send-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(142,197,252,0.3) 0%, rgba(209,111,188,0.35) 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
          border-radius: inherit;
        }
        .send-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(38,50,56,0.2); }
        .send-btn:hover::before { opacity: 1; }
        .send-btn:active { transform: translateY(0); }
        .send-btn span { position: relative; z-index: 1; }
      `}</style>

      {/* ── Header ── */}
      <div className="text-center mb-12">
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.7rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.28)',
            borderRadius: '99px',
            padding: '5px 18px',
            marginBottom: '20px',
            backdropFilter: 'blur(8px)',
          }}
        >
          ✦ &nbsp; Get in touch &nbsp; ✦
        </span>

        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '14px',
            textShadow: '0 2px 24px rgba(38,50,56,0.15)',
          }}
        >
          Let&apos;s talk beauty
        </h1>

        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '0.95rem',
            maxWidth: '380px',
            lineHeight: 1.7,
          }}
        >
          Have a vision in mind? I&apos;d love to hear from you and bring it to
          life.
        </p>

        <div
          style={{
            width: '48px',
            height: '3px',
            borderRadius: '99px',
            background: 'linear-gradient(90deg, #8ec5fc, #d16fbc)',
            margin: '20px auto 0',
          }}
        />
      </div>

      {/* ── Form card ── */}
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '28px',
          padding: 'clamp(24px, 5vw, 44px)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 24px 80px rgba(38,50,56,0.18)',
        }}
      >
        <form
          name="contact"
          action="https://formspree.io/f/mleyqgql"
          method="POST"
        >
          {/* Name row */}
          <div className="flex gap-3 mb-4">
            <InputField
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
            />
            <InputField name="lastName" id="lastName" placeholder="Last name" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <InputField
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <TextareaField
              name="message"
              id="message"
              placeholder="Your message…"
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" className="send-btn">
            <span>Send message &nbsp;→</span>
          </button>
        </form>
      </div>

      {/* Social nudge */}
      <p
        style={{
          marginTop: '32px',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          textAlign: 'center',
        }}
      >
        Or find me on{' '}
        <a
          href="https://www.instagram.com/jehanassi/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          Instagram
        </a>{' '}
        ·{' '}
        <a
          href="https://www.tiktok.com/@j_maq"
          target="_blank"
          rel="noreferrer"
          style={{
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          TikTok
        </a>
      </p>
    </section>
  );
};

export default Contact;
