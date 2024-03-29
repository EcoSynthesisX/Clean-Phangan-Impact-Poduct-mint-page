import { cn } from '@/lib/utils'

import MintBtn from '@/components/common/buttons'

import Preview, { Type } from './Preview'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: Type
  className?: string
}

const Card: React.FC<CardProps> = ({ type, className }) => (
  <div className={cn(className)} id={`card-${type}`}>
    <div id={`card-${type}-content`}>
      <Preview type={type} />
      <p className={'text-white'}>{type}</p>
    </div>

    <MintBtn className={'w-full'} />
  </div>
)

export default Card
