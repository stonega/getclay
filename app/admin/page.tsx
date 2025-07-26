'use client'

import { PasswordAuth } from '@/components/password-auth'
import { useEffect, useState } from 'react'

type BetaSignup = {
	id: number
	email: string
	created_at: string
}

export default function AdminPage() {
	const [betaSignups, setBetaSignups] = useState<BetaSignup[]>([])
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (isAuthenticated) {
			const fetchBetaSignups = async () => {
				const response = await fetch('/api/beta-signups')
				const data = await response.json()
				setBetaSignups(data)
			}

			fetchBetaSignups()
		}
	}, [isAuthenticated])

	if (!isClient) {
		return null
	}

	if (!isAuthenticated) {
		return <PasswordAuth onSuccess={() => setIsAuthenticated(true)} />
	}

	return (
		<div className='container mx-auto py-10'>
			<h1 className='text-3xl font-bold mb-5'>Beta Signups</h1>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								ID
							</th>
							<th scope='col' className='px-6 py-3'>
								Email
							</th>
							<th scope='col' className='px-6 py-3'>
								Signed Up At
							</th>
						</tr>
					</thead>
					<tbody>
						{betaSignups.map((signup) => (
							<tr key={signup.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
									{signup.id}
								</th>
								<td className='px-6 py-4'>{signup.email}</td>
								<td className='px-6 py-4'>{signup.created_at}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
