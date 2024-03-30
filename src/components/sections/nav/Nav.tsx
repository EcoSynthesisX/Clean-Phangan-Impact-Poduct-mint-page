import Image from 'next/image'

import MintBtn from '@/components/common/buttons'

import { cn } from '@/lib/utils'

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  position: 'top' | 'bottom'
  className?: string
}

const Nav: React.FC<NavProps> = ({ position, className, ...props }) => (
  <div
    id={'navigation-section'}
    className={cn(className, 'flex h-16 lg:h-24')}
    {...props}
  >
    <div
      id='left-container-logo'
      className={cn(
        'flex w-[55%] items-center justify-center lg:justify-start',
        position === 'top'
          ? 'border-b border-r border-white/20 lg:border-r-0'
          : 'border-r border-t  border-white/20 lg:border-r-0',
      )}
    >
      {/* show desktop logo */}
      <Image
        src='images/logo-desktop.svg'
        alt='logo'
        className='ml-6 hidden lg:block'
        width={340}
        height={70}
      />
      {/* show mobile logo */}
      <Image
        src='images/logo-mobile.svg'
        alt='logo'
        className='block lg:hidden'
        width={164}
        height={35}
      />
    </div>
    <div
      id='right-container-cta'
      className={cn(
        'flex w-[45%] items-center justify-center lg:justify-end',
        position === 'top'
          ? 'border-b  border-white/20'
          : 'border-t border-white/20',
      )}
    >
      <div className='flex gap-2.5'>
        <Image
          className='h-8 w-8 lg:h-12 lg:w-12'
          src={'images/op-logo.svg'}
          alt='op-logo'
          width={200}
          height={200}
        />
        <MintBtn />
      </div>
    </div>
  </div>
)

export default Nav
