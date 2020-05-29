import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout/layout';
import './products.scss';

// The GraphQL data is passed into the component via props.data
const ProductsPage = props => {
  return (
    <Layout>
      <Head title="Products" />
      <section className="products__head1">
        <h1>Vores elskede bagværk</h1>
        <p>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
      </section>
      {props.data.allCategories.edges.map(({ node }) => {
        return (
          <section className="products__section1">
            <div key={node.id} style={{ marginBottom: 1 }}>
              <Link to={node.title}>
                <p>{node.title}</p>
              </Link>
            </div>
          </section>
        );
      })}

      <div className="products__section2">
        <div className="wrap">
          <section className="columns">
            <div className="group">
              <img
                className="square"
                src="https://place-hold.it/200x200.jpg"
                alt="image"
              />
              <h3>HÅNDVÆRKER</h3>
              <p>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
                udgaver har gennemgået...
              </p>
              <p className="btn__white__p">
                <button className="btn__white">SE MERE</button>
              </p>
            </div>

            <div className="group">
              <img
                className="square"
                src="https://place-hold.it/200x200.jpg"
                alt="image"
              />
              <h3>HÅNDVÆRKER</h3>
              <p>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
                udgaver har gennemgået...
              </p>
              <p className="btn__white__p">
                <button className="btn__white">SE MERE</button>
              </p>
            </div>

            <div className="group">
              <img
                className="square"
                src="https://place-hold.it/200x200.jpg"
                alt="image"
              />
              <h3>HÅNDVÆRKER</h3>
              <p>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
                udgaver har gennemgået...
              </p>
              <p className="btn__white__p">
                <button className="btn__white">SE MERE</button>
              </p>
            </div>

          </section>
        </div>
      </div>

      <div className="products__section2">
        <div className="wrap">
          <section className="columns">
            <div className="group">
              <img
                className="square"
                src="https://place-hold.it/200x200.jpg"
                alt="image"
              />
              <h3>HÅNDVÆRKER</h3>
              <p>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
                udgaver har gennemgået...
              </p>
              <p className="btn__white__p">
                <button className="btn__white">SE MERE</button>
              </p>
            </div>

            <div className="group">
              <img
                className="square"
                src="https://place-hold.it/200x200.jpg"
                alt="image"
              />
              <h3>HÅNDVÆRKER</h3>
              <p>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
                udgaver har gennemgået...
              </p>
              <p className="btn__white__p">
                <button className="btn__white">SE MERE</button>
              </p>
            </div>

            <div className="group">
              <img
                className="square"
                src="https://place-hold.it/200x200.jpg"
                alt="image"
              />
              <h3>HÅNDVÆRKER</h3>
              <p>
                Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
                udgaver har gennemgået...
              </p>
              <p className="btn__white__p">
                <button className="btn__white">SE MERE</button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

// Use the GraphiQL query here
export const query1 = graphql`
  {
    allCategories(limit: 5) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default ProductsPage;
