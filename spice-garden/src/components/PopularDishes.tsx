// PopularDishes.tsx
// Showcases the 6 most-loved dishes as image cards with hover effects.

// Each dish has a name, description, price, tag, and image URL
interface Dish {
  id: number
  name: string
  desc: string
  price: string
  tag: string
  img: string
}

const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Butter Chicken',
    desc: 'Tender chicken in a rich, velvety tomato-cream sauce with aromatic spices.',
    price: '₹520',
    tag: 'Chef\'s Special',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    desc: 'Marinated cottage cheese cubes grilled in a tandoor with peppers and onions.',
    price: '₹380',
    tag: 'Vegetarian',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Biryani Royal',
    desc: 'Fragrant basmati rice layered with slow-cooked meat, saffron, and fried onions.',
    price: '₹620',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1563379091339-03246963d651?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Dal Makhani',
    desc: 'Black lentils slow-simmered overnight in butter, cream, and secret spices.',
    price: '₹280',
    tag: 'Vegetarian',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Lamb Rogan Josh',
    desc: 'Kashmiri-style succulent lamb braised in whole spices and Kashmiri chillies.',
    price: '₹680',
    tag: 'Signature',
    img: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Gulab Jamun',
    desc: 'Soft milk-solid dumplings soaked in rose-cardamom sugar syrup. Served warm.',
    price: '₹160',
    tag: 'Dessert',
    img: 'https://images.unsplash.com/photo-1666792579850-3f3b2f01a22a?w=600&auto=format&fit=crop&q=80',
  },
]

// Reusable card for a single dish
function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="dish-card">
      <div className="dish-card__img-wrap">
        <img src={dish.img} alt={dish.name} loading="lazy" />
        <span className="dish-card__tag">{dish.tag}</span>
      </div>
      <div className="dish-card__body">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <div className="dish-card__footer">
          <span className="dish-card__price">{dish.price}</span>
          <button className="dish-card__btn" aria-label={`Order ${dish.name}`}>
            + Add to Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PopularDishes() {
  return (
    <section id="popular" className="popular section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Most Loved</span>
          <div className="divider">🍛</div>
          <h2>Our Popular Dishes</h2>
          <p>Handpicked by our guests — the flavours that keep them coming back for more.</p>
        </div>

        <div className="popular__grid">
          {DISHES.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className="popular__cta">
          <a href="#menu" className="btn-primary">View Full Menu</a>
        </div>
      </div>

      <style>{`
        /* ---------- Popular Dishes ---------- */
        .popular {
          background-color: var(--clr-bg-alt);
        }

        .popular__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .popular__cta {
          text-align: center;
          margin-top: 3rem;
        }

        /* ---------- Dish Card ---------- */
        .dish-card {
          background: var(--clr-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .dish-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }

        /* Image wrapper */
        .dish-card__img-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
        }
        .dish-card__img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dish-card:hover .dish-card__img-wrap img {
          transform: scale(1.07);
        }

        /* Tag badge on image */
        .dish-card__tag {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: var(--clr-primary);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        /* Card body */
        .dish-card__body {
          padding: 1.25rem 1.25rem 1rem;
        }
        .dish-card__body h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          color: var(--clr-dark);
          margin-bottom: 0.4rem;
        }
        .dish-card__body p {
          font-size: 0.85rem;
          color: var(--clr-text-light);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        /* Footer: price + button */
        .dish-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .dish-card__price {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--clr-primary);
        }
        .dish-card__btn {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 0.45rem 0.9rem;
          background: transparent;
          border: 2px solid var(--clr-primary);
          color: var(--clr-primary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background-color var(--transition), color var(--transition);
        }
        .dish-card__btn:hover {
          background-color: var(--clr-primary);
          color: #fff;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .popular__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .popular__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
