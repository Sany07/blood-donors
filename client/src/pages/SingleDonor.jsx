import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import useDonorDetail from '../hooks/useDonorDetail';

const SingleDonor = () => {
    const { id } = useParams();
    const [donor, setDonor] = useDonorDetail(id);
    if (donor.length < 1) {
        return <LoadingSpinner />;
      }
    return (
        <>
            <section className="inner-hero bg_img overlay--one" style={{backgroundImage: 'url("https://script.viserlab.com/bloodlab/assets/images/frontend/breadcrumb/61023f89990b81627537289.jpg")', height:"400px"}}>
            <div className="container">
                <div className="row">
                <div className="col-md-12 mt-5">
                    <h2 className="fw-bolder fs-1 text-white text-center mt-5">{donor.name}</h2>                   
                </div>
                <div className="col-md-12">
                    <div className="text-center text-white fs-4">   
                        Location: {donor.city}</div> 
                    </div>
                </div>
            </div>
            </section>
            <div className="container">
            <ul className="list-group m-5 p-5">
                <li className="list-group-item py-3 fw-bold">Name: {donor.name}</li>
                <li className="list-group-item py-3 fw-bold">Gender: {donor.gender}</li>
                <li className="list-group-item py-3 fw-bold">Blood Group: {donor.blood}</li>
                <li className="list-group-item py-3 fw-bold">Age: {donor.age}</li>
                <li className="list-group-item py-3 fw-bold">Email: {donor.email}</li>
                <li className="list-group-item py-3 fw-bold">Phone: {donor.phone}</li>
                <li className="list-group-item py-3 fw-bold">Address: {donor.address}</li>
            </ul>

            <div>
        </div>

            </div>
        </>
    );
};

export default SingleDonor;