import { useState, useEffect } from 'react'

// Each nav link maps a label to a section id on the page
const NAV_LINKS = [
  { label: 'Home',          href: '#home' },
  { label: 'About',         href: '#about' },
  { label: 'Popular',       href: '#popular' },
  { label: 'Menu',          href: '#menu' },
  { label: 'Gallery',       href: '#gallery' },
  { label: 'Hours',         href: '#hours' },
  { label: 'Contact',       href: '#contact' },
]

export default function Navbar() {
  // scrolled = true when the user has scrolled down; we darken the bar
  const [scrolled, setScrolled]   = useState(false)
  // menuOpen controls the mobile hamburger menu
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">

        {/* Brand logo */}
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <span className="navbar__brand-icon">🌿</span>
          <span className="navbar__brand-text">Spice Garden</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve button (desktop) */}
        <a href="#contact" className="btn-primary navbar__cta">
          Reserve a Table
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary navbar__mobile-cta" onClick={handleLinkClick}>
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        /* ---------- Navbar ---------- */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.1rem 0;
          transition: background-color 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
          background: transparent;
        }

        /* After scrolling, give it a solid dark background */
        .navbar--scrolled {
          background: rgba(26, 26, 26, 0.97);
          box-shadow: 0 2px 20px rgba(0,0,0,0.35);
          padding: 0.7rem 0;
        }

        .navbar__container {
          max-width: 1200px;
          margin-inline: auto;
          padding-inline: 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        /* Brand */
        .navbar__brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          margin-right: auto;
        }
        .navbar__brand-icon {
          font-size: 1.5rem;
        }
        .navbar__brand-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
        }

        /* Desktop nav links */
        .navbar__links {
          display: flex;
          gap: 0.25rem;
          list-style: none;
        }
        .navbar__link {
          display: block;
          padding: 0.4rem 0.75rem;
          color: rgba(255,255,255,0.88);
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.03em;
          border-radius: 4px;
          transition: color 0.25s, background-color 0.25s;
        }
        .navbar__link:hover {
          color: #fff;
          background-color: rgba(255,255,255,0.1);
        }

        /* CTA button */
        .navbar__cta {
          white-space: nowrap;
          font-size: 0.85rem;
          padding: 0.6rem 1.3rem;
        }

        /* Hamburger (hidden on desktop) */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-left: auto;
        }
        .navbar__hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        /* Animate to X when open */
        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile dropdown */
        .navbar__mobile-menu {
          display: none;
          background: rgba(26, 26, 26, 0.98);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease;
        }
        .navbar__mobile-menu--open {
          max-height: 500px;
        }
        .navbar__mobile-menu ul {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem 1.5rem;
          gap: 0.25rem;
          list-style: none;
        }
        .navbar__mobile-link {
          display: block;
          padding: 0.65rem 0.5rem;
          color: rgba(255,255,255,0.88);
          font-size: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: color 0.2s;
        }
        .navbar__mobile-link:hover {
          color: #f0a500;
        }
        .navbar__mobile-cta {
          display: inline-block;
          margin-top: 0.75rem;
          text-align: center;
          width: 100%;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .navbar__links,
          .navbar__cta {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
          .navbar__mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}
