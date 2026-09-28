// OpeningHours.tsx
// Shows weekly opening hours alongside a reservation call-to-action.

interface DayRow {
  day: string
  hours: string
  closed?: boolean
}

const HOURS: DayRow[] = [
  { day: 'Monday',    hours: '12:00 PM – 3:00 PM  |  6:00 PM – 10:30 PM' },
  { day: 'Tuesday',   hours: '12:00 PM – 3:00 PM  |  6:00 PM – 10:30 PM' },
  { day: 'Wednesday', hours: '12:00 PM – 3:00 PM  |  6:00 PM – 10:30 PM' },
  { day: 'Thursday',  hours: '12:00 PM – 3:00 PM  |  6:00 PM – 11:00 PM' },
  { day: 'Friday',    hours: '12:00 PM – 3:30 PM  |  6:00 PM – 11:30 PM' },
  { day: 'Saturday',  hours: '11:00 AM – 4:00 PM  |  6:00 PM – 11:30 PM' },
  { day: 'Sunday',    hours: '11:00 AM – 4:00 PM  |  6:00 PM – 10:00 PM' },
]

// Helper: figure out today's day name to highlight it
function getTodayName(): string {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' })
}

export default function OpeningHours() {
  const today = getTodayName()

  return (
    <section id="hours" className="hours section">
      <div className="container">
        <div className="hours__grid">

          {/* Left: hours table */}
          <div className="hours__table-wrap">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <span className="tag">We're Open</span>
              <div className="divider" style={{ justifyContent: 'flex-start' }}>🕐</div>
              <h2>Opening Hours</h2>
              <p>We'd love to welcome you any day of the week.</p>
            </div>

            <ul className="hours__table">
              {HOURS.map(({ day, hours, closed }) => (
                <li key={day} className={`hours__row ${day === today ? 'hours__row--today' : ''} ${closed ? 'hours__row--closed' : ''}`}>
                  <span className="hours__day">
                    {day}
                    {day === today && <span className="hours__today-badge">Today</span>}
                  </span>
                  <span className="hours__time">{closed ? 'Closed' : hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: reservation card */}
          <div className="hours__reserve-card">
            <div className="hours__reserve-icon">🍽️</div>
            <h3>Ready for a<br />Memorable Evening?</h3>
            <p>
              Book your table in advance and let us craft an unforgettable
              dining experience just for you.
            </p>

            <div className="hours__contact-info">
              <div className="hours__info-item">
                <span className="hours__info-icon">📞</span>
                <div>
                  <span>Reservations</span>
                  <strong>+91 98765 43210</strong>
                </div>
              </div>
              <div className="hours__info-item">
                <span className="hours__info-icon">📍</span>
                <div>
                  <span>Location</span>
                  <strong>12 Garden Lane, Bandra West, Mumbai</strong>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>
              Make a Reservation
            </a>
          </div>

        </div>
      </div>

      <style>{`
        /* ---------- Opening Hours ---------- */
        .hours {
          background-color: var(--clr-bg);
        }

        .hours__grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 4rem;
          align-items: start;
        }

        /* Hours table */
        .hours__table {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .hours__row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.9rem 1rem;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition);
        }
        .hours__row:nth-child(odd) {
          background: var(--clr-bg-alt);
        }
        .hours__row:hover {
          background: #fce8db;
        }

        /* Highlight today's row */
        .hours__row--today {
          background: rgba(200, 73, 10, 0.10) !important;
          border-left: 3px solid var(--clr-primary);
        }

        .hours__row--closed .hours__time {
          color: #c0392b;
          font-weight: 700;
        }

        .hours__day {
          font-weight: 700;
          color: var(--clr-dark);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
        }

        .hours__today-badge {
          background: var(--clr-primary);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.15rem 0.45rem;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hours__time {
          font-size: 0.88rem;
          color: var(--clr-text-light);
          text-align: right;
        }

        /* Reservation card */
        .hours__reserve-card {
          background: linear-gradient(145deg, var(--clr-dark) 0%, #2d1a0e 100%);
          border-radius: var(--radius-lg);
          padding: 2.5rem 2rem;
          color: #fff;
          box-shadow: var(--shadow-lg);
          position: sticky;
          top: 100px;
        }

        .hours__reserve-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hours__reserve-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.7rem;
          line-height: 1.3;
          margin-bottom: 0.9rem;
          color: #fff;
        }

        .hours__reserve-card p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
          margin-bottom: 1.75rem;
        }

        .hours__contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .hours__info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .hours__info-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .hours__info-item span {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.15rem;
        }

        .hours__info-item strong {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.9);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 960px) {
          .hours__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hours__reserve-card {
            position: static;
          }
        }
      `}</style>
    </section>
  )
}
