// Gallery.tsx
// A masonry-style photo grid showing food, ambience, and kitchen shots.

interface GalleryImage {
  id: number
  src: string
  alt: string
  span?: 'wide' | 'tall'   // optional: lets certain images span more columns/rows
}

const IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80',
    alt: 'Indian thali platter with colourful dishes',
    span: 'wide',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop&q=80',
    alt: 'Close-up of saffron rice',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80',
    alt: 'Freshly baked naan on a wooden board',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
    alt: 'Elegantly plated curry dish',
    span: 'tall',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&auto=format&fit=crop&q=80',
    alt: 'Restaurant interior with warm lighting',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&auto=format&fit=crop&q=80',
    alt: 'Chef preparing food in the kitchen',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop&q=80',
    alt: 'Assorted Indian sweets',
    span: 'wide',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80',
    alt: 'Mango lassi in a tall glass',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Visual Feast</span>
          <div className="divider">📷</div>
          <h2>Our Gallery</h2>
          <p>A glimpse into our kitchen, our plates, and our welcoming space.</p>
        </div>

        <div className="gallery__grid">
          {IMAGES.map((img) => (
            <div
              key={img.id}
              className={`gallery__item ${img.span ? `gallery__item--${img.span}` : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              {/* Hover overlay */}
              <div className="gallery__overlay">
                <span className="gallery__zoom">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ---------- Gallery ---------- */
        .gallery {
          background-color: var(--clr-bg-alt);
        }

        /* CSS Grid masonry-like layout */
        .gallery__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 220px;
          gap: 0.75rem;
        }

        .gallery__item {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-sm);
          cursor: zoom-in;
        }

        /* Wide items span 2 columns */
        .gallery__item--wide {
          grid-column: span 2;
        }

        /* Tall items span 2 rows */
        .gallery__item--tall {
          grid-row: span 2;
        }

        .gallery__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        /* Hover: zoom the image and show overlay */
        .gallery__item:hover img {
          transform: scale(1.08);
        }

        .gallery__overlay {
          position: absolute;
          inset: 0;
          background: rgba(200, 73, 10, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery__item:hover .gallery__overlay {
          opacity: 1;
        }

        .gallery__zoom {
          font-size: 2rem;
          transform: scale(0.7);
          transition: transform 0.3s ease;
        }

        .gallery__item:hover .gallery__zoom {
          transform: scale(1);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .gallery__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .gallery__grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 200px;
          }
          .gallery__item--wide,
          .gallery__item--tall {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  )
}
