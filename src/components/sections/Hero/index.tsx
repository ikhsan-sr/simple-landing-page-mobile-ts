import { StyledHero } from './styles';

const Hero = () => {
  return (
    <StyledHero>
      <img src="/images/hero-bg.png" alt="Hero" />
      <div className="bg1" />
      <div className="bg2" />
      <div className="content">
        <h1>Discover <br />Your Wonder</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam.</p>
      </div>
    </StyledHero>
  )
}

export default Hero