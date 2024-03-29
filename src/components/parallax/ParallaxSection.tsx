'use client'

import React, { useEffect, useState, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  imageSrc: string
  children?: ReactNode
  className?: string
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageSrc,
  children,
  className,
}) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn('relative h-screen w-full overflow-hidden', className)}>
      <div
        className='absolute inset-0 ml-6 bg-fixed bg-no-repeat opacity-20'
        style={{
          backgroundImage: `url(${imageSrc})`,
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      ></div>
      <div
        className='absolute inset-0'
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        {/* The children prop is used here to render passed content */}
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection
