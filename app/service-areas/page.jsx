import { MapPin, ShieldCheck, Star } from 'lucide-react';
import { Footer, Header } from '../components';
import { locations, services } from '../services-data';

export const metadata = {
  title: 'Service Areas | RightWay Lawn & Pest Control',
  description: 'RightWay serves St. Johns County and Northeast Florida communities with local lawn and pest control service.',
};

export default function ServiceAreasPage() {
  const quoteUrl = 'https://wa.me/19042906400?text=Hi%20RightWay%2C%20I%20would%20like%20a%20free%20quote%20for%20my%20service%20area.';

  return (
    <main>
      <Header />
      <section className="service-areas-hero">
        <div className="service-areas-hero-copy">
          <p className="eyebrow"><MapPin size={18} strokeWidth={2.8} /> Service Areas</p>
          <h1>Serving Florida and <span>Surrounding Communities</span></h1>
          <p>RightWay provides lawn and pest control service across Northeast Florida with local knowledge, responsive scheduling, and dependable follow-through.</p>
          <div className="service-area-pills">
            {locations.map((location) => (
              <a href={`/service-areas/${location.slug}`} key={location.slug}>
                <MapPin size={17} strokeWidth={2.7} />
                {location.name}
              </a>
            ))}
          </div>
          <div className="service-areas-trust-card">
            <ShieldCheck size={58} strokeWidth={2.2} />
            <div>
              <strong>Trusted by 1,000+ Northeast Florida homeowners and businesses.</strong>
              <span><Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> 4.9/5 rating</span>
            </div>
          </div>
        </div>
        <form className="quote-card service-areas-quote-card" id="quote">
          <div className="quote-card-header">
            <h2>Request Service</h2>
            <p>Fast scheduling from a local, veteran-owned team serving Northeast Florida.</p>
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
      </section>

      <Footer />
    </main>
  );
}
