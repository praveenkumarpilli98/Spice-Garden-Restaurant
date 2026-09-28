// Hero.tsx
// The full-screen landing section with a background image, tagline, and CTA buttons.

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Dark overlay so the white text stays readable over the photo */}
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__tag">Welcome to Spice Garden</span>

        <h1 className="hero__title">
          Where Every Bite Tells<br />
          a <span className="hero__title--accent">Flavorful</span> Story
        </h1>

        <p className="hero__subtitle">
          Authentic Indian cuisine crafted with age-old spices, fresh ingredients,
          and a passion for unforgettable dining experiences.
        </p>

        <div className="hero__actions">
          <a href="#menu" className="btn-primary">Explore Our Menu</a>
          <a href="#contact" className="btn-outline">Reserve a Table</a>
        </div>

        {/* Quick stats bar */}
        <div className="hero__stats">
          {[
            { value: '120+', label: 'Dishes' },
            { value: '15+',  label: 'Years of Excellence' },
            { value: '50K+', label: 'Happy Guests' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down indicator */}
      <a href="#about" className="hero__scroll-hint" aria-label="Scroll to About section">
        <span className="hero__scroll-arrow" />
      </a>

      <style>{`
        /* ---------- Hero ---------- */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;

          /* Background: gorgeous spice/food photo from Unsplash */
          background-image: url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1800&auto=format&fit=crop&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;

          overflow: hidden;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(10,5,0,0.75) 0%,
            rgba(30,10,0,0.60) 100%
          );
        }

        .hero__content {
          position: relative;   /* sit above the overlay */
          z-index: 1;
          max-width: 780px;
          padding: 2rem 1.5rem;
          animation: fadeInUp 0.9s ease both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .hero__tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f0a500;
          margin-bottom: 1rem;
        }

        .hero__title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 700;
          line-height: 1.18;
          margin-bottom: 1.25rem;
        }

        .hero__title--accent {
          color: #f0a500;
          font-style: italic;
        }

        .hero__subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 300;
          color: rgba(255,255,255,0.85);
          max-width: 560px;
          margin-inline: auto;
          margin-bottom: 2.25rem;
          line-height: 1.75;
        }

        .hero__actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        /* Stats row */
        .hero__stats {
          display: flex;
          gap: 2.5rem;
          justify-content: center;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.2);
          padding-top: 1.75rem;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .hero__stat strong {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          color: #f0a500;
        }

        .hero__stat span {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
        }

        /* Scroll hint arrow */
        .hero__scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          animation: bounce 2s infinite;
        }

        .hero__scroll-arrow {
          display: block;
          width: 24px;
          height: 24px;
          border-right: 2px solid rgba(255,255,255,0.6);
          border-bottom: 2px solid rgba(255,255,255,0.6);
          transform: rotate(45deg);
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0);    }
          50%       { transform: translateX(-50%) translateY(8px);  }
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 600px) {
          .hero__stats { gap: 1.5rem; }
          .hero {
            background-attachment: scroll; /* parallax off on mobile */
          }
        }
      `}</style>
    </section>
  )
}
