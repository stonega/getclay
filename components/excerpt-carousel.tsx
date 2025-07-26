'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote, X } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

// ===== Types and Interfaces =====
export interface iTestimonial {
	name: string
	designation: string
	description: string
	profileImage: string
}

interface iCarouselProps {
	items: React.ReactElement<{
		index: number
		layout?: boolean
		onCardClose: () => void
	}>[]
	initialScroll?: number
}

// ===== Custom Hooks =====
const useOutsideClick = (ref: React.RefObject<HTMLDivElement | null>, onOutsideClick: () => void) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return
			}
			onOutsideClick()
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [ref, onOutsideClick])
}

// ===== Components =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null)
	const [canScrollLeft, setCanScrollLeft] = React.useState(false)
	const [canScrollRight, setCanScrollRight] = React.useState(true)
	const [isHovering, setIsHovering] = useState(false)
	const animationFrameRef = useRef<number>(0)

	const checkScrollability = useCallback(() => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
			setCanScrollLeft(scrollLeft > 0)
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
		}
	}, [])

	useEffect(() => {
		const autoScroll = () => {
			if (!carouselRef.current || isHovering) {
				animationFrameRef.current = requestAnimationFrame(autoScroll)
				return
			}

			const carousel = carouselRef.current
			const { scrollLeft, scrollWidth } = carousel
			const halfScrollWidth = scrollWidth / 2

			if (scrollLeft >= halfScrollWidth) {
				carousel.scrollLeft = scrollLeft - halfScrollWidth
			} else {
				carousel.scrollLeft += 0.5
			}

			animationFrameRef.current = requestAnimationFrame(autoScroll)
		}

		animationFrameRef.current = requestAnimationFrame(autoScroll)

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current)
			}
		}
	}, [isHovering])

	const handleScrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
		}
	}

	const handleScrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
		}
	}

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384
			const gap = isMobile() ? 4 : 8
			const scrollPosition = (cardWidth + gap) * (index + 1)
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			})
		}
	}

	const isMobile = () => {
		return window && window.innerWidth < 768
	}

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll
			checkScrollability()
		}
	}, [initialScroll, checkScrollability])

	return (
		<div
			className='relative w-full mt-10'
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div
				className='flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5'
				ref={carouselRef}
				onScroll={checkScrollability}
			>
				<div className={cn('absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l')} />
				<div className={cn('flex flex-row justify-start gap-8 pl-3', 'max-w-5xl mx-auto')}>
					{[...items, ...items].map((item, index) => {
						return (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: 'easeOut',
									},
								}}
								key={`card-${index % items.length}`}
								className='rounded-3xl'
							>
								{React.cloneElement(item, {
									onCardClose: () => {
										return handleCardClose(index % items.length)
									},
								})}
							</motion.div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const ExcerptCard = ({
	index,
	layout = false,
	backgroundImage = 'https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}: {
	index: number
	layout?: boolean
	backgroundImage?: string
}) => {
	return (
		<>
			<motion.button
				layoutId={layout ? `card-${index}` : undefined}
				className=''
				initial={{
					rotateX: index % 2 === 0 ? 2 : -2,
					rotateY: index % 2 === 0 ? 2 : -2,
					rotate: index % 2 === 0 ? 3 : -3,
				}}
				whileHover={{
					rotateX: 0,
					rotateY: 0,
					rotate: 0,
					scale: 1.02,
					transition: { duration: 0.3, ease: 'easeOut' },
				}}
			>
				<div
					className={`${index % 2 === 0 ? 'rotate-0' : '-rotate-0'} rounded-3xl  h-[500px] md:h-[550px] aspect-[3/4] overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md`}
				>
					<div className='absolute' style={{ inset: '-1px 0 0' }}>
						<div className='absolute inset-0'>
							<Image
								className='block w-full h-full object-center object-cover'
								src={backgroundImage}
								alt='Background layer'
								layout='fill'
								objectFit='cover'
							/>
						</div>
					</div>
				</div>
			</motion.button>
		</>
	)
}

// Export the components
export { Carousel, ExcerptCard }
