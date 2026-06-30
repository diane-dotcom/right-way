import { BadgeCheck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Footer, GoogleReviews, Header, ReviewsStrip } from './components';
import { AreaTags } from './area-tags';
import { FaqList } from './faq-list';
import { rightWayMapEmbedUrl, serviceAreas, services } from './services-data';

const homeQuoteUrl = 'https://wa.me/19042906400?text=Hi%20RightWay%2C%20I%20would%20like%20a%20free%20quote.';

const homeTrustBadges = [
  { label: 'Veteran-Owned', icon: BadgeCheck },
  { label: 'Licensed & Insured', icon: ShieldCheck },
  { label: 'Free Callbacks', icon: RotateCcw },
];

const homeFaqs = [
  {
    question: 'What services does RightWay provide?',
    answer: 'RightWay provides lawn care, pest control, termite control, mosquito control, and tree and shrub care for Northeast Florida properties.',
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

      <section className="hero home-hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Your Local Lawn & Pest Experts • Veteran-Owned</p>
            <h1>Top-Rated Lawn and Pest Control in Northeast Florida</h1>
            <p className="hero-text">
              From stubborn weeds to unwanted pests, RightWay helps homeowners across St. Johns County, Ponte Vedra, Nocatee,
              and surrounding communities enjoy healthier lawns and more comfortable homes.
            </p>
            <div className="hero-badges" aria-label="Company highlights">
              {homeTrustBadges.map(({ label, icon: Icon }) => (
                <span key={label}><Icon size={18} strokeWidth={2.4} /> {label}</span>
              ))}
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
            <div className="quote-card-fields">
              <label>
                <span>First Name <b>*</b></span>
                <input type="text" autoComplete="given-name" />
              </label>
              <label>
                <span>Last Name <b>*</b></span>
                <input type="text" autoComplete="family-name" />
              </label>
              <label>
                <span>Email <b>*</b></span>
                <input type="email" autoComplete="email" />
              </label>
              <label>
                <span>Phone Number <b>*</b></span>
                <input type="tel" autoComplete="tel" />
              </label>
              <label className="wide-field">
                <span>Street Address 1 <b>*</b></span>
                <input type="text" autoComplete="street-address" />
              </label>
              <label className="wide-field">
                <span>How can we help?</span>
                <textarea rows="4" />
              </label>
            </div>
            <a className="quote-card-action" href={homeQuoteUrl} target="_blank" rel="noreferrer">Get My Free Quote</a>
            <p className="fine-print">Licensed & insured · No-obligation quote</p>
          </form>
        </div>

        <section className="trust-bar" id="about" aria-label="Trust markers">
          <span>Veteran Owned</span>
          <span>Locally Operated</span>
          <span>Free Service Callbacks</span>
          <span>139+ Google Reviews</span>
          <span>St. Johns County & Surrounding Areas</span>
        </section>
      </section>

      <section className="section why-home-section">
        <p className="section-kicker">Why Choose RightWay</p>
        <h2>Why Homeowners Choose the RightWay</h2>
        <ul className="why-list">
          <li><strong>Veteran-Owned Values</strong> We show up on time, do quality work, and treat customers with respect.</li>
          <li><strong>Local Expertise</strong> We understand Northeast Florida pest and lawn challenges.</li>
          <li><strong>High Touch Service</strong> You are never just another stop on a route.</li>
          <li><strong>Free Callbacks</strong> Need additional attention? We come back and make it right.</li>
        </ul>
      </section>

      <GoogleReviews />

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

      <section className="final-cta service-final-cta-banner home-final-cta-banner">
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
          <h2>RightWay <span>Questions,</span> Answered</h2>
          <p>Quick answers about services, service areas, quotes, and follow-up support.</p>
          <div className="faq-help-card">
            <span className="faq-help-icon" aria-hidden="true" />
            <div>
              <strong>Need more help?</strong>
              <p>Our team is ready to assist you.</p>
              <a href="tel:9042906400">904-290-6400</a>
              <small>Mon - Fri: 8AM - 6PM | Sat: 9AM - 2PM</small>
            </div>
          </div>
        </div>
        <FaqList faqs={homeFaqs} />
      </section>

      <Footer />
    </main>
  );
}
