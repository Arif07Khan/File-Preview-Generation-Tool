import React from 'react'
import photo from "./photo/photo4.png"

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-center text-white " style={{position:"fixed",bottom:"1px"}}>
    
    <div className="container p-2 pb-0">
      
      <section className="mb-2">
        
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.facebook.com/profile.php?id=100018932525284"
          role="button"
          target="_blank"
        >
          <i className="fab fa-facebook-f" />
        </a>
       
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://twitter.com/ArifKha79472284"
          role="button"
          target="_blank"
        >
          <i className="fab fa-twitter" />
        </a>
        
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          role="button"
          target="_blank"
        >
          <i className="fab fa-google" />
        </a>
        
        
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/mohd-arif-50a720188/"
          role="button"
          target="_blank"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://github.com/Arif07Khan"
          role="button"
          target="_blank"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://demofrontend01.herokuapp.com/"
          role="button"
          target="_blank"
        >
         <img src={photo}  width={30} 
      height={30}/>
        </a>
      </section>
      
    </div>
    
   
    
    
  </footer>
  
  )
}

export default Footer