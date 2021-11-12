import React from 'react';
import { RoundImage, UserBio, UserName, Wrapper } from './style';

export default function UserProfile() {
  return (
    <Wrapper>
      <RoundImage src='https://github.com/seojinseojin.png' alt='thumbnail' />
      <div>
        <UserName>김서진</UserName>
        <UserBio>뭐라도 더 하자!</UserBio>
      </div>
    </Wrapper>
  );
}
