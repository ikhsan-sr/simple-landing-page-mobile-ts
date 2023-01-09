import Layout from '../components/layout';
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import Services from '../components/sections/Services';
import Values from '../components/sections/Values';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <Values />
      <Services />
    </Layout>
  )
}

export default Homepage