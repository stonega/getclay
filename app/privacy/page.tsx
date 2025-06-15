import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Clay',
  description: 'Learn how we collect, use, and protect your personal information',
  keywords: ['privacy', 'data protection', 'privacy policy'],
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Account information (name, email address, username)</li>
            <li>Profile information (profile picture, bio)</li>
            <li>Content you create (notes, todos, attachments)</li>
            <li>Communications with us</li>
            <li>Usage information and preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your transactions and send related information</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Develop new products and services</li>
            <li>Detect and prevent fraud and abuse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We implement appropriate technical and organizational security measures to protect 
            your personal information. These measures include:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and audits</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage and backup procedures</li>
            <li>Employee training on data security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We do not sell your personal information. We may share your information in the 
            following circumstances:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>With your consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent abuse</li>
            <li>With service providers who assist our operations</li>
            <li>In connection with a merger or acquisition</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Your Rights and Choices</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            You have several rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data</li>
            <li>Object to certain data processing</li>
            <li>Export your data in a portable format</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Cookies and Tracking</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We use cookies and similar tracking technologies to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Remember your preferences</li>
            <li>Understand how you use our service</li>
            <li>Improve our platform</li>
            <li>Provide personalized content</li>
            <li>Enhance security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">7. Children&aposs Privacy</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our service is not directed to children under 13. We do not knowingly collect 
            personal information from children under 13. If you become aware that a child 
            has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We may update this privacy policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the effective date. 
            Your continued use of our service after such modifications constitutes your 
            acknowledgment of the modified policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you have questions about this Privacy Policy or our practices, please contact us. 
            We are committed to resolving any concerns you may have about our privacy practices.
          </p>
        </section>
      </div>
    </main>
  );
} 