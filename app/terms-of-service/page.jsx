import { Footer, Header } from '../components';

export const metadata = {
  title: 'Terms of Service | RightWay Lawn & Pest Control',
  description: 'Terms of service for RightWay Integrated Lawn and Pest Control Solutions.',
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Header />
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1>Terms of Service</h1>

        {/* ============================================================
            PASTE THE FULL TEXT FROM https://rightwaypest.com/terms-of-service/
            HERE. Keep each paragraph in its own <p> tag and each heading
            in an <h2>. Delete this comment when done.
        ============================================================ */}
        <p>[Terms of service text goes here]</p>

      </section>
      <Footer />
    </main>
  );
}
