import type { D1Database } from '@cloudflare/workers-types'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	const { email } = await request.json()

	if (!email || typeof email !== 'string') {
		return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
	}

	// @ts-ignore - D1 binding is available in Cloudflare Workers
	const db = getCloudflareContext().env.DB as D1Database

	try {
		// Insert the email into the beta_signups table
		await db.prepare('INSERT INTO beta_signups (email) VALUES (?)').bind(email).run()

		return NextResponse.json({ success: true })
	} catch (err: any) {
		if (err.message?.includes('UNIQUE')) {
			return NextResponse.json({ error: 'Email already signed up' }, { status: 409 })
		}
		return NextResponse.json({ error: 'Server error' }, { status: 500 })
	}
}
