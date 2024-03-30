import { cn } from '@/lib/utils'

import MintBtn from '@/components/common/buttons'
import Preview from './Preview'

const cards = {
  legendary: {
    color: 'purple-500',
    price: 0.5,
    impact: 5,
    sold: 35,
    supply: 50,
  },
  rare: {
    color: 'blue-500',
    price: 0.3,
    impact: 3,
    sold: 50,
    supply: 150,
  },
  common: {
    color: 'lime-500',
    price: 0.2,
    impact: 1,
    sold: 130,
    supply: 300,
  },
}

// Mapping color codes to Tailwind's text color classes
const textColorClasses = {
  'purple-500': 'text-purple-500',
  'blue-500': 'text-blue-500',
  'lime-500': 'text-lime-500',
}

// Mapping color codes to Tailwind's border color classes for the MintBtn
const borderColorClasses = {
  'purple-500': 'border-purple-500',
  'blue-500': 'border-blue-500',
  'lime-500': 'border-lime-500',
}

export type CardType = keyof typeof cards
export const cardTypes = Object.keys(cards) as Array<keyof typeof cards>

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: CardType
  className?: string
}

const Card: React.FC<CardProps> = ({ type, className }) => {
  const { color, price, impact, sold, supply } = cards[type]
  const textColorClass =
    textColorClasses[color as keyof typeof textColorClasses] || 'text-white'
  const borderColorClass =
    borderColorClasses[color as keyof typeof borderColorClasses] ||
    'border-white'
  return (
    <div className={cn('mx-2', className)} id={`card-${type}`}>
      <div id={`card-${type}-content`} className='flex'>
        <Preview type={type} />
        <div className='ml-5 flex w-full flex-col'>
          <p
            className={cn(
              textColorClass,
              'font-[Pridi] text-3xl font-bold underline',
            )}
          >
            {type}
          </p>
          <p className={cn('font-[Pridi] text-xl text-white')}>
            {'Impact value: '}
            <span className={textColorClass}>{impact}</span>
          </p>
          <p className={cn('font-[Pridi] text-xl text-white')}>
            {'ETH: '}
            <span className={textColorClass}>{price}</span>
            {' . '}
            {sold}/{supply}
          </p>
        </div>
      </div>
      <MintBtn className={cn(borderColorClass, 'mt-2 w-full')} />
    </div>
  )
}

export default Card
