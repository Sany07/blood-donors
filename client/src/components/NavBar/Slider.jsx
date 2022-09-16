import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Slider = () => {

    const[search,setSearch] = useState()


    const navigate = useNavigate();
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
        
    }

    return (
        <div className="container-fluid " style={{marginBottom:"200px"}}>
            <section className="hero bg_img" style={{backgroundImage: 'url(https://script.viserlab.com/bloodlab/assets/images/frontend/banner/60fffe430ffba1627389507.jpg)'}}>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-7 col-lg-8 text-center">
                    <h2 className="hero__title">A lot of things hurt. Saving lives doesn't have to</h2>
                </div>
                </div>
                <div className="row justify-content-center mt-4">
                <div className="col-lg-8 col-sm-12">
                <form className="d-md-flex  justify-content-between"  onSubmit={handleFormSubmit} >
                <div className="col-md-10 col-sm-12 me-1">
                    <input className="form-control d-inline" type="text" placeholder="Find Your Desire Blood Group" onChange={(e) => setSearch(e.target.value)} required/>
                </div>
                <div className="col-12">
            <button type="submit" className="btn btn-danger">Search</button>
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
                        <p className="card-text fw-bold fs-1 text-danger  text-center">A+</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">A-</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                </div>
                <div className="card-group px-5">
                <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">B+</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">B-</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">O+</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                </div>
                <div className="card-group px-5">
                <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">O-</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>              
          
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">AB+</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <p className="card-text fw-bold fs-1 text-danger  text-center">AB-</p>

                        <p className="card-text text-center"></p>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Slider;