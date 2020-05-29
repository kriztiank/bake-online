import React from 'react'
import Head from '../components/head';
import Layout from '../components/layout/layout'

const Franskbrød = props => {
  return (
    <Layout>
      <Head title="Products" />
      <section className="products__section1">
        <button className="btn__white__block">Produkter > Franskbrød</button>
      </section>
      {props.data.allProducts.edges.map(({ node }) => {
        return (
          <section className="products__section2">
            <div key={node.id} style={{ marginBottom: 1 }}>
              <h2>{node.title}</h2>
              <p>{node.teaser}</p>
              <img
                className="square"
                src="https://api.mediehuset.net/images/bakeonline/products/glutenfri_havrebroed.jpeg"
                alt="image"
              />
            </div>
          </section>
        );
      })}
    </Layout>
  );
}

// Use the GraphiQL query here
export const query4 = graphql`
{
  allProducts(filter: {title: {eq: "Glutenfrit brød med havre"}}) {
    edges {
      node {
        title
        teaser
      }
    }
  }
}
`;

export default Franskbrød