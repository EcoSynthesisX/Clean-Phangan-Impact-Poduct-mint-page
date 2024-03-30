'use client'

import React, { useEffect, useState, useRef } from 'react'

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  children: React.ReactNode
  className?: string
  overlayColor?: string
  minHeight?: string // Adding minHeight prop for flexibility
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageSrc,
  children,
  className,
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  minHeight = '81vh', // Default minimum height to 75vh for a balanced effect
}) => {
  const [offsetY, setOffsetY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (sectionRef.current) {
      const { top } = sectionRef.current.getBoundingClientRect()
      setOffsetY(top * 0.5)
    }
  }

  useEffect(() => {
    const optimizedHandleScroll = () =>
      window.requestAnimationFrame(handleScroll)

    window.addEventListener('scroll', optimizedHandleScroll)
    return () => window.removeEventListener('scroll', optimizedHandleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`relative overflow-hidden ${className || ''}`}
      style={{ minHeight }} // Using the minHeight prop
    >
      <div
        className='absolute inset-0 bg-fixed bg-no-repeat opacity-50'
        style={{
          backgroundImage: `url(${imageSrc})`,
          transform: `translateY(${offsetY}px)`,
        }}
      />
      <div
        className='absolute inset-0 flex items-center justify-center'
        style={{
          background: overlayColor,
          transform: `translateY(${offsetY}px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection
