import React from 'react'
import { graphql } from 'gatsby' 
import Head from '../components/head';
import Layout from '../components/layout/layout'
import './sub_products.scss';

const Kager = props => {
  return (
    <Layout>
      <Head title="Products" />
      <section className="sub__products__section1">
        <button className="btn__white__block">Produkter > Kager</button>
      </section>
      {props.data.allProducts.edges.map(({ node }) => {
        return (
          <section className="sub__products__section2">
            <div key={node.id} style={{ marginBottom: 1 }}>
              <h2>{node.title}</h2>
              <p>{node.teaser}</p>
              <img
                className="square"
                src="https://api.mediehuset.net/images/bakeonline/products/blaabaersnitter.jpg"
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
export const query5 = graphql`
{
  allProducts(filter: {title: {eq: "Blåbærsnitter med mandler og hvid chokolade"}}) {
    edges {
      node {
        title
        teaser
      }
    }
  }
}
`;

export default Kager