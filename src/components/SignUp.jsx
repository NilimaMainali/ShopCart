import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const title = "Register";
const socialTitle = "Login with Social Media";
const btnText = "Sign Up Now";

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please provide valid email and password");
      });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    
    // Make sure all fields are being accessed correctly
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;

    // console.log(name, email, password, confirmPassword);

    // Add your signup logic here
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match! please, provide a correct password!");
      
    }else{
      setErrorMessage("");
      createUser(email, password).then((userCredential) =>{
        const user = userCredential.user;
        alert("Account created successfully done!!!")
        navigate(from, {replace: true})
      }).catch((error) => {
        console.log(error.message);
        alert(`${error.message}`)
      })
    }
    // Proceed with signup logic (e.g., send to backend)
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignUp}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="User Name *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address *"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  placeholder="Confirm Password*"
                  required
                />
              </div>
              {/* showing message */}
              <div>
                {errorMessage && (
                  <div className="error-message text-danger mb-1">
                    {errorMessage}
                  </div>
                )}
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            {/* account button */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Have an Account? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>OR</span>
              </span>
              {/* social login */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <a href="/" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/" className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
