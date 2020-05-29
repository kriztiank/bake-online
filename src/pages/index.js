import { Link } from 'gatsby';
import React from 'react';
import CarouselComponent from "../components/carousel.component";
import Layout from '../components/layout/layout';
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <Head title="Home" />
    <header className='index__slider__header'>
      <CarouselComponent />
    </header>

    <section className='index__section1'>
      <h1>Vi skaber lækkert! brød</h1>
      <p>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
    </section>

    <div className="index__section2">
      <div className="wrap">
        <section className="columns">

          <div className="group">
            <img className="circular__square" src="https://place-hold.it/300x300.jpg" alt="image" />
            <h3>KREATIVITET DYRKES</h3>
            <p>
              Der er mange tilgængelige udgaver af
              Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
          </p>
          </div>

          <div className="group">
            <img className="circular__square" src="https://place-hold.it/300x300.jpg" alt="image" />
            <h3>VI ELSKER BRØD</h3>
            <p>
              Der er mange tilgængelige udgaver af
              Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
          </p>
          </div>

          <div className="group">
            <img className="circular__square" src="https://place-hold.it/300x300.jpg" alt="image" />
            <h3>SANS FOR DETALJER</h3>
            <p>
              Der er mange tilgængelige udgaver af
              Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har
          </p>
          </div>
        </section>
      </div>
    </div>

    <section className="index__section3">
      <div className="wrap">
      <h1>Tilmeld dig vores nyhedsbrev</h1>
      <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver</p>
      </div>
    </section>

    <section className='index__section4'>
      <h1>Nyeste bagværk</h1>
      <p>
      Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
    </section>

    <div className="index__section5">
      <div className="wrap">
        <section className="columns">

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>
        </section>
      </div>
    </div>

    <div className="index__section5">
      <div className="wrap">
        <section className="columns">

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
          </p>
          <p className="btn__white__p">
            <button className="btn__white">SE MERE</button>
          </p>
          </div>

          <div className="group">
            <img className="square" src="https://place-hold.it/200x200.jpg" alt="image" />
            <h3>HÅNDVÆRKER</h3>
            <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået...
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

export default IndexPage;
