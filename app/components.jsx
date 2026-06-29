import { footerLinks, locations, serviceAreas, services } from './services-data';

export function Stars() {
  return <span className="stars" aria-label="5 star rating">★★★★★</span>;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="/" aria-label="RightWay home">
          <img src="/assets/logo.webp" alt="RightWay Lawn & Pest Control" />
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <div className="nav-dropdown">
            <button className="nav-trigger" type="button">Services</button>
            <div className="nav-menu" aria-label="Services menu">
              {services.map((service) => (
                <a key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</a>
              ))}
            </div>
          </div>
          <div className="nav-dropdown">
            <button className="nav-trigger" type="button">Service Areas</button>
            <div className="nav-menu" aria-label="Service areas menu">
              {locations.map((area) => (
                <a key={area.slug} href={`/service-areas/${area.slug}`}>{area.name}</a>
              ))}
            </div>
          </div>
          <a href="https://portal.gorilladesk.com/rightwaypest">Manage Account</a>
          <a href="https://portal.gorilladesk.com/rightwaypest">Pay Bill</a>
        </nav>
        <div className="header-cta">
          <a className="phone-mini" href="tel:9042906400">
            <span>24/7 Emergency</span>
            <strong>904-290-6400</strong>
          </a>
          <a className="quote-button" href="/#quote">Get Free Quote</a>
        </div>
      </div>
    </header>
  );
}

export function ReviewsStrip() {
  return (
    <a className="reviews-strip" href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJXYahGczxa4cRCg8TzMtEzsk">
      <span className="google-dot">G</span>
      <strong>Google Reviews</strong>
      <span>| Veteran-Owned Lawn & Pest Control | Rated 4.8</span>
      <Stars />
      <span>Based on 900+ Reviews!</span>
    </a>
  );
}

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <img src="/assets/logo.webp" alt="RightWay Lawn & Pest Control" />
          <p>Northeast Florida&apos;s trusted lawn and pest control experts. Veteran-owned, locally operated, and committed to protecting your home and lawn.</p>
          <a href="tel:9042906400">(904)-290-6400</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          {footerLinks.map((link) => <a key={link} href="/#top">{link}</a>)}
        </div>
        <div>
          <h3>Services</h3>
          {services.map((service) => <a key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</a>)}
        </div>
        <div>
          <h3>Service Areas</h3>
          {locations.map((area) => <a key={area.slug} href={`/service-areas/${area.slug}`}>{area.name}</a>)}
        </div>
      </footer>
      <div className="copyright">Copyright © 2026 RightWay Lawn & Pest Control. All Rights Reserved.</div>
    </>
  );
}
