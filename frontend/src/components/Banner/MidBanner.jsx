import React from 'react';

const MidBanner = () => {
    return (
        <>
<section className="pt-100 pb-100 shade--bg mt-5" style={{marginTop:"1100px"}} >
  <div className="container">
    <div className="row gy-5">
      <div className="col-lg-6">
        <div className="about-thumb">
          <img src="https://script.viserlab.com/bloodlab/assets/images/frontend/about/60fff7dc7c1141627387868.jpg" alt="image" className="w-100 h-100" />
        </div>
      </div>
      <div className="col-lg-6 ps-lg-5">
        <div className="section-header mb-5 text-sm-start text-center">
          <h2 className="section-title">Why BloodLab</h2>
          <p>Omnis harum qui vel repudiandae officiis nemo perferendis libero soluta consequuntur culpa, laborum facere, fugiat totam ratione.</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="about-item">
              <div className="about-item__icon">
                                         </div>
              <div className="about-item__content">
                <h4 className="about-item__title">All Data is Secured</h4>
                <p>Aamet consectetur adipisicing elit. Est voluptatibus accusamus nam labore, quam a quo. Quibusdam est voluptatibus animi quia.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="about-item">
              <div className="about-item__icon">
                <i className="las la-compass" />                              </div>
              <div className="about-item__content">
                <h4 className="about-item__title">Always Free</h4>
                <p>Aamet consectetur adipisicing elit. Est voluptatibus accusamus nam labore, quam a quo. Quibusdam est voluptatibus animi quia.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="about-item">
              <div className="about-item__icon">
                                       </div>
              <div className="about-item__content">
                <h4 className="about-item__title">100% Automated</h4>
                <p>Aamet consectetur adipisicing elit. Est voluptatibus accusamus nam labore, quam a quo. Quibusdam est voluptatibus animi quia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
};

export default MidBanner;