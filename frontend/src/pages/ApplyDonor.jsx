import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from "react-toastify";

const ApplyDonor = () => {

    const { register, handleSubmit, reset } = useForm();
    const addSubmit = async (data) => {
      const url = `http://localhost:5000/applyDonor`;
      try {
        const { data: result } = await axios.post(url, data);
        if (result.status === 201) {
          reset();
          toast.success(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: "success1",
          });
        }
      } catch (error) {
        console.log(error);
      }
      };
    return (
        <div className='container'>
            <h5 class="mb-3  fs-bold">Personal Information</h5>

            <form className="row g-3" onSubmit={handleSubmit(addSubmit)}>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="text" {...register("name")} className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="text" {...register("email")} className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Phone</label>
            <input type="text" {...register("phone")} className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">City</label>
            <input {...register("city")}  type="text" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" {...register("address")} className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-6">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" {...register("address2")} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <h5 class="mb-3  fs-bold">Socail Links</h5>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Facebook</label>
            <input type="text" {...register("fb")} className="form-control" id="inputEmail4" />
            </div>

            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Twitter</label>
            <input type="text" {...register("twitter")} className="form-control" id="inputEmail4" />
            </div>
            <h5 class="mb-3  fs-bold">Others Information</h5>

            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Blood Group</label>
            <select {...register("blood")} className="form-select" aria-label="Default select example">
                 <option selected>Open this select menu</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            </div>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Gender</label>
            <select {...register("gender")} className="form-select" aria-label="Default select example">
                 <option selected>Open this select menu</option>
                <option value="male">Male</option>
                <option value="female">Female</option>

            </select>
            </div>
            <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Age</label>
            <input type="text" {...register("age")} className="form-control" id="inputEmail4" />
            </div>


            <div className="col-12">
            <button type="submit" className="btn btn-danger">Apply Now</button>
            </div>
            </form>
        </div>
    );
};

export default ApplyDonor;