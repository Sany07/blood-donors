import React from 'react';
import { NavLink } from 'react-router-dom';

const Donors = () => {
    return (
        <>
            <section className="inner-hero bg_img overlay--one" style={{backgroundImage: 'url("https://script.viserlab.com/bloodlab/assets/images/frontend/breadcrumb/61023f89990b81627537289.jpg")', height:"400px"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h2 className="fw-bolder fs-1 text-white text-center mt-5">All Donor</h2>                   
                </div>
                <div className="col-md-12">
                    <div className="text-center ">   
                        <NavLink className="text-white text-decoration-none"  to="/">-
                        Home</NavLink></div> 
                    </div>
                </div>
            </div>
            </section>

            <div className='container'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>

     
    );
};

export default Donors;