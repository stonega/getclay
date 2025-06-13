import type React from 'react'

interface ClayLogoProps {
	width?: number
	height?: number
	className?: string
}

export const ClayLogo: React.FC<ClayLogoProps> = ({ width, height, className }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 380 286'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			aria-label='Clay'
			role='img'
		>
			<path
				d='M271 91C271 135.735 234.735 172 190 172C145.265 172 109 135.735 109 91C109 46.2649 145.265 10 190 10C234.735 10 271 46.2649 271 91Z'
				stroke='currentColor'
				strokeWidth='36'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M190.001 191.992C212.44 211.079 247.647 223.375 287.235 223.375C319.128 223.375 348.178 215.393 370 202.31C336.982 245.573 268.781 275.276 190.001 275.276C111.22 275.276 43.0176 245.573 10 202.31C31.8219 215.393 60.8725 223.375 92.7667 223.375C132.354 223.375 167.561 211.079 190.001 191.992Z'
				stroke='currentColor'
				strokeWidth='36'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default ClayLogo
