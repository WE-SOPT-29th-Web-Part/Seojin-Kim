import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Wrapper } from './style';

export default function Header() {
  return (
    <Wrapper>
      <Button>
        <Link to='/write'>μ κΈ μμ±</Link>
      </Button>
    </Wrapper>
  );
}
