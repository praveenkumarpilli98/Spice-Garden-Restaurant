// About.tsx
// Tells the restaurant's story with an image on one side and text on the other.

// Small feature cards shown below the story text
const FEATURES = [
  { icon: '🌿', title: 'Farm Fresh',       desc: 'Ingredients sourced daily from local farms.' },
  { icon: '👨‍🍳', title: 'Expert Chefs',    desc: 'Trained in traditional and modern techniques.' },
  { icon: '🏆', title: 'Award Winning',    desc: 'Recognised by top culinary guides since 2012.' },
  { icon: '❤️', title: 'Made with Love',   desc: 'Every dish carries a piece of our heritage.' },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">

          {/* Left – image stack */}
          <div className="about__images">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80"
              alt="Restaurant interior with warm lighting"
              className="about__img about__img--main"
            />
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&auto=format&fit=crop&q=80"
              alt="Chef plating a dish"
              className="about__img about__img--secondary"
            />
            {/* Floating years badge */}
            <div className="about__badge">
              <strong>15+</strong>
              <span>Years of<br />Excellence</span>
            </div>
          </div>

          {/* Right – story text */}
          <div className="about__text">
            <span className="tag">Our Story</span>
            <div className="divider">🌿</div>
            <h2>A Tradition of Taste,<br />Reborn with Passion</h2>

            <p>
              Spice Garden was born in 2009 from a simple dream: to bring the vibrant,
              soul-warming flavours of authentic Indian cooking to your table. Our founder,
              Chef Arjun Mehta, grew up in his grandmother's kitchen in Rajasthan, learning
              that great food is equal parts recipe and emotion.
            </p>
            <p>
              Today, our team of passionate chefs continues that legacy — blending
              centuries-old spice traditions with contemporary plating artistry to craft
              dishes that are both timeless and exciting.
            </p>

            <div className="about__features">
              {FEATURES.map((f) => (
                <div key={f.title} className="about__feature-card">
                  <span className="about__feature-icon">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#menu" className="btn-primary" style={{ marginTop: '1.5rem' }}>
              Discover Our Menu
            </a>
          </div>

        </div>
      </div>

      <style>{`
        /* ---------- About ---------- */
        .about {
          background-color: var(--clr-bg);
        }

        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Image stack */
        .about__images {
          position: relative;
          min-height: 480px;
        }

        .about__img {
          border-radius: var(--radius-md);
          object-fit: cover;
        }

        .about__img--main {
          width: 80%;
          height: 440px;
          box-shadow: var(--shadow-lg);
        }

        .about__img--secondary {
          position: absolute;
          bottom: -30px;
          right: 0;
          width: 52%;
          height: 260px;
          border: 5px solid var(--clr-bg);
          box-shadow: var(--shadow-md);
        }

        /* Floating badge */
        .about__badge {
          position: absolute;
          top: 1.5rem;
          right: 1rem;
          background: var(--clr-primary);
          color: #fff;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: var(--shadow-md);
          padding: 0.5rem;
        }
        .about__badge strong {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          line-height: 1;
        }
        .about__badge span {
          font-size: 0.65rem;
          line-height: 1.3;
          opacity: 0.9;
        }

        /* Text side */
        .about__text .tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--clr-primary);
          margin-bottom: 0.4rem;
        }

        .about__text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          color: var(--clr-dark);
          line-height: 1.25;
          margin-bottom: 1.25rem;
        }

        .about__text p {
          color: var(--clr-text);
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        /* Feature cards grid */
        .about__features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.75rem;
        }

        .about__feature-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: var(--clr-bg-alt);
          border-radius: var(--radius-sm);
          padding: 0.9rem 1rem;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .about__feature-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }
        .about__feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .about__feature-card h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--clr-dark);
          margin-bottom: 0.2rem;
        }
        .about__feature-card p {
          font-size: 0.8rem;
          color: var(--clr-text-light);
          margin: 0;
          line-height: 1.5;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about__images {
            min-height: 340px;
          }
          .about__img--main {
            width: 100%;
            height: 340px;
          }
          .about__img--secondary {
            width: 45%;
            height: 200px;
            bottom: -20px;
          }
        }

        @media (max-width: 480px) {
          .about__features {
            grid-template-columns: 1fr;
          }
          .about__img--secondary {
            display: none;
          }
          .about__badge {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
