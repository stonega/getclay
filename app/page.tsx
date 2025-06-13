'use client'

import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ClayLogo } from '@/components/clay-logo'
import { Sparkles } from 'lucide-react'
import ExcerptBook from '@/components/icons/excerpt-book'
import ExcerptChat from '@/components/icons/excerpt-chat'
import ExcerptNote from '@/components/icons/excerpt-note'
import { Discord } from '@/components/icons/discord'

export default function Page() {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')

	async function handleJoinBeta(e: React.FormEvent) {
		e.preventDefault()
		setStatus('loading')
		const res = await fetch('/api/join-beta', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email }),
		})
		if (res.ok) {
			setStatus('success')
			setEmail('')
		} else if (res.status === 409) {
			setStatus('duplicate')
		} else {
			setStatus('error')
		}
	}

	return (
		<div className='min-h-screen bg-background'>
			{/* Header */}
			<header className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
				<div className='flex items-center gap-2'>
					<ClayLogo className='h-8 w-8' />
					<span className='text-2xl font-bold playfair'>Clay</span>
					<span className='ml-2 text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full'>Beta</span>
				</div>
				<nav className='hidden md:flex items-center gap-8'>
					<a href='#features' className='text-sm text-muted-foreground hover:text-foreground'>
						Features
					</a>
					<a href='#about' className='text-sm text-muted-foreground hover:text-foreground'>
						About
					</a>
					<Button size='sm' className='rounded-lg'>
						Join Beta
					</Button>
				</nav>
				<div className='md:hidden'>
					<ThemeToggle />
				</div>
			</header>

			{/* Hero Section */}
			<section className='px-6 py-20 text-center max-w-6xl mx-auto'>
				<h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
					Clay helps you
					<br />
					read with AI
				</h1>
				<p className='text-lg text-muted-foreground mb-8 max-w-md mx-auto'>
					Upload books, chat with AI about content, and track your reading progress. For free. Forever.
				</p>

				<form onSubmit={handleJoinBeta} className='flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-4'>
					<Input
						type='email'
						placeholder='Email address'
						className='rounded-full border-primary'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<Button className='rounded-full px-8' type='submit' disabled={status === 'loading'}>
						{status === 'loading' ? 'Joining...' : 'Join Beta'}
					</Button>
					{status === 'success' && <div className="text-green-600 text-sm mt-2">Thank you for joining!</div>}
					{status === 'duplicate' && <div className="text-yellow-600 text-sm mt-2">You already signed up.</div>}
					{status === 'error' && <div className="text-red-600 text-sm mt-2">Something went wrong. Try again.</div>}
				</form>
			</section>

			{/* App Preview Section */}
			<section className='px-6 py-20 max-w-6xl mx-auto'>
				<div className='relative flex justify-center items-center gap-8'>
					{/* Phone Mockup 1 */}
					<div className='relative'>
						<div className='w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl'>
							<div className='w-full h-full bg-white rounded-[2.5rem] overflow-hidden'>
								<div className='p-6 h-full flex flex-col'>
									<div className='flex items-center justify-between mb-6'>
										<div className='w-6 h-6 bg-gray-200 rounded-full' />
										<div className='text-sm font-medium'>My Library</div>
										<div className='w-6 h-6 bg-gray-200 rounded-full' />
									</div>

									<div className='space-y-4 flex-1'>
										<div className='bg-gray-50 rounded-2xl p-4'>
											<div className='w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-3' />
											<div className='text-sm font-medium'>The Great Gatsby</div>
											<div className='text-xs text-gray-500'>F. Scott Fitzgerald</div>
										</div>

										<div className='bg-gray-50 rounded-2xl p-4'>
											<div className='w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-3' />
											<div className='text-sm font-medium'>1984</div>
											<div className='text-xs text-gray-500'>George Orwell</div>
										</div>
									</div>

									<Button className='w-full rounded-full mt-4'>Upload Book</Button>
								</div>
							</div>
						</div>
					</div>

					{/* Phone Mockup 2 */}
					<div className='relative'>
						<div className='w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl'>
							<div className='w-full h-full bg-white rounded-[2.5rem] overflow-hidden'>
								<div className='p-6 h-full flex flex-col'>
									<div className='flex items-center justify-between mb-6'>
										<div className='w-6 h-6 bg-gray-200 rounded-full' />
										<div className='text-sm font-medium'>AI Chat</div>
										<div className='w-6 h-6 bg-gray-200 rounded-full' />
									</div>

									<div className='space-y-4 flex-1 overflow-hidden'>
										<div className='bg-gray-100 rounded-2xl p-3 max-w-[80%]'>
											<div className='text-sm'>What are the main themes in The Great Gatsby?</div>
										</div>

										<div className='bg-blue-500 text-white rounded-2xl p-3 max-w-[80%] ml-auto'>
											<div className='text-sm'>
												The main themes include the American Dream, social class, and the corruption of wealth...
											</div>
										</div>

										<div className='bg-gray-100 rounded-2xl p-3 max-w-[80%]'>
											<div className='text-sm'>Can you find quotes about this?</div>
										</div>
									</div>

									<div className='flex items-center gap-2 mt-4'>
										<Input placeholder='Ask about your book...' className='rounded-full text-sm' />
										<Button size='sm' className='rounded-full'>
											<Sparkles className='h-4 w-4' />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Text Section */}
			<section id='features' className='px-6 py-20 max-w-4xl mx-auto'>
				<div className='space-y-12 text-left'>
					<div>
						<h2 className='text-4xl font-bold mb-6'>
							We believe you shouldn't
							<br />
							have to read alone.
						</h2>
					</div>

					<div>
						<p className='text-2xl leading-relaxed'>
							With Clay, we'll help you understand books better, engage with content actively, and build lasting reading
							habits.
						</p>
					</div>

					<div>
						<p className='text-2xl leading-relaxed'>And we'll give you AI insights along the way.</p>
					</div>

					<div>
						<p className='text-2xl leading-relaxed'>
							Think of it like a reading companion, right there in your pocket.
						</p>
					</div>

					<div>
						<p className='text-2xl leading-relaxed font-medium'>For free. Forever.</p>
					</div>
				</div>
			</section>

			{/* Features Grid Section */}
			<section className='px-6 py-20 max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold'>
						Start reading smarter
						<br />
						with Clay
					</h2>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					<Card
						className='text-center p-8 border-0'
						style={{
							background:
								'linear-gradient(180deg, rgba(169, 202, 255, 1.000) 0.000%, rgba(184, 203, 255, 1.000) 16.667%, rgba(211, 203, 255, 1.000) 33.333%, rgba(240, 200, 249, 1.000) 50.000%, rgba(255, 197, 241, 1.000) 66.667%, rgba(255, 192, 236, 1.000) 83.333%, rgba(255, 186, 236, 1.000) 100.000%)',
						}}
					>
						<CardContent className='p-0'>
							<div className='flex items-center justify-center mx-auto mb-6'>
								<ExcerptBook className='size-20 text-foreground' />
							</div>
							<h3 className='text-xl font-semibold mb-4 playfair text-foreground'>Add your books</h3>
							<p className='text-foreground/80'>Add your books to your library and start reading with AI.</p>
						</CardContent>
					</Card>

					<Card
						className='text-center p-8 border-0'
						style={{
							background:
								'linear-gradient(180deg, rgba(202, 169, 255, 1.000) 0.000%, rgba(203, 184, 255, 1.000) 16.667%, rgba(203, 211, 255, 1.000) 33.333%, rgba(200, 240, 249, 1.000) 50.000%, rgba(197, 255, 241, 1.000) 66.667%, rgba(192, 255, 236, 1.000) 83.333%, rgba(186, 255, 236, 1.000) 100.000%)',
						}}
					>
						<CardContent className='p-0'>
							<div className='flex items-center justify-center mx-auto mb-6'>
								<ExcerptChat className='size-20 text-foreground' />
							</div>
							<h3 className='text-xl font-semibold mb-4 playfair text-foreground'>Chat with AI</h3>
							<p className='text-foreground/80'>
								Ask questions, get insights, and have meaningful conversations about your books.
							</p>
						</CardContent>
					</Card>

					<Card
						className='text-center p-8 border-0'
						style={{
							background:
								'linear-gradient(180deg, rgba(202, 255, 169, 1.000) 0.000%, rgba(203, 255, 184, 1.000) 16.667%, rgba(203, 255, 211, 1.000) 33.333%, rgba(200, 249, 240, 1.000) 50.000%, rgba(197, 241, 255, 1.000) 66.667%, rgba(192, 236, 255, 1.000) 83.333%, rgba(186, 236, 255, 1.000) 100.000%)',
						}}
					>
						<CardContent className='p-0'>
							<div className='flex items-center justify-center mx-auto mb-6'>
								<ExcerptNote className='size-20 text-foreground' />
							</div>
							<h3 className='text-xl font-semibold mb-4 playfair text-foreground'>Track progress</h3>
							<p className='text-foreground/80'>
								Monitor your reading journey and celebrate your achievements along the way.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Final CTA Section */}
			<section className='px-6 py-20 max-w-6xl mx-auto'>
				<div className='bg-black dark:bg-white text-white dark:text-black rounded-3xl p-12 text-center relative overflow-hidden'>
					<div className='relative z-10'>
						<h2 className='text-3xl font-bold mb-4 playfair'>Help build Clay</h2>
						<p className='text-lg opacity-80 mb-8'>
							Join our beta and help us create the future of AI-enhanced reading.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<div className='flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-4'>
								<Input type='email' placeholder='Email address' className='rounded-full' />
								<Button className='rounded-full px-8'>Join Beta</Button>
							</div>
						</div>
					</div>

					{/* Decorative elements */}
					<div className='absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl' />
					<div className='absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl' />
				</div>
			</section>

			{/* Footer */}
			<footer className='px-6 py-12 border-t'>
				<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
					<div className='flex items-center gap-2'>
						<ClayLogo className='h-6 w-6' />
						<span className='text-xl font-bold playfair'>Clay</span>
					</div>
					<div className='flex items-center gap-6'>
						{/* <ThemeToggle /> */}
						<div className='flex gap-2'>
							<a
								href="https://discord.gg/sHAeeBJP"
								className="text-muted-foreground hover:text-foreground"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Discord className="h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
