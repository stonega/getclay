import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import type React from 'react'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
	title: 'Clay',
	description: 'Read with Clay',
	generator: 'Clay',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} ${playfair.variable}`}>
				<ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
