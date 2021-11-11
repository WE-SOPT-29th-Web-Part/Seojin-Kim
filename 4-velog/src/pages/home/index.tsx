import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import PostingPage from './postings';
import SeriesPage from './series';

export default function HomePage() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <div>home</div>
      <Route path={`${match.path}/postings`} component={PostingPage} />
      <Route path={`${match.path}/series`} component={SeriesPage} />
    </div>
  );
}
