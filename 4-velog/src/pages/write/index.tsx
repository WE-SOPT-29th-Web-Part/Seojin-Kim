import React from 'react';
import { Link } from 'react-router-dom';

export default function WritePage() {
  return (
    <div>
      <div>write</div>
      <Link to='/preview'>글쓰기</Link>
    </div>
  );
}
