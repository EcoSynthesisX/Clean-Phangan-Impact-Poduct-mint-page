'use client'

import React, { useEffect, useState, useRef } from 'react'

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  children: React.ReactNode
  className?: string
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageSrc,
  children,
  className,
}) => {
  const [offsetY, setOffsetY] = useState(0)
  const sectionRef = useRef(null) // Ref for the component's container

  const handleScroll = () => {
    if (sectionRef.current) {
      const { top } = sectionRef.current.getBoundingClientRect()
      // Adjust the offset based on the component's position and the scroll position
      setOffsetY(top * 0.5)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`relative h-screen w-full overflow-hidden ${className || ''}`}
    >
      <div
        className='absolute inset-0 bg-fixed bg-no-repeat opacity-20'
        style={{
          backgroundImage: `url(${imageSrc})`,
          transform: `translateY(${offsetY}px)`, // Use offsetY for the transform
        }}
      ></div>
      <div
        className='absolute inset-0'
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          transform: `translateY(${offsetY}px)`, // Use offsetY for the transform
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ParallaxSection
