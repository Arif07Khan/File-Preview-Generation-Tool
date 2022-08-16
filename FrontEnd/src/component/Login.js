import React from "react";


const Login = () => {
  return (
    <div className="container mt-5 shadow-lg">
      <>
        <section className=" text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .rounded-t-5 {\n      border-top-left-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n\n    @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  ",
            }}
          />
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4  d-lg-flex">
                <img
                  src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-1592.jpg?w=740&t=st=1660156771~exp=1660157371~hmac=9a13f9fdd61daf4cd2145e8740d5092e933fffc38c4f96f1d315bd5df94c3719"
                  alt="LOGIN"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" style={{minHeight:'300px'}}
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                    </div>

                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                      
                      </div>
                      <div className="col">
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary  mb-4 rounded-circle"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Login;
