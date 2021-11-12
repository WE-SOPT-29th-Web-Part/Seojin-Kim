import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import PostingPage from './postings';
import SeriesPage from './series';
import { StyledContainer, StyledWrapper } from './style';

export default function HomePage() {
  const match = useRouteMatch();
  return (
    <StyledWrapper>
      <StyledContainer>
        <Header />
        <UserProfile />
        <Link to={`${match.path}/postings`}>포스팅</Link>
        <Link to={`${match.path}/series`}>시리즈</Link>
        <Route path={`${match.path}/postings`} component={PostingPage} />
        <Route path={`${match.path}/series`} component={SeriesPage} />
      </StyledContainer>
    </StyledWrapper>
  );
}
