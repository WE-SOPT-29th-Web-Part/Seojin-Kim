import React, { useState } from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import PostingPage from './postings';
import SeriesPage from './series';
import {
  GreenLine,
  LinkContainer,
  LinkWrapper,
  StyledContainer,
  StyledWrapper,
} from './style';

export default function HomePage() {
  const match = useRouteMatch();

  const [isPostSelected, setIsPostSelected] = useState(true);

  return (
    <StyledWrapper>
      <StyledContainer>
        <Header />
        <UserProfile />
        <LinkContainer>
          <LinkWrapper focused={isPostSelected}>
            <Link
              to={`${match.path}/postings`}
              onClick={() => {
                setIsPostSelected(true);
              }}
            >
              글
            </Link>
          </LinkWrapper>
          <LinkWrapper focused={!isPostSelected}>
            <Link
              to={`${match.path}/series`}
              onClick={() => {
                setIsPostSelected(false);
              }}
            >
              시리즈
            </Link>
          </LinkWrapper>
          <GreenLine isPostSelected={isPostSelected} />
        </LinkContainer>
        <Route path={`${match.path}/postings`} component={PostingPage} />
        <Route path={`${match.path}/series`} component={SeriesPage} />
        <Route path={`${match.path}/`}>
          <Redirect to={`${match.path}/postings`} />
        </Route>
      </StyledContainer>
    </StyledWrapper>
  );
}
