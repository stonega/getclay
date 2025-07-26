import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Terms of Service | Clay',
	description: 'Our terms of service and user agreement',
	keywords: ['terms', 'terms of service', 'user agreement', 'legal'],
}

export default function TermsPage() {
	return (
		<main className='mx-auto max-w-3xl px-4 py-12'>
			<h1 className='mb-8 text-3xl font-bold'>Terms of Service</h1>

			<div className='space-y-8'>
				<section>
					<h2 className='text-xl font-semibold mb-4'>1. Acceptance of Terms</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						By accessing and using Clay, you agree to be bound by these Terms of Service. If you do not agree to these
						terms, please do not use the service.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>2. Use of Service</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						You agree to use Clay only for lawful purposes and in accordance with these Terms. You are responsible for
						maintaining the confidentiality of your account and for restricting access to your computer or device. You
						agree to accept responsibility for all activities that occur under your account.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>3. Content Guidelines</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						Users are solely responsible for the content they create and share through Snote. Content must not violate
						any applicable laws or regulations. Prohibited content includes, but is not limited to: illegal content,
						malicious software, spam, or content that infringes on intellectual property rights.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>4. Privacy</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
						protect your personal information. By using Snote, you agree to our collection and use of information in
						accordance with our Privacy Policy.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>5. Intellectual Property</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						The service and its original content, features, and functionality are owned by Snote and are protected by
						international copyright, trademark, patent, trade secret, and other intellectual property laws.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>6. Termination</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
						liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of
						the Terms.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>7. Limitation of Liability</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						In no event shall Snote, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable
						for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss
						of profits, data, use, goodwill, or other intangible losses.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>8. Changes to Terms</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						We reserve the right to modify these terms at any time. We will notify users of any material changes to
						these terms. Continued use of Snote after changes constitutes acceptance of the new terms. If you do not
						agree to the modified terms, you should discontinue your use of the service.
					</p>
				</section>

				<section>
					<h2 className='text-xl font-semibold mb-4'>9. Contact Us</h2>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						If you have any questions about these Terms, please contact us. We will make every effort to resolve your
						concerns.
					</p>
				</section>
			</div>
		</main>
	)
}
