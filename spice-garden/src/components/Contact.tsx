// Contact.tsx
// A reservation / contact form with a map placeholder and contact details.

import { useState } from 'react'

// TypeScript type for the form fields
// (named ReservationForm to avoid clashing with the browser's built-in FormData)
interface ReservationForm {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  message: string
}

const INITIAL_FORM: ReservationForm = {
  name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '',
}

export default function Contact() {
  const [form, setForm]         = useState<ReservationForm>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  // Generic change handler works for all input / select / textarea elements
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app you would POST to an API here
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="tag">Get in Touch</span>
          <div className="divider">✉️</div>
          <h2>Reserve Your Table</h2>
          <p>Fill in the form and we'll confirm your reservation within a few hours.</p>
        </div>

        <div className="contact__grid">

          {/* Left: form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">🎉</span>
                <h3>Reservation Received!</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>! We'll send a confirmation
                  to <strong>{form.email}</strong> shortly. We look forward to
                  hosting you at Spice Garden.
                </p>
                <button className="btn-primary" onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}>
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email} onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select id="guests" name="guests" value={form.guests} onChange={handleChange} required>
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests (Large Group)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      id="date" name="date" type="date"
                      value={form.date} onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time *</label>
                    <select id="time" name="time" value={form.time} onChange={handleChange} required>
                      <option value="">Select a time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Dietary requirements, occasion, seating preference…"
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          {/* Right: info + map placeholder */}
          <div className="contact__info">
            <div className="contact__info-cards">
              {[
                { icon: '📍', label: 'Address',      value: '12 Garden Lane, Bandra West\nMumbai – 400 050, India' },
                { icon: '📞', label: 'Phone',         value: '+91 98765 43210' },
                { icon: '✉️', label: 'Email',          value: 'hello@spicegarden.in' },
                { icon: '🕐', label: 'Kitchen Hours', value: 'Lunch 12 PM – 3:30 PM\nDinner 6 PM – 11:30 PM' },
              ].map((item) => (
                <div key={item.label} className="contact__info-card">
                  <span className="contact__info-icon">{item.icon}</span>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <strong className="contact__info-value">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder – replace src with a real Google Maps embed URL */}
            <div className="contact__map">
              <iframe
                title="Spice Garden Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4655559124283!2d72.8282!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknNDEuNSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ---------- Contact ---------- */
        .contact {
          background-color: var(--clr-bg-alt);
        }

        .contact__grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 3.5rem;
          align-items: start;
        }

        /* Form */
        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--clr-dark);
          letter-spacing: 0.03em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 1.5px solid #e0d5cc;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--clr-dark);
          background: var(--clr-white);
          transition: border-color var(--transition), box-shadow var(--transition);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--clr-primary);
          box-shadow: 0 0 0 3px rgba(200, 73, 10, 0.12);
        }

        .contact__submit {
          align-self: flex-start;
          padding: 0.9rem 2.5rem;
          font-size: 1rem;
        }

        /* Success state */
        .contact__success {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--clr-white);
          border-radius: var(--radius-md);
          border: 1px solid #f0e8e0;
        }
        .contact__success-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
        .contact__success h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          color: var(--clr-dark);
          margin-bottom: 0.75rem;
        }
        .contact__success p {
          color: var(--clr-text-light);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        /* Info side */
        .contact__info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact__info-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--clr-white);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid #f0e8e0;
          transition: box-shadow var(--transition);
        }
        .contact__info-card:hover {
          box-shadow: var(--shadow-sm);
        }
        .contact__info-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .contact__info-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--clr-text-light);
          margin-bottom: 0.25rem;
        }
        .contact__info-value {
          display: block;
          font-size: 0.9rem;
          color: var(--clr-dark);
          white-space: pre-line;
          line-height: 1.5;
        }

        /* Map */
        .contact__map {
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 220px;
          box-shadow: var(--shadow-sm);
        }
        .contact__map iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 960px) {
          .contact__grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact__submit {
            align-self: stretch;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
