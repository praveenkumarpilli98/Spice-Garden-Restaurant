// FullMenu.tsx
// A tabbed menu section organised by category (Starters, Mains, Breads, Desserts, Drinks).

import { useState } from 'react'

// TypeScript interface for a menu item
interface MenuItem {
  name: string
  desc: string
  price: string
  veg?: boolean   // optional veg indicator
  popular?: boolean
}

// TypeScript interface for a menu category
interface MenuCategory {
  id: string
  label: string
  icon: string
  items: MenuItem[]
}

const MENU: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    icon: '🥗',
    items: [
      { name: 'Samosa Chaat',         desc: 'Crispy samosas topped with chutneys, yogurt & pomegranate.',                  price: '₹180', veg: true   },
      { name: 'Seekh Kebab',          desc: 'Minced lamb skewers grilled over charcoal, served with mint chutney.',        price: '₹320'               },
      { name: 'Papdi Chaat',          desc: 'Crisp wafers, chickpeas, spiced potato, and tangy tamarind dressing.',        price: '₹160', veg: true   },
      { name: 'Chicken 65',           desc: 'Deep-fried spiced chicken tossed in curry leaves and green chillies.',        price: '₹280', popular: true },
      { name: 'Hara Bhara Kebab',     desc: 'Pan-fried spinach and pea patties with fresh herb chutney.',                 price: '₹200', veg: true   },
      { name: 'Fish Amritsari',       desc: 'Batter-fried fish marinated in ajwain and chilli, with tamarind dip.',       price: '₹340'               },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    icon: '🍛',
    items: [
      { name: 'Butter Chicken',       desc: 'Tender chicken in a velvety tomato-cream sauce.',                           price: '₹520', popular: true },
      { name: 'Paneer Butter Masala', desc: 'Cottage cheese cubes in a rich, mildly spiced tomato gravy.',               price: '₹380', veg: true   },
      { name: 'Lamb Rogan Josh',      desc: 'Kashmiri braised lamb with whole spices and Kashmiri chillies.',             price: '₹680', popular: true },
      { name: 'Dal Makhani',          desc: 'Black lentils slow-cooked overnight in butter and cream.',                   price: '₹280', veg: true   },
      { name: 'Prawn Masala',         desc: 'Jumbo prawns in a spicy coconut-tomato gravy.',                             price: '₹720'               },
      { name: 'Chana Masala',         desc: 'Hearty chickpeas in a tangy, aromatic tomato-onion sauce.',                 price: '₹260', veg: true   },
      { name: 'Biryani Royal',        desc: 'Fragrant basmati layered with slow-cooked meat, saffron & fried onions.',   price: '₹620', popular: true },
      { name: 'Vegetable Biryani',    desc: 'Garden vegetables and aromatic rice cooked dum-style.',                     price: '₹420', veg: true   },
    ],
  },
  {
    id: 'breads',
    label: 'Breads',
    icon: '🫓',
    items: [
      { name: 'Garlic Naan',          desc: 'Leavened bread topped with garlic butter, baked in tandoor.',               price: '₹80',  veg: true   },
      { name: 'Butter Naan',          desc: 'Fluffy tandoor-baked naan brushed with salted butter.',                      price: '₹60',  veg: true   },
      { name: 'Laccha Paratha',       desc: 'Multi-layered whole-wheat bread, flaky and golden.',                        price: '₹70',  veg: true   },
      { name: 'Peshwari Naan',        desc: 'Stuffed with almonds, coconut, and sultanas – lightly sweet.',              price: '₹110', veg: true   },
      { name: 'Tandoori Roti',        desc: 'Whole-wheat flatbread straight from the clay oven.',                        price: '₹50',  veg: true   },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: '🍮',
    items: [
      { name: 'Gulab Jamun',          desc: 'Soft milk dumplings soaked in rose-cardamom syrup, served warm.',           price: '₹160', veg: true, popular: true },
      { name: 'Kulfi Falooda',        desc: 'Dense pistachio ice cream over vermicelli, rose syrup & basil seeds.',      price: '₹200', veg: true   },
      { name: 'Gajar Halwa',          desc: 'Slow-cooked carrot pudding with ghee, milk and cardamom.',                  price: '₹180', veg: true   },
      { name: 'Rasmalai',             desc: 'Spongy cottage cheese discs in chilled saffron-cardamom milk.',             price: '₹190', veg: true   },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    icon: '🥤',
    items: [
      { name: 'Mango Lassi',          desc: 'Thick yogurt blended with ripe Alphonso mangoes.',                          price: '₹140', veg: true   },
      { name: 'Masala Chai',          desc: 'Spiced milk tea brewed with ginger, cardamom and tulsi.',                   price: '₹80',  veg: true   },
      { name: 'Rose Sharbat',         desc: 'Chilled rose syrup with basil seeds and a hint of lemon.',                  price: '₹100', veg: true   },
      { name: 'Nimbu Pani',           desc: 'Fresh lime water, either sweet, salted or mixed.',                          price: '₹70',  veg: true   },
      { name: 'Virgin Mojito',        desc: 'Mint, lime, and soda – the perfect palette cleanser.',                      price: '₹160', veg: true   },
    ],
  },
]

// Single menu row
function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="menu-row">
      <div className="menu-row__left">
        {/* Green dot = veg, red = non-veg */}
        <span
          className={`menu-row__dot ${item.veg ? 'veg' : 'nonveg'}`}
          title={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
        />
        <div>
          <span className="menu-row__name">
            {item.name}
            {item.popular && <span className="menu-row__popular">★ Popular</span>}
          </span>
          <span className="menu-row__desc">{item.desc}</span>
        </div>
      </div>
      <span className="menu-row__price">{item.price}</span>
    </div>
  )
}

