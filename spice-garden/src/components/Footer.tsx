// Footer.tsx
// Site-wide footer with brand info, quick links, contact details, and social icons.

const QUICK_LINKS = [
  { label: 'Home',     href: '#home'    },
  { label: 'About',    href: '#about'   },
  { label: 'Menu',     href: '#menu'    },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Hours',    href: '#hours'   },
  { label: 'Contact',  href: '#contact' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Facebook',  icon: '👍', href: '#' },
  { label: 'Twitter',   icon: '🐦', href: '#' },
  { label: 'YouTube',   icon: '▶️', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">

            {/* Column 1 – Brand */}
            <div className="footer__brand">
              <a href="#home" className="footer__logo">
                <span>🌿</span> Spice Garden
              </a>
              <p>
                Authentic Indian cuisine crafted with love, heritage spices, and
                the finest local ingredients — served in a warm, welcoming space.
              </p>
              <div className="footer__social">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} className="footer__social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 – Quick links */}
            <div className="footer__col">
              <h4>Quick Links</h4>
              <ul>
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 – Opening hours summary */}
            <div className="footer__col">
              <h4>Hours</h4>
              <ul className="footer__hours">
                <li><span>Mon – Thu</span><span>12 PM – 10:30 PM</span></li>
                <li><span>Fri – Sat</span><span>12 PM – 11:30 PM</span></li>
                <li><span>Sunday</span><span>11 AM – 10:00 PM</span></li>
              </ul>
            </div>

            {/* Column 4 – Contact */}
            <div className="footer__col">
              <h4>Contact Us</h4>
              <ul className="footer__contact">
                <li>📍 12 Garden Lane, Bandra West<br />Mumbai – 400 050, India</li>
                <li>📞 +91 98765 43210</li>
                <li>✉️ hello@spicegarden.in</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Spice Garden. All rights reserved.</p>
          <p>Made with ❤️ for great food lovers.</p>
        </div>
      </div>

      <style>{`
        /* ---------- Footer ---------- */
        .footer {
          background-color: var(--clr-dark);
          color: rgba(255,255,255,0.75);
          font-size: 0.88rem;
        }

        .footer__top {
          padding: 4rem 0 2.5rem;
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 2.5rem;
        }

        /* Brand column */
        .footer__logo {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .footer__brand p {
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.5rem;
        }

        .footer__social {
          display: flex;
          gap: 0.6rem;
        }

        .footer__social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          font-size: 1.1rem;
          text-decoration: none;
          transition: background-color var(--transition), transform var(--transition);
        }
        .footer__social-btn:hover {
          background: var(--clr-primary);
          transform: translateY(-3px);
        }

        /* Generic column */
        .footer__col h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer__col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .footer__col ul li a {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color var(--transition);
        }
        .footer__col ul li a:hover {
          color: var(--clr-accent);
        }

        /* Hours mini-table */
        .footer__hours li {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          color: rgba(255,255,255,0.6);
          padding-bottom: 0.4rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* Contact list */
        .footer__contact li {
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }

        /* Bottom bar */
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1.25rem 0;
        }

        .footer__bottom .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 960px) {
          .footer__grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer__brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 500px) {
          .footer__grid {
            grid-template-columns: 1fr;
          }
          .footer__brand {
            grid-column: span 1;
          }
          .footer__bottom .container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
