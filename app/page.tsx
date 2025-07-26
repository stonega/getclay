'use client'

import { ClayLogo } from '@/components/clay-logo'
import { Carousel, ExcerptCard } from '@/components/excerpt-carousel'
import { Discord } from '@/components/icons/discord'
import ExcerptBook from '@/components/icons/excerpt-book'
import ExcerptChat from '@/components/icons/excerpt-chat'
import ExcerptNote from '@/components/icons/excerpt-note'
import ExcerptSync from '@/components/icons/excerpt-sync'
import { Mail } from '@/components/icons/mail'
import { JoinBetaForm } from '@/components/join-beta-form'
// import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Page() {
	return (
		<div className='min-h-screen bg-background overflow-x-hidden'>
			{/* Header */}
			<header className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
				<div className='flex items-center gap-2'>
					<ClayLogo className='h-8 w-8' />
					<span className='text-2xl font-bold'>Clay</span>
					<span className='text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full'>Beta</span>
				</div>
				<nav className='hidden md:flex items-center gap-8'>
					<a href='#features' className='text-sm text-muted-foreground hover:text-foreground'>
						Features
					</a>
					{/* <a href='#about' className='text-sm text-muted-foreground hover:text-foreground'>
						About
					</a> */}
					<Button
						size='sm'
						className='rounded-lg h-9'
						onClick={() => {
							const input = document.querySelector('input[type="email"]') as HTMLInputElement
							if (input) {
								input.focus()
								input.select()
							}
						}}
					>
						Join Beta
					</Button>
				</nav>
				{/* <div className='md:hidden'>
					<ThemeToggle />
				</div> */}
			</header>

			{/* Hero Section */}
			<section className='px-6 py-20 text-center max-w-6xl mx-auto'>
				<h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
					The Dedicated App
					<br />
					for Physical Book Readers
				</h1>
				<p className='text-lg text-muted-foreground mb-8 max-w-md mx-auto'>
					Clay helps you transform your reading habits into a seamless and enjoyable experience.
				</p>

				<JoinBetaForm variant='hero' />
			</section>

			{/* App Preview Section */}
			<section className='px-6 py-20 max-w-6xl mx-auto flex justify-center'>
				<Image src='/mockup.png' alt='Clay App Preview' height={852} width={817} className='h-auto max-w-full' />
			</section>

			{/* Features Text Section */}
			{/* <section id='features' className='px-6 py-20 max-w-4xl mx-auto'>
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
			</section> */}

			{/* Features Grid Section */}
			<section id='features' className='px-6 py-20 max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold'>
						Enjoy reading
						<br />
						with Clay
					</h2>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Card
							className='p-8 border-0 rounded-3xl relative overflow-hidden min-h-[260px] flex items-center justify-center'
							style={{
								background:
									'linear-gradient(180deg, rgba(169, 202, 255, 1.000) 0.000%, rgba(184, 203, 255, 1.000) 16.667%, rgba(211, 203, 255, 1.000) 33.333%, rgba(240, 200, 249, 1.000) 50.000%, rgba(255, 197, 241, 1.000) 66.667%, rgba(255, 192, 236, 1.000) 83.333%, rgba(255, 186, 236, 1.000) 100.000%)',
							}}
						>
							<CardContent className='p-0 relative z-10 flex flex-col justify-center h-full'>
								<h3 className='text-2xl font-semibold mb-4 playfair text-foreground text-start'>
									Effortless Book Entry
								</h3>
								<p className='text-lg text-foreground/80 text-start'>
									Customize book cover images to personalize your digital bookshelf.
								</p>
							</CardContent>
							<ExcerptBook className='absolute right-0 -top-8 size-48 opacity-70' />
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<Card
							className='p-8 border-0 rounded-3xl relative overflow-hidden min-h-[260px] flex items-center justify-center'
							style={{
								background:
									'linear-gradient(180deg, rgba(202, 255, 169, 1.000) 0.000%, rgba(203, 255, 184, 1.000) 16.667%, rgba(203, 255, 211, 1.000) 33.333%, rgba(200, 249, 240, 1.000) 50.000%, rgba(197, 241, 255, 1.000) 66.667%, rgba(192, 236, 255, 1.000) 83.333%, rgba(186, 236, 255, 1.000) 100.000%)',
							}}
						>
							<CardContent className='p-0 relative z-10 flex flex-col justify-center h-full'>
								<h3 className='text-2xl font-semibold mb-4 playfair text-foreground text-start'>
									Add notes and annotations
								</h3>
								<p className='text-lg text-foreground/80 text-start'>
									Record your thoughts, favorite quotes, questions, or anything you want to remember.
								</p>
							</CardContent>
							<ExcerptNote className='absolute right-0 -top-8 size-[11rem] opacity-70' />
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Card
							className='p-8 border-0 rounded-3xl relative overflow-hidden min-h-[260px] flex items-center justify-center'
							style={{
								background:
									'linear-gradient(180deg, rgba(202, 169, 255, 1.000) 0.000%, rgba(203, 184, 255, 1.000) 16.667%, rgba(203, 211, 255, 1.000) 33.333%, rgba(200, 240, 249, 1.000) 50.000%, rgba(197, 255, 241, 1.000) 66.667%, rgba(192, 255, 236, 1.000) 83.333%, rgba(186, 255, 236, 1.000) 100.000%)',
							}}
						>
							<CardContent className='p-0 relative z-10 flex flex-col justify-center h-full'>
								<h3 className='text-2xl font-semibold mb-4 playfair text-foreground text-start'>Chat with AI</h3>
								<p className='text-lg text-foreground/80 text-start'>
									Ask questions, get insights, and have meaningful conversations about your books.
								</p>
							</CardContent>
							<ExcerptChat className='absolute right-0 -top-0 size-36 opacity-70' />
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<Card
							className='p-8 border-0 rounded-3xl relative overflow-hidden min-h-[260px] flex items-center justify-center'
							style={{
								background:
									'linear-gradient(180deg, rgba(255, 219, 184, 1.000) 0.000%, rgba(255, 211, 184, 1.000) 16.667%, rgba(255, 203, 196, 1.000) 33.333%, rgba(249, 200, 220, 1.000) 50.000%, rgba(241, 197, 255, 1.000) 66.667%, rgba(236, 192, 255, 1.000) 83.333%, rgba(236, 186, 255, 1.000) 100.000%)',
							}}
						>
							<CardContent className='p-0 relative z-10 flex flex-col justify-center h-full'>
								<h3 className='text-2xl font-semibold mb-4 playfair text-foreground text-start'>
									Sync Between Devices
								</h3>
								<p className='text-lg text-foreground/80 text-start'>
									Keep your reading progress and notes synced across all your devices.
								</p>
							</CardContent>
							<ExcerptSync className='absolute right-0 -top-0 size-36 opacity-80' />
						</Card>
					</motion.div>
				</div>
			</section>
			<section className='px-6 py-20 max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold'>
						Beautiful cards created
						<br />
						with Clay
					</h2>
				</div>
				<Carousel
					items={[
						<ExcerptCard key='excerpt-1' index={0} backgroundImage='/excerpt-1.png' />,
						<ExcerptCard key='excerpt-2' index={1} backgroundImage='/excerpt-2.png' />,
						<ExcerptCard key='excerpt-3' index={2} backgroundImage='/excerpt-3.png' />,
						<ExcerptCard key='excerpt-4' index={3} backgroundImage='/excerpt-4.png' />,
						<ExcerptCard key='excerpt-5' index={4} backgroundImage='/excerpt-5.png' />,
						<ExcerptCard key='excerpt-6' index={5} backgroundImage='/excerpt-6.png' />,
					]}
				/>
			</section>

			{/* Final CTA Section */}
			<section className='px-6 py-20 max-w-6xl mx-auto'>
				<div className='bg-black dark:bg-white text-white dark:text-black rounded-3xl p-12 text-center relative overflow-hidden'>
					<div className='relative z-10'>
						<h2 className='text-3xl font-bold mb-4 playfair'>Help build Clay</h2>
						<p className='text-lg opacity-80 mb-8'>
							Join our beta and help us create the future of AI-enhanced reading.
						</p>
						<JoinBetaForm variant='cta' />
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
						<span className='text-xl font-bold'>Clay</span>
					</div>
					<div className='flex items-center gap-6'>
						{/* <ThemeToggle /> */}
						<div className='flex gap-4'>
							<a
								href='https://discord.gg/rsXu3we6zs'
								className='text-muted-foreground hover:text-foreground'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Discord className='h-5 w-5' />
							</a>
							<a href='mailto:stone@clayread.com' className='text-muted-foreground hover:text-foreground'>
								<Mail className='h-5 w-5' />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
