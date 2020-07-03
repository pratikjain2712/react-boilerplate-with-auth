/* eslint-disable prettier/prettier */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { WorkCards } from './components';

export function HomePage() {
  return (
    <article style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <WorkCards />
      </div>
    </article>
  );
}

export default HomePage;
