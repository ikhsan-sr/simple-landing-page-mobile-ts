import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StyledFooter } from './styles';

const DATA = {
  address: "Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat",
  links: [
    {
      title: 'Who We Are',
      link: '#',
    },
    {
      title: 'Our Values',
      link: '#',
    },
    {
      title: 'The Perks',
      link: '#',
    },
  ],
  options: [
    {
      title: 'Technology department',
      value: '1',
    },
    {
      title: 'Finances department',
      value: '2',
    },
    {
      title: 'Education department',
      value: '3',
    },
  ]
}

interface OptionItem {
  title: string;
  value: string;
}

interface LinkItem {
  title: string;
  link: string;
}

const Footer = () => {
  const [age, setAge] = useState('1');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="bg1" />
        <div className="bg2" />
        <div className="content">
          <img src="/brand-white.png" alt="brand-footer" />
          <div className="card">
            <Select
              value={age}
              label="Age"
              onChange={handleChange}
              className="select-box"
            >
              {DATA.options.map((item: OptionItem) => (
                <MenuItem value={item.value}>{item.title}</MenuItem>
              ))}
            </Select>
            <address>{DATA.address}</address>
          </div>

          {DATA.links.map((item: LinkItem, index) => (
            <a href={item.link} key={index}>{item.title}</a>
          ))}
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer