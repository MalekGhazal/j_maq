/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import image1 from '../assets/images/makeup3.png';
import image2 from '../assets/images/makeup1.png';

const useFadeIn = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const FadeIn = ({ children, delay = 0, className = '', style = {} }) => {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <article
      className="min-h-screen py-24 px-6 md:px-10"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Section 1: Intro ── */}
        <div className="mb-16 lg:mb-24">
          <FadeIn delay={0}>
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
              About me
            </span>
          </FadeIn>

          <FadeIn delay={80}>
            <h1
              style={{
                fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                maxWidth: '720px',
                marginBottom: '24px',
                textShadow: '0 2px 24px rgba(38,50,56,0.15)',
              }}
            >
              Bonjour! I&apos;m Jehan, a passionate makeup artist based in the
              enchanting city of{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}
              >
                Rouen.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: '1rem',
                lineHeight: 1.85,
                maxWidth: '640px',
              }}
            >
              With a blend of skill, responsibility, and meticulous attention to
              detail, I bring an artful touch to every face I encounter. My
              journey has been guided by a commitment to excellence — ensuring
              every client&apos;s unique vision is not only met but exceeded. My
              work reflects not just a profession, but a genuine passion for the
              transformative power of makeup.
            </p>
          </FadeIn>
        </div>

        {/* ── Hero image ── */}
        <FadeIn delay={0}>
          <div
            className="w-full overflow-hidden mb-20 lg:mb-28"
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 24px 80px rgba(38,50,56,0.2)',
            }}
          >
            <img
              src={image1}
              alt="Jehan — makeup artist"
              className="w-full object-cover"
              style={{
                display: 'block',
                maxHeight: '600px',
                objectPosition: 'top',
              }}
            />
          </div>
        </FadeIn>

        {/* ── Section 2: Two column ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <FadeIn delay={0}>
              <div
                style={{
                  width: '40px',
                  height: '3px',
                  borderRadius: '99px',
                  background: 'linear-gradient(90deg, #8ec5fc, #d16fbc)',
                  marginBottom: '20px',
                }}
              />
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  marginBottom: '20px',
                }}
              >
                Being a makeup artist
              </h2>
            </FadeIn>

            <FadeIn delay={80}>
              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.97rem',
                  lineHeight: 1.85,
                  marginBottom: '16px',
                }}
              >
                …is not just about enhancing beauty; it&apos;s about creating an
                experience. I pride myself on being an open and approachable
                artist, fostering genuine connections with my clients. This,
                coupled with my dedication to continuous improvement, allows me
                to stay at the forefront of industry trends and deliver results
                that go beyond expectations.
              </p>
            </FadeIn>

            <FadeIn delay={140}>
              <p
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: '0.97rem',
                  lineHeight: 1.85,
                  marginBottom: '16px',
                }}
              >
                Join me on this journey of beauty and self-expression. Together,
                let&apos;s bring out the best version of you, right here in the
                heart of Rouen, France.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p
                style={{
                  color: 'rgba(255,255,255,0.62)',
                  fontSize: '0.92rem',
                  lineHeight: 1.85,
                  padding: '16px 20px',
                  borderLeft: '3px solid rgba(255,255,255,0.3)',
                  borderRadius: '0 12px 12px 0',
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(6px)',
                  marginTop: '8px',
                }}
              >
                Je souhaiterais vous indiquer que mon profil correspond tout à
                fait aux qualités attendues pour être maquilleur professionnel.
                En effet, en complément de mes savoir-faire, je peux
                m&apos;appuyer sur mon sens des responsabilités et sur ma
                rigueur. Je suis aussi une personne ouverte avec un bon sens du
                relationnel et une réelle envie de progresser.
              </p>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={100} className="w-full lg:w-1/2">
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 24px 60px rgba(38,50,56,0.18)',
              }}
            >
              <img
                src={image2}
                alt="Makeup artistry"
                className="w-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
};

export default About;
