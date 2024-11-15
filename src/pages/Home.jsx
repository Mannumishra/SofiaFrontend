import React from 'react';
import Homelogo from '../assets/images/homeimage.jpg';
import flag from '../assets/images/madeindia.png';
import iso from '../assets/images/iso1.png';
import fda from '../assets/images/imgfda.jpg';
import celogo from '../assets/images/ce.png';
import Products from '../components/Products';
import Aboutsection from '../components/Aboutsection';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';

function Home() {



  return (
    <>
      {/* Home Section */}
      <section className="homeSection">
        <div className="container-fluid">
          <div className="row pt-5 px-3 px-md-5 home-hero">
            <div className="col-md-6">
              <div className="textSection">
                <h1 className="h2Text">

                  Your Trusted Source for <br />
                  <span>
                    Quality Orthopedic <br />
                    Implants <span className='and'> & </span>Instruments
                  </span>
                </h1>
                <p>
                  Over 16 years of excellence in manufacturing,<br />
                  exporting, and supplying top-quality<br />
                  orthopedic trauma products globally.
                </p>
                <button type="submit" className="btn btn-primary px-4 w-30">View Products → </button>

              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={Homelogo} alt="Homelogo" className="img-fluid" style={{ height: '350px', width: "100%" }} />
            </div>
          </div>



          {/* Image Logo Section */}

          <div className="row mt-4">
            <div class="icon-container">
              <div class="icon-card">
                <img alt="Made in India logo with Indian flag colors and text 'Made in India'" src={flag} height="100" width="100" />
              </div>
              <div class="icon-card">
                <img alt="ISO logo with red text 'ISO' and a globe" src={iso} height="100" width="100" />
              </div>
              <div class="icon-card">
                <img alt="FDA approved logo with blue text 'FDA' and circular text 'FDA Approved'" src={fda} height="100" width="100" />
              </div>
              <div class="icon-card">
                <img alt="CE logo with red text 'CE' in a circle" src={celogo} height="100" width="100" />
              </div>
            </div>
          </div>



          {/* Explore Section */}
          <div className="row mt-5 card-category">
            <div className="col-md-12 pt-4">
              <div className="explore-container">
                <div className="explore text-center">EXPLORE</div>
              </div>
              <h2 className="text-center pt-2 explorep" style={{ fontSize: '1.75rem', fontWeight: '700' }}>Discover Our Categories</h2>
            </div>
            <div className="col-md-12">
            <Products showOnlyActive={true} />
            </div>
          </div>

          {/* About Section */}
          <div className="row">
            <div className="col-md-12">
              <Aboutsection />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="row">
            <div className="col-md-12">
              <Testimonials />
            </div>
          </div>

        </div>{/* container end  */}
      </section>

    </>
  );
};

export default Home;