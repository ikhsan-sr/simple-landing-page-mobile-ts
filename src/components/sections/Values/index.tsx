import { StyledValues } from './styles';
import { DATA_VALUES } from './consts';

const Values = () => {
  return (
    <StyledValues>
      <h1>Our Core Values</h1>
      <p>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.</p>
      <p>In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
      <ul>
        {DATA_VALUES.map(({title, desc}, key) => (
          <li>
            <h5><span/>{title}</h5>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
      <img src="/images/values.png" alt="values" />
    </StyledValues>
  )
}

export default Values