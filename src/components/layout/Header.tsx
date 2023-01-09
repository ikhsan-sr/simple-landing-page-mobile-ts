import { IconButton } from '@mui/material';

import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <div className="brand">
        <img src="/brand.png" alt="brand" />
      </div>
      <div className="menu">
        <IconButton>
          <img src="/icons/menu.png" alt="menu" height="22" />
        </IconButton>
      </div>
    </StyledHeader>
  )
}

export default Header