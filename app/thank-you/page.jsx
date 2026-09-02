import { Footer, Header } from '../components';

export const metadata = {
  title: 'Thank You | RightWay Lawn & Pest Control',
  description: 'Your quote request has been received. The RightWay team will be in touch within one business day.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main>
      <Header />
      <section className="final-cta" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, padding: '0 24px' }}>
          <p className="section-kicker" style={{ color: '#fff' }}>Request received</p>
          <h1 style={{ color: '#fff' }}>Thank You!</h1>
          <p style={{ color: '#fff', fontSize: 18, marginTop: 12 }}>
            Your free quote request is in. A member of the RightWay team will reach out
            within one business day. Need us sooner?
          </p>
          <p style={{ marginTop: 24 }}>
            <a className="primary-action" href="tel:9042906400">Call (904) 290-6400</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
