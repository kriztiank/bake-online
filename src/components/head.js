import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <meta charSet="utf-8" />
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
    // <Helmet title="This is a test" />
  );
};

export default Head;
