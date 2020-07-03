/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

export default function FeaturePage() {
  return (
    <Fragment>
      <Helmet titleTemplate="ML Route tool" defaultTitle="ML Route tool" />
      <div>Hello world other route</div>
    </Fragment>
  );
}
