import { AreaTags } from '../area-tags';
import { Footer, Header } from '../components';
import { locations, rightWayMapEmbedUrl, serviceAreas } from '../services-data';

export const metadata = {
  title: 'Service Areas | RightWay Lawn & Pest Control',
  description: 'RightWay serves St. Johns County and Northeast Florida communities with local lawn and pest control service.',
};

export default function ServiceAreasPage() {
  return (
    <main>
      <Header />
      <section className="location-hero">
        <p className="eyebrow">Local Service Areas</p>
        <h1>RightWay Lawn & Pest Control Near You</h1>
        <p>Explore the Northeast Florida communities we serve with dependable lawn care, pest control, termite protection, mosquito control, and landscape health services.</p>
      </section>

      <section className="areas service-areas-block location-main-areas">
        <div className="areas-copy">
          <p className="section-kicker">Service Areas</p>
          <h2>Proudly Serving Northeast Florida Communities</h2>
          <p>
            From Ponte Vedra to St. Augustine and everywhere in between, RightWay Lawn & Pest Control keeps your lawn healthy
            and your home protected across St. Johns County and surrounding beaches.
          </p>
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

      <section className="location-grid-section">
        <p className="section-kicker">Locations</p>
        <h2>Choose Your Community</h2>
        <div className="location-card-grid">
          {locations.map((location) => (
            <a className="location-card" href={`/service-areas/${location.slug}`} key={location.slug}>
              <span>{location.name}</span>
              <p>{location.description}</p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
