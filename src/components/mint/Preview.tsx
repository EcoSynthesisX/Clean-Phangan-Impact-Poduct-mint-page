'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const types = ['common', 'rare', 'legendary'] as const
export type Type = (typeof types)[number]

interface PreviewProps extends React.HTMLAttributes<HTMLImageElement> {
  type: Type
}

const prefix = (name: string) => `/images/preview/${name}`

const typeToImages = {
  ['common']: [prefix('c0.jpg'), prefix('c1.jpg'), prefix('c2.jpg')],
  ['rare']: [prefix('r0.jpg'), prefix('r1.jpg'), prefix('r2.jpg')],
  ['legendary']: [prefix('l0.jpg'), prefix('l1.jpg'), prefix('l2.jpg')],
}

const mobilePreviewSize = 120
const typesToDesktopSizes = {
  ['common']: { width: 215, height: 215 },
  ['rare']: { width: 280, height: 280 },
  ['legendary']: { width: 360, height: 360 },
}

const Preview: React.FC<PreviewProps> = ({ type }) => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Image
        className={'block lg:hidden'}
        src={typeToImages[type][imageIndex]}
        alt='Preview'
        width={mobilePreviewSize}
        height={mobilePreviewSize}
      />

      <Image
        className={'hidden lg:block'}
        src={typeToImages[type][imageIndex]}
        alt='Preview'
        width={typesToDesktopSizes[type].width}
        height={typesToDesktopSizes[type].height}
      />
    </>
  )
}

export default Preview
