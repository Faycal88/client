import "./styles/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spacer from "../components/spacer/spacer";
import { Fsign, Gsign, login } from "../redux/features/authSlice";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Logo from ".././imgs/color-logo.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const logUser = {
      email,
      password,
    };
    if (email && password) {
      dispatch(login({ logUser, navigate, toast }));
    }
  };

  function responseFacebook(response) {
    console.log(response);
    const result = {
      email: response.email,
      firstName: response.name,
      picture: response.picture.data.url,
      role: "user",
      facebookId: response.userID,
      password: "facebook",
    };
    dispatch(Fsign({ result, navigate, toast }));
  }
  function componentClicked(response) {
    return console.log(response);
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="container mt-5"
    >
      <div className="card">
        {error && <p className="text-danger">{error}</p>}
        <div className="card-body">
          <h5 className="card-title">Log in to your account</h5>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary mt-3 ">
              Submit
            </button>
            <div>
              <Spacer />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <GoogleLogin
                  clientId="211431792070-5mcgq3uike9ok8hjuaq77kglt5mqdebb.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={(res) => {
                    console.log(res);
                    const {
                      email,
                      givenName,
                      familyName,
                      googleId,
                      role,
                      imageUrl,
                    } = res.profileObj;
                    const { accessToken } = res;
                    const result = {
                      email,
                      googleId,
                      firstName: givenName,
                      lastName: familyName,
                      token: accessToken,
                      password: "google",
                      role: "user",
                      picture: imageUrl,
                    };
                    dispatch(Gsign({ result, navigate, toast }));
                    console.log(result);
                  }}
                  onFailure={(err) => {
                    console.log(err);
                  }}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div>
                <FacebookLogin
                  appId="1344499929288305"
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile"
                  onClick={componentClicked}
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button
                      style={{ width: "100px" }}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="btn btn-primary mt-3"
                    >
                      Login with Facebook
                    </button>
                  )}
                />
              </div>
            </div>
            <div className="login_link">
              Don't have an account ? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img className="logo" src={Logo} alt="" />
          <div className="logo_text_card">
            <p>
              De nos jours, nous sommes tous connectés par la technologie et les{" "}
              <br />
              commodités de vente au détail qui changent notre façon de <br />
              travailler, de vivre, de magasiner et de passer notre temps libre{" "}
              <br />
              Chez L'éternelle Des Plantes, nous innovons et évoluons absolument{" "}
              <br />
              pour répondre aux besoins et aux désirs de nos clients, mais{" "}
              <br />
              quelques éléments de base de notre expérience - avec nous depuis{" "}
              <br />
              le début - ne changeront jamais. C'est la promesse d'une qualité,{" "}
              <br />
              d'une sélection et d'un service imbattables qui servent de <br />
              fondement à notre entreprise et qui créent une expérience de{" "}
              <br />
              jardinerie incroyable qui ne peut tout simplement pas être trouvée{" "}
              <br />
              ailleurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;