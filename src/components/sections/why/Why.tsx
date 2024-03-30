import ParallaxSection from '@/components/parallax/ParallaxSection'
import MintBtn from '@/components/common/buttons'

import WhyContent from './WhyContent'
import { ReactNode } from 'react'

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
    >
      {content}
    </ParallaxSection>

    {/* mobile */}
    <ParallaxSection
      className={'block  lg:hidden'}
      imageSrc={'/images/hero-bg-mobile.svg'}
    >
      {content}
    </ParallaxSection>
  </>
)

export default Why
