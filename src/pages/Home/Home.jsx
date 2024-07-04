import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <>
      {/* <!-- Hero Section  -->  */}
      <section class='hero_section'>
        <div class='heroText1'>
          <span class='Text1'>Every customer conversation</span> <br />
          <span class='Text2'>
            <strong> One unified platform</strong>
          </span>
        </div>
        <a href='./explore.html'>Explore the Platform</a>
      </section>

      {/* <!-- Image section  -->  */}
      <section class='imageContainer'>
        <div class='background1'>
          <img
            src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F7m7261i7Il5EAVQmdlDlWb%2F225a2c92689d1d43d37be653fcd131c4%2Fhome--hero-inbox.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&dpr=2&w=1946&h=1095&s=6ebf853ceaa69f9c2c6ce6f814695357'
            alt='img1'
          />
        </div>
        <div class='background2'>
          <img
            src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F7lIUKJuY5ScOolyJVZsMNc%2F489b3be807ba5dd1019bafdd9559133e%2Fhome--hero-knowledge-base.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&dpr=2&w=927&h=522&s=732817b41ac85d6f57960a9e8160b253'
            alt='img2'
          />
        </div>
        <div class='background3'>
          <img
            src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1YP9b1POpVTOhUKkXhVFIv%2F88846d0b64d55aa571bb17b3a44b1153%2Fhome--hero-beacon.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&dpr=2&w=512&h=684&s=8687a880a7080fee23d9eec6765339a0'
            alt='img3'
          />
        </div>
      </section>

      {/* <!-- Work Happens Section  --> */}
      <section class='happensSection'>
        <h1>Your best work happens in Help Scout</h1>
        <div class='workHappensWrapper'>
          <div class='card1'>
            <h5>Delightful</h5>
            <div class='cardHeader'>
              <h1>Customer Support</h1>
              <img
                class='customerImage1'
                src='./assets/iconsBlue-right-arrow-32.png'
                alt='right arrow'
              />
            </div>
            <img
              class='card1Image'
              src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F7CHYNMRkAyL8byWw5okrpN%2Fecd9f8bd4513ee159a238aade3aa73ec%2Fhome--use-case-shared-inbox.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1570&h=785&s=d5511c1a1546086b175e4592d522de78'
              alt='frontImage'
            />
          </div>
          <div class='card1'>
            <h5>Supercharged</h5>
            <div class='cardHeader'>
              <h1>Email Management</h1>
              <img
                class='customerImage2'
                src='./assets/iconsgreen-right-arrow-32.png'
                alt='right arrow'
              />
            </div>
            <img
              class='card2Image'
              src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F5MlESOfOeIRup5gi8z2xgW%2F3a8b15cf0a98845088f77e56d900e614%2Fhome--use-case-customer-support.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1570&h=785&s=def3df46a77b67d6c22202c71b8ec847'
              alt='frontImage'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
