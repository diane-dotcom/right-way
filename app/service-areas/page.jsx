import { MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import { Footer, Header } from '../components';
import { locations, rightWayMapEmbedUrl } from '../services-data';

export const metadata = {
  title: 'Service Areas | RightWay Lawn & Pest Control',
  description: 'RightWay serves St. Johns County and Northeast Florida communities with local lawn and pest control service.',
};

export default function ServiceAreasPage() {
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
              <span><Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> 5/5 rating</span>
            </div>
          </div>
        </div>
        <div className="service-areas-map-visual" aria-label="RightWay service coverage map">
          <iframe
            src={rightWayMapEmbedUrl}
            title="RightWay Integrated Lawn and Pest Control Solutions map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="service-areas-business-card">
            <img src="/assets/logo.webp" alt="RightWay" />
            <strong>RightWay Integrated Lawn and Pest Control Solutions</strong>
            <span><MapPin size={16} /> 6825 Philips Industrial Blvd, Suite 1</span>
            <span><Phone size={16} /> (904) 290-6400</span>
            <span><ShieldCheck size={16} /> Licensed & Insured</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
