/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'utils/loadable';
import { LandingPage } from '../skeleton';

export default loadable(() => import('./index'), {
  fallback: <LandingPage />,
});