export default function FullMenu() {
  // Track which tab is active (defaults to 'starters')
  const [activeTab, setActiveTab] = useState<string>('starters')

  const activeCategory = MENU.find((c) => c.id === activeTab)!

  return (
    <section id="menu" className="fullmenu section">
      <div className="container">
        <div className="section-header">
          <span className="tag">What We Serve</span>
          <div className="divider">🍽️</div>
          <h2>Our Full Menu</h2>
          <p>Something for everyone — from light bites to hearty curries, freshly baked breads and indulgent desserts.</p>
        </div>

        {/* Tab buttons */}
        <div className="fullmenu__tabs" role="tablist">
          {MENU.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`fullmenu__tab ${activeTab === cat.id ? 'fullmenu__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items list */}
        <div className="fullmenu__list" role="tabpanel">
          {activeCategory.items.map((item) => (
            <MenuRow key={item.name} item={item} />
          ))}
        </div>

        {/* Legend */}
        <div className="fullmenu__legend">
          <span><span className="menu-row__dot veg" />  Vegetarian</span>
          <span><span className="menu-row__dot nonveg" />  Non-Vegetarian</span>
        </div>
      </div>

      <style>{`
        /* ---------- Full Menu ---------- */
        .fullmenu {
          background-color: var(--clr-bg);
        }

        /* Tab strip */
        .fullmenu__tabs {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .fullmenu__tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.65rem 1.4rem;
          border: 2px solid #e0d5cc;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--clr-text);
          background: var(--clr-white);
          cursor: pointer;
          transition: all var(--transition);
        }
        .fullmenu__tab:hover {
          border-color: var(--clr-primary);
          color: var(--clr-primary);
        }
        .fullmenu__tab--active {
          background: var(--clr-primary);
          border-color: var(--clr-primary);
          color: #fff;
          box-shadow: 0 4px 14px rgba(200,73,10,0.35);
        }

        /* Items list */
        .fullmenu__list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }

        /* Individual menu row */
        .menu-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--clr-white);
          border-radius: var(--radius-sm);
          border: 1px solid #f0e8e0;
          transition: box-shadow var(--transition), transform var(--transition);
        }
        .menu-row:hover {
          box-shadow: var(--shadow-sm);
          transform: translateX(3px);
        }

        .menu-row__left {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          flex: 1;
        }

        /* Veg / non-veg indicator dot */
        .menu-row__dot {
          display: inline-block;
          flex-shrink: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-top: 0.3rem;
          border: 1.5px solid;
        }
        .menu-row__dot.veg    { background: #22a14b; border-color: #22a14b; }
        .menu-row__dot.nonveg { background: #d93025; border-color: #d93025; }

        .menu-row__name {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--clr-dark);
          margin-bottom: 0.2rem;
        }

        .menu-row__popular {
          display: inline-block;
          margin-left: 0.5rem;
          font-size: 0.65rem;
          background: var(--clr-accent);
          color: #fff;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
          font-weight: 700;
          vertical-align: middle;
        }

        .menu-row__desc {
          display: block;
          font-size: 0.8rem;
          color: var(--clr-text-light);
          line-height: 1.5;
        }

        .menu-row__price {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--clr-primary);
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Legend */
        .fullmenu__legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
          margin-top: 1.75rem;
          font-size: 0.82rem;
          color: var(--clr-text-light);
        }
        .fullmenu__legend span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 700px) {
          .fullmenu__list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
