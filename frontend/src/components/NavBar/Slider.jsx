import React from 'react';

const Slider = () => {
    return (
        <div className="container-fluid">
            <section className="hero bg_img" style={{backgroundImage: 'url(https://script.viserlab.com/bloodlab/assets/images/frontend/banner/60fffe430ffba1627389507.jpg)'}}>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-7 col-lg-8 text-center">
                    <h2 className="hero__title">A lot of things hurt. Saving lives doesn't have to</h2>
                </div>
                </div>
                <div className="row justify-content-center mt-4">
                <div className="col-lg-8 col-sm-12">
                <form className="d-md-flex  justify-content-between">
                <div className="col-md-10 col-sm-12 me-1">
                    <input className="form-control d-inline" type="text" defaultValue="Find Your Desire Blood Group" aria-label="readonly input example" readOnly />
                </div>
                <div className="col-md-2  col-sm-12">
                    <button type="button" className=" btn btn-danger"> Search</button>

                </div>
                </form>
                </div>
                </div>
            </div>
            </section>
            <div className="container my-5">
                <div className="text-center">
                    <h1 className='fw-bold'>Avaiable Blood Donors</h1>
                </div>
                </div>
                <div className="card-group px-5">
                    <div className="card">
                    
                        <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 text-danger  text-center">B+</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 text-danger  text-center">A+</h5>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Available (10)</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">AB+</p>

                        <p className="card-text text-center"><small className="text-muted   ">Available (10)</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-group px-5">
                    <div className="card">
                    
                        <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 text-danger  text-center">B+</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title fw-bold fs-1 text-danger  text-center">A+</h5>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Available (10)</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">AB+</p>

                        <p className="card-text text-center"><small className="text-muted   ">Available (10)</small></p>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Slider;