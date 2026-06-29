import { Footer, Header, ReviewsStrip, Stars } from './components';
import { AreaTags } from './area-tags';
import { rightWayMapEmbedUrl, serviceAreas, services } from './services-data';

const homeQuoteUrl = 'https://wa.me/19042906400?text=Hi%20RightWay%2C%20I%20would%20like%20a%20free%20quote.';

const homeFaqs = [
  {
    question: 'What services does RightWay provide?',
    answer: 'RightWay provides lawn care, pest control, termite control, mosquito control, tree and shrub care, and pump protection for Northeast Florida properties.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve St. Johns County and surrounding communities including Ponte Vedra, Ponte Vedra Beach, St. Augustine, Nocatee, Silverleaf, and the Jacksonville Beaches.',
  },
  {
    question: 'Can I request a free quote?',
    answer: 'Yes. You can call RightWay or request a free quote online, and the team will help match you with the right lawn or pest control service.',
  },
  {
    question: 'Is RightWay licensed and insured?',
    answer: 'Yes. RightWay is licensed and insured, and the team focuses on dependable service, clear communication, and long-term property protection.',
  },
  {
    question: 'Do you offer follow-up support?',
    answer: 'Yes. RightWay provides responsive follow-up support and free callbacks when additional attention is needed between regular services.',
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <ReviewsStrip />

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Your Local Lawn & Pest Experts • Veteran-Owned</p>
            <h1>Northeast Florida&apos;s Trusted <span>Lawn & Pest Control</span> Team</h1>
            <p className="hero-text">
              From stubborn weeds to unwanted pests, RightWay helps homeowners across St. Johns County, Ponte Vedra, Nocatee,
              and surrounding communities enjoy healthier lawns and more comfortable homes.
            </p>
            <div className="hero-badges" aria-label="Company highlights">
              <span>✓ Veteran-Owned</span>
              <span>✓ Licensed & Insured</span>
              <span>✓ Free Callbacks</span>
            </div>
            <div className="hero-actions">
              <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
              <a className="secondary-action" href="#quote">Get Free Quote</a>
            </div>
          </div>

          <form className="quote-card" id="quote">
            <div className="quote-card-header">
              <h2>Request Your Service</h2>
              <p>Fast scheduling from a local, veteran-owned team serving Northeast Florida.</p>
            </div>
            <div className="rating-box">
              <Stars />
              <span><strong>4.8</strong> / 5 • 900+ Google reviews</span>
            </div>
            <label>
              What Do You Need?
              <select defaultValue="Pest Control">
                {services.map((service) => <option key={service.slug}>{service.shortTitle}</option>)}
              </select>
            </label>
            <label>
              Full Name
              <input type="text" />
            </label>
            <label>
              Phone
              <input type="tel" />
            </label>
            <label>
              Address
              <input type="text" />
            </label>
            <a className="quote-card-action" href={homeQuoteUrl} target="_blank" rel="noreferrer">Get My Free Quote</a>
            <p className="fine-print">Licensed & insured · No-obligation quote</p>
          </form>
        </div>
      </section>

      <section className="trust-bar" id="about" aria-label="Trust markers">
        <span>Veteran Owned</span>
        <span>Locally Operated</span>
        <span>Free Service Callbacks</span>
        <span>900+ Google Reviews</span>
        <span>St. Johns County & Surrounding Areas</span>
      </section>

      <section className="section services" id="services">
        <p className="section-kicker">Our Services</p>
        <h2>Complete Lawn & Pest Solutions for Northeast Florida</h2>
        <p className="section-lede">Protecting homes and improving lawns with reliable, homeowner-focused services throughout Northeast Florida.</p>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt="" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={`/services/${service.slug}`}>Learn More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div>
          <p className="section-kicker">Real Customers</p>
          <h2>What Northeast Florida Customers Are Saying</h2>
          <div className="review-card">
            <Stars />
            <p>
              “Reliable, professional, and easy to work with. The lawn looks better and the pest issues were handled quickly.”
            </p>
            <strong>Local Homeowner</strong>
          </div>
        </div>
        <div>
          <p className="section-kicker">Why Choose Rightway</p>
          <h2>Why Homeowners Choose the RightWay</h2>
          <ul className="why-list">
            <li><strong>Veteran-Owned Values</strong> We show up on time, do quality work, and treat customers with respect.</li>
            <li><strong>Local Expertise</strong> We understand Northeast Florida pest and lawn challenges.</li>
            <li><strong>Higher-Touch Service</strong> You are never just another stop on a route.</li>
            <li><strong>Free Callbacks</strong> Need additional attention? We come back and make it right.</li>
          </ul>
        </div>
      </section>

      <section className="areas" id="areas">
        <div className="areas-copy">
          <p className="section-kicker">Service Areas</p>
          <h2>Proudly Serving Northeast Florida Communities</h2>
          <p>
            From Ponte Vedra to St. Augustine and everywhere in between, RightWay Lawn & Pest Control keeps your lawn healthy
            and your home protected across St. Johns County and surrounding beaches.
          </p>
          <AreaTags areas={serviceAreas} />
          <a className="text-link" href="/service-areas">See All Service Areas</a>
        </div>
        <div className="map-pack-card area-map-card" aria-label="RightWay service area map">
          <div className="map-pack-map">
            <iframe
              src={rightWayMapEmbedUrl}
              title="RightWay Integrated Lawn and Pest Control Solutions map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-kicker">Get Started Today</p>
        <h2>Ready for a Healthier Lawn & Pest-Free Home?</h2>
        <p>Contact RightWay today for a free quote and discover why homeowners across Northeast Florida trust us.</p>
        <div className="hero-actions centered">
          <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
          <a className="secondary-action" href="#quote">Get Free Quote</a>
        </div>
      </section>

      <section className="faq-section">
        <div className="pest-faq-copy">
          <p className="section-kicker">FAQs</p>
          <h2>RightWay Questions, Answered</h2>
          <p>Quick answers about services, service areas, quotes, and follow-up support.</p>
        </div>
        <div className="pest-faq-list">
          {homeFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
