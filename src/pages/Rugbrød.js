import React from 'react'
import Head from '../components/head';
import Layout from '../components/layout/layout'

const Rugbrød = props => {
  return (
    <Layout>
      <Head title="Products" />
      <section className="products__section1">
        <button className="btn__white__block">Produkter > Rugbrød</button>
      </section>
      {props.data.allProducts.edges.map(({ node }) => {
        return (
          <section className="products__section2">
            <div key={node.id} style={{ marginBottom: 1 }}>
              <h2>{node.title}</h2>
              <p>{node.teaser}</p>
              <img
                className="square"
                src="https://api.mediehuset.net/images/bakeonline/products/hjemmebagt-soenderjysk-rugbroed.jpeg"
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
export const query6 = graphql`
{
  allProducts(filter: {title: {eq: "Hjemmebagt sønderjysk rugbrød"}}) {
    edges {
      node {
        title
        teaser
      }
    }
  }
}
`;

export default Rugbrød