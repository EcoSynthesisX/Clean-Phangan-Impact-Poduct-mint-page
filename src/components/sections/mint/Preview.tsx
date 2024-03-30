'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { CardType, cardTypes } from './Card'
import { cn } from '@/lib/utils'

interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  type: CardType
  className?: string
}
const Preview: React.FC<PreviewProps> = ({ type, className }) => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const maxWidthClass = {
    legendary: 'lg:max-w-[360px]', // Custom class might be needed
    rare: 'lg:max-w-[280px]', // Custom class might be needed
    common: 'lg:max-w-[215px]', // Custom class might be needed
  }[type]

  return (
    <div className={cn('max-w-[120px]', maxWidthClass, className)}>
      <Image
        src={typeToImages[type][imageIndex]}
        alt='Preview'
        layout='responsive'
        width={360}
        height={360}
        className={'object-contain'}
      />
    </div>
  )
}

export default Preview

const typeToImages = Object.fromEntries(
  cardTypes.map((type) => [
    type,
    [0, 1, 2].map((i) => `/images/preview/${type}_${i}.png`),
  ]),
)
