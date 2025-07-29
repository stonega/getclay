import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClayLogo } from '@/components/clay-logo'
import { Discord } from '@/components/icons/discord'
import { Mail } from '@/components/icons/mail'
import Link from 'next/link'

export default function SupportPage() {
	return (
		<div className='flex flex-col min-h-screen bg-background'>
			<header className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full'>
				<div className='flex items-center gap-2'>
					<Link href='/' className='flex items-center gap-2'>
						<ClayLogo className='h-8 w-8' />
						<span className='text-2xl font-bold'>Clay</span>
					</Link>
				</div>
			</header>
			<main className='flex-grow flex items-center justify-center p-6'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-center text-2xl'>Support</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<p className='text-center text-muted-foreground'>
							If you have any questions or need help, please reach out to us.
						</p>
						<div className='flex justify-center space-x-4'>
							<a
								href='https://discord.gg/rsXu3we6zs'
								className='flex items-center gap-2 text-muted-foreground hover:text-foreground'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Discord className='h-6 w-6' />
								<span>Discord</span>
							</a>
							<a
								href='mailto:stone@clayread.com'
								className='flex items-center gap-2 text-muted-foreground hover:text-foreground'
							>
								<Mail className='h-6 w-6' />
								<span>Email</span>
							</a>
						</div>
					</CardContent>
				</Card>
			</main>
			<footer className='px-6 py-12 border-t'>
				<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
					<div className='flex items-center gap-2'>
						<ClayLogo className='h-6 w-6' />
						<span className='text-xl font-bold'>Clay</span>
					</div>
					<div className='text-sm text-muted-foreground'>© {new Date().getFullYear()} Clay</div>
				</div>
			</footer>
		</div>
	)
}
