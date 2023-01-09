import Layout from '../components/layout';
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import Specialization from '../components/sections/Specialization';
import Values from '../components/sections/Values';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <Values />
      <Specialization />
    </Layout>
  )
}

export default Homepage