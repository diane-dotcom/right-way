import { notFound } from 'next/navigation';
import { BadgeCheck, Bug, Headphones, Home, MapPin, Phone, ShieldCheck, Sprout, Star, Waves } from 'lucide-react';
import { AreaTags } from '../../area-tags';
import { Footer, GoogleLogo, Header } from '../../components';
import { FaqList } from '../../faq-list';
import { getLocation, locations, rightWayMapEmbedUrl, serviceAreas, services } from '../../services-data';

const serviceIcons = [Bug, Sprout, ShieldCheck, Waves, Home, BadgeCheck];

const ponteVedraFaqs = [
  {
    question: 'Does RightWay provide lawn and pest control in Ponte Vedra?',
    answer: 'Yes. RightWay serves Ponte Vedra homeowners with lawn care, pest control, termite control, mosquito control, and tree and shrub care.',
  },
  {
    question: 'Can I request a free quote for my Ponte Vedra home?',
    answer: 'Yes. You can call RightWay or use the quote form to request service for your Ponte Vedra property.',
  },
  {
    question: 'Do you offer follow-up support?',
    answer: 'Yes. RightWay provides responsive follow-up support and free callbacks when additional attention is needed between regular services.',
  },
  {
    question: 'What pest issues are common in Ponte Vedra?',
    answer: 'Ponte Vedra homes commonly deal with ants, roaches, mosquitoes, termites, spiders, and seasonal pest pressure caused by warm, humid weather.',
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

  if (location.slug === 'ponte-vedra') {
    return (
      <main>
        <Header />
        <section className="hero" id="top">
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Ponte Vedra Lawn & Pest Experts • Veteran-Owned</p>
              <h1>Ponte Vedra&apos;s Trusted <span>Lawn & Pest Control</span> Team</h1>
              <p className="hero-text">
                RightWay helps Ponte Vedra homeowners protect their lawns, homes, and outdoor spaces with dependable local lawn care and pest control service.
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
                <h2>Request Ponte Vedra Service</h2>
                <p>Fast scheduling from a local, veteran-owned team serving Ponte Vedra and Northeast Florida.</p>
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
              <h2>Proudly Protecting Ponte Vedra Homes and Families</h2>
              <p>RightWay understands the unique pest challenges in Northeast Florida and provides local, dependable service Ponte Vedra homeowners can count on.</p>
              <ul>
                <li><MapPin size={18} /> Local experts who know Ponte Vedra pest challenges</li>
                <li><ShieldCheck size={18} /> Safe treatments for kids, pets, and the environment</li>
                <li><BadgeCheck size={18} /> Fast response times and reliable service</li>
                <li><BadgeCheck size={18} /> Backed by our satisfaction guarantee</li>
              </ul>
            </div>
            <div className="location-feature-photo">
              <img src="/assets/home-hero-hd.png" alt="Ponte Vedra service area" />
              <div>
                <strong>Top Pest Challenges in Ponte Vedra</strong>
                <span>Ant infestations year-round</span>
                <span>High humidity attracts roaches</span>
                <span>Termite activity in warm, wet climates</span>
                <span>Mosquito activity after storms</span>
              </div>
            </div>
          </section>

          <section className="ponte-nearby-section">
            <div className="ponte-nearby-card">
              <p className="section-kicker"><MapPin size={18} /> Local Experts. Neighborhood Focused.</p>
              <h2>Serving North Florida and Nearby Areas</h2>
              <p>RightWay Pest Control is proud to protect homes and families across Ponte Vedra, North Florida, and surrounding communities with trusted, dependable pest solutions.</p>
              <div className="ponte-nearby-benefits">
                <article>
                  <span><Home size={38} strokeWidth={2.35} /></span>
                  <div>
                    <h3>Local Pest Knowledge</h3>
                    <p>We understand the pests and pressures unique to Northeast Florida, so we treat the problem at the source.</p>
                  </div>
                </article>
                <article>
                  <span><ShieldCheck size={38} strokeWidth={2.35} /></span>
                  <div>
                    <h3>Safe Plans. Reliable Service.</h3>
                    <p>Our licensed technicians use safe, effective treatments and stand behind our work with service you can count on.</p>
                  </div>
                </article>
              </div>
              <div className="ponte-nearby-actions">
                <a className="primary-action" href="tel:9042906400"><Phone size={18} /> Call (904) 290-6400</a>
                <a className="text-link" href="/service-areas">View Service Area</a>
              </div>
            </div>
            <img src="/assets/pest-control.jpg" alt="RightWay technician serving Ponte Vedra homes" />
          </section>

          <div className="ponte-section-divider" aria-hidden="true"><span /></div>

          <section className="location-area-card">
            <div>
              <p className="section-kicker">All About</p>
              <h2>Ponte Vedra, FL</h2>
              <p>RightWay proudly serves Ponte Vedra and nearby communities with responsive lawn and pest control service backed by local knowledge and reliable scheduling.</p>
              <div className="location-stats-row">
                <span><GoogleLogo /><strong>900+</strong> Google reviews</span>
                <span><Star size={18} fill="currentColor" /><strong>4.9</strong> local rating</span>
                <span><Headphones size={19} /><strong>24/7</strong> support</span>
              </div>
            </div>
            <img src="/assets/lawn-home.jpg" alt="Ponte Vedra neighborhood and lawn" />
          </section>

          <section className="pest-faq-section ponte-faq-section">
            <div className="pest-faq-copy">
              <p className="section-kicker">FAQs</p>
              <h2>RightWay Questions, Answered</h2>
              <p>Quick answers about Ponte Vedra service, scheduling, follow-up support, and common pest pressure.</p>
              <div className="faq-benefit-grid" aria-label="FAQ benefits">
                <span><strong>Honest Answers</strong></span>
                <span><strong>Quick Response</strong></span>
                <span><strong>Local & Trusted</strong></span>
                <span><strong>Quality Work</strong></span>
              </div>
            </div>
            <FaqList faqs={ponteVedraFaqs} />
          </section>

          <section className="areas ponte-map-pack" id="areas">
            <div className="areas-copy">
              <p className="section-kicker">Service Areas</p>
              <h2>Ponte Vedra and North Florida Service Map</h2>
              <p>
                RightWay provides responsive lawn and pest control service across Ponte Vedra, North Florida, and nearby communities.
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
