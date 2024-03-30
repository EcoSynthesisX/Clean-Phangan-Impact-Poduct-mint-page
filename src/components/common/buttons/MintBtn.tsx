'use client'

import { Button } from '@/components/ui/button'
import { cn } from 'lib/utils'

const MintBtn = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => (
  <Button
    className={cn(
      'rounded-full border border-purple-500',
      'font-bold text-purple-500 lg:text-xl',
      'h-10 lg:mr-8 lg:h-14 lg:px-16',
      className,
    )}
    {...props}
    onClick={() => console.debug('handling mint test ....')}
  >
    {'Mint'}
  </Button>
)

export default MintBtn
