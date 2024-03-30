import Hero from '@/components/sections/hero'
import Mint from '@/components/sections/mint'
import Nav from '@/components/sections/nav'
import Why from '@/components/sections/why'
import Impact from '@/components/sections/impact'
import Allocation from '@/components/sections/alloc'

const Home = () => {
  return (
    <>
      <Nav position={'top'} />
      <Hero />
      <Mint />
      <Why />
      <Impact />
      <Allocation />
      <Nav position={'bottom'} />
    </>
  )
}
export default Home
