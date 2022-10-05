import React from 'react'
import photo1 from "./photo/photo1.png"
import photo2 from "./photo/photo2.png"
import photo3 from "./photo/photo3.png"


const Home = () => {
  return (
<div className='container md lg\\\' >
<div className=" bg-1 text-center">
  <h1 className='mt-4'>FILE PREVIEW</h1>
    <h3 className="margin shadow mt-3 rounded-5 p-3 text-uppercase" style={{backgroundColor:"#99ffff"}}>This app is about File previews, here you can upload files and keep then in the backend and see the preview.</h3>
    <img
      src="https://www.filemail.com/images/marketing/share-larger-files.svg"
      className="img-fluid img-circle margin p-3 card"
      title="File"
      width={600} 
      height={350}
      style={{ display: "inline-block",minWidth:"250px" }}
    />
    <h3 className='pb-3 text-uppercase'style={{borderBottom:"3px solid #818282"}} >All Files</h3>
  </div>
 
  <div className="container-fluid bg-2 text-center">
    <h3 className="margin rounded" style={{backgroundColor:"#99ffff",display:"inline-block",width:"20rem"}}>WAYS TO DO &nbsp;<i className="fa-solid fa-list"></i> </h3>
    <div className='card text-uppercase'>
      <ul style={{listStyle:"none"}}>
        <li><i className="fa-solid fa-certificate fa-spin"></i>&nbsp;Login or Register&nbsp;<i className="fa-solid fa-certificate fa-spin"></i></li>
        <li><i className="fa-solid fa-certificate fa-spin"></i>&nbsp;Then, After successfully Login, &#8594;<a href='https://demofrontend01.herokuapp.com/' target="_blank">Click Here</a> &nbsp;<i className="fa-solid fa-certificate fa-spin"></i></li>
        <li><i className="fa-solid fa-certificate fa-spin"></i>&nbsp;Upload File and you can see the preview below that&nbsp;<i className="fa-solid fa-certificate fa-spin"></i></li>
      </ul>
    </div>
    </div>
 
  <div className="container-fluid bg-3 text-center mt-5">
    <h3 className="margin ">WHERE ARE SOME IMAGES OF FILE PREVIEW SHOWS THAT HOW TO DO STEPS... <i class="fa-solid fa-circle-half-stroke fa-spin "></i></h3>
    <br />
    <div className="row">
      <div className="card col-sm-4 rounded-5 my-1">
        <p >
          THIS IMAGE SHOWS <span className='text-danger bg-dark rounded p-1'>REGISTER PAGE <i class="fa-solid fa-file-lines"></i></span> HERE YOU HAVE TO REGISTER AS A NEW USER AND MOVE ON TO THE NEXT STEP... 
        </p>
        <img
          src={photo1}
          className="img-responsive margin"
          style={{ Width:"100% "}}
          alt="Image"
        />
      </div>
      <div className=" card col-sm-4 rounded-5 my-1">
        <p>
          THIS IMAGES SHOWS <span className='text-danger bg-dark rounded p-1'>LOGIN PAGE <i class="fa-solid fa-file-lines"></i></span>  IF YOU HAVE LOGIN THEN HERE YOU HAVE TO LOGIN TO MOVE ON TO THE LAST PAGE... 
        </p>
        <img
          src={photo2}
          className="img-responsive margin"
          style={{ width: "100%" }}
          alt="Image" 
        />
      </div>
      <div className=" card col-sm-4 rounded-5" >
        <p >
          THIS IMAGES SHOWS <span className='text-danger bg-dark rounded p-1'>FILE UPLOAD PAGE <i class="fa-regular fa-file-image"></i></span> ON THIS PAGE TO UPLOAD FILE AND SEE THE PREVIEW GENERATED THERE BELOW THAT FORM... 
        </p>
        <img
          src={photo3}
          className="img-responsive margin"
          style={{ width: "100%" }}
          alt="Image"
          />
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  </div>
  )
}

export default Home