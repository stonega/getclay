'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type JoinBetaFormProps = {
	variant: 'hero' | 'cta'
}

export function JoinBetaForm({ variant }: JoinBetaFormProps) {
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

	if (variant === 'hero') {
		return (
			<>
				<form onSubmit={handleJoinBeta} className='flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-4'>
					<div className='flex items-center gap-3'>
						<Input
							type='email'
							placeholder='Email address'
							className='rounded-full border-primary'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<Button className='rounded-full px-8 h-10' type='submit' disabled={status === 'loading'}>
							<AnimatePresence mode='wait' initial={false}>
								<motion.span
									key={status}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className='block'
								>
									{status === 'success' ? 'Joined' : status === 'loading' ? 'Joining...' : 'Join Beta'}
								</motion.span>
							</AnimatePresence>
						</Button>
					</div>
				</form>
				<div className='h-6'>
					<AnimatePresence mode='wait' initial={false}>
						{status === 'success' && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className='text-green-600 text-sm'
							>
								Thank you for joining!
							</motion.div>
						)}
						{status === 'duplicate' && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className='text-yellow-600 text-sm'
							>
								You already signed up.
							</motion.div>
						)}
						{status === 'error' && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className='text-red-600 text-sm'
							>
								Something went wrong. Try again.
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</>
		)
	}

	if (variant === 'cta') {
		return (
			<>
				<form
					onSubmit={handleJoinBeta}
					className='flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-4 justify-center'
				>
					<Input
						type='email'
						placeholder='Email address'
						className='rounded-full text-black'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<Button className='rounded-full px-8 h-10' type='submit' disabled={status === 'loading'} variant='secondary'>
						<AnimatePresence mode='wait' initial={false}>
							<motion.span
								key={status}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className='block'
							>
								{status === 'loading' ? 'Joining...' : 'Join Beta'}
							</motion.span>
						</AnimatePresence>
					</Button>
				</form>
				<div className='h-6'>
					{status === 'success' && (
						<div className='text-green-600 dark:text-green-500 text-sm'>Thank you for joining!</div>
					)}
					{status === 'duplicate' && (
						<div className='text-yellow-600 dark:text-yellow-500 text-sm'>You already signed up.</div>
					)}
					{status === 'error' && (
						<div className='text-red-600 dark:text-red-500 text-sm'>Something went wrong. Try again.</div>
					)}
				</div>
			</>
		)
	}

	return null
}
