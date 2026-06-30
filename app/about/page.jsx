import { BadgeCheck, HeartHandshake, ShieldCheck, Star, Users } from 'lucide-react';
import { Footer, Header } from '../components';

export const metadata = {
  title: 'About RightWay | RightWay Lawn & Pest Control',
  description: 'Learn about RightWay Integrated Lawn and Pest Control Solutions, a veteran-owned lawn and pest control company serving Northeast Florida.',
};

const values = [
  {
    title: 'Veteran-Owned Standards',
    copy: 'We bring discipline, accountability, and follow-through to every home we service.',
    icon: BadgeCheck,
  },
  {
    title: 'Local Florida Expertise',
    copy: 'Our team understands Northeast Florida turf, pests, humidity, and seasonal pressure.',
    icon: ShieldCheck,
  },
  {
    title: 'Customer-First Service',
    copy: 'Clear communication, responsive scheduling, and free callbacks help homeowners feel taken care of.',
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <main>
      <Header />

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">About RightWay</p>
          <h1>Local Lawn & Pest Control Done the <span>RightWay</span></h1>
          <p>
            RightWay Integrated Lawn and Pest Control Solutions is a veteran-owned local team helping Northeast Florida
            homeowners protect their homes, lawns, and outdoor spaces with dependable service and honest communication.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
            <a className="secondary-action" href="/#quote">Get Free Quote</a>
          </div>
        </div>
        <div className="about-hero-photo">
          <img src="/assets/about-rightway.png" alt="RightWay lawn and pest control team" />
          <div className="about-rating-card">
            <Star size={20} fill="currentColor" />
            <strong>5 stars</strong>
            <span>139+ Google reviews</span>
          </div>
        </div>
      </section>

      <section className="about-trust-grid" aria-label="RightWay highlights">
        <article>
          <strong>Veteran-Owned</strong>
          <span>Built on accountability and service.</span>
        </article>
        <article>
          <strong>Locally Operated</strong>
          <span>Focused on Northeast Florida homes.</span>
        </article>
        <article>
          <strong>Free Callbacks</strong>
          <span>Responsive support when you need it.</span>
        </article>
      </section>

      <section className="about-story-section">
        <div>
          <p className="section-kicker">Our Story</p>
          <h2>Protecting Homes, Lawns, and Peace of Mind</h2>
        </div>
        <div className="about-story-copy">
          <p>
            RightWay was built to give homeowners a better service experience: practical recommendations, dependable
            scheduling, and treatments designed around local conditions instead of one-size-fits-all service.
          </p>
          <p>
            From pest control and termite protection to lawn care, mosquito control, and tree and shrub care, our focus is
            simple: show up, communicate clearly, and help keep your property healthier and more comfortable.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <p className="section-kicker">Why Homeowners Trust Us</p>
        <h2>Service Values That Show Up at Every Visit</h2>
        <div className="about-values-grid">
          {values.map(({ title, copy, icon: Icon }) => (
            <article key={title}>
              <Icon size={38} strokeWidth={2.35} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-guarantee-section" id="guarantee">
        <div>
          <Users size={44} strokeWidth={2.3} />
          <p className="section-kicker">Our Guarantee</p>
          <h2>We Treat Customers Like Neighbors</h2>
        </div>
        <p>
          If something needs additional attention between regular services, RightWay provides responsive follow-up support
          and free callbacks. Our team is here to help you protect your home the right way, not disappear after the visit.
        </p>
      </section>

      <section className="final-cta">
        <p className="section-kicker">Ready to Get Started?</p>
        <h2>Schedule RightWay Service Today</h2>
        <p>Contact our local team for lawn care, pest control, termite control, mosquito control, or tree and shrub care.</p>
        <div className="hero-actions centered">
          <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
          <a className="secondary-action" href="/#quote">Get Free Quote</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
