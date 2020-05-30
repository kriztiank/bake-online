import React from 'react';
import { graphql } from 'gatsby' 
import Head from '../components/head';
import Layout from '../components/layout/layout';
import './sub_products.scss';

// The GraphQL data is passed into the component via props.data
const Morgenbrød = props => {
  return (
    <Layout>
      <Head title="Products" />
      <section className="sub__products__section1">
        <button className="btn__white__block">Produkter > Morgenbrød</button>
      </section>
      {props.data.allProducts.edges.map(({ node }) => {
        return (
          <section className="sub__products__section2">
            <div key={node.id} style={{ marginBottom: 1 }}>
              <h2>{node.title}</h2>
              <p>{node.teaser}</p>
              <img
                className="square"
                src="https://api.mediehuset.net/images/bakeonline/products/haandvaerkere.jpg"
                alt="image"
              />
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

// Use the GraphiQL query here
export const query2 = graphql`
{
  allProducts(filter: {title: {eq: "Håndværker"}}) {
    edges {
      node {
        title
        teaser
      }
    }
  }
}
`;

export default Morgenbrød;
