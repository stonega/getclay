import type { SVGProps } from 'react'

export function Mail(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props} aria-label='Mail'>
			<title>Mail</title>
			<path
				fill='currentColor'
				d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z'
			/>
		</svg>
	)
}
