import ParallaxSection from '@/components/parallax'

import HeroContent from './HeroContent'

const Hero = () => (
  <>
    {/* desktop */}
    <ParallaxSection
      imageSrc={'/images/hero-bg-desktop.svg'}
      className={'hidden md:block md:h-[850px]'}
    >
      <HeroContent />
    </ParallaxSection>

    {/* mobile */}
    <ParallaxSection
      imageSrc={'/images/hero-bg-mobile.svg'}
      className={'block h-[75vh] md:hidden'}
    >
      <HeroContent />
    </ParallaxSection>
  </>
)
export default Hero
