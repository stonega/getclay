import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClayLogo } from '@/components/clay-logo'
import { Discord } from '@/components/icons/discord'

export default function JoinTestflightPage() {
	return (
		<div className='min-h-screen bg-background overflow-x-hidden'>
			<header className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
				<Link href='/' className='flex items-center gap-2'>
					<ClayLogo className='h-8 w-8' />
					<span className='text-2xl font-bold'>Clay</span>
					<span className='text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full'>Beta</span>
				</Link>
			</header>

			<main className='px-6 py-20 max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
						Join the Clay Beta
						<br />
						on TestFlight
					</h1>
					<p className='text-lg text-muted-foreground mb-8 max-w-md mx-auto'>
						Follow these steps to get started with the Clay iOS app.
					</p>
				</div>

				<div className='space-y-8'>
					<Card className='min-h-[200px] bg-white/80 border-none rounded-xl'>
						<CardHeader>
							<CardTitle className='flex items-center gap-4'>
								<div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg'>
									1
								</div>
								<span>Install TestFlight</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-row gap-6 items-center'>
							<Image src='/app-store.svg' alt='App Store' width={86} height={86} className='m-[7px]' />
							<div className='flex flex-col items-start gap-4'>
								<p className='text-muted-foreground mb-2'>
									TestFlight is Apple's official app for testing pre-release software. You'll need to install it from
									the App Store to get access to the Clay beta. If you already have it, you can skip this step.
								</p>
								<Button asChild>
									<a
										href='https://apps.apple.com/us/app/testflight/id899247664'
										target='_blank'
										rel='noopener noreferrer'
									>
										Get TestFlight
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className='min-h-[200px] bg-white/80 border-none rounded-xl'>
						<CardHeader>
							<CardTitle className='flex items-center gap-4'>
								<div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg'>
									2
								</div>
								<span>Open Invitation Link</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-row gap-6 items-center'>
							<Image src='/safari.svg' alt='Safari' width={100} height={100} />
							<div className='flex flex-col items-start gap-4'>
								<p className='text-muted-foreground mb-2'>
									Once TestFlight is installed, tap the link below on your iPhone. This will open the Clay beta
									invitation directly in the TestFlight app. You may see a screen asking you to accept the
									invitation.
								</p>
								<Button asChild>
									<a
										href='https://testflight.apple.com/join/eKkPg71Q'
										target='_blank'
										rel='noopener noreferrer'
									>
										Open Invitation
									</a>
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className='min-h-[200px] bg-white/80 border-none rounded-xl'>
						<CardHeader>
							<CardTitle className='flex items-center gap-4'>
								<div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg'>
									3
								</div>
								<span>Install Clay</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-row gap-6 items-center'>
							<Image src='/testflight.webp' alt='TestFlight' width={100} height={100} />
							<div className='flex flex-col items-start'>
								<p className='text-muted-foreground'>
									In TestFlight, tap "Accept" and then "Install" to download the Clay beta app. Once installed,
									you can find the Clay app on your Home Screen. TestFlight will send you a notification whenever
									a new update is available to test.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>

			<footer className='px-6 py-12 border-t'>
				<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
					<div className='flex items-center gap-2'>
						<ClayLogo className='h-6 w-6' />
						<span className='text-xl font-bold'>Clay</span>
					</div>
					<div className='flex items-center gap-6'>
						<div className='flex gap-2'>
							<a
								href='https://discord.gg/rsXu3we6zs'
								className='text-muted-foreground hover:text-foreground'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Discord className='h-5 w-5' />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
