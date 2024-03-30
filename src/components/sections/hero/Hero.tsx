import ParallaxSection from '@/components/parallax'

import HeroContent from './HeroContent'

const Hero = () => (
  <>
    {/* desktop */}
    <ParallaxSection
      imageSrc={'/images/hero-bg-desktop.svg'}
      className={'hidden lg:block'}
    >
      <HeroContent />
    </ParallaxSection>

    {/* mobile */}
    <ParallaxSection
      imageSrc={'/images/hero-bg-mobile.svg'}
      className={'block lg:hidden'}
    >
      <HeroContent />
    </ParallaxSection>
  </>
)
export default Hero
