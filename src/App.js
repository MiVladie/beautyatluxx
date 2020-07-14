import React from 'react';

import Layout from './hoc/Layout/Layout';
import Banner from './containers/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import Section from './containers/Section/Section';
import Footer from './components/Footer/Footer';

import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contacts from './components/Contacts/Contacts';
import Summary from './components/Summary/Summary';

const App = () => {
    return (
      <Layout>
        <Navigation/>

        <Banner />

        <Section
          id = 'about'
          meta = 'Welcome to'
          name = 'Beauty at Luxx'
          description = 'Vestibulum ut mauris euismod, tristique augue sed, consequat metus. Duis fermentum massa ac metus suscipit tincidunt. Praesent felis felis, pretium sit amet vehicula at, posuere at mauris.'
        >
          <About />
        </Section>

        <Section
          id = 'services'
          meta = 'What we do'
          name = 'Services'
          description = 'Vestibulum ut mauris euismod, tristique augue sed, consequat metus. Duis fermentum massa ac metus suscipit tincidunt. Praesent felis felis, pretium sit amet vehicula at, posuere at mauris.'
        >
          <Services />
        </Section>

        <Section
          id = 'gallery'
          meta = 'Our work'
          name = 'Gallery'
          description = 'Vestibulum ut mauris euismod, tristique augue sed, consequat metus. Duis fermentum massa ac metus suscipit tincidunt. Praesent felis felis, pretium sit amet vehicula at, posuere at mauris.'
        >
          <Gallery />
        </Section>

        <Section
          id = 'testimonials'
          meta = 'What clients say'
          name = 'Testimonials'
          description = 'Vestibulum ut mauris euismod, tristique augue sed, consequat metus. Duis fermentum massa ac metus suscipit tincidunt. Praesent felis felis, pretium sit amet vehicula at, posuere at mauris.'
        >
          <Testimonials />
        </Section>
        
        <Section
          id = 'contact'
          meta = 'Where to find us'
          name = 'Contacts'
          description = 'Vestibulum ut mauris euismod, tristique augue sed, consequat metus. Duis fermentum massa ac metus suscipit tincidunt. Praesent felis felis, pretium sit amet vehicula at, posuere at mauris.'
        >
          <Contacts />
        </Section>

        <Summary />

        <Footer />
      </Layout>
    );
}

export default App;

/*

font-family: 'Satisfy', cursive;
font-family: 'Suranna', serif;
font-family: 'Poppins', sans-serif;
font-family: 'Dancing Script', cursive;
font-family: 'Montserrat', sans-serif;
font-family: 'Oranienbaum', serif;

$eunry1: #D6BCBC;
$eunry2: #6D0E2A;
$eunry3: #A28282;
$dark1: #444444;
$dark2: #616161;

*/