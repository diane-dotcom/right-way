import { footerLinks, locations, services } from './services-data';

export function Stars() {
  return <span className="stars" aria-label="5 star rating">★★★★★</span>;
}

export function GoogleLogo() {
  return (
    <svg className="google-logo" viewBox="0 0 48 48" aria-label="Google" role="img">
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 3.1l6-6C34.4 4.8 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.5 0 20-7.6 20-21 0-1.3-.2-2.7-.5-4z" />
      <path fill="#34A853" d="M6.3 14.1l7 5.1C15.1 14.4 19.2 11 24 11c3.1 0 5.9 1.1 8.1 3.1l6-6C34.4 4.8 29.5 3 24 3 16 3 9.1 7.5 6.3 14.1z" />
      <path fill="#FBBC05" d="M24 45c5.7 0 10.5-1.9 14-5.1l-6.5-5.4C29.5 36.1 27 37 24 37c-6.1 0-10.7-3.1-12.8-8.1l-7 5.4C7.7 40.8 15.2 45 24 45z" />
      <path fill="#EA4335" d="M11.2 28.9A13 13 0 0 1 11 24c0-1.7.3-3.3.8-4.8l-7-5.1A20.8 20.8 0 0 0 3 24c0 3.6.9 7.1 2.4 10.1l5.8-5.2z" />
    </svg>
  );
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
          <a href="/about">About</a>
          <div className="nav-dropdown">
            <button className="nav-trigger" type="button">Services</button>
            <div className="nav-menu" aria-label="Services menu">
              {services.map((service) => (
                <a key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}</a>
              ))}
            </div>
          </div>
          <div className="nav-dropdown">
            <a className="nav-trigger" href="/service-areas">Service Areas</a>
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
    <a className="reviews-strip" href="https://www.google.com/maps?cid=7920884762115137041" target="_blank" rel="noreferrer">
      <GoogleLogo />
      <strong>Veteran-Owned Lawn & Pest Control</strong>
      <span>Rated 4.9 stars based on 900+ reviews</span>
    </a>
  );
}

const rightWayReviews = [
  {
    initials: 'RW',
    name: 'RightWay Customer',
    copy: 'Great service and very professional. My lawn and shrubs are being well taken care of, and the team made everything quick and easy.',
    time: '2 days ago',
  },
  {
    initials: 'JS',
    name: 'Jacksonville Customer',
    copy: 'RightWay is the best service provider I have used in Jacksonville. They are veteran owned, locally owned, and my grass has never looked better.',
    time: '5 days ago',
  },
  {
    initials: 'PC',
    name: 'Ponte Vedra Customer',
    copy: 'Reliable team and clear communication. They showed up when scheduled and explained the lawn and pest plan clearly.',
    time: '1 week ago',
  },
  {
    initials: 'SA',
    name: 'St. Augustine Customer',
    copy: 'Excellent service from start to finish. The technician was professional, helpful, and took the time to answer every question.',
    time: '1 week ago',
  },
  {
    initials: 'NC',
    name: 'Nocatee Customer',
    copy: 'Friendly local company that follows through. The service has made a noticeable difference around our home and yard.',
    time: '2 weeks ago',
  },
];

export function GoogleReviews() {
  const googleReviewsUrl = 'https://www.google.com/maps?cid=7920884762115137041';

  return (
    <section className="rightway-google-reviews" id="reviews" aria-labelledby="rightway-google-reviews-title">
      <div className="rightway-reviews-heading">
        <p>Google Reviews</p>
        <h2 id="rightway-google-reviews-title">See What Our <span>Customers</span> Are Saying</h2>
        <div className="rightway-reviews-divider" aria-hidden="true" />
        <div className="rightway-reviews-score">
          <strong>4.9</strong>
          <Stars />
          <GoogleLogo />
        </div>
        <p className="rightway-reviews-count">based on <strong>900+</strong> reviews</p>
      </div>

      <div className="rightway-review-cards">
        {rightWayReviews.map((review) => (
          <a className="rightway-review-card" href={googleReviewsUrl} target="_blank" rel="noreferrer" key={review.name}>
            <div className="rightway-review-card-top">
              <span className="rightway-review-avatar">{review.initials}</span>
              <div>
                <strong>{review.name}</strong>
                <span className="rightway-verified" aria-label="Verified Google review">●</span>
                <Stars />
              </div>
              <GoogleLogo />
            </div>
            <p>{review.copy}</p>
            <small>{review.time}</small>
          </a>
        ))}
      </div>

      <div className="rightway-reviews-action">
        <a className="rightway-google-review-button" href={googleReviewsUrl} target="_blank" rel="noreferrer">
          <GoogleLogo />
          Read More Reviews on Google
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
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
          {footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
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
