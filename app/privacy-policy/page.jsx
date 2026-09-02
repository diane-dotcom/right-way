import { Footer, Header } from '../components';

export const metadata = {
  title: 'Privacy Policy | RightWay Lawn & Pest Control',
  description: 'How RightWay Integrated Lawn and Pest Control Solutions collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1>Privacy Policy</h1>

        {/* ============================================================
            PASTE THE FULL TEXT FROM https://rightwaypest.com/privacy-policy/
            HERE. Keep each paragraph in its own <p> tag and each heading
            in an <h2>. Delete this comment when done.
        ============================================================ */}
        <p>[Privacy policy text goes here]</p>

      </section>
      <Footer />
    </main>
  );
}
