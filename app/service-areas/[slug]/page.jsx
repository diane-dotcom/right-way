import { notFound } from 'next/navigation';
import { BadgeCheck, Bug, Headphones, Home, MapPin, Phone, ShieldCheck, Sprout, Star, Waves } from 'lucide-react';
import { AreaTags } from '../../area-tags';
import { Footer, GoogleLogo, Header } from '../../components';
import { FaqList } from '../../faq-list';
import { getLocation, locations, rightWayMapEmbedUrl, serviceAreas, services } from '../../services-data';

const serviceIcons = [Bug, Sprout, ShieldCheck, Waves, Home, BadgeCheck];

const getLocationFaqs = (name) => [
  {
    question: `Does RightWay provide lawn and pest control in ${name}?`,
    answer: `Yes. RightWay serves ${name} homeowners with lawn care, pest control, termite control, mosquito control, and tree and shrub care.`,
  },
  {
    question: `Can I request a free quote for my ${name} home?`,
    answer: `Yes. You can call RightWay or use the quote form to request service for your ${name} property.`,
  },
  {
    question: 'Do you offer follow-up support?',
    answer: 'Yes. RightWay provides responsive follow-up support and free callbacks when additional attention is needed between regular services.',
  },
  {
    question: `What pest issues are common in ${name}?`,
    answer: `${name} homes commonly deal with ants, roaches, mosquitoes, termites, spiders, and seasonal pest pressure caused by warm, humid weather.`,
  },
];

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return {};
  }

  return {
    title: `Lawn & Pest Control in ${location.name} | RightWay`,
    description: location.description,
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  const quoteUrl = `https://wa.me/19042906400?text=${encodeURIComponent(`Hi RightWay, I would like a free quote for ${location.name}.`)}`;
  const locationFaqs = getLocationFaqs(location.name);

  if (location) {
    return (
      <main>
        <Header />
        <section className="hero" id="top">
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">{location.name} Lawn & Pest Experts • Veteran-Owned</p>
              <h1>Trusted <span>Lawn & Pest Control</span> in {location.name}</h1>
              <p className="hero-text">
                RightWay helps {location.name} homeowners protect their lawns, homes, and outdoor spaces with dependable local lawn care and pest control service.
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
                <h2>Request {location.name} Service</h2>
                <p>Fast scheduling from a local, veteran-owned team serving {location.name} and Northeast Florida.</p>
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
              <a className="quote-card-action" href={quoteUrl} target="_blank" rel="noreferrer">Get My Free Quote</a>
              <p className="fine-print">Licensed & insured · No-obligation quote</p>
            </form>
          </div>
        </section>

        <section className="location-mockup-page">
          <section className="location-mockup-hero">
            <div className="location-service-cards">
              {services.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <a href={`/services/${service.slug}`} key={service.slug}>
                    <Icon size={30} strokeWidth={2.3} />
                    <strong>{service.shortTitle}</strong>
                    <span>{service.description}</span>
                  </a>
                );
              })}
            </div>
          </section>

          <section className="location-feature-card">
            <div className="location-feature-copy">
              <p className="section-kicker">Your Local Pros</p>
              <h2>Proudly Protecting {location.name} Homes and Families</h2>
              <p>RightWay understands the unique pest challenges in Northeast Florida and provides local, dependable service {location.name} homeowners can count on.</p>
              <ul>
                <li><MapPin size={18} /> Local experts who know {location.name} pest challenges</li>
                <li><ShieldCheck size={18} /> Safe treatments for kids, pets, and the environment</li>
                <li><BadgeCheck size={18} /> Fast response times and reliable service</li>
                <li><BadgeCheck size={18} /> Backed by our satisfaction guarantee</li>
              </ul>
            </div>
            <div className="location-feature-photo">
              <img src="/assets/right-way-truck.png" alt={`RightWay service truck in ${location.name}`} />
            </div>
          </section>

          <section className="ponte-nearby-section">
            <div className="ponte-nearby-card">
              <p className="section-kicker"><MapPin size={18} /> Local Experts. Neighborhood Focused.</p>
              <h2>Serving North Florida and Nearby Areas</h2>
              <p>Dependable lawn and pest control for {location.name}, North Florida, and nearby communities.</p>
              <div className="ponte-nearby-benefits">
                <article>
                  <span><Home size={38} strokeWidth={2.35} /></span>
                  <div>
                    <h3>Local Pest Knowledge</h3>
                    <p>Treatments built around Northeast Florida pest pressure.</p>
                  </div>
                </article>
                <article>
                  <span><ShieldCheck size={38} strokeWidth={2.35} /></span>
                  <div>
                    <h3>Safe Plans. Reliable Service.</h3>
                    <p>Licensed technicians, clear communication, and dependable follow-up.</p>
                  </div>
                </article>
              </div>
              <div className="ponte-nearby-actions">
                <a className="primary-action" href="tel:9042906400"><Phone size={18} /> Call (904) 290-6400</a>
                <a className="text-link" href="/service-areas">View Service Area</a>
              </div>
            </div>
            <img src="/assets/home-hero-hd.png" alt={`RightWay technician serving ${location.name} homes`} />
          </section>

          <div className="ponte-section-divider" aria-hidden="true"><span /></div>

          <section className="location-area-card">
            <div>
              <p className="section-kicker">All About</p>
              <h2>{location.name}, FL</h2>
              <p>RightWay proudly serves {location.name} and nearby communities with responsive lawn and pest control service backed by local knowledge and reliable scheduling.</p>
              <div className="location-stats-row">
                <span><GoogleLogo /><strong>139+</strong> Google reviews</span>
                <span><Star size={18} fill="currentColor" /><strong>5.0</strong> local rating</span>
                <span><Headphones size={19} /><strong>24/7</strong> support</span>
              </div>
            </div>
            <img src="/assets/lawn-home.jpg" alt={`${location.name} neighborhood and lawn`} />
          </section>

          <section className="pest-faq-section ponte-faq-section">
            <div className="pest-faq-copy">
              <p className="section-kicker">FAQs</p>
              <h2>RightWay <span>Questions,</span> Answered</h2>
              <p>Quick answers about {location.name} service, scheduling, follow-up support, and common pest pressure.</p>
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
            <FaqList faqs={locationFaqs} />
          </section>

          <section className="areas ponte-map-pack" id="areas">
            <div className="areas-copy">
              <p className="section-kicker">Service Areas</p>
              <h2>{location.name} and North Florida Service Map</h2>
              <p>
                RightWay provides responsive lawn and pest control service across {location.name}, North Florida, and nearby communities.
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
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{location.name} Lawn & Pest Experts • Veteran-Owned</p>
            <h1>Trusted <span>Lawn & Pest Control</span> in {location.name}</h1>
            <p className="hero-text">
              RightWay helps {location.name} homeowners protect their lawns, homes, and outdoor spaces with dependable local lawn care and pest control service.
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
              <h2>Request {location.name} Service</h2>
              <p>Fast scheduling from a local, veteran-owned team serving {location.name} and Northeast Florida.</p>
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
            <a className="quote-card-action" href={quoteUrl} target="_blank" rel="noreferrer">Get My Free Quote</a>
            <p className="fine-print">Licensed & insured · No-obligation quote</p>
          </form>
        </div>
      </section>

      <section className="areas" id="areas">
        <div className="areas-copy">
          <p className="section-kicker">Service Areas</p>
          <h2>Proudly Serving {location.name} and Northeast Florida Communities</h2>
          <p>
            From {location.name} to St. Augustine and everywhere in between, RightWay Lawn & Pest Control keeps your lawn healthy
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

      <Footer />
    </main>
  );
}
