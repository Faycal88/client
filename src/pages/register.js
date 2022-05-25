import defaultProfilePic from "../imgs/profile.png";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/features/authSlice";

function Register() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [picture, setPicture] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoading(true);
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      picture,
    };

    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password and confirm password do not match");
    }
    if (email && password) {
      dispatch(register({ newUser, navigate, toast }));
    }
  };

  return (
    <div style={{ justifyContent: "center" }} className="container mt-5">
      <div className="card col-8">
        <div className="card-body">
          <h5 className="card-title">Register</h5>
          <form onSubmit={handleSubmit}>
            <div>
              {picture ? (
                <img
                  src={picture}
                  alt="profile"
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <img
                  src={defaultProfilePic}
                  alt="profile"
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              )}
              <br />
              <label htmlFor="exampleInputEmail0">Upload a profile photo</label>
              <br />
              <FileBase64
                multiple={false}
                onDone={(file) => {
                  var base = file.base64;
                  setPicture(base);
                }}
              />
            </div>
            <div className="form-group d-flex col-12">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 ">
              Submit
            </button>
            <div className="login_link">
              Already have an account ? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
