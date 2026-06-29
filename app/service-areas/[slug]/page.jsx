import { notFound } from 'next/navigation';
import { BadgeCheck, Bug, Leaf, ShieldCheck, Sprout, Waves } from 'lucide-react';
import { AreaTags } from '../../area-tags';
import { Footer, Header } from '../../components';
import { getLocation, locations, rightWayMapEmbedUrl, serviceAreas, services } from '../../services-data';

const serviceIcons = [Bug, Sprout, ShieldCheck, Waves, Leaf, BadgeCheck];

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

  return (
    <main>
      <Header />
      <section className="location-hero">
        <p className="eyebrow">Service Area</p>
        <h1>Comprehensive Pest Control in {location.name}</h1>
        <p>From ants to roaches, we provide year-round protection with safe, effective treatments that keep your home and family protected.</p>
      </section>

      <section className="location-services-strip" aria-label={`Services available in ${location.name}`}>
        {services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          return (
            <a href={`/services/${service.slug}`} key={service.slug}>
              <Icon size={28} strokeWidth={2.4} />
              <strong>{service.shortTitle}</strong>
              <span>{service.description}</span>
            </a>
          );
        })}
      </section>

      <section className="location-overview-card">
        <div className="location-overview-copy">
          <p className="section-kicker">Your Local Pros</p>
          <h2>Proudly Protecting {location.name}</h2>
          <p>{location.description} Our team understands the unique pest challenges in Northeast Florida and provides local, dependable service you can count on.</p>
          <ul>
            <li>Local experts who know {location.name} pest challenges</li>
            <li>Safe treatments for kids, pets, and the environment</li>
            <li>Fast response times and reliable service</li>
            <li>Backed by our satisfaction guarantee</li>
          </ul>
        </div>
        <div className="location-photo-panel">
          <img src="/assets/home-hero-hd.png" alt={`${location.name} Florida service area`} />
          <div>
            <strong>Top Pest Challenges in {location.name}</strong>
            <span>Ant infestations year-round</span>
            <span>High humidity attracts roaches</span>
            <span>Termite activity in warm, wet climates</span>
            <span>Mosquito activity after storms</span>
          </div>
        </div>
      </section>

      <section className="areas service-areas-block location-main-areas">
        <div className="areas-copy">
          <p className="section-kicker">All Areas</p>
          <h2>{location.name}, FL</h2>
          <p>RightWay serves {location.name} and nearby communities across Northeast Florida with responsive lawn and pest control service.</p>
          <AreaTags areas={serviceAreas} />
          <div className="location-stats">
            <span><strong>900+</strong> Reviews</span>
            <span><strong>4.8</strong> Rating</span>
            <span><strong>24/7</strong> Support</span>
          </div>
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
