import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Wrapper } from './style';

export default function Header() {
  return (
    <Wrapper>
      <Button>
        <Link to='/write'>새 글 작성</Link>
      </Button>
    </Wrapper>
  );
}
