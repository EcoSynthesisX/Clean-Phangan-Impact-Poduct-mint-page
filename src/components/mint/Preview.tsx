'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { CardType, cardTypes } from './Card'
import { cn } from '@/lib/utils'

interface PreviewProps extends React.HTMLAttributes<HTMLImageElement> {
  type: CardType
  className?: string
}

const genPaths = (name: string) =>
  [0, 1, 2].map((i) => `/images/preview/${name}_${i}.png`)

const typeToImages = Object.fromEntries(
  cardTypes.map((type) => [
    type,
    [0, 1, 2].map((i) => `/images/preview/${type}_${i}.png`),
  ]),
)

const mobilePreviewSize = 120
const typesToDesktopSizes = {
  ['common']: { width: 215, height: 215 },
  ['rare']: { width: 280, height: 280 },
  ['legendary']: { width: 360, height: 360 },
}

const Preview: React.FC<PreviewProps> = ({ type, className }) => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 750)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Image
        className={cn('block lg:hidden', className)}
        src={typeToImages[type][imageIndex]}
        alt='Preview'
        width={mobilePreviewSize}
        height={mobilePreviewSize}
      />

      <Image
        className={cn('hidden lg:block', className)}
        src={typeToImages[type][imageIndex]}
        alt='Preview'
        width={typesToDesktopSizes[type].width}
        height={typesToDesktopSizes[type].height}
      />
    </>
  )
}

export default Preview
