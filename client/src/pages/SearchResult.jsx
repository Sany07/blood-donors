import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';
import useSearch from '../hooks/useSearch';

const SearchResult = () => {
    const { slug } = useParams();
    const [ donors ] = useSearch(slug);
     
        
    return (
        <>
        <section className="inner-hero bg_img overlay--one" style={{backgroundImage: 'url("https://script.viserlab.com/bloodlab/assets/images/frontend/breadcrumb/61023f89990b81627537289.jpg")', height:"400px"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h2 className="fw-bolder fs-1 text-white text-center mt-5">Search Result for {slug} </h2>                   
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
                {
                !donors.length>0? <h1 className='text-center mt-5'>Not Found</h1>:
                donors.map((donor, id) => (
                    <Card donor={donor} id={id} /> 
          ))}
     
                </div>
            </div>
    </>
    );
};

export default SearchResult;