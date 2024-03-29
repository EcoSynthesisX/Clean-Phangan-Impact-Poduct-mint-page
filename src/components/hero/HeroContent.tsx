import Image from 'next/image'

import { cn } from '@/lib/utils'
import MintBtn from '@/components/common/buttons'

import { title, subtitle, heading, description } from './text'

const HeroContent: React.FC = () => (
  <div
    id={'hero-section-content'}
    className={cn('flex flex-col items-center justify-center', 'mx-1')}
  >
    <p
      className={cn(
        'mt-8',
        'text-center font-[Pridi] text-4xl font-extrabold lg:text-8xl',
        'text-white',
      )}
    >
      {title}
    </p>
    <p
      className={cn(
        'text-center font-[Pridi] text-4xl font-extrabold  lg:text-7xl ',
        'text-purple-500 underline lg:text-lime-300',
      )}
    >
      {subtitle}
    </p>
    <p
      className={cn(
        'mt-8',
        'text-center text-base font-bold lg:text-3xl',
        'text-lime-300 lg:text-purple-500',
      )}
    >
      {heading}
    </p>
    <p
      className={cn(
        'mt-2',
        'text-center text-base lg:mx-24 lg:text-2xl',
        'text-white',
      )}
    >
      {description}
    </p>
    <MintBtn className={'mt-6 block lg:hidden'} />
    <Image
      src='/images/arrow.svg'
      alt='Arrow'
      className='mt-6 lg:hidden'
      width={27}
      height={56}
    />
  </div>
)

export default HeroContent
