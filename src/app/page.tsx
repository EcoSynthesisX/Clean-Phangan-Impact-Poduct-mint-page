import Hero from '@/components/hero'
import Mint from '@/components/mint'
import Nav from '@/components/nav'
import ParallaxSection from '@/components/parallax'

const Home = () => {
  return (
    <>
      <Nav position={'top'} />
      <Hero />
      <Mint />
      <Nav position={'bottom'} />
    </>
  )
}

export default Home
