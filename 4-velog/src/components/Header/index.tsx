import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to='/write'>글쓰기</Link>
    </div>
  );
}
