import { Formik } from 'formik';
import Swal from "sweetalert2";
import React from 'react'
import "./register.css"


const Register = () => {

 const userSubmit = async(formdata) => { 
  console.log(formdata);

  const response=await fetch('http://localhost:5000/user/add',{
  method:'POST',
  body:JSON.stringify(formdata),
  headers:{'Content-Type':'application/json'}
})
if(response.status===200){

  Swal.fire({
    icon:"success",
    title:"Nice ",
    text:" You are register",
  })
}else{
  Swal.fire({
    icon:"error",
    title:"Oops",
    text:"Something went wrong"
  })
}
};

  return (
    <div className="container vh-100 mt-5">
      <div className="card ">
        <div className="row">
          <div className="col-md-7 col-lg-7 ">
            <div className="bg-image rounded">

            </div>
          </div>
          <div className="col-md-5 col-lg-5">
            <div className="card-body p-5">
              <hr />
              
              <Formik initialValues={{    
                name:"",
                email:"",
                password:"",
                createdAt:new Date(),
              }}
              onSubmit={userSubmit}>
                {({values, handleChange, handleSubmit})=>(
                  <form onSubmit={handleSubmit} className="form-control" action="">
                    <h1 className="text-center text-danger  rounded mb-3">Register Here</h1>
                    <input className="form-control form-inp" value={values.name} onChange={ handleChange } id="name" type="text"  placeholder=  "Name" />
                    <input className="form-control form-inp" value={values.email} onChange={ handleChange } id="email" type="email"  placeholder=  "Email" />
                    <input className="form-control form-inp" value={values.password} onChange={ handleChange } id="password" type="Password"  placeholder=  "Password" />
                    <button className="btn btn-primary rounded-circle mt-3">Sign Up</button>
                  </form>
                    )}
              </Formik>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;