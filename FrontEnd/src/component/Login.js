import React from 'react'
import { Formik } from 'formik';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';
import "./login.css"


const Login = () => {
  const url="http://localhost:5000";

  const userLogin =  async (formdata) => {
    const response= await fetch(url+ '/user/authenticate',{
      method:'POST',
      body:JSON.stringify(formdata),
      headers:{
        'Content-Type':'application/json'
      }
     })
     
     if(response.status===200){
      Swal.fire({
        title: 'Do you want to login?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Login',
        denyButtonText: `Don't Login`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Login!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('You were not logined', '', 'error')
        }
      })
     }else if(response.status===400){
      Swal.fire({
        icon:"error",
        title:"Error",
        text:"Email or password is incorrect"
      })
     }else{
      Swal.fire({
        icon:"error",
        title:"Error",
        text:"Something went wrong"
      })
     } 
   }

  return (
    <div className='bd_login'>
    <div className='container'>
      <div className='card card_login' >
      <div className='row m-5'>
        <div className='col-md-7 '>
          <div className="bg_image rounded-5">

          </div>
        </div>
        <div className='col-md-5'>
        <h2 className='text-danger'>Login Page</h2>
        <Formik initialValues={{
          email:"",
          password:"",
        }}onSubmit={userLogin}>
          {({values,handleSubmit,handleChange})=>(
           <form onSubmit={handleSubmit}> 
        <input type="text" className="form-control form_input" value={values.email} onChange={handleChange} id="email" placeholder="Enter Your E-mail"/>
        <input type="password" className="form-control form_input"value={values.password} onChange={handleChange} id="password" placeholder="Enter Your Password"/>
        <button type="Submit" className='btn btn-primary form-control bt_form'> Submit </button>
        <p className='mt-3'>Already Login? &nbsp; <NavLink to="/register" className='lg_link'>SIGN UP</NavLink></p> 
        
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

export default Login