import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck, Bug, ClipboardCheck, RotateCcw, Search, ShieldCheck } from 'lucide-react';
import { AreaTags } from '../../area-tags';
import { Footer, Header } from '../../components';
import { FaqList } from '../../faq-list';
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
  const heroImage = service.slug === 'pest-control' ? '/assets/pest-control-hero.png' : service.image;
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

  return (
    <main>
      <Header />

      <section className="hero service-page-hero" style={{ '--service-hero-image': `url('${heroImage}')` }}>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy service-hero-copy">
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
              <a className="secondary-action" href="/service-areas">View Service Area <ArrowRight size={18} strokeWidth={2.6} /></a>
            </div>
          </div>

          <form className="quote-card" id="quote">
            <div className="quote-card-header">
              <h2>Request {service.shortTitle}</h2>
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
            <a className="quote-card-action" href={quoteUrl} target="_blank" rel="noreferrer">Get My Free Quote</a>
            <p className="fine-print">Licensed & insured · No-obligation quote</p>
          </form>
        </div>
      </section>

      <section className="pest-protection-section">
        <div className="pest-protection-copy">
          <h2>Professional <span>{service.title}</span> Built for Long-Term Protection</h2>
          <p>{service.description}</p>
          <p>{service.intro}</p>
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
          <img src={service.image} alt={`${service.title} service`} />
        </div>
      </section>

      <section className="pest-process-block">
        <h2>Our <span>{service.shortTitle}</span> Process</h2>
        <div className="pest-process-timeline">
          {service.process.map((item, index) => (
            <article key={item.title}>
              <small>{index + 1}</small>
              <span className="pest-process-icon">
                {(() => {
                  const Icon = processIcons[index % processIcons.length];
                  return <Icon size={36} strokeWidth={2.4} />;
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
        <h2>Why Choose RightWay {service.shortTitle}?</h2>
        <div className="pest-why-grid">
          {service.whyChoose.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

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

      <section className="final-cta service-final-cta-banner">
        <p className="section-kicker">Get Started Today</p>
        <h2>Ready for {service.shortTitle}?</h2>
        <p>Contact RightWay today for a free quote and dependable local service.</p>
        <div className="hero-actions centered">
          <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
          <a className="secondary-action" href={quoteUrl} target="_blank" rel="noreferrer">Get Free Quote</a>
        </div>
      </section>

      <section className="pest-faq-section">
        <div className="pest-faq-copy">
          <p className="section-kicker">FAQs</p>
          <h2>RightWay <span>Questions,</span> Answered</h2>
          <p>Get quick answers about scheduling, inspections, service expectations, and ongoing support.</p>
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
        <FaqList faqs={service.faqs} />
      </section>

      <Footer />
    </main>
  );
}
