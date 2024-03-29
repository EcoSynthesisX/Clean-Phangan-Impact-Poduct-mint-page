import { cn } from '@/lib/utils'

import Card from './Card'
import { title, subtitle } from './text'

const MintContent = () => (
  <div id='mint-section'>
    <Heading />
    <Cards />
  </div>
)

export default MintContent

const Heading = () => (
  <div
    className={cn('flex flex-col bg-zinc-900 py-2')}
    id={'mint-section-heading'}
  >
    <p
      className={cn(
        'text text-center font-[Pridi]',
        'text-xl font-bold text-white underline lg:text-5xl',
      )}
    >
      {title}
    </p>
    <p
      className={cn(
        'text text-center font-[Pridi]',
        'text-xl font-bold text-white underline lg:text-5xl',
      )}
    >
      {subtitle}
    </p>
  </div>
)

const Cards = () => (
  <div id={'mint-section-cards'} className={'space-y-4 lg:flex'}>
    {(['common', 'rare', 'legendary'] as const).map((type) => (
      <Card key={type} type={type} />
    ))}
  </div>
)
