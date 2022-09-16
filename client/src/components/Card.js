import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ donor, id }) => {
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
      navigate(`/donor/${id}`);
    };
  return (
    <div className="p-4 md:w-1/3" key={id}>
               <div className="col">
                        <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <h5 className="card-title fw-bold fs-1 text-danger  text-center mt-5">{donor.blood}</h5>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="fw-bolder">{donor.name}</h5>
                                <p className="card-text">Location: {donor.city} </p>
                                <p className="card-text">         
                                <button
                                    onClick={() => navigateToProductDetail(donor._id)}
                                    className="inline-flex text-white bg-danger border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded "
                                    >View Profile</button></p>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                    </div>
  );
};

export default Card;