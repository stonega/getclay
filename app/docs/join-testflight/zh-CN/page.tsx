import { ClayLogo } from '@/components/clay-logo'
import { Discord } from '@/components/icons/discord'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

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
						通过 TestFlight
						<br />
						加入 Clay Beta
					</h1>
					<p className='text-lg text-muted-foreground mb-8 max-w-md mx-auto'>请按照以下步骤开始使用 Clay iOS 应用。</p>
				</div>

				<div className='space-y-8'>
					<Card className='min-h-[200px] bg-white/80 border-none rounded-xl'>
						<CardHeader>
							<CardTitle className='flex items-center gap-4'>
								<div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg'>
									1
								</div>
								<span>安装 TestFlight</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-row gap-6 items-center'>
							<Image src='/app-store.svg' alt='App Store 应用商店' width={86} height={86} className='m-[7px]' />
							<div className='flex flex-col items-start gap-4'>
								<p className='text-muted-foreground mb-2'>
									TestFlight 是 Apple 官方的预发布软件测试应用。您需要从 App Store 安装它才能访问 Clay
									Beta。如果您已经安装，可以跳过此步骤。
								</p>
								<Button asChild>
									<a
										href='https://apps.apple.com/us/app/testflight/id899247664'
										target='_blank'
										rel='noopener noreferrer'
									>
										获取 TestFlight
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
								<span>打开邀请链接</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-row gap-6 items-center'>
							<Image src='/safari.svg' alt='Safari 浏览器' width={100} height={100} />
							<div className='flex flex-col items-start gap-4'>
								<p className='text-muted-foreground mb-2'>
									安装 TestFlight 后，请在您的 iPhone 上点击下方的链接。这将在TestFlight应用中直接打开Clay
									Beta的邀请。您可能会看到一个要求您接受邀请的界面。
								</p>
								<Button asChild>
									<a href='https://testflight.apple.com/join/eKkPg71Q' target='_blank' rel='noopener noreferrer'>
										打开邀请
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
								<span>安装 Clay</span>
							</CardTitle>
						</CardHeader>
						<CardContent className='flex flex-row gap-6 items-center'>
							<Image src='/testflight.webp' alt='TestFlight 应用' width={100} height={100} />
							<div className='flex flex-col items-start'>
								<p className='text-muted-foreground'>
									在 TestFlight 中，点击"接受"，然后点击"安装"以下载 Clay Beta 应用。安装后，您就可以在主屏幕上找到 Clay
									应用了。每当有新版本可供测试时，TestFlight 都会向您发送通知。
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
