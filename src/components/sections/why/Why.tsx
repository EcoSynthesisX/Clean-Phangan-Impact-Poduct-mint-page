import { ReactNode } from 'react'

import ParallaxSection from '@/components/parallax'
import MintBtn from '@/components/common/buttons'

import WhyContent from './WhyContent'

const content: ReactNode = (
  <div className={'mt-10 flex flex-col items-center gap-4'}>
    <WhyContent />
    <MintBtn className={'mt-2 w-32'} />
  </div>
)

const Why: React.FC = () => (
  <>
    {/* desktop */}
    <ParallaxSection
      className={'hidden md:block'}
      imageSrc={'/images/hero-bg-desktop.svg'}
      minHeight={'55vh'}
    >
      {content}
    </ParallaxSection>

    {/* mobile */}
    <ParallaxSection
      className={'block  lg:hidden'}
      imageSrc={'/images/hero-bg-mobile.svg'}
      minHeight={'55vh'}
    >
      {content}
    </ParallaxSection>
  </>
)

export default Why
