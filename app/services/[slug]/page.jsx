import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Footer, Header, ReviewsStrip, Stars } from '../../components';
import { getService, serviceAreas, services } from '../../services-data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | RightWay Lawn & Pest Control`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);
  const quoteMessage = encodeURIComponent(`Hi RightWay, I would like a free quote for ${service.shortTitle}.`);
  const quoteUrl = `https://wa.me/19042906400?text=${quoteMessage}`;
  const isPestControl = service.slug === 'pest-control';
  const trustBadges = [
    { label: 'Veteran-Owned', icon: BadgeCheck },
    { label: 'Licensed & Insured', icon: ShieldCheck },
    { label: 'Free Callbacks', icon: RotateCcw },
  ];

  return (
    <main>
      <Header />
      {!isPestControl && <ReviewsStrip />}

      <section className={`service-hero${isPestControl ? ' pest-inspo-hero' : ''}`}>
        <div className="service-hero-copy">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.heading}</h1>
          <p>{service.intro}</p>
          <div className="hero-badges" aria-label="Service highlights">
            {trustBadges.map(({ label, icon: Icon }) => (
              <span key={label}><Icon size={18} strokeWidth={2.4} /> {label}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
            <a className="secondary-action" href="/#areas">View Service Area <ArrowRight size={18} strokeWidth={2.6} /></a>
          </div>
        </div>
        {!isPestControl && (
          <div className="service-hero-image">
            <img src={service.image} alt="" />
            <div className="service-rating-card">
              <Stars />
              <strong>4.8 / 5 Google rating</strong>
              <span>900+ reviews from local customers</span>
            </div>
          </div>
        )}
      </section>

      <section className={`service-detail section${isPestControl ? ' service-detail-no-form' : ''}`}>
        <div>
          <p className="section-kicker">Our Services</p>
          <h2>{service.title} for Northeast Florida Homes</h2>
          <p className="section-lede">{service.description}</p>
          <ul className="service-bullet-list">
            {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </div>
        {!isPestControl && (
          <form className="quote-card service-quote-card" id="quote">
            <div className="quote-card-header">
              <h2>Request {service.shortTitle}</h2>
              <p>Fast scheduling from a local, veteran-owned team serving Northeast Florida.</p>
            </div>
            <label>
              What Do You Need?
              <select defaultValue={service.shortTitle}>
                {services.map((item) => <option key={item.slug}>{item.shortTitle}</option>)}
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
        )}
      </section>

      {isPestControl && (
        <>
          <section className="pest-process-block">
            <p className="section-kicker">Our Process</p>
            <h2>Our Pest Control Process</h2>
            <div className="pest-process-grid">
              {service.process.map((item, index) => (
                <article key={item.title}>
                  <span>{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="pest-why-block">
            <p className="section-kicker">Why Choose RightWay</p>
            <h2>Why Choose RightWay Pest Control?</h2>
            <div className="pest-why-grid">
              {service.whyChoose.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="pest-common-block">
            <p className="section-kicker">Common Pests</p>
            <h2>Common Pests We Control</h2>
            <div className="pest-chip-grid">
              {service.commonPests.map((pest) => <span key={pest}>{pest}</span>)}
            </div>
          </section>

          <section className="pest-help-cta">
            <div>
              <p className="section-kicker">Need Immediate Assistance?</p>
              <h2>See where RightWay provides fast pest control service across Northeast Florida.</h2>
            </div>
            <a className="secondary-action" href="/#areas">View Service Area <ArrowRight size={18} strokeWidth={2.6} /></a>
          </section>
        </>
      )}

      <section className="section service-related">
        <p className="section-kicker">More Services</p>
        <h2>Explore More RightWay Services</h2>
        <div className="service-grid">
          {relatedServices.map((item) => (
            <article className="service-card" key={item.slug}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={`/services/${item.slug}`}>View Service</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="areas service-areas-block">
        <div className="areas-copy">
          <p className="section-kicker">Service Areas</p>
          <h2>Serving St. Johns County and Surrounding Communities</h2>
          <p>RightWay provides {service.shortTitle.toLowerCase()} service across Northeast Florida with local knowledge and responsive scheduling.</p>
          <div className="area-tags">
            {serviceAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
        <img src="/assets/lawn-home.jpg" alt="Florida home with green lawn" />
      </section>

      <section className="final-cta">
        <p className="section-kicker">Get Started Today</p>
        <h2>Ready for {service.shortTitle}?</h2>
        <p>Contact RightWay today for a free quote and dependable local service.</p>
        <div className="hero-actions centered">
          <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
          <a className="secondary-action" href={quoteUrl} target="_blank" rel="noreferrer">Get Free Quote</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
