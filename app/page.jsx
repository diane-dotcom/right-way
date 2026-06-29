import { Footer, Header, ReviewsStrip, Stars } from './components';
import { serviceAreas, services } from './services-data';

const homeQuoteUrl = 'https://wa.me/19042906400?text=Hi%20RightWay%2C%20I%20would%20like%20a%20free%20quote.';

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
          <div className="area-tags">
            {serviceAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
          <a className="text-link" href="#quote">See All Service Areas</a>
        </div>
        <img src="/assets/lawn-home.jpg" alt="Florida home with green lawn" />
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

      <Footer />
    </main>
  );
}
