import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck, Bug, ClipboardCheck, RotateCcw, Search, ShieldCheck } from 'lucide-react';
import { AreaTags } from '../../area-tags';
import { Footer, Header, ReviewsStrip, Stars } from '../../components';
import { getService, rightWayMapEmbedUrl, serviceAreas, services } from '../../services-data';

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
  const protectionFeatures = [
    { label: 'Licensed & Insured', icon: ShieldCheck },
    { label: 'Safe Family-Friendly Treatments', icon: BadgeCheck },
    { label: 'Detailed Inspection', icon: ArrowRight },
    { label: 'Long-Term Prevention', icon: RotateCcw },
  ];
  const processIcons = [Search, Bug, ClipboardCheck, ShieldCheck];
  const pestFaqs = [
    {
      question: 'How often should I schedule pest control service?',
      answer: 'Most homes benefit from recurring pest control service every other month or quarterly, depending on the pest pressure around the property and the season.',
    },
    {
      question: 'Are your pest control treatments safe for families and pets?',
      answer: 'RightWay uses targeted, family-conscious treatment methods and gives clear preparation and re-entry guidance before and after service.',
    },
    {
      question: 'What pests do you treat for?',
      answer: 'We help with common Northeast Florida pests including ants, cockroaches, spiders, rodents, mosquitoes, termites, and other household pest issues.',
    },
    {
      question: 'Do you inspect before treating?',
      answer: 'Yes. Each service starts with a detailed inspection so the treatment plan is based on where pests are active and how they are getting in.',
    },
    {
      question: 'What happens if pests come back?',
      answer: 'RightWay offers responsive follow-up support and free callbacks when additional attention is needed between regular services.',
    },
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

      {isPestControl ? (
        <section className="pest-protection-section">
          <div className="pest-protection-copy">
            <h2>Professional <span>Pest Control</span> Built for Long-Term Protection</h2>
            <p>
              Pest problems can quickly disrupt your home, damage property, and create unnecessary stress. Our pest control services provide safe, effective solutions for ants, cockroaches, spiders, rodents, termites, and other common pests using targeted treatments designed for lasting results.
            </p>
            <p>
              From thorough inspections and customized treatment plans to preventative applications and follow-up care, we help homeowners protect their property with dependable residential pest control services focused on long-term prevention, family safety, and peace of mind.
            </p>
            <div className="pest-protection-mark" aria-hidden="true" />
            <div className="pest-protection-features">
              {protectionFeatures.map(({ label, icon: Icon }) => (
                <article key={label}>
                  <Icon size={34} strokeWidth={2.4} />
                  <strong>{label}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="pest-protection-photo">
            <img src="/assets/pest-control.jpg" alt="Pest control technician treating a home" />
          </div>
        </section>
      ) : (
        <section className="service-detail section">
          <div>
            <p className="section-kicker">Our Services</p>
            <h2>{service.title} for Northeast Florida Homes</h2>
            <p className="section-lede">{service.description}</p>
            <ul className="service-bullet-list">
              {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
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
        </section>
      )}

      {isPestControl && (
        <>
          <section className="pest-process-block">
            <h2>Our <span>PEST</span> Control Process</h2>
            <div className="pest-process-timeline">
              {service.process.map((item, index) => (
                <article key={item.title}>
                  <small>{index + 1}</small>
                  <span className="pest-process-icon">
                    {(() => {
                      const Icon = processIcons[index % processIcons.length];
                      return <Icon size={28} strokeWidth={2.4} />;
                    })()}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section service-related pest-related-section">
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

          <section className="pest-why-block">
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

        </>
      )}

      {!isPestControl && (
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
      )}

      <section className="areas service-areas-block">
        <div className="areas-copy">
          <p className="section-kicker">Service Areas</p>
          <h2>Serving St. Johns County and Surrounding Communities</h2>
          <p>RightWay provides {service.shortTitle.toLowerCase()} service across Northeast Florida with local knowledge and responsive scheduling.</p>
          <AreaTags areas={serviceAreas} />
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
        <h2>Ready for {service.shortTitle}?</h2>
        <p>Contact RightWay today for a free quote and dependable local service.</p>
        <div className="hero-actions centered">
          <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
          <a className="secondary-action" href={quoteUrl} target="_blank" rel="noreferrer">Get Free Quote</a>
        </div>
      </section>

      {isPestControl && (
        <section className="pest-faq-section">
          <div className="pest-faq-copy">
            <p className="section-kicker">FAQs</p>
            <h2>Pest Control Questions, Answered</h2>
            <p>Get quick answers about scheduling, safety, inspections, and ongoing protection for your home.</p>
          </div>
          <div className="pest-faq-list">
            {pestFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
